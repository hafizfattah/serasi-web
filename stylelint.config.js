module.exports = {
  extends: ['stylelint-config-prettier'],
  formatter: 'stylelint-checkstyle-formatter',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'mixin', 'include'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
