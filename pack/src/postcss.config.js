// const pxtorem = require("postcss-pxtorem");
// module.exports = {
//   plugins: [
//     pxtorem({
//       rootValue: 192,//我这里配置的是我1366分辨率下的基准值，会在下面解释
//       unitPrecision: 5,
//       propList: ["*"],
//       selectorBlackList: [/^\.nop2r/, /^\.am/,'html'],
//       //排除antd样式，由于我给html设置了min-width，所以把html也排除在外不做rem转换
//       replace: true,
//       mediaQuery: false,
//       minPixelValue: 0
//     })
//   ]
// }