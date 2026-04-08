import postcssImport from '@shgysk8zer0/postcss-import';
import pcEnv from 'postcss-preset-env';
import pcDiscardComments from 'postcss-discard-comments';
import pcCustomProperties from 'postcss-custom-properties';
import pcMediaMinMax from 'postcss-media-minmax';
import CSSNano from 'cssnano';
import postcssNesting  from 'postcss-nesting';

const envConfig = {
	features: {
    	'cascade-layers': false
	}
};

export const plugins = [
	postcssImport, pcEnv(envConfig), pcDiscardComments, pcCustomProperties,
	pcMediaMinMax, CSSNano, postcssNesting,
];

export const config = { map: { inline: false }, plugins };

export const getConfig = () => config;
