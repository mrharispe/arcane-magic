const path = require('path');

module.exports = {
    title: 'Arcane Magic Components Library',
    styleguideDir: 'dist-docs',
    styles: {
        Table: {
            cell: {
                '&:nth-of-type(2)': {
                    width: '30%',
                    padding: '8px 0',
                },
            },
        },
    },
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
                'arcane-magic': path.join(__dirname, 'src'),
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
            ],
        },
    },
};
