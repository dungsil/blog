import { defineConfig } from 'astro/config';

import uno from 'unocss/astro'
import { presetIcons, presetWind } from 'unocss'

// https://astro.build/config
export default defineConfig({
    integrations: [
        uno({
            presets: [
                presetWind({
                    dark: 'class',
                }),
                presetIcons({
                  prefix: '',
                  extraProperties: {
                    display: 'inline-block'
                  }
                })
            ],
            theme: {
                fontFamily: {
                    sans: [
                        // 실제 폰트
                        '"Pretendard Variable"', 'Pretendard',

                        // Fallback 폰트
                        '-apple-system', 'BlinkMacSystemFont', 'system-ui',
                        'Roboto', '"Helvetica Neue"', '"Segoe UI"', '"Apple SD Gothic Neo"',
                        '"Noto Sans KR"', '"Malgun Gothic"',
                        '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',
                        'sans-serif'
                    ].join(', ')
                },
                lineHeight: {
                  relaxed: '1.75rem',
                  loose: '3.5rem'
                }
            },
            safelist: [
              'simple-icons:github',
              'simple-icons:mastodon',
              'simple-icons:twitter'
            ]
        })
    ]
});
