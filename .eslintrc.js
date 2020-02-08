/*
 * @Author: andy.ten@tom.com
 * @Date:   2020-02-07 13:45:59
 * @Last Modified by:   andy.ten@tom.com
 * @Last Modified time: 2020-02-07 15:08:44
 * @Remark off   或 0：表示不验证规则
 *         warn  或 1：表示验证规则，当不满足时，给警告
 *         error 或 2：表示验证规则，不满足时报错
 */
module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  parser: 'babel-eslint', // 兼容es6插件
  parserOptions: {
    sourceType: 'module', // 设置为 "script" (默认) 或 "module"（如果代码是 ECMAScript 模块)
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      // 使用额外的语言特性
      jsx: true, // 启用JSX
      modules: true // 允许使用模块，模块内默认严格模式
    }
  },
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true,
    commonjs: true
  },
  // extends: 'eslint:recommended',
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写
  extends: [
    // 按从上往下的规则匹配
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue'
  ],
  // required to lint *.vue files
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  plugins: ['vue', 'prettier', 'html'],
  // plugins: [
  //   'eslint-plugin-html', // 检查html当中script标签
  //   'eslint-plugin-import',
  //   'eslint-plugin-promise',
  //   'eslint-plugin-vue' // vue自动格式化插件
  // ],
  settings: {
    'html/html-extensions': ['.html', '.vue'] // 除js文件外，会去检查文件中script标签配置
  },
  rules: {
    'prettier/prettier': [0], // 开启会影响 dev 环境打包速度
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'new-parens': 2,
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [2, 'allow-null'],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2, // 禁止稀疏数组 [1,,2]
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    'array-bracket-spacing': [2, 'never'],
    'vue/eqeqeq': [0],
    'vue/no-v-html': [0],
    'vue/this-in-template': [0],
    'vue/attribute-hyphenation': [0],
    'vue/require-default-prop': [0],
    'vue/require-prop-types': [0],
    'vue/require-valid-default-prop': [0],
    'vue/no-unused-vars': [0],
    'vue/prop-name-casing': [0],
    'vue/name-property-casing': [0],
    'vue/component-name-in-template-casing': [0],
    'vue/no-unused-components': [0],
    'vue/no-duplicate-attributes': [0]
  }
};
