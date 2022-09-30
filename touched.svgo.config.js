module.exports = {
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
				},
			},
		},
		'convertStyleToAttrs',
		'reusePaths',
	],
};
