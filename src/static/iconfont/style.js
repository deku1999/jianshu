import {createGlobalStyle} from 'styled-components'
const Iconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1603526777803'); /* IE9 */
  src: url('./iconfont.eot?t=1603526777803#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1603526777803') format('woff'),
  url('./iconfont.ttf?t=1603526777803') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1603526777803#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconyonghuming:before {
  content: "\e60f";
}

.iconmima:before {
  content: "\e625";
}

.iconshuaxin:before {
  content: "\e62b";
}

.iconzhinanzhen:before {
  content: "\e60d";
}

.iconshoujixiazai:before {
  content: "\e608";
}

.iconAa:before {
  content: "\e636";
}

.iconicon-checkin:before {
  content: "\e615";
}

.iconfangdajing:before {
  content: "\e60c";
}
`
export default Iconfont
