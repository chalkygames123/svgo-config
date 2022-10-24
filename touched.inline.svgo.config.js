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
					removeComments: false,
					removeUnknownsAndDefaults: {
						unknownAttrs: false,
					},
					removeViewBox: false,
					sortAttrs: false,
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
