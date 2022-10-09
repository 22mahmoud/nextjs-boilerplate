// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': buildEslintCommand,
  '**/*.ts?(x)': () => 'yarn build:types',
  '*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`,
};
