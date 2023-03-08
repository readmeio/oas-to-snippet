module.exports = {
  coveragePathIgnorePatterns: ['/dist', '/node_modules', '/test/__datasets__/'],
  modulePaths: ['<rootDir>'],
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['/test/__datasets__/'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: 'test/tsconfig.json',
      },
    ],
  },
};
