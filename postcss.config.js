const cssNext = require('postcss-cssnext');
const fontMagician = require('postcss-font-magician');
const cssNano = require('cssnano');

module.exports = (ctx)=>({
    map: ctx.options.map,   
    parser: ctx.options.parser,
    plugins: [
        cssNext({
            features: {
                autoprefixer: true
            }
        }),
        fontMagician(),
        cssNano({
            autoprefixer: false
        })
    ],
});