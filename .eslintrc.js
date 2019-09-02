module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 取消函数和 () 使用空格   show ()    show()
    'space-before-function-paren': 0,
    'no-unused-vars': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
