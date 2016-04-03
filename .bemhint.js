module.exports = {
    levels: ['*.blocks'],

    exludePaths: ['node_modules/**'],

    plugins: {
        'bemhint-css-naming': {
            excludeClasses: ['test-*']
        },
        'bemhint-deps-specification': true,
        'bemhint-fs-naming': true
    }
};
