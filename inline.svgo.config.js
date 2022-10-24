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
					cleanupIds: {
						minify: false,
					},
					removeUnknownsAndDefaults: {
						keepDataAttrs: false,
					},
					removeViewBox: false,
				},
			},
		},
		'convertStyleToAttrs',
		'reusePaths',
	],
};
