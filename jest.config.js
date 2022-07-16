module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'mdx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/scripts/'],
  modulePathIgnorePatterns: ['<rootDir>/coverage/jest-test-results.json', '<rootDir>/src/declarations.d.ts'],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/index.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*.mocks.ts',
  ],
};
