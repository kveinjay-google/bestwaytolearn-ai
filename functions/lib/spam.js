import { MAX_BODY_LEN, MIN_BODY_LEN, normalizeEmail } from './utils.js';

const BLOCKLIST = [
  /加微|加v|加V|微信|vx|VX|qq群|QQ群|电报群|tg群/i,
  /代办|办证|刻章|发票|刷单|兼职日结|日赚|月入/i,
  /贷款|借款|套现|博彩|赌场|casino|bet365|彩票/i,
  /viagra|cialis|色情|裸聊|约炮|成人视频/i,
  /免费领取|限时优惠|点击链接|立即购买|推广链接/i,
  /代发|引流|涨粉|买粉|刷赞|刷评论/i,
  /crypto\s*airdrop|telegram\.me|t\.me\//i,
];

const SUSPICIOUS = [
  /https?:\/\//gi,
  /www\./gi,
  /\.(com|cn|net|org|xyz|top|shop|vip)\b/gi,
  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi,
];

export function analyzeComment(body, { userEmail = '', honeypot = '' } = {}) {
  const reasons = [];
  let score = 0;
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

  const repeatedChar = /(.)\1{7,}/.test(text);
  if (repeatedChar) {
    score += 35;
    reasons.push('repeated_chars');
  }

  const uppercaseRatio = (text.replace(/[^A-Z]/g, '').length) / Math.max(text.length, 1);
  if (uppercaseRatio > 0.55 && text.length > 20) {
    score += 20;
    reasons.push('shouting');
  }

  for (const re of BLOCKLIST) {
    if (re.test(text)) {
      score += 45;
      reasons.push('blocklist');
      break;
    }
  }

  let urlHits = 0;
  for (const re of SUSPICIOUS) {
    const matches = text.match(re);
    if (matches) urlHits += matches.length;
  }
  if (urlHits >= 3) {
    score += 50;
    reasons.push('too_many_links');
  } else if (urlHits >= 1) {
    score += 18;
    reasons.push('has_link');
  }

  const dupWords = text.split(/\s+/).filter(Boolean);
  const unique = new Set(dupWords.map(w => w.toLowerCase()));
  if (dupWords.length >= 8 && unique.size <= 3) {
    score += 30;
    reasons.push('repetitive');
  }

  if (/(.{6,})\1{2,}/.test(text)) {
    score += 25;
    reasons.push('pattern_repeat');
  }

  const freeMailOk = normalizeEmail(userEmail);
  if (!freeMailOk) {
    score += 5;
    reasons.push('anonymous');
  }

  let action = 'approve';
  if (score >= 55) action = 'reject';
  else if (score >= 22) action = 'pending';

  return { score, reasons, action };
}

export function mapSpamError(reasons) {
  if (reasons.includes('honeypot')) return '提交失败，请刷新后重试';
  if (reasons.includes('too_many_links')) return '留言中链接过多，请精简后重试';
  if (reasons.includes('blocklist')) return '留言包含疑似广告或违规内容';
  if (reasons.includes('too_short') || reasons.includes('too_long')) return '留言长度不符合要求';
  return '留言未通过审核，请修改后重试';
}