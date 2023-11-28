// jest.config.js
module.exports = {
  // Other Jest configurations...
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.cjs', // Update the file extension accordingly
  },
  testEnvironment: 'jsdom',
};
