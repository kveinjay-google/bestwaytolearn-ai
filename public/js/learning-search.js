/* BestWayToLearn.AI — Extend site search with feeds & learning items */
const LearningSearch = (function () {
  function extendIndex(entries) {
    const out = [...entries];

    const briefing = typeof getAiBriefingData === 'function' ? getAiBriefingData() : [];
    briefing.forEach(item => {
      out.push({
        type: typeof getSearchTypeLabel === 'function' ? getSearchTypeLabel('briefing') : '时讯',
        title: item.title,
        subtitle: item.summary?.slice(0, 80) || item.source,
        keywords: [item.title, item.summary, item.source, ...(item.tags || [])].filter(Boolean).join(' '),
        href: `#ai-briefing-${item.id}`,
      });
    });

    const tutorials = typeof getLatestTutorialsData === 'function' ? getLatestTutorialsData() : [];
    tutorials.forEach(item => {
      out.push({
        type: typeof getSearchTypeLabel === 'function' ? getSearchTypeLabel('tutorial') : '教程',
        title: item.title,
        subtitle: item.summary?.slice(0, 80) || item.category,
        keywords: [item.title, item.summary, item.category, ...(item.tags || [])].filter(Boolean).join(' '),
        href: `#latest-tutorial-${item.id}`,
      });
    });

    if (typeof getSkillsNavLinks === 'function') {
      getSkillsNavLinks().slice(0, 40).forEach(skill => {
        out.push({
          type: 'Skill',
          title: skill.name,
          subtitle: skill.category,
          keywords: [skill.name, skill.desc, skill.category].filter(Boolean).join(' '),
          href: '#ai-skills-nav',
        });
      });
    }

    if (typeof LEARNING_PATH !== 'undefined') {
      LEARNING_PATH.forEach((day, i) => {
        out.push({
          type: typeof getSearchTypeLabel === 'function' ? getSearchTypeLabel('pathDay') : '学习日',
          title: `Day ${day.day}: ${day.title}`,
          subtitle: day.goal,
          keywords: [day.title, day.goal, day.desc, ...(day.tasks || [])].join(' '),
          href: `#roadmap`,
          dayIndex: i,
        });
      });
    }

    return out;
  }

  function init() {
    if (typeof buildSiteSearchIndex !== 'function') return;
    const orig = buildSiteSearchIndex;
    window.buildSiteSearchIndex = function () {
      return extendIndex(orig());
    };
    if (typeof siteSearchIndex !== 'undefined') {
      window.siteSearchIndex = buildSiteSearchIndex();
    }
  }

  return { extendIndex, init };
})();