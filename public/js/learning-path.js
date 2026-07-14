/* BestWayToLearn.AI — Role-based paths, content links, smart recommendations */
const LearningPath = (function () {
  const ROLES = {
    general: {
      id: 'general',
      labelKey: 'learning.roleGeneral',
      label: '通用学习者',
      descKey: 'learning.roleGeneralDesc',
      desc: '系统学习 AI 基础，适合大多数职场人',
      icon: '🎯',
      emphasis: ['fundamentals', 'apps', 'practice'],
      dayTips: {},
    },
    developer: {
      id: 'developer',
      labelKey: 'learning.roleDeveloper',
      label: '开发者',
      descKey: 'learning.roleDeveloperDesc',
      desc: '侧重 Cursor、MCP、Skill 与自动化工作流',
      icon: '💻',
      emphasis: ['handsOn', 'mcp', 'skills', 'promptLab'],
      dayTips: {
        4: '推荐完成 Cursor 实操教程，并浏览 MCP 导航',
        5: '优先试用 Cursor、Codex、GitHub Copilot',
        6: '安装 1 个 Agent Skill，配置 1 个 MCP Server',
      },
    },
    marketing: {
      id: 'marketing',
      labelKey: 'learning.roleMarketing',
      label: '内容运营',
      descKey: 'learning.roleMarketingDesc',
      desc: '侧重写作、图像、视频与小红书运营 Skill',
      icon: '✍️',
      emphasis: ['prompts', 'practice', 'skills', 'tutorials'],
      dayTips: {
        4: '在提示词示例库找「内容写作」类模板练手',
        5: '浏览主流应用中的写作、图像、视频工具',
        6: '阅读 1 篇最新教程 + 尝试 1 个内容类 Skill',
      },
    },
    ecommerce: {
      id: 'ecommerce',
      labelKey: 'learning.roleEcommerce',
      label: '跨境电商',
      descKey: 'learning.roleEcommerceDesc',
      desc: '侧重选品调研、Listing 优化与电商 Skill',
      icon: '🛒',
      emphasis: ['skills', 'tutorials', 'briefing', 'monetize'],
      dayTips: {
        4: '阅读 AI 时讯了解行业工具动态',
        5: '在 SKILL 推荐中筛选「跨境电商」分类',
        6: '完成 1 个电商场景实战模板',
      },
    },
  };

  const DAY_LINKS = {
    1: { briefing: 0, tutorial: 0, skill: null, label: '了解 AI 行业最新动态' },
    2: { briefing: 1, tutorial: null, skill: null, label: '阅读一篇 ML 相关资讯' },
    3: { briefing: 2, tutorial: 1, skill: null, label: '跟进大模型领域进展' },
    4: { briefing: null, tutorial: 2, skill: 'Agent Skills 规范', label: '学习提示词与 Agent 规范' },
    5: { briefing: 3, tutorial: 3, skill: 'skills CLI', label: '选型工具并了解 Skill 生态' },
    6: { briefing: 4, tutorial: 4, skill: 'Agent Reach', label: '实战教程 + 安装一个 Skill' },
    7: { briefing: 5, tutorial: 5, skill: null, label: '复盘并阅读今日精选' },
  };

  function t(key, fallback, vars) {
    if (typeof LearningCore !== 'undefined') return LearningCore.t(key, fallback, vars);
    return fallback;
  }

  function getRoles() {
    return Object.values(ROLES).map(r => ({
      ...r,
      label: typeof I18n !== 'undefined' ? I18n.t(r.labelKey) : r.label,
      desc: typeof I18n !== 'undefined' ? I18n.t(r.descKey) : r.desc,
    }));
  }

  function getRole() {
    if (typeof LearningCore !== 'undefined') return LearningCore.getRole();
    return 'general';
  }

  function getRoleConfig() {
    return ROLES[getRole()] || ROLES.general;
  }

  function getBriefingItem(index) {
    const items = typeof getAiBriefingData === 'function' ? getAiBriefingData() : (typeof AI_BRIEFING_ITEMS !== 'undefined' ? AI_BRIEFING_ITEMS : []);
    return items[index] || items[0];
  }

  function getTutorialItem(index) {
    const items = typeof getLatestTutorialsData === 'function' ? getLatestTutorialsData() : (typeof LATEST_TUTORIAL_ITEMS !== 'undefined' ? LATEST_TUTORIAL_ITEMS : []);
    return items[index] || items[0];
  }

  function getDayExtraLinks(dayIndex) {
    const dayNum = dayIndex + 1;
    const link = DAY_LINKS[dayNum];
    if (!link) return [];
    const out = [];
    const role = getRoleConfig();

    if (link.briefing != null) {
      const item = getBriefingItem(link.briefing);
      if (item) {
        out.push({
          type: 'briefing',
          label: t('learning.readBriefing', '阅读 AI 时讯'),
          title: item.title,
          href: `#ai-briefing-${item.id}`,
        });
      }
    }
    if (link.tutorial != null) {
      const item = getTutorialItem(link.tutorial);
      if (item) {
        out.push({
          type: 'tutorial',
          label: t('learning.readTutorial', '跟做最新教程'),
          title: item.title,
          href: `#latest-tutorial-${item.id}`,
        });
      }
    }
    if (link.skill) {
      out.push({
        type: 'skill',
        label: t('learning.exploreSkill', '探索推荐 Skill'),
        title: link.skill,
        href: '#ai-skills-nav',
      });
    }

    const tip = role.dayTips[dayNum];
    if (tip) {
      out.push({ type: 'tip', label: t('learning.roleTip', '角色建议'), title: tip, href: null });
    }

    return out;
  }

  function getRecommendedChannels() {
    const role = getRoleConfig();
    const channels = [];
    const add = (id, href, labelKey, fallback) => {
      channels.push({ id, href, label: t(labelKey, fallback) });
    };

    role.emphasis.forEach(em => {
      if (em === 'fundamentals') add('fundamentals', '#fundamentals', 'nav.fundamentals', 'AI 原理');
      if (em === 'apps') add('apps', '#apps', 'nav.apps', '主流应用');
      if (em === 'practice') add('practice', '#practice', 'nav.practice', '实战场景');
      if (em === 'handsOn') add('handsOn', '#hands-on', 'nav.handsOn', '真实软件实操');
      if (em === 'mcp') add('mcp', '#ai-mcp-nav', 'nav.mcpNav', 'MCP 导航');
      if (em === 'skills') add('skills', '#ai-skills-nav', 'nav.skillsNav', 'SKILL 推荐');
      if (em === 'prompts') add('prompts', '#prompt-examples', 'nav.promptExamples', '提示词示例');
      if (em === 'tutorials') add('tutorials', '#latest-tutorials', 'nav.latestTutorials', '最新教程');
      if (em === 'briefing') add('briefing', '#ai-briefing', 'nav.aiBriefing', 'AI 时讯');
      if (em === 'promptLab') add('promptLab', '#prompt-lab', 'nav.promptLab', '模拟操作');
      if (em === 'monetize') add('monetize', '#monetize', 'nav.monetize', '变现指南');
    });

    return [...new Map(channels.map(c => [c.id, c])).values()];
  }

  function enhanceContinueTarget(base) {
    if (!base) return base;
    const prog = typeof LearningCore !== 'undefined' ? LearningCore.load() : (typeof loadProgress === 'function' ? loadProgress() : {});
    const wrongCount = Object.keys(prog.quizWrong || {}).length;

    if (typeof isGraduated === 'function' && isGraduated()) {
      const plan = prog.plan30Daily || {};
      const start = prog.plan30StartDate ? new Date(prog.plan30StartDate) : null;
      const dayIdx = start ? Math.min(29, Math.floor((Date.now() - start.getTime()) / 86400000)) : 0;
      const todayKey = `d${dayIdx}`;
      if (!plan[todayKey]) {
        return {
          type: 'plan30',
          label: t('learning.plan30Today', '今日实践打卡'),
          sublabel: t('learning.plan30TodaySub', '第 {n} 天 · 30 天持续精进', { n: dayIdx + 1 }),
          href: '#graduation',
        };
      }
      const channels = getRecommendedChannels();
      if (channels[0]) {
        return {
          type: 'feed',
          label: t('learning.postGradFeed', '今日推荐'),
          sublabel: channels[0].label,
          href: channels[0].href,
        };
      }
    }

    if (wrongCount >= 5 && base.type === 'quiz') {
      return {
        type: 'quiz-review',
        label: t('learning.reviewWrong', '复习错题'),
        sublabel: t('learning.reviewWrongSub', '{n} 道薄弱题待巩固', { n: wrongCount }),
        href: '#quiz',
      };
    }

    const briefing = getBriefingItem(0);
    if (briefing && base.type === 'phase' && base.phaseNum >= 2) {
      return {
        ...base,
        sublabel: `${base.sublabel || ''} · ${t('learning.sideBriefing', '今日时讯已更新')}`,
        sideLink: { href: `#ai-briefing-${briefing.id}`, label: briefing.title },
      };
    }

    return base;
  }

  function renderDayExtras(container, dayIndex) {
    if (!container) return;
    const links = getDayExtraLinks(dayIndex);
    if (!links.length) {
      container.innerHTML = '';
      container.classList.add('hidden');
      return;
    }
    container.classList.remove('hidden');
    container.innerHTML = `
      <div class="learning-day-extras">
        <span class="learning-day-extras-label">${t('learning.dayExtras', '延伸学习')}</span>
        <ul class="learning-day-extras-list">
          ${links.map(l => l.href
            ? `<li><a href="${l.href}" class="learning-day-extra-link"><span class="learning-day-extra-type">${l.label}</span>${l.title}</a></li>`
            : `<li class="learning-day-extra-tip"><span class="learning-day-extra-type">${l.label}</span>${l.title}</li>`
          ).join('')}
        </ul>
      </div>`;
  }

  function renderRolePicker(container, { onSelect } = {}) {
    if (!container) return;
    const current = getRole();
    container.innerHTML = getRoles().map(r => `
      <button type="button" class="learning-role-card${r.id === current ? ' is-selected' : ''}" data-role="${r.id}">
        <span class="learning-role-icon">${r.icon}</span>
        <strong>${r.label}</strong>
        <small>${r.desc}</small>
      </button>`).join('');

    container.querySelectorAll('.learning-role-card').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.learning-role-card').forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        const role = btn.dataset.role;
        if (typeof LearningCore !== 'undefined') LearningCore.setRole(role);
        onSelect?.(role);
      });
    });
  }

  function init() {
    document.addEventListener('bwtl:progress-synced', () => {
      document.querySelectorAll('[data-day-extras]').forEach(el => {
        const idx = parseInt(el.dataset.dayExtras, 10);
        if (!Number.isNaN(idx)) renderDayExtras(el, idx);
      });
    });
  }

  return {
    ROLES,
    DAY_LINKS,
    getRoles,
    getRole,
    getRoleConfig,
    getDayExtraLinks,
    getRecommendedChannels,
    enhanceContinueTarget,
    renderDayExtras,
    renderRolePicker,
    init,
  };
})();