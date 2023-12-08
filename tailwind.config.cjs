/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontSize: {
				'3xs': ['8px', '10px'],
				'2xs': ['10px', '14px']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				blue: {
					DEFAULT: 'hsl(var(--blue-100))',
					foreground: 'hsl(var(--blue-foreground))'
				},
				green: {
					DEFAULT: 'hsl(var(--green-100))',
					foreground: 'hsl(var(--green-foreground))'
				},
				orange: {
					DEFAULT: 'hsl(var(--orange-100))',
					foreground: 'hsl(var(--orange-foreground))'
				},
				red: {
					DEFAULT: 'hsl(var(--red-100))',
					foreground: 'hsl(var(--red-foreground))'
				},
				purple: {
					DEFAULT: 'hsl(var(--purple-100))',
					foreground: 'hsl(var(--purple-foreground))'
				},
				pink: {
					DEFAULT: 'hsl(var(--pink-100))',
					foreground: 'hsl(var(--pink-foreground))'
				},
				main: {
					DEFAULT: 'hsl(var(--main))',
					foreground: 'hsl(var(--main-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				error: {
					DEFAULT: 'hsl(var(--error))',
					foreground: 'hsl(var(--error-foreground))'
				},
				ghost: {
					DEFAULT: 'hsl(var(--ghost))',
					foreground: 'hsl(var(--ghost-foreground))'
				}
			},
			borderRadius: {
				xl: `calc(var(--radius) + 4px)`,
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
};
