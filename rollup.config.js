export default {
    input: 'src/index.js',
    output: [{
        file: 'dist/index.js',
        name: 'mibine',
        format: 'umd'
    },{
        file: 'dist/index.es.js',
        format: 'es'
    },{
        file: 'dist/index.amd.js',
        format: 'amd'
    },{
        file: 'dist/index.cjs.js',
        format: 'cjs'
    }]
};