// @ts-check

/**
 * @type { import('svgo').Config }
 */
export default {
	multipass: true,
	js2svg: {
		indent: '\t',
	},
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeUnknownsAndDefaults: {
						keepDataAttrs: false,
					},
					removeViewBox: false,
					cleanupIds: {
						minify: false,
					},
				},
			},
		},
		'convertStyleToAttrs',
		'reusePaths',
	],
};
