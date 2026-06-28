#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const LOCALES = path.join(ROOT, 'public/js/locales');

function deepMerge(target = {}, source = {}) {
  const out = { ...target };
  Object.entries(source).forEach(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value)
      && target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
      out[key] = deepMerge(target[key], value);
    } else if (value !== undefined) {
      out[key] = value;
    }
  });
  return out;
}

function loadEnChromeStrings() {
  const bundles = {};
  const ctx = {
    I18n: {
      mergeLocaleData(code, data) {
        bundles[code] = bundles[code] || { strings: {}, data: {} };
        if (data.strings) bundles[code].strings = deepMerge(bundles[code].strings, data.strings);
      },
    },
  };
  vm.runInContext(fs.readFileSync(path.join(LOCALES, 'en-chrome.js'), 'utf8'), vm.createContext(ctx));
  return bundles.en.strings;
}

const S2T = '学习认识实战验设备导航变现现语显设标准特开关继续进导师术词模块从开系统会建立完整能力四步法原理到应用检验巩固地图路径阶段目标对应自动保存总结业报告查看进入本天计划如何使用已掌握勾选跳过待当前尚未开始进行中专全部完成欢迎来专属手把带你掌握方法顺序完成个渐进只需真实姓名清除确定吗页面将恢复默认呼丢失浏览工具大全站直达官网课程深度选型指南复制脚本教育途静态参考适合议与自装对比代表机型推荐翻转回自动开启后鼠标移入卡片并保留缩写写或称个条词典视图切换确认记录取消标记剩余检测验里碑走到这从全景认知演练再此刻认真完成内容帮助发现须巩固环节设计场精选道题覆盖核心术语主流场景不限时随暂停答错误解析键复习准备好计算盒子推荐方案专用顶配芯片算力内存储网络推理微调智能体弄懂约小时将嵌入真实工作流分钟选型主流掌握词工程事项模板检验成果道精选覆盖分以上在深入技术之前先建立全局视角什么能做什么有哪些工具正在改变哪些领域未来走向何方大覆盖链条常见种模式深度学习词典快速查阅选事半功倍款含功能列表人群上手建议实验室一个工作台内完成预览回复引导去真实操作选购按需求选不花冤枉钱按顺序建议完成当进入下一日若天熟悉点右侧勾选直达对应学习内容输入如明仅用于站内称呼不收集设置后凯文会用昵称陪你随时修改太好出发今天起用你的一步带你最好方式就是带着真实问题去实践安装主屏幕像全屏打开支持离线浏览已缓存内容当前离线神经网极光辉晨曦森林水墨炽焰深海薰衣草曜黑霓虹字体大小菜单打开列表选择语言介面為繁體中文部分教學內容仍為簡體中文界面为繁体中文部分教程文案可能仍为简体中文或英文';
const S2T_MAP = Object.fromEntries([...'学习认识实战验设备导航变现现语显设标准特开关继续进导师术词模块从开系统会建立完整能力四步法原理到应用检验巩固地图路径阶段目标对应自动保存总结业报告查看进入本天计划如何使用已掌握勾选跳过待当前尚未开始进行中专全部完成欢迎来专属手把带你掌握方法顺序完成个渐进只需真实姓名清除确定吗页面将恢复默认呼丢失浏览工具大全站直达官网课程深度选型指南复制脚本教育途静态参考适合议与自装对比代表机型推荐翻转回自动开启后鼠标移入卡片并保留缩写写或称个条词典视图切换确认记录取消标记剩余检测验里碑走到这从全景认知演练再此刻认真完成内容帮助发现须巩固环节设计场精选道题覆盖核心术语主流场景不限时随暂停答错误解析键复习准备好计算盒子推荐方案专用顶配芯片算力内存储网络推理微调智能体弄懂约小时将嵌入真实工作流分钟选型主流掌握词工程事项模板检验成果道精选覆盖分以上在深入技术之前先建立全局视角什么能做什么有哪些工具正在改变哪些领域未来走向何方大覆盖链条常见种模式深度学习词典快速查阅选事半功倍款含功能列表人群上手建议实验室一个工作台内完成预览回复引导去真实操作选购按需求选不花冤枉钱按顺序建议完成当进入下一日若天熟悉点右侧勾选直达对应学习内容输入如明仅用于站内称呼不收集设置后凯文会用昵称陪你随时修改太好出发今天起用你的一步带你最好方式就是带着真实问题去实践安装主屏幕像全屏打开支持离线浏览已缓存内容当前离线神经网极光辉晨曦森林水墨炽焰深海薰衣草曜黑霓虹字体大小菜单打开列表选择语言'.match(/[\u4e00-\u9fff]/g) || []).map((c, i) => [c, '學習認識實戰驗設備導航變現現語顯設標準特開關繼續進導師術詞模塊從開系統會建立完整能力四步法原理到應用檢驗鞏固地圖路徑階段目標對應自動保存總結業報告查看進入本天計劃如何使用已掌握勾選跳過待當前尚未開始進行中專全部完成歡迎來專屬手把帶你掌握方法順序完成個漸進只需真實姓名清除確定嗎頁面將恢復默認呼丟失瀏覽工具大全站直達官網課程深度選型指南複製腳本教育途靜態參考適合議與自裝對比代表機型推薦翻轉回自動開啟後鼠標移入卡片並保留縮寫寫或稱個條詞典視圖切換確認記錄取消標記剩餘檢測驗里碑走到這從全景認知演練再此刻認真完成內容幫助發現須鞏固環節設計場精選道題覆蓋核心術語主流場景不限時隨暫停答錯誤解析鍵複習準備好計算盒子推薦方案專用頂配芯片算力內存儲網絡推理微調智能體弄懂約小時將嵌入真實工作流分鐘選型主流掌握詞工程事項模板檢驗成果道精選覆蓋分以上在深入技術之前先建立全局視角什麼能做什麼有哪些工具正在改變哪些領域未來走向何方大覆蓋鏈條常見種模式深度學習詞典快速查閱選事半功倍款含功能列表人群上手建議實驗室一個工作台內完成預覽回覆引導去真實操作選購按需求選不花冤枉錢按順序建議完成當進入下一日若天熟悉點右側勾選直達對應學習內容輸入如明僅用於站內稱呼不收集設置後凱文會用暱稱陪你隨時修改太好出發今天起用你的步驟帶你最好方式就是帶著真實問題去實踐安裝主屏幕像全屏打開支持離線瀏覽已緩存內容當前離線神經網極光輝晨曦森林水墨熾焰深海薰衣草曜黑霓虹字體大小菜單打開列表選擇語言'[i] || c]));

function toTrad(str) {
  if (typeof str !== 'string') return str;
  return str.split('').map(ch => S2T_MAP[ch] || ch).join('');
}

function deepConvert(obj) {
  if (typeof obj === 'string') return toTrad(obj);
  if (Array.isArray(obj)) return obj.map(deepConvert);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deepConvert(v)]));
  }
  return obj;
}

const ZH_CN = {
  notice: { partialEn: '' },
  terms: {
    flipHintFront: '点击翻转查看详解 →', flipHintBack: '点击翻回正面 ←', exampleLabel: '示例：',
    empty: '未找到匹配术语，换个关键词试试。', flipAllBack: '全部翻回',
  },
  overview: { collabTip: '协作要点：', suitable: '适合：', appsLink: '查看全部 43 款主流应用 →' },
  phaseBridge: {
    phaseMastered: '本阶段已掌握', phaseRangeDone: '「{label}」{range} 已标记掌握',
    phaseRangeDoneDesc: '学习地图进度已同步更新。需要复习可返回上方模块，或取消掌握标记。',
    unmark: '取消已掌握标记', masteryConfirm: '掌握确认', masteryTitle: '掌握本页内容了吗？',
    masteryDesc: '学完「{label}」各模块后，若内容已熟悉，可标记<strong>已掌握</strong>，学习地图将同步更新（{range}）。',
    masteryProgress: '本阶段进度 <strong>{done}/{total}</strong> · 也可在学习计划中勾选天数。',
    markRemaining: '标记剩余 {n} 天已掌握', markPhase: '标记本阶段已掌握', viewPath: '查看学习计划',
    phaseComplete: '本阶段完成', phaseSolid: '{name}，你已扎实掌握「{label}」',
    phaseSolidDesc: '当前阶段学习目标已达成，可以进入下一阶段继续进阶。',
    quizBest: '测验最佳成绩：<strong>{score}</strong> / {total}', quizDayDone: 'Day 7 已打卡',
    quizFinalStep: '完成本阶段最后一步：知识测验', quizTarget: '目标 {pass}/{total} 分以上。当前最佳：{score} 分。',
    startQuiz: '开始 / 继续测验', nextPhase: '下一阶段', phaseFlowReview: '阶段 04 · 检验巩固',
    phaseFlowMap: '学习地图 · 复盘总结', phaseFlowFrom: '阶段 {num} · {label}',
    jumpAhead: '{name}，已带你进入「{label}」。当前阶段还没全部完成也没关系，随时可以从学习地图回来继续。',
    jumpNext: '{name}，很好！我们进入「{label}」，继续加油。', learningMap: '学习地图',
  },
  validate: {
    progressPending: '测验待完成', progressScore: '最佳 {score} 分', progressPass: '测验已达标', progressGraduated: '已结业',
    progressQuizPending: '测验待完成', progressQuizPass: '测验已达标', progressQuizScore: '最佳 {score} 分',
  },
  graduation: {
    bannerBadge: '已结业', bannerMsg: '{name}，你已完成四阶段学习并通过测验，正式结业！', heroBadge: '正式结业',
    title: '{name}，四阶段 AI 学习圆满完成！', desc: '你已走完「认知 → 工具 → 实战 → 检验」全流程，具备系统的 AI 认知与实战起点。',
    date: '结业日期：{date}', statPath: '学习计划', statQuiz: '测验最佳（/{total}）', statPhases: '阶段通关', statContent: '术语与案例',
    footprint: '学习足迹', celebrate: '{name}，恭喜结业！你已完成四阶段学习与测验，请查看报告并填写 30 天实践计划 🎉',
    exportMsg: '结业报告已导出为文本文件。', copyMsg: '结业报告已复制到剪贴板。',
    copyFail: '复制失败，请使用「导出计划」下载文本文件。', exportFilename: 'BestWayToLearn-AI-graduation-report-{name}.txt',
    reportTitle: '结业报告', reportPending: '（待填写）',
    hintQuizPassNeedPhases: '测验已达标，还差 {n} 个阶段即可结业。', hintPhasesDoneNeedQuiz: '四阶段已全部完成，测验达到 {pass} 分即可结业。',
    hintQuizPassNeedDays: '测验已达标，还差 {n} 天学习即可结业。', hintDaysDoneNeedQuiz: '7 天已全部完成，测验达到 {pass} 分即可结业。',
    continueLabel: '查看结业报告', continueSublabel: '四阶段学习已圆满完成', continueQuizLabel: '去做知识测验',
    continueQuizSublabel: '目标 {pass}/{total} 分即可结业', continuePhaseHeader: '继续 {label} →', continuePhaseHero: '继续学习：{label}',
    continueDayHeader: '继续 Day {day} →', continueGradHeader: '结业报告 →', continueDayHero: '继续 Day {day}：{sublabel}',
    reportNickname: '昵称：{name}', reportDate: '结业日期：{date}', reportPath: '学习计划：7/7 天已完成', reportPhases: '四阶段学习：4/4 完成',
    reportQuiz: '测验最佳：{score} / {total}', reportFootprint: '学习足迹', reportPlan: '30 天实践计划', reportFocus: '重点方向：{focus}',
    reportWeek: '第 {n} 周', reportWeekFocus: '  重点：{text}', reportWeekP1: '  实践 1：{text}', reportWeekP2: '  实践 2：{text}',
    reportClosing: '—— 学习 AI 最好的方式，就是带着真实问题去实践。', unfilled: '（未填写）', today: '今日', viewReport: '查看结业报告 →',
    focusPlaceholder: '例：用 AI 优化周报写作流程', p1Placeholder: '例：周二用 ChatGPT 起草周报', p2Placeholder: '例：周五用提示词模板做竞品简析',
  },
  path: {
    unmarkDay: '{name}，已取消 Day {day} 的已掌握标记，需要时可以继续学习。',
    unmarkPhase: '{name}，已取消「{label}」{range} 的已掌握标记，需要时可以继续学习。',
  },
  profile: {
    nameUpdated: '{name}，昵称已更新！接下来我会继续用这个昵称陪你学习。',
    nameCleared: '昵称已清除。点击顶部或底部「管理我的昵称」可重新设置。',
  },
  welcome: {
    joined: '{name}，欢迎！打开学习计划查看四阶段路径，已掌握可标记跳过，或按阶段顺序学习。',
    welcomeBack: '{name}，欢迎回来！从学习地图接着学吧。', welcomeBackNoName: '欢迎回来！点击顶部或底部「管理我的昵称」设置站内称呼。',
    deepLink: '你正在学习模块中。欢迎引导结束后，我会记住你的昵称并带你完成各阶段学习。',
  },
  coach: {
    navGoto: '{name}，正在前往「{label}」。', searchOpened: '{name}，已为你打开「{label}」—— 继续学习吧！',
    collapse: '收起导师提示', expand: '展开导师提示',
  },
  quiz: {
    feedbackCorrect: '✓ 正确！{explain}', feedbackWrong: '✗ 正确答案：{answer}<br><br>{explain}', seeResults: '查看结果',
    reviewTitle: '错题复习', reviewHint: '点击链接回到对应模块复习，或仅重做错题。', reviewAnswer: '正确答案：{answer}',
    reviewGo: '在「{label}」中复习 →', retryWrong: '仅重做错题', retryFull: '重新完整测验',
    tierPerfect: '满分！已具备扎实 AI 基础，去场景中大展身手！', tierPass: '很棒！理解深入，已达标可结业，继续保持实践。',
    tierGood: '不错！已掌握 AI 基础知识，查漏补缺后再挑战。', tierLow: '继续加油！回顾 AI 原理和核心概念后再次挑战。',
    wrongAllRight: '错题全部正确！建议再做一次完整测验巩固。', wrongSomeLeft: '仍有错题未掌握 — 请查看下方链接复习后重试。',
    resultPrefix: '{name}，{pct}% — {msg}', topicFallback: 'AI 原理',
  },
  search: {
    typeModule: '模块', typeTerm: '术语', typeApp: '应用', typeDay: '学习日', typeCase: '教程', typeTemplate: '模板',
    typeProject: '项目', typeDevice: '设备', typePreset: '预设', typeGraduation: '结业', typeFundamental: '原理',
    typeOverview: '全景', typeMonetize: '变现', typeAiBox: 'AI 盒子', typeConfig: '配置', typeToolsNav: '工具链接',
    typeSkillsNav: 'Skill 推荐', navMsg: '已为你打开「{label}」。',
  },
  devices: { sectionTag: '选购地图', sectionTitle: '按真实需求选设备，不花冤枉钱' },
  reader: { reading: '阅读中：{label}' },
};

const LOCALE_OVERRIDES = {
  ko: {
    terms: { flipHintFront: '탭하여 상세 보기 →', flipHintBack: '탭하여 앞면으로 ←', exampleLabel: '예시: ', empty: '일치하는 용어가 없습니다.', flipAllBack: '다시 앞면' },
    overview: { collabTip: '협업 팁: ', suitable: '추천: ', appsLink: '43개 주요 앱 모두 보기 →' },
    phaseBridge: { phaseMastered: '단계 습득 완료', unmark: '습득 표시 해제', masteryConfirm: '습득 확인', masteryTitle: '이 페이지를 습득했나요?', viewPath: '학습 계획 보기', phaseComplete: '단계 완료', startQuiz: '퀴즈 시작 / 계속', nextPhase: '다음 단계', learningMap: '학습 지도' },
    validate: { progressPending: '퀴즈 대기', progressScore: '최고 {score}점', progressPass: '퀴즈 합격', progressGraduated: '수료', progressQuizPending: '퀴즈 대기', progressQuizPass: '퀴즈 합격', progressQuizScore: '최고 {score}점' },
    graduation: { bannerBadge: '수료', title: '{name}님, 4단계 AI 학습 완료!', continueLabel: '수료 보고서 보기', viewReport: '수료 보고서 보기 →', topicFallback: 'AI 기초' },
    quiz: { seeResults: '결과 보기', reviewTitle: '오답 복습', retryWrong: '오답만 다시', retryFull: '전체 퀴즈 다시', topicFallback: 'AI 기초' },
    reader: { reading: '읽는 중: {label}' },
  },
};

// Full locale packs - merge EN then override with complete translations per locale
const PACKS = {
  'zh-CN': ZH_CN,
  'zh-TW': deepConvert(ZH_CN),
};

// For ko/ja/fr/es/de: start from EN and apply full translated chrome from external JSON
const FULL_PACKS_FILE = path.join(LOCALES, 'chrome-translations.json');
if (fs.existsSync(FULL_PACKS_FILE)) {
  const full = JSON.parse(fs.readFileSync(FULL_PACKS_FILE, 'utf8'));
  Object.assign(PACKS, full);
}

function writeChrome(locale, strings) {
  const merged = deepMerge(JSON.parse(JSON.stringify(loadEnChromeStrings())), strings);
  const content = `(function () {\n  if (typeof I18n === 'undefined') return;\n  I18n.mergeLocaleData('${locale}', {\n    strings: ${JSON.stringify(merged, null, 2)}\n  });\n})();\n`;
  fs.writeFileSync(path.join(LOCALES, `${locale}-chrome.js`), content);
  console.log('wrote', `${locale}-chrome.js`);
}

const EN = loadEnChromeStrings();
for (const [locale, strings] of Object.entries(PACKS)) {
  writeChrome(locale, strings);
}

if (!fs.existsSync(FULL_PACKS_FILE)) {
  console.log('Note: create chrome-translations.json for ko/ja/fr/es/de full packs');
}