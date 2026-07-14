/* BestWayToLearn.AI — Quiz wrong bank, topic drills, spaced review */
const LearningQuiz = (function () {
  const TOPIC_LABELS = {
    fundamentals: 'AI 原理',
    knowledge: 'AI 知识库',
    'prompt-lab': '模拟操作',
    apps: '主流应用',
    'hands-on': '真实软件实操',
    'ai-overview': 'AI 全景入门',
    agent: 'Agent 自动化',
    monetize: '变现指南',
    practice: '实战场景',
  };

  const REVIEW_INTERVAL_DAYS = [1, 3, 7, 14];

  function t(key, fallback, vars) {
    if (typeof LearningCore !== 'undefined') return LearningCore.t(key, fallback, vars);
    return fallback;
  }

  function recordAnswer(qIdx, correct, topic) {
    if (typeof LearningCore === 'undefined') return;
    const prog = LearningCore.load();
    const key = String(qIdx);
    if (!correct) {
      prog.quizWrong[key] = (prog.quizWrong[key] || 0) + 1;
      prog.quizWrong[key + ':last'] = Date.now();
    } else if (prog.quizWrong[key]) {
      prog.quizWrong[key] = Math.max(0, prog.quizWrong[key] - 1);
      if (prog.quizWrong[key] <= 0) delete prog.quizWrong[key];
    }
    if (topic) {
      if (!prog.quizTopicScores[topic]) prog.quizTopicScores[topic] = { correct: 0, total: 0 };
      prog.quizTopicScores[topic].total++;
      if (correct) prog.quizTopicScores[topic].correct++;
    }
    LearningCore.save(prog);
  }

  function recordQuizRun({ score, total, mode, wrongIndices }) {
    if (typeof LearningCore === 'undefined') return;
    const prog = LearningCore.load();
    prog.quizHistory.push({
      score,
      total,
      mode: mode || 'full',
      wrongCount: wrongIndices?.length || 0,
      at: new Date().toISOString(),
    });
    if (prog.quizHistory.length > 30) prog.quizHistory = prog.quizHistory.slice(-30);
    LearningCore.save(prog);
    if (typeof LearningAnalytics !== 'undefined') {
      LearningAnalytics.track('quiz_complete', { score, total, mode });
    }
  }

  function getWrongBank() {
    const prog = typeof LearningCore !== 'undefined' ? LearningCore.load() : {};
    const wrong = prog.quizWrong || {};
    return Object.keys(wrong)
      .filter(k => !k.includes(':') && wrong[k] > 0)
      .map(k => ({ qIdx: parseInt(k, 10), count: wrong[k] }))
      .filter(x => !Number.isNaN(x.qIdx))
      .sort((a, b) => b.count - a.count);
  }

  function getDueReviewIndices() {
    const prog = typeof LearningCore !== 'undefined' ? LearningCore.load() : {};
    const wrong = prog.quizWrong || {};
    const now = Date.now();
    const due = [];
    Object.keys(wrong).forEach(k => {
      if (k.includes(':last')) return;
      const qIdx = parseInt(k, 10);
      if (Number.isNaN(qIdx) || wrong[k] <= 0) return;
      const last = wrong[k + ':last'] || 0;
      const count = wrong[k];
      const interval = REVIEW_INTERVAL_DAYS[Math.min(count - 1, REVIEW_INTERVAL_DAYS.length - 1)] * 86400000;
      if (now - last >= interval) due.push(qIdx);
    });
    return due;
  }

  function getWeakTopics(limit = 4) {
    const prog = typeof LearningCore !== 'undefined' ? LearningCore.load() : {};
    const scores = prog.quizTopicScores || {};
    const quiz = typeof getQuizData === 'function' ? getQuizData() : [];
    const topicTotals = {};
    quiz.forEach(q => {
      if (q.topic) topicTotals[q.topic] = (topicTotals[q.topic] || 0) + 1;
    });

    return Object.keys(topicTotals).map(topic => {
      const s = scores[topic] || { correct: 0, total: 0 };
      const rate = s.total ? s.correct / s.total : 1;
      return { topic, label: TOPIC_LABELS[topic] || topic, rate, total: topicTotals[topic], answered: s.total };
    })
      .filter(t => t.answered > 0)
      .sort((a, b) => a.rate - b.rate)
      .slice(0, limit);
  }

  function getTopicQuestionIndices(topic, limit = 10) {
    const quiz = typeof getQuizData === 'function' ? getQuizData() : [];
    return quiz.map((q, i) => ({ q, i }))
      .filter(x => x.q.topic === topic)
      .map(x => x.i)
      .slice(0, limit);
  }

  function renderExtras() {
    const mount = document.getElementById('quiz-drills-panel');
    if (!mount) return;

    const wrongBank = getWrongBank();
    const due = getDueReviewIndices();
    const weak = getWeakTopics();
    const quizLen = typeof getQuizData === 'function' ? getQuizData().length : 100;

    let html = `<div class="quiz-drills">`;
    html += `<h4 class="quiz-drills-title">${t('learning.quizDrills', '巩固练习')}</h4>`;

    if (wrongBank.length) {
      html += `<p class="quiz-drills-stat">${t('learning.wrongBank', '错题库 {n} 道', { n: wrongBank.length })}</p>`;
    }
    if (due.length) {
      html += `<button type="button" class="btn btn-primary btn-sm quiz-drill-btn" data-drill="due">${t('learning.reviewDue', '复习到期错题 ({n})', { n: due.length })}</button>`;
    }
    if (wrongBank.length) {
      html += `<button type="button" class="btn btn-ghost btn-sm quiz-drill-btn" data-drill="wrong">${t('learning.reviewAllWrong', '重练全部错题')}</button>`;
    }

    if (weak.length) {
      html += `<div class="quiz-topic-drills"><span class="quiz-drills-label">${t('learning.topicDrills', '主题小测')}</span><div class="quiz-topic-drill-btns">`;
      weak.forEach(w => {
        const pct = Math.round(w.rate * 100);
        html += `<button type="button" class="btn btn-ghost btn-sm quiz-topic-btn" data-topic="${w.topic}">${w.label} (${pct}%)</button>`;
      });
      html += `</div></div>`;
    } else {
      html += `<p class="quiz-drills-hint">${t('learning.topicDrillsHint', '完成一次完整测验后，这里会显示薄弱主题小测。')}</p>`;
    }

    html += `</div>`;
    mount.innerHTML = html;
    mount.classList.remove('hidden');

    mount.querySelector('[data-drill="due"]')?.addEventListener('click', () => {
      const indices = getDueReviewIndices();
      if (indices.length && typeof startQuiz === 'function') {
        startQuiz({ wrongOnly: true, indices });
      }
    });
    mount.querySelector('[data-drill="wrong"]')?.addEventListener('click', () => {
      const indices = wrongBank.map(w => w.qIdx);
      if (indices.length && typeof startQuiz === 'function') {
        startQuiz({ wrongOnly: true, indices });
      }
    });
    mount.querySelectorAll('.quiz-topic-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const topic = btn.dataset.topic;
        const indices = getTopicQuestionIndices(topic, 10);
        if (indices.length && typeof startQuiz === 'function') {
          startQuiz({ wrongOnly: true, indices });
        }
      });
    });
  }

  function init() {
    renderExtras();
    document.addEventListener('bwtl:progress-synced', renderExtras);
  }

  return {
    TOPIC_LABELS,
    recordAnswer,
    recordQuizRun,
    getWrongBank,
    getDueReviewIndices,
    getWeakTopics,
    getTopicQuestionIndices,
    renderExtras,
    init,
  };
})();