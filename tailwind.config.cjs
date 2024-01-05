// const parameter = [
//    {
//       name: 'primo',
//       default: ['24', '5.9', '10'],
//       foreground: ['0', '0', '98'],
//    }, {
//       name: 'greno',
//       default: ['172', '50', '72'],
//       foreground: ['240', '20', '30'],
//    }
// ]

// let _colors = {}
// parameter.map((data) => {
//    _colors[Object.entries(data)[0][1]] = {
//       DEFAULT: `hsl(${data.default[0]}, ${data.default[1]}%, ${data.default[2]}%)`,
//       foreground: `hsl(${data.foreground[0]}, ${data.foreground[1]}%, ${data.foreground[2]}%)`,
//       event: `hsl(${data.default[0]}, ${data.default[1]}%, ${Number(data.default[2]) + 10}%)`
//    }
// })


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
            // ..._colors,
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            blue: {
               DEFAULT: 'hsl(var(--blue-100))',
               foreground: 'hsl(var(--blue-foreground))',
               event: 'hsl(var(--blue-event))',
            },
            green: {
               DEFAULT: 'hsl(var(--green-100))',
               foreground: 'hsl(var(--green-foreground))',
               event: 'hsl(var(--green-event))',
            },
            orange: {
               DEFAULT: 'hsl(var(--orange-100))',
               foreground: 'hsl(var(--orange-foreground))',
               event: 'hsl(var(--orange-event))',
            },
            red: {
               DEFAULT: 'hsl(var(--red-100))',
               foreground: 'hsl(var(--red-foreground))',
               event: 'hsl(var(--red-event))',
            },
            purple: {
               DEFAULT: 'hsl(var(--purple-100))',
               foreground: 'hsl(var(--purple-foreground))',
               event: 'hsl(var(--purple-event))',
            },
            pink: {
               DEFAULT: 'hsl(var(--pink-100))',
               foreground: 'hsl(var(--pink-foreground))',
               event: 'hsl(var(--pink-event))',
            },
            main: {
               DEFAULT: 'hsl(var(--main))',
               foreground: 'hsl(var(--main-foreground))',
               event: 'hsl(var(--main-event))',
            },
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))',
               event: 'hsl(var(--primary-event))',
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
               event: 'hsl(var(--secondary-event))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
               event: 'hsl(var(--muted-event))',
            },
            info: {
               DEFAULT: 'hsl(var(--info))',
               foreground: 'hsl(var(--info-foreground))',
               event: 'hsl(var(--info-event))',
            },
            success: {
               DEFAULT: 'hsl(var(--success))',
               foreground: 'hsl(var(--success-foreground))',
               event: 'hsl(var(--success-event))',
            },
            warning: {
               DEFAULT: 'hsl(var(--warning))',
               foreground: 'hsl(var(--warning-foreground))',
               event: 'hsl(var(--warning-event))',
            },
            error: {
               DEFAULT: 'hsl(var(--error))',
               foreground: 'hsl(var(--error-foreground))',
               event: 'hsl(var(--error-event))',
            },
            ghost: {
               DEFAULT: 'hsl(var(--ghost))',
               foreground: 'hsl(var(--ghost-foreground))',
               event: 'hsl(var(--ghost-event))',
            },
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
