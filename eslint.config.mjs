import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  react: true,
}, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'antfu/top-level-function': ['off'],
    'react-hooks/exhaustive-deps': ['error'],
  },
}))
