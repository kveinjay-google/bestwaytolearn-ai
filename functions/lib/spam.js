import { MAX_BODY_LEN, MIN_BODY_LEN } from './utils.js';

const BLOCKLIST = [
  /加微|加v|加V|微信|vx|VX|qq群|QQ群|电报群|tg群/i,
  /代办|办证|刻章|发票|刷单|兼职日结|日赚|月入/i,
  /贷款|借款|套现|博彩|赌场|casino|bet365|彩票/i,
  /viagra|cialis|色情|裸聊|约炮|成人视频/i,
  /免费领取|限时优惠|点击链接|立即购买|推广链接/i,
  /代发|引流|涨粉|买粉|刷赞|刷评论/i,
  /crypto\s*airdrop|telegram\.me|t\.me\//i,
];

const LINK_PATTERNS = [
  /https?:\/\//gi,
  /www\./gi,
];

function countLinks(text) {
  let hits = 0;
  for (const re of LINK_PATTERNS) {
    const matches = text.match(re);
    if (matches) hits += matches.length;
  }
  return hits;
}

export function analyzeComment(body, { honeypot = '' } = {}) {
  const reasons = [];
  const text = String(body || '').trim();

  if (honeypot) {
    return { score: 100, reasons: ['honeypot'], action: 'reject' };
  }

  if (text.length < MIN_BODY_LEN) {
    return { score: 100, reasons: ['too_short'], action: 'reject' };
  }
  if (text.length > MAX_BODY_LEN) {
    return { score: 100, reasons: ['too_long'], action: 'reject' };
  }

  for (const re of BLOCKLIST) {
    if (re.test(text)) {
      return { score: 100, reasons: ['blocklist'], action: 'reject' };
    }
  }

  if (countLinks(text) >= 3) {
    return { score: 80, reasons: ['too_many_links'], action: 'reject' };
  }

  if (/(.)\1{9,}/.test(text)) {
    return { score: 60, reasons: ['repeated_chars'], action: 'reject' };
  }

  return { score: 0, reasons, action: 'approve' };
}

export function mapSpamError(reasons) {
  if (reasons.includes('honeypot')) return '提交失败，请刷新后重试';
  if (reasons.includes('too_many_links')) return '留言中链接过多，请精简后重试';
  if (reasons.includes('blocklist')) return '留言包含疑似广告或违规内容';
  if (reasons.includes('too_short') || reasons.includes('too_long')) return '留言长度不符合要求';
  if (reasons.includes('repeated_chars')) return '留言包含异常重复字符';
  return '留言未通过审核，请修改后重试';
}