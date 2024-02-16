import webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../../config/build/loaders/buildCssLoader';
import { BuildPaths } from '../../config/build/types/config';
import { buildSvgLoader } from '../../config/build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules = config.module.rules.map(
        (rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        },
    );
    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoader(true));
    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
        }),
    );

    return config;
};
