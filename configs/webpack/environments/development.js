import webpack from 'webpack';
import { generateCommonConfig } from '../webpack.utils';

export default function devConfig (environment) {
    const commonConfig = generateCommonConfig(environment);

    return {
        ...commonConfig,
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?reload=true',
            'webpack/hot/only-dev-server',
            ...commonConfig.entry
        ],
        module: {
            ...commonConfig.module,
            preLoaders: [
                {
                    test: /\.jsx$/,
                    loader: 'eslint',
                    exclude: /node_modules/
                },
                {
                    test: /\.s(a|c)ss$/,
                    loader: 'stylelint'
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            ...commonConfig.plugins
        ]
    };
};
