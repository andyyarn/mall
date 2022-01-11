//这个文件是vue-cli创建出来的项目的配置文件
//webpack在进行打包的时候，底层用到了node.js
//因此，在vue.config.js配置文件中，可以导入并使用node.js中的核心模块
const path = require('path')
const themePath = path.join(__dirname, './src/them.less')

module.exports = {
    publicPath: '',
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // 直接覆盖变量
                    // 'nav-bar-background-color': ' hsla(196, 66%, 47%, 0.8);',
                    // 'backdrop-filter': 'saturate(180%) blur(8px)',
                    // 'nav-bar-title-text-color': '#fff'
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    hack: `true;  @import "${themePath}";`,
                },
            },
        },
    },
};