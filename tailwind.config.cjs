const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	// for customizing theme https://tailwindcss.com/docs/theme
	theme: {
		container: {
			center: true
		},
		extend: {
			screens: {
				portrait: { raw: '(orientation: portrait)' },
				landscape: { raw: '(orientation: landscape)' }
			},
			fontFamily: {
				sans: ['Gibson', 'ui-sans-serif', 'system-ui'],
				serif: ['ui-serif', 'Georgia'],
				mono: ['ui-monospace', 'SFMono-Regular', 'Consolas']
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				purple: {
					light: '#7000c6',
					DEFAULT: '#6000cd',
					dark: '#5100ac',
					darker: '#4a009e'
				}
				// black: colors.black,
				// white: colors.white,
				// gray: colors.trueGray,
				// purple: colors.purple,
				// red: colors.rose,
				// yellow: colors.amber,
			},
			animation: {
				'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'spin-slow': 'spin 7s linear infinite',
				wiggle: 'wiggle 3s ease-in-out infinite'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-1deg)' },
					'50%': { transform: 'rotate(1deg)' }
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
