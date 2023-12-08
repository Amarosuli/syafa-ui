const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
	plugins: {
		// 'postcss-import': {},/
		'tailwindcss/nesting': {},
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss,
		autoprefixer
	}
};

module.exports = config;
