const path = require('path');

module.exports = {
    components: ['src/components/**/*.{ts,tsx}', 'src/models/**/*.ts'],
    ignore: ['src/**/index.{ts,tsx}'],
    getExampleFilename: cpath => {
        return cpath.replace(/\.(tsx?)$/, '.md');
    },
    getComponentPathLine: cpath => {
        const cname = ['.tsx', '.ts'].reduce(
            (name, ext) => path.basename(name, ext),
            cpath
        );
        const cdir = path.dirname(cpath).replace(/^src\//, '');
        return `import { ${cname} } from ${cdir}`;
    },
    skipComponentsWithoutExample: true,
    usageMode: 'expand',
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json',
        {
            compilerOptions: { noEmit: false },
        }
    ).parse,
    webpackConfig: {
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            modules: [path.resolve(__dirname, 'src/'), 'node_modules'],
            alias: {
                styleguidist: path.join(__dirname, 'styleguidist'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/react'],
                            },
                        },
                        {
                            loader: 'ts-loader',
                            options: {
                                compilerOptions: {
                                    noEmit: false,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader?modules',
                },
                {
                    test: /\.svg$/,
                    loader: 'url-loader',
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/',
                            },
                        },
                    ],
                },
            ],
        },
    },
};
