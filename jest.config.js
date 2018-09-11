module.exports = {
  'verbose': true,
  'bail': true,
  'setupFiles': ['<rootDir>/__test__/jestSetup.js'],
  'transform': {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  'moduleNameMapper': {
    "\\.css$": "identity-obj-proxy"
  }
};