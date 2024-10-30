import aspectRatio from '@tailwindcss/aspect-ratio';
<<<<<<< HEAD
=======
import containerQueries from '@tailwindcss/container-queries';
>>>>>>> 7c5ccff ([new] Initial Commit)
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
<<<<<<< HEAD
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, forms, aspectRatio]
=======
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [typography, forms, containerQueries, aspectRatio]
>>>>>>> 7c5ccff ([new] Initial Commit)
} satisfies Config;
