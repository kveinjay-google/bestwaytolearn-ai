import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const appJs = readFileSync(join(process.cwd(), 'public/js/app.js'), 'utf8');

const requiredChecks = [
  {
    name: 'defines hydrateVisibleImages helper',
    pass: /function\s+hydrateVisibleImages\s*\(/.test(appJs),
  },
  {
    name: 'hydrates the activated phase panel',
    pass: /hydrateVisibleImages\s*\(\s*panel\s*\)/.test(appJs),
  },
  {
    name: 'promotes lazy images before visible loading',
    pass: /img\.loading\s*=\s*['"]eager['"]/.test(appJs),
  },
  {
    name: 'reassigns pending image src to wake hidden-panel lazy loads',
    pass: /img\.src\s*=\s*rawSrc/.test(appJs),
  },
];

const failures = requiredChecks.filter(check => !check.pass);
if (failures.length) {
  console.error('Visible image hydration validation failed:');
  failures.forEach(check => console.error(`- ${check.name}`));
  process.exit(1);
}

console.log('Visible image hydration validation passed.');
