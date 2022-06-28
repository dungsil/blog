import { defineConfig, presetIcons, presetWind, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons(),
  ],
  transformers: [transformerDirectives()],
  theme: {
    fontFamily: {
      sans: 'Pretendard, sans-serif',
    },
    colors: {
      primary: '#10b981', // green-500
      primaryHover: '#34d399', // green-400
    },
    letterSpacing: {
      normal: '0.0625em',
    },
  },
  shortcuts: [
    // 유틸리티 - 타이포그라피
    ['typo', 'font-sans text-base tracking-normal'],
    ['typo-ui', 'font-sans font-medium text-0.875rem leading-none'],

    // 유틸리티 - 백그라운드
    ['bg-1', 'bg-gray-800 text-white'],

    // 유틸리티 - UI
    ['ui--default', 'bg-gray-700 hover:bg-gray-500 text-gray-50'],
    ['ui--primary', 'bg-primary hover:bg-primary-hover'],
    ['ui', 'typo-ui ui--default'],

    // 컴포넌트
    ['b-button', 'ui px1.42em py0.85em border-1 border-gray-700 rounded-20px cursor-pointer'],
    ['b-icon', 'relative inline-block p2 rounded hover:bg-gray-600 text-3xl leading-0'],
  ],
  safelist: [
    // 테마
    'ui--default', 'ui--primary',

    // 컴포넌트
    'b-button', 'b-icon',
  ],
})
