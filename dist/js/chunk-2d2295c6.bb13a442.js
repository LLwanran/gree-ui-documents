(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2295c6"],{dcb3:function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},e=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h1",[s._v("安装 & 更新")]),t("p",[s._v("推荐使用 Yarn 作为依赖管理工具")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("查询当前配置的镜像\nyarn config get registry\n\n设置成淘宝镜像\nyarn config "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("set")]),s._v(" registry http://registry.npm.taobao.org/\n\n移除\nyarn remove gree-ui\n\n安装稳定版\nyarn add "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ssh://git@10.2.11.226:iot-4/web/gree-ui.git#<branch/commit/tag>'")]),s._v("\n\n如果想始终拉取最新版，请从个人仓库拉取\n\nyarn add "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ssh://git@10.2.11.226:li/gree-ui.git#<branch/commit/tag>'")]),s._v("\n")])]),t("hr"),t("p",[s._v("感谢 __"),t("em",[s._v("at__林炳权")]),s._v(" 建议：修改 "),t("code",{pre:!0},[s._v("package.json")]),s._v(" 对应组件库的 "),t("code",{pre:!0},[s._v("<branch/commit/tag>")]),s._v("，运行 "),t("code",{pre:!0},[s._v("yarn")]),s._v(" 就可以直接覆盖更新了！")]),t("h2",{attrs:{id:"yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru"}},[s._v("¶")]),s._v(" 引入")]),t("h3",{attrs:{id:"an-xu-jia-zai-tui-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-jia-zai-tui-jian"}},[s._v("¶")]),s._v(" 按需加载(推荐)")]),t("blockquote",[t("p",[s._v("参考"),t("code",{pre:!0},[s._v("ant-design")]),s._v("，使用"),t("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[s._v("babel-plugin-import")]),s._v(", 无需配置 style，默认加载目录为 lib")])]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"plugins"')]),s._v(": [\n    ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"import"')]),s._v(", {\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"libraryName"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"gree-ui"')]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"libraryDirectory"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lib"')]),s._v("\n    }]\n  ]\n}\n")])]),t("p",[s._v("组件使用：")]),t("blockquote",[t("p",[s._v("如果没有以上配置，会全量引入，需手动引入全部样式")])]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gree-ui'")]),s._v(";\n")])]),t("h3",{attrs:{id:"an-xu-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru"}},[s._v("¶")]),s._v(" 按需引入")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Button "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gree-ui/lib/button'")]),s._v(";\n")])]),t("h3",{attrs:{id:"quan-liang-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quan-liang-yin-ru"}},[s._v("¶")]),s._v(" 全量引入")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" GreeUI "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gree-ui'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gree-ui/lib/gree-ui.css'")]),s._v(";\n\nVue.use(GreeUI);\n")])]),t("h2",{attrs:{id:"kai-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kai-fa"}},[s._v("¶")]),s._v(" 开发")]),t("h3",{attrs:{id:"mo-ban"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mo-ban"}},[s._v("¶")]),s._v(" 模板")]),t("h4",{attrs:{id:"can-kao-yue-du-ci-xiang-mu-yuan-ma-shi-xue-xi-shi-yong-zu-jian-ku-zui-kuai-de-tu-jing-da-kai-iotfe-boilerplate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-kao-yue-du-ci-xiang-mu-yuan-ma-shi-xue-xi-shi-yong-zu-jian-ku-zui-kuai-de-tu-jing-da-kai-iotfe-boilerplate"}},[s._v("¶")]),s._v(" 参考阅读此项目源码，是学习使用组件库最快的途径 "),t("a",{attrs:{href:"http://gitlab.example.com/li/iotfe-boilerplate"}},[s._v("打开 iotfe-boilerplate")])]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("git "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("clone")]),s._v(" git@gitlab.example.com:ipenny861025/iotfe-boilerplate.git\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-air-conditioner "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 空调")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-ai-sensor "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# AI感知器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-co-alarm "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 一氧化碳报警器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-combustible-gas "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 可燃气体报警器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-danger-button "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# SOS紧急按钮")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-dehumidifier "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 除湿机")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-door-sensor "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 智能门磁")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-electric-cooker "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 电饭煲")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-environment-sensor "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 环境感知器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-human-infrared-sensor "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 人体红外感应器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-humidifier "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 除湿机")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-humiture-sensor "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 温湿度感知器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-rgb-box "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# RGB盒子")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-smart-curtain "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 智能窗帘")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-smoke-sensor "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 烟雾传感器 && 烟雾报警器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-steaming-roast "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 蒸烤一体|双能机")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" vue-cli3-water-sensor "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 水浸感知器")]),s._v("\nyarn install\nyarn serve\n")])]),t("p",[s._v("打开浏览器访问"),t("a",{attrs:{href:"http://localhost:3000/"}},[s._v("http://localhost:3000")]),s._v("。")])])}],n=t("2877"),l={},i=Object(n["a"])(l,r,e,!1,null,null,null);a["default"]=i.exports}}]);