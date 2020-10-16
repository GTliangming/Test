const path = require('path')
const {
    override,
    fixBabelImports,
    addLessLoader,
    addBabelPresets,
    addWebpackAlias,
    addTslintLoader,
} = require("customize-cra")

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}
process.env.GENERATE_SOURCEMAP = "false";

module.exports= override(

    // 处理antd样式问题
    fixBabelImports("import",{
        libraryName :"antd",
        libraryDirectory:"es",
        // style:"css"
    }),
    
    // 装饰器 
    // addDecoratorsLegacy(),
    
    // 预设支持mobx 装饰器语法
    ...addBabelPresets(["mobx"]),

    addLessLoader({
        lessOptions:{
            javascriptEnabled: true,
            modifyVars: { 
                '@primary-color': '#e2aa11',                        // 全局主色
                '@link-color': '#e2aa11',                            // 链接色
                '@success-color': '#52c41a',                        // 成功色
                '@warning-color': '#faad14',                        // 警告色
                '@error-color': '#f5222d',                           // 错误色
                '@font-size-base': '14px',                           // 主字号
                '@heading-color': 'rgba(0, 0, 0, .85)',              // 标题色
                '@text-color': 'rgba(0, 0, 0, .65)',                 // 主文本色
                '@text-color-secondary': 'rgba(0, 0, 0, .45)',      // 次文本色
                '@disabled-color': 'rgba(0, 0, 0, .25)',            // 失效色
                '@border-radius-base': '4px',                        // 组件/浮层圆角
                '@border-color-base': '#d9d9d9',                     // 边框色
                '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',  // 浮层阴影
             },
        }
      }),

    // 默认路径设置
      addWebpackAlias({
          ["@Component"]:path.resolve(__dirname,"./src/components"),
          ["@Views"]:path.resolve(__dirname,"./src/views"),
      }),
      addTslintLoader()    
)