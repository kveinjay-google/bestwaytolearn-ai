#!/usr/bin/env node
/**
 * i18n translation completeness audit
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const LOCALES_DIR = path.join(ROOT, 'public/js/locales');

const LOCALE_FALLBACK = {
  'zh-TW': 'zh-CN',
  ko: 'en', ja: 'en', fr: 'en', es: 'en', de: 'en',
};

const LOAD_ORDER = [
  'zh-CN.js', 'zh-TW.js', 'en.js',
  'en-terms.js', 'en-quiz.js', 'en-curriculum.js', 'en-tools.js', 'en-devices.js',
  'en-chrome.js',
  'zh-CN-chrome.js', 'zh-TW-chrome.js', 'ko-chrome.js', 'ja-chrome.js',
  'fr-chrome.js', 'es-chrome.js', 'de-chrome.js',
  'en-tools-nav.js', 'en-skills-nav.js', 'en-mcp-nav.js',
  'ko.js', 'ja.js', 'fr.js', 'es.js', 'de.js', 'inherit-locales.js',
];

// Simplified vs Traditional character pairs (common in zh-CN/zh-TW)
const SC_TO_TC = {
  '学': '學', '习': '習', '认': '認', '识': '識', '实': '實', '战': '戰', '验': '驗',
  '设': '設', '备': '備', '导': '導', '航': '航', '变': '變', '现': '現', '络': '絡',
  '网': '網', '标': '標', '准': '準', '显': '顯', '设': '設', '语': '語', '选': '選',
  '择': '擇', '体': '體', '开': '開', '关': '關', '闭': '閉', '缓': '緩', '存': '存',
  '离': '離', '线': '線', '当': '當', '前': '前', '内': '內', '容': '容', '浏': '瀏',
  '览': '覽', '继': '繼', '续': '續', '进': '進', '度': '度', '员': '員', '导': '導',
  '师': '師', '凯': '凱', '文': '文', '你': '你', '的': '的', '好': '好', '准': '準',
  '备': '備', '开': '開', '始': '始', '吗': '嗎', '快': '快', '捷': '捷', '搜': '搜',
  '索': '索', '术': '術', '语': '語', '模': '模', '块': '塊', '阶': '階', '段': '段',
  '认': '認', '知': '知', '工': '工', '具': '具', '检': '檢', '验': '驗', '变': '變',
  '现': '現', '设': '設', '备': '備', '推': '推', '荐': '薦', '配': '配', '色': '色',
  '风': '風', '格': '格', '神': '神', '经': '經', '极': '極', '光': '光', '晨': '晨',
  '曦': '曦', '森': '森', '林': '林', '水': '水', '墨': '墨', '炽': '熾', '焰': '焰',
  '深': '深', '海': '海', '薰': '薰', '衣': '衣', '草': '草', '曜': '曜', '黑': '黑',
  '霓': '霓', '虹': '虹', '字': '字', '小': '小', '大': '大', '特': '特', '安': '安',
  '装': '裝', '到': '到', '主': '主', '屏': '屏', '幕': '幕', '像': '像', '全': '全',
  '屏': '屏', '打': '打', '支': '支', '持': '持', '离': '離', '线': '線', '管': '管',
  '理': '理', '昵': '暱', '称': '稱', '学': '學', '地': '地', '图': '圖', '路': '路',
  '径': '徑', '顺': '順', '序': '序', '完': '完', '成': '成', '个': '個', '明': '明',
  '确': '確', '目': '目', '标': '標', '对': '對', '应': '應', '进': '進', '自': '自',
  '动': '動', '保': '保', '存': '存', '卡': '卡', '片': '片', '速': '速', '查': '查',
  '词': '詞', '典': '典', '缩': '縮', '写': '寫', '全': '全', '称': '稱', '翻': '翻',
  '转': '轉', '自': '自', '动': '動', '开': '開', '启': '啟', '后': '後', '鼠': '鼠',
  '移': '移', '入': '入', '并': '並', '留': '留', '里': '裡', '程': '程', '碑': '碑',
  '结': '結', '业': '業', '检': '檢', '测': '測', '开': '開', '始': '始', '测': '測',
  '验': '驗', '输': '輸', '入': '入', '如': '如', '上': '上', '一': '一', '步': '步',
  '下': '下', '仅': '僅', '用': '用', '于': '於', '站': '站', '收': '收', '集': '集',
  '真': '真', '实': '實', '姓': '姓', '名': '名', '设': '設', '置': '置', '后': '後',
  '会': '會', '陪': '陪', '随': '隨', '时': '時', '修': '修', '改': '改', '或': '或',
  '清': '清', '除': '除', '请': '請', '至': '至', '少': '少', '个': '個', '字': '字',
  '符': '符', '保': '保', '存': '存', '关': '關', '菜': '菜', '单': '單', '计': '計',
  '划': '劃', '零': '零', '从': '從', '系': '系', '统': '統', '个': '個', '术': '術',
  '语': '語', '款': '款', '主': '主', '流': '流', '应': '應', '用': '用', '场': '場',
  '景': '景', '分': '分', '类': '類', '含': '含', '功': '功', '能': '能', '列': '列',
  '表': '表', '适': '適', '合': '合', '人': '人', '群': '群', '与': '與', '上': '上',
  '手': '手', '建': '建', '议': '議', '浏': '瀏', '览': '覽', '按': '按', '用': '用',
  '途': '途', '站': '站', '直': '直', '达': '達', '官': '官', '优': '優', '质': '質',
  '键': '鍵', '安': '安', '星': '星', '介': '介', '绍': '紹', '复': '複', '制': '製',
  '配': '配', '置': '置', '课': '課', '程': '程', '中': '中', '自': '自', '动': '動',
  '化': '化', '工': '工', '具': '具', '为': '為', '准': '準', '四': '四', '阶': '階',
  '段': '段', '路': '路', '径': '徑', '走': '走', '完': '完', '全': '全', '流': '流',
  '程': '程', '具': '具', '备': '備', '系': '系', '统': '統', '起': '起', '点': '點',
  '四': '四', '阶': '階', '段': '段', '学': '學', '圆': '圓', '满': '滿', '结': '結',
  '业': '業', '日': '日', '期': '期', '通': '通', '关': '關', '最': '最', '佳': '佳',
  '案': '案', '例': '例', '报': '報', '告': '告', '未': '未', '填': '填', '写': '寫',
  '待': '待', '昵': '暱', '称': '稱', '学': '學', '习': '習', '足': '足', '迹': '跡',
  '未': '未', '来': '來', '天': '天', '实': '實', '践': '踐', '计': '計', '划': '劃',
  '重': '重', '点': '點', '方': '方', '向': '向', '周': '週', '实': '實', '践': '踐',
  '带': '帶', '着': '著', '真': '真', '实': '實', '问': '問', '题': '題', '去': '去',
  '恭': '恭', '喜': '喜', '正': '正', '式': '式', '达': '達', '快': '快', '查': '查',
  '看': '看', '并': '並', '填': '填', '写': '寫', '导': '導', '出': '出', '文': '文',
  '本': '本', '件': '件', '可': '可', '保': '保', '存': '存', '分': '分', '享': '享',
  '复': '複', '制': '製', '失': '失', '败': '敗', '使': '使', '用': '用', '下': '下',
  '载': '載', '已': '已', '达': '達', '还': '還', '差': '差', '个': '個', '即': '即',
  '可': '可', '全': '全', '部': '部', '达': '達', '到': '到', '分': '分', '去': '去',
  '做': '做', '知': '知', '识': '識', '测': '測', '验': '驗', '继': '繼', '续': '續',
  '学': '學', '习': '習', '协': '協', '作': '作', '要': '要', '点': '點', '适': '適',
  '合': '合', '详': '詳', '细': '細', '介': '介', '绍': '紹', '点': '點', '击': '擊',
  '查': '查', '看': '看', '详': '詳', '解': '解', '返': '返', '回': '回', '正': '正',
  '面': '面', '示': '示', '例': '例', '未': '未', '找': '找', '到': '到', '匹': '匹',
  '配': '配', '换': '換', '个': '個', '关': '關', '键': '鍵', '词': '詞', '试': '試',
  '试': '試', '命': '命', '题': '題', '及': '及', '格': '格', '分': '分', '时': '時',
  '长': '長', '分': '分', '钟': '鐘', '满': '滿', '分': '分', '扎': '紮', '实': '實',
  '基': '基', '础': '礎', '场': '場', '景': '景', '中': '中', '大': '大', '展': '展',
  '身': '身', '手': '手', '很': '很', '棒': '棒', '理': '理', '解': '解', '深': '深',
  '入': '入', '已': '已', '达': '達', '继': '繼', '续': '續', '保': '保', '持': '持',
  '不': '不', '错': '錯', '掌': '掌', '握': '握', '查': '查', '漏': '漏', '补': '補',
  '缺': '缺', '再': '再', '挑': '挑', '战': '戰', '加': '加', '油': '油', '回': '回',
  '顾': '顧', '原': '原', '理': '理', '和': '和', '核': '核', '心': '心', '概': '概',
  '念': '念', '次': '次', '挑': '挑', '战': '戰', '本': '本', '阶': '階', '段': '段',
  '已': '已', '掌': '掌', '握': '握', '标': '標', '记': '記', '取': '取', '消': '消',
  '需': '需', '要': '要', '时': '時', '候': '候', '可': '可', '以': '以', '同': '同',
  '步': '步', '更': '更', '新': '新', '复': '複', '习': '習', '返': '返', '回': '回',
  '上': '上', '方': '方', '模': '模', '块': '塊', '确': '確', '认': '認', '掌': '掌',
  '握': '握', '页': '頁', '内': '內', '容': '容', '了': '了', '吗': '嗎', '各': '各',
  '模': '模', '块': '塊', '若': '若', '熟': '熟', '悉': '悉', '可': '可', '标': '標',
  '记': '記', '已': '已', '掌': '掌', '握': '握', '将': '將', '同': '同', '步': '步',
  '更': '更', '新': '新', '进': '進', '度': '度', '成': '成', '绩': '績', '扎': '紮',
  '实': '實', '掌': '掌', '握': '握', '当': '當', '前': '前', '学': '學', '习': '習',
  '目': '目', '标': '標', '达': '達', '进': '進', '入': '入', '下': '下', '一': '一',
  '阶': '階', '段': '段', '继': '繼', '续': '續', '进': '進', '阶': '階', '最': '最',
  '后': '後', '一': '一', '步': '步', '知': '知', '识': '識', '测': '測', '验': '驗',
  '目': '目', '标': '標', '分': '分', '以': '以', '上': '上', '当': '當', '前': '前',
  '最': '最', '佳': '佳', '开': '開', '始': '始', '继': '繼', '续': '續', '检': '檢',
  '验': '驗', '巩': '鞏', '固': '固', '复': '複', '盘': '盤', '总': '總', '结': '結',
  '下': '下', '一': '一', '阶': '階', '段': '段', '带': '帶', '进': '進', '入': '入',
  '还': '還', '没': '沒', '全': '全', '部': '部', '完': '完', '成': '成', '也': '也',
  '没': '沒', '关': '關', '系': '係', '随': '隨', '时': '時', '可': '可', '以': '以',
  '从': '從', '回': '回', '来': '來', '很': '很', '好': '好', '我': '我', '们': '們',
  '进': '進', '入': '入', '加': '加', '油': '油', '测': '測', '验': '驗', '待': '待',
  '完': '完', '成': '成', '总': '總', '体': '體', '进': '進', '度': '度', '天': '天',
  '已': '已', '完': '完', '成': '成', '进': '進', '入': '入', '阶': '階', '段': '段',
  '进': '進', '入': '入', '学': '學', '习': '習', '地': '地', '图': '圖', '复': '複',
  '制': '製', '命': '命', '令': '令', '一': '一', '键': '鍵', '专': '專', '用': '用',
  '豪': '豪', '华': '華', '版': '版', '芯': '芯', '片': '片', '算': '算', '力': '力',
  '内': '內', '存': '存', '存': '存', '储': '儲', '网': '網', '络': '絡', '推': '推',
  '理': '理', '微': '微', '调': '調', '智': '智', '能': '能', '体': '體', '厂': '廠',
  '商': '商', '版': '版', '本': '本', '对': '對', '比': '比', '自': '自', '组': '組',
  '装': '裝', '权': '權', '衡': '衡', '应': '應', '用': '用', '清': '清', '除': '除',
  '昵': '暱', '称': '稱', '确': '確', '认': '認', '开': '開', '始': '始', '学': '學',
  '习': '習', '下': '下', '一': '一', '题': '題', '欢': '歡', '迎': '迎', '回': '回',
  '来': '來', '点': '點', '击': '擊', '头': '頭', '部': '部', '或': '或', '底': '底',
  '部': '部', '设': '設', '置': '置', '站': '站', '内': '內', '名': '名', '称': '稱',
  '学': '學', '习': '習', '模': '模', '块': '塊', '欢': '歡', '迎': '迎', '之': '之',
  '后': '後', '记': '記', '住': '住', '昵': '暱', '称': '稱', '引': '引', '导': '導',
  '各': '各', '阶': '階', '段': '段', '学': '學', '习': '習', '打': '打', '开': '開',
  '了': '了', '继': '繼', '续': '續', '学': '學', '习': '習', '收': '收', '起': '起',
  '展': '展', '开': '開', '提': '提', '示': '示', '正': '正', '确': '確', '答': '答',
  '案': '案', '错': '錯', '误': '誤', '查': '查', '看': '看', '结': '結', '果': '果',
  '错': '錯', '题': '題', '复': '複', '习': '習', '点': '點', '击': '擊', '链': '鏈',
  '接': '接', '回': '回', '访': '訪', '模': '模', '块': '塊', '或': '或', '仅': '僅',
  '重': '重', '做': '做', '错': '錯', '题': '題', '重': '重', '新': '新', '全': '全',
  '部': '部', '测': '測', '验': '驗', '满': '滿', '分': '分', '具': '具', '备': '備',
  '扎': '紮', '实': '實', '基': '基', '础': '礎', '去': '去', '场': '場', '景': '景',
  '中': '中', '大': '大', '展': '展', '身': '身', '手': '手', '理': '理', '解': '解',
  '深': '深', '入': '入', '已': '已', '达': '達', '可': '可', '结': '結', '业': '業',
  '掌': '掌', '握': '握', '基': '基', '础': '礎', '知': '知', '识': '識', '查': '查',
  '漏': '漏', '补': '補', '缺': '缺', '后': '後', '再': '再', '挑': '挑', '战': '戰',
  '回': '回', '顾': '顧', '核': '核', '心': '心', '概': '概', '念': '念', '后': '後',
  '再': '再', '次': '次', '挑': '挑', '战': '戰', '错': '錯', '题': '題', '全': '全',
  '部': '部', '正': '正', '确': '確', '再': '再', '做': '做', '一': '一', '次': '次',
  '全': '全', '部': '部', '测': '測', '验': '驗', '巩': '鞏', '固': '固', '仍': '仍',
  '有': '有', '错': '錯', '误': '誤', '查': '查', '看': '看', '下': '下', '方': '方',
  '链': '鏈', '接': '接', '后': '後', '重': '重', '试': '試', '取': '取', '消': '消',
  '标': '標', '记': '記', '需': '需', '要': '要', '时': '時', '候': '候', '可': '可',
  '以': '以', '继': '繼', '续': '續', '学': '學', '习': '習', '更': '更', '新': '新',
  '昵': '暱', '称': '稱', '会': '會', '继': '繼', '续': '續', '用': '用', '昵': '暱',
  '称': '稱', '陪': '陪', '你': '你', '学': '學', '习': '習', '清': '清', '除': '除',
  '点': '點', '击': '擊', '头': '頭', '部': '部', '或': '或', '底': '底', '部': '部',
  '重': '重', '新': '新', '设': '設', '置': '置', '欢': '歡', '迎': '迎', '打': '打',
  '开': '開', '学': '學', '习': '習', '计': '計', '划': '劃', '看': '看', '天': '天',
  '路': '路', '径': '徑', '标': '標', '记': '記', '已': '已', '掌': '掌', '握': '握',
  '天': '天', '可': '可', '跳': '跳', '过': '過', '或': '或', '按': '按', '天': '天',
  '顺': '順', '序': '序', '学': '學', '习': '習', '回': '回', '来': '來', '从': '從',
  '学': '學', '习': '習', '地': '地', '图': '圖', '接': '接', '着': '著', '学': '學',
  '习': '習', '模': '模', '块': '塊', '欢': '歡', '迎': '迎', '之': '之', '后': '後',
  '记': '記', '住': '住', '昵': '暱', '称': '稱', '引': '引', '导': '導', '各': '各',
  '阶': '階', '段': '段', '学': '學', '习': '習', '带': '帶', '你': '你', '进': '進',
  '入': '入', '很': '很', '好': '好', '进': '進', '入': '入', '加': '加', '油': '油',
  '带': '帶', '你': '你', '进': '進', '入': '入', '还': '還', '没': '沒', '全': '全',
  '部': '部', '完': '完', '成': '成', '也': '也', '没': '沒', '关': '關', '系': '係',
  '随': '隨', '时': '時', '可': '可', '以': '以', '从': '從', '学': '學', '习': '習',
  '地': '地', '图': '圖', '回': '回', '来': '來', '继': '繼', '续': '續', '打': '打',
  '开': '開', '了': '了', '继': '繼', '续': '續', '学': '學', '习': '習', '收': '收',
  '起': '起', '展': '展', '开': '開', '提': '提', '示': '示', '带': '帶', '你': '你',
  '前': '前', '往': '往', '了': '了', '打': '打', '开': '開', '了': '了', '继': '繼',
  '续': '續', '学': '學', '习': '習', '阅': '閱', '读': '讀', '中': '中', '模': '模',
  '块': '塊', '术': '術', '语': '語', '应': '應', '用': '用', '学': '學', '习': '習',
  '天': '天', '教': '教', '程': '程', '模': '模', '板': '板', '项': '項', '目': '目',
  '设': '設', '备': '備', '预': '預', '设': '設', '结': '結', '业': '業', '基': '基',
  '础': '礎', '概': '概', '览': '覽', '变': '變', '现': '現', '配': '配', '置': '置',
  '工': '工', '具': '具', '链': '鏈', '接': '接', '为': '為', '你': '你', '打': '打',
  '开': '開', '了': '了', '介': '介', '面': '面', '为': '為', '繁': '繁', '体': '體',
  '中': '中', '文': '文', '部': '部', '分': '分', '教': '教', '学': '學', '内': '內',
  '容': '容', '仍': '仍', '为': '為', '简': '簡', '体': '體', '中': '中', '文': '文',
  '简': '簡', '体': '體', '中': '中', '文': '文', '繁': '繁', '体': '體', '中': '中',
  '文': '文', '菜': '菜', '单': '單', '打': '打', '开': '開', '菜': '菜', '单': '單',
  '暂': '暫', '无': '無', '内': '內', '容': '容', '可': '可', '复': '複', '制': '製',
  '复': '複', '制': '製', '失': '失', '败': '敗', '请': '請', '手': '手', '动': '動',
  '选': '選', '择': '擇', '下': '下', '方': '方', '文': '文', '本': '本', '复': '複',
  '制': '製', '已': '已', '复': '複', '制': '製', '原': '原', '理': '理', '翻': '翻',
  '回': '回', '自': '自', '动': '動', '翻': '翻', '转': '轉', '开': '開', '关': '關',
  '计': '計', '数': '數', '命': '命', '题': '題', '及': '及', '格': '格', '分': '分',
  '时': '時', '长': '長', '分': '分', '钟': '鐘', '已': '已', '结': '結', '业': '業',
  '注': '注', '最': '最', '佳': '佳', '成': '成', '绩': '績', '开': '開', '始': '始',
  '测': '測', '验': '驗', '继': '繼', '续': '續', '测': '測', '验': '驗', '短': '短',
  '阶': '階', '段': '段', '总': '總', '进': '進', '度': '度', '天': '天', '已': '已',
  '完': '完', '成': '成', '进': '進', '入': '入', '学': '學', '习': '習', '地': '地',
  '图': '圖', '进': '進', '入': '入', '阶': '階', '段': '段', '学': '學', '习': '習',
  '计': '計', '划': '劃', '路': '路', '径': '徑', '概': '概', '览': '覽', '原': '原',
  '理': '理', '知': '知', '识': '識', '库': '庫', '主': '主', '流': '流', '应': '應',
  '用': '用', '提': '提', '示': '示', '词': '詞', '实': '實', '验': '驗', '室': '室',
  '软': '軟', '件': '件', '教': '教', '程': '程', '场': '場', '景': '景', '模': '模',
  '板': '板', '知': '知', '识': '識', '测': '測', '验': '驗', '结': '結', '业': '業',
  '报': '報', '告': '告', '变': '變', '现': '現', '设': '設', '备': '備', '选': '選',
  '购': '購', '指': '指', '南': '南', '工': '工', '具': '具', '目': '目', '录': '錄',
  '链': '鏈', '接': '接', '官': '官', '网': '網', '站': '站', '点': '點', '导': '導',
  '航': '航', '链': '鏈', '接': '接', '官': '官', '方': '方', '网': '網', '站': '站',
  '大': '大', '语': '語', '言': '言', '模': '模', '型': '型', '幻': '幻', '觉': '覺',
  '限': '限', '制': '制', '微': '微', '调': '調', '对': '對', '齐': '齊', '思': '思',
  '维': '維', '链': '鏈', '图': '圖', '像': '像', '生': '生', '成': '成', '教': '教',
  '程': '程', '嵌': '嵌', '入': '入', '上': '上', '下': '下', '文': '文', '窗': '窗',
  '口': '口', '学': '學', '习': '習', '范': '範', '式': '式', '应': '應', '用': '用',
  '选': '選', '型': '型', '四': '四', '阶': '階', '段': '段', '方': '方', '法': '法',
  '语': '語', '音': '音', '克': '克', '隆': '隆', '教': '教', '程': '程', '工': '工',
  '作': '作', '原': '原', '理': '理', '提': '提', '示': '示', '工': '工', '程': '程',
  '温': '溫', '度': '度', '协': '協', '议': '議', '教': '教', '程': '程', '教': '教',
  '程': '程', '教': '教', '程': '程', '教': '教', '程': '程', '教': '教', '程': '程',
};

// Build mock I18n
const bundles = {};
const SUPPORTED_LOCALES = ['zh-CN', 'zh-TW', 'en', 'ko', 'ja', 'fr', 'es', 'de'];

function deepMerge(target = {}, source = {}) {
  const out = { ...target };
  Object.entries(source).forEach(([key, value]) => {
    if (key.startsWith('__')) return;
    if (
      value && typeof value === 'object' && !Array.isArray(value)
      && target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])
    ) {
      out[key] = deepMerge(target[key], value);
    } else if (value !== undefined) {
      out[key] = value;
    }
  });
  return out;
}

const I18n = {
  registerLocale(code, bundle) {
    const existing = bundles[code] || { strings: {}, data: {} };
    const { strings, data, ...rest } = bundle || {};
    bundles[code] = {
      strings: strings ? deepMerge(existing.strings || {}, strings) : (existing.strings || {}),
      data: data ? deepMerge(existing.data || {}, data) : deepMerge(existing.data || {}, rest),
    };
  },
  mergeLocaleData(locale, data) {
    if (!SUPPORTED_LOCALES.includes(locale)) return;
    const existing = bundles[locale] || { strings: {}, data: {} };
    const { strings, ...rest } = data || {};
    bundles[locale] = {
      strings: strings ? deepMerge(existing.strings || {}, strings) : (existing.strings || {}),
      data: deepMerge(existing.data || {}, rest),
    };
  },
  getRawBundleData(locale) {
    const data = bundles[locale]?.data;
    return data ? JSON.parse(JSON.stringify(data)) : null;
  },
};

const sandbox = { I18n, console };

for (const file of LOAD_ORDER) {
  const code = fs.readFileSync(path.join(LOCALES_DIR, file), 'utf8');
  vm.runInNewContext(code, sandbox, { filename: file });
}

function flattenStrings(obj, prefix = '') {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') out[key] = v;
    else if (v && typeof v === 'object' && !Array.isArray(v)) Object.assign(out, flattenStrings(v, key));
  }
  return out;
}

function getLocaleChain(locale) {
  const chain = [];
  let cur = locale;
  const seen = new Set();
  while (cur && !seen.has(cur)) {
    seen.add(cur);
    chain.push(cur);
    cur = LOCALE_FALLBACK[cur];
  }
  return chain;
}

function getMergedStrings(locale) {
  const chain = getLocaleChain(locale);
  let strings = {};
  chain.slice().reverse().forEach(code => {
    const bundle = bundles[code];
    if (bundle?.strings) strings = deepMerge(bundle.strings, strings);
  });
  return flattenStrings(strings);
}

function getOwnStrings(locale) {
  return flattenStrings(bundles[locale]?.strings || {});
}

function getEnChromeStrings() {
  // en-chrome only contributes via mergeLocaleData
  // Re-parse en-chrome strings section by loading in isolation
  const b = {};
  const mock = {
    I18n: {
      mergeLocaleData(locale, data) {
        if (data.strings) Object.assign(b, flattenStrings(data.strings));
      },
    },
  };
  vm.runInNewContext(fs.readFileSync(path.join(LOCALES_DIR, 'en-chrome.js'), 'utf8'), mock);
  return b;
}

function isEnglishText(s) {
  if (!s || typeof s !== 'string') return false;
  // Has Latin letters and minimal CJK
  const latin = (s.match(/[A-Za-z]/g) || []).length;
  const cjk = (s.match(/[\u4e00-\u9fff]/g) || []).length;
  return latin > 3 && cjk < 3;
}

function isChineseText(s) {
  return /[\u4e00-\u9fff]/.test(s);
}

// Simplified-only chars (common in zh-CN, rare/absent in proper zh-TW UI copy)
const SIMPLIFIED_ONLY_CHARS = new Set(
  '学习认知识实战验设备导航变现网络标准显示语选择体开关缓存离线当前浏览继续进度员导师准备开始快捷搜索术语模块阶段认知工具检验推荐配色风格神经网络极光晨曦森林水墨炽焰深海薰衣草曜黑霓虹字体安装屏幕全屏支持管理昵称地图路径顺序完成明确目标对应自动保存卡片速查词典缩写全称翻转开启鼠标移入并保留里程碑结业检测测验输入如上一步仅用于站收集真实姓名设置后会陪随时修改清除请至少字符关闭菜单计划零从系统款主流应用场景分类含功能列表适合人群与上手建议浏览按用途直达优质介绍复制配置课程中自动化工具为准确四阶段走完全流程具备系统起点圆满日期通关最佳案例报告未填写待足迹未来实践重点方向带着真实问题去恭喜正式达标快查看并填写导出文本文件可保存分享失败使用下载已达还差即可全部达到分去做协作要点适合详细点击查详解返回正面示例未找到匹配换个关键词试试命题及格时长分钟满分扎实基础场景中大展身手很棒理解深入已达标继续保持不错掌握查漏补缺再加油回顾原理和核心概念再次本阶段已掌握标记取消需要时候可以同步更新复习返回上方模块确认掌握页内容了吗各模块若熟悉可标记将同步更新成绩扎实掌握当前学习目标达成进入下一阶段继续进阶最后一步知识目标分以上当前最佳开始继续检验巩固复盘总结下一阶段带你进入还没全部完成也没关系随时可以从回来很好我们进入加油测验待完成总体已完成进入阶段进入学习地图复制命令一键专用豪华版芯片算力内存存储推理微调智能体厂商版本对比自组装权衡应用清除确认开始学习下一题欢迎回来点击头部或底部设置站内名称学习模块欢迎之后记住引导各阶段带你前往阅读中教程模板项目预设基础概览配置工具链接为你打开了界面为繁体中文部分教学内容仍为简体中文简体中文繁体中文菜单打开暂无内容可复制复制失败请手动选择下方文本已复制原理翻回自动翻转开关计数命题及格时长分钟已结业注最佳成绩开始测验继续测验短阶段总进度已完成进入学习地图进入阶段学习计划路径概览原理知识库主流应用提示词实验室软件教程场景模板知识测验结业报告变现设备选购指南工具目录链接官网站点导航链接官方网站大语言模型幻觉限制微调对齐思维链图像生成教程嵌入上下文窗口学习范式应用选型四阶段方法语音克隆教程工作原理提示工程温度协议'.split('')
);

function hasSimplifiedChinese(s) {
  if (!s || typeof s !== 'string') return false;
  for (const ch of s) {
    if (SIMPLIFIED_ONLY_CHARS.has(ch)) return true;
  }
  return false;
}

function namespaceOf(key) {
  return key.split('.')[0];
}

function topMissingNamespaces(missing, limit = 10) {
  const counts = {};
  for (const k of missing) {
    const ns = namespaceOf(k);
    counts[ns] = (counts[ns] || 0) + 1;
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, limit);
}

// Extract referenced keys from HTML and JS
function extractReferencedKeys() {
  const keys = new Set();
  const html = fs.readFileSync(path.join(ROOT, 'public/index.html'), 'utf8');
  const attrRe = /data-i18n(?:-html|-placeholder|-title|-aria)?="([^"]+)"/g;
  let m;
  while ((m = attrRe.exec(html))) keys.add(m[1]);

  const jsFiles = fs.readdirSync(path.join(ROOT, 'public/js')).filter(f => f.endsWith('.js'));
  const tRe = /(?:I18n\.t|uiT)\(\s*['"`]([^'"`]+)['"`]/g;
  for (const f of jsFiles) {
    const content = fs.readFileSync(path.join(ROOT, 'public/js', f), 'utf8');
    while ((m = tRe.exec(content))) keys.add(m[1]);
  }
  return keys;
}

const enStrings = getMergedStrings('en');
const enChromeStrings = getEnChromeStrings();
const referencedKeys = extractReferencedKeys();

const HIGH_VIS = {
  nav: ['nav.home', 'nav.learn', 'nav.tools', 'nav.practice', 'nav.validate', 'nav.monetize', 'nav.devices', 'nav.toolsNav', 'nav.skillsRecommend', 'nav.mcpNav', 'nav.continue', 'nav.progress', 'nav.mainLabel', 'nav.menuOpen', 'nav.path'],
  hero: ['hero.greeting', 'hero.titleHtml', 'hero.desc', 'hero.phaseLine', 'hero.ctaMap', 'hero.ctaContinue'],
  welcome: ['welcome.prev', 'welcome.next', 'welcome.start', 'welcome.namePlaceholder', 'welcome.nameError'],
  settings: ['settings.title', 'settings.theme', 'settings.fontSize', 'settings.installApp', 'settings.installHint', 'settings.chooseLanguage', 'settings.langZh', 'settings.langZhTW', 'settings.langEn', 'settings.langKo', 'settings.langJa', 'settings.langFr', 'settings.langEs', 'settings.langDe'],
  quiz: ['quiz.preludeBadge', 'quiz.preludeTitle', 'quiz.preludeCongrats', 'quiz.preludePurpose', 'quiz.preludePurposeSub', 'quiz.preludePurposeTitle', 'quiz.startBtn', 'quiz.startBtnShort', 'quiz.statQuestions', 'quiz.statPass', 'quiz.statDuration', 'quiz.graduatedNote', 'quiz.next', 'quiz.feedbackCorrect', 'quiz.feedbackWrong', 'quiz.seeResults', 'quiz.reviewTitle', 'quiz.reviewHint', 'quiz.retryWrong', 'quiz.retryFull', 'quiz.tierPerfect', 'quiz.tierPass', 'quiz.tierGood', 'quiz.tierLow', 'quiz.topicFallback'],
  graduation: ['graduation.bannerBadge', 'graduation.bannerMsg', 'graduation.heroBadge', 'graduation.title', 'graduation.desc', 'graduation.date', 'graduation.statPath', 'graduation.statQuiz', 'graduation.statPhases', 'graduation.statContent', 'graduation.viewReport', 'graduation.celebrate', 'graduation.exportMsg', 'graduation.copyMsg', 'graduation.focusPlaceholder', 'graduation.p1Placeholder', 'graduation.p2Placeholder'],
  phaseBridge: ['phaseBridge.phaseMastered', 'phaseBridge.masteryTitle', 'phaseBridge.masteryDesc', 'phaseBridge.markPhase', 'phaseBridge.phaseComplete', 'phaseBridge.quizFinalStep', 'phaseBridge.startQuiz', 'phaseBridge.nextPhase', 'phaseBridge.jumpAhead', 'phaseBridge.jumpNext', 'phaseBridge.learningMap'],
};

const TARGET_LOCALES = ['zh-TW', 'ko', 'ja', 'fr', 'es', 'de'];
const report = {
  totalEnStringKeys: Object.keys(enStrings).length,
  enChromeStringKeys: Object.keys(enChromeStrings).length,
  referencedKeysCount: referencedKeys.size,
  referencedMissingFromEn: [],
  perLocale: {},
  zhTW: { simplifiedInStrings: [], simplifiedInDataSamples: [], stillChineseWhenShouldBeTW: [] },
};

for (const key of referencedKeys) {
  if (!(key in enStrings)) report.referencedMissingFromEn.push(key);
}
report.referencedMissingFromEn.sort();

for (const locale of TARGET_LOCALES) {
  const own = getOwnStrings(locale);
  const merged = getMergedStrings(locale);
  const missing = Object.keys(enStrings).filter(k => !(k in own));
  const missingFromEnChrome = Object.keys(enChromeStrings).filter(k => !(k in own));
  const untranslatedEnglish = [];
  const untranslatedChinese = [];

  for (const [k, enVal] of Object.entries(enStrings)) {
    const localeVal = merged[k];
    const ownVal = own[k];
    if (!ownVal) continue; // falls back - handled as missing
    if (locale !== 'zh-TW' && isEnglishText(localeVal) && localeVal === enVal) {
      untranslatedEnglish.push(k);
    }
    if (locale !== 'zh-TW' && locale !== 'zh-CN' && isChineseText(localeVal)) {
      untranslatedChinese.push({ key: k, value: localeVal.slice(0, 80) });
    }
  }

  // Keys that resolve to English via fallback (not in own bundle)
  const fallbackToEn = missing.filter(k => {
    const chain = getLocaleChain(locale);
    // value comes from en because not in own
    return true;
  });

  const highVisGaps = {};
  for (const [area, keys] of Object.entries(HIGH_VIS)) {
    const gaps = keys.filter(k => !(k in own));
    if (gaps.length) highVisGaps[area] = gaps;
  }

  report.perLocale[locale] = {
    ownKeyCount: Object.keys(own).length,
    coveragePct: ((Object.keys(enStrings).length - missing.length) / Object.keys(enStrings).length * 100).toFixed(1),
    missingCount: missing.length,
    missingFromEnChromeCount: missingFromEnChrome.length,
    topMissingNamespaces: topMissingNamespaces(missing),
    missingKeysSample: missing.slice(0, 40),
    missingFromEnChromeSample: missingFromEnChrome.slice(0, 40),
    untranslatedEnglishCount: untranslatedEnglish.length,
    untranslatedEnglishSample: untranslatedEnglish.slice(0, 30),
    untranslatedChineseCount: untranslatedChinese.length,
    untranslatedChineseSample: untranslatedChinese.slice(0, 20),
    highVisGaps,
    effectiveFallbackKeys: missing.length,
  };
}

// zh-TW simplified audit
const zhTWOwn = getOwnStrings('zh-TW');
const zhCNStrings = getMergedStrings('zh-CN');
for (const [k, v] of Object.entries(zhTWOwn)) {
  if (hasSimplifiedChinese(v)) {
    report.zhTW.simplifiedInStrings.push({ key: k, value: v.slice(0, 100) });
  }
}
// Compare zh-TW vs zh-CN - keys identical to zh-CN (not converted)
for (const [k, v] of Object.entries(zhTWOwn)) {
  if (zhCNStrings[k] === v && isChineseText(v) && k !== 'settings.langZh') {
    report.zhTW.stillChineseWhenShouldBeTW.push(k);
  }
}

// zh-TW data overlay - check if inherits zh-CN data (simplified content)
const zhTWData = bundles['zh-TW']?.data || {};
const zhCNData = bundles['zh-CN']?.data || {};
function sampleChineseFromData(obj, path = '', out = [], limit = 30) {
  if (out.length >= limit) return out;
  if (typeof obj === 'string' && /[\u4e00-\u9fff]/.test(obj)) {
    if (hasSimplifiedChinese(obj)) out.push({ path, sample: obj.slice(0, 120) });
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => sampleChineseFromData(item, `${path}[${i}]`, out, limit));
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      sampleChineseFromData(v, path ? `${path}.${k}` : k, out, limit);
    }
  }
  return out;
}
report.zhTW.simplifiedInDataSamples = sampleChineseFromData(zhTWData, '', [], 25);

// Also audit zh-CN for completeness vs en
const zhCNOwn = getOwnStrings('zh-CN');
const zhCNMissing = Object.keys(enStrings).filter(k => !(k in zhCNOwn));

console.log(JSON.stringify({
  summary: {
    totalEnStringKeys: report.totalEnStringKeys,
    enChromeOnlyKeys: report.enChromeStringKeys,
    referencedKeysInHtmlJs: report.referencedKeysCount,
    referencedKeysMissingFromEnBundle: report.referencedMissingFromEn.length,
    zhCNMissingFromEn: zhCNMissing.length,
    zhCNMissingSample: zhCNMissing.slice(0, 20),
  },
  enChromeNamespaces: topMissingNamespaces(Object.keys(enChromeStrings)),
  perLocale: Object.fromEntries(
    TARGET_LOCALES.map(loc => [loc, {
      ownKeys: report.perLocale[loc].ownKeyCount,
      coverage: report.perLocale[loc].coveragePct + '%',
      missing: report.perLocale[loc].missingCount,
      missingEnChrome: report.perLocale[loc].missingFromEnChromeCount,
      topMissingNS: report.perLocale[loc].topMissingNamespaces,
      highVisGaps: report.perLocale[loc].highVisGaps,
      untranslatedEnglish: report.perLocale[loc].untranslatedEnglishCount,
      untranslatedChinese: report.perLocale[loc].untranslatedChineseCount,
    }])
  ),
  details: report,
}, null, 2));