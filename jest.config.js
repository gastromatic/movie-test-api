module.exports = {
  rootDir: "src",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
      packageJson: "package.json",
    },
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "<rootDir>/__tests__/setup.ts",
  ],
};
