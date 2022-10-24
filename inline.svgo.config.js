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
					cleanupIDs: {
						minify: false,
					},
				},
			},
		},
		'convertStyleToAttrs',
		'reusePaths',
		'sortAttrs',
	],
};
