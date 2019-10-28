(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0baaea"],{"37f6":function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},n=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h1",[s._v("风格指南")]),t("h3",{attrs:{id:"jie-shao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jie-shao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 介绍")]),t("p",[s._v("在插件开发时，请遵守约定的单文件组件风格指南，指南内容节选自"),t("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide"}},[s._v("Vue 官方风格指南")])]),t("h3",{attrs:{id:"zu-jian-shu-ju"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-shu-ju","aria-hidden":"true"}},[s._v("¶")]),s._v(" 组件数据")]),t("p",[s._v("组件的 data 必须是一个函数。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// bad")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bar'")]),s._v("\n  }\n}\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// good")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bar'")]),s._v("\n    }\n  }\n}\n")])]),t("h3",{attrs:{id:"dan-wen-jian-zu-jian-wen-jian-ming-cheng"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dan-wen-jian-zu-jian-wen-jian-ming-cheng","aria-hidden":"true"}},[s._v("¶")]),s._v(" 单文件组件文件名称")]),t("p",[s._v("单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("// bad\nmycomponent.vue\nmyComponent.vue\n\n// good\nmy-component.vue\nMyComponent.vue\n")])]),t("h3",{attrs:{id:"jin-mi-ou-he-de-zu-jian-ming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-mi-ou-he-de-zu-jian-ming","aria-hidden":"true"}},[s._v("¶")]),s._v(" 紧密耦合的组件名")]),t("p",[s._v("和父组件紧密耦合的子组件应该以父组件名作为前缀命名。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[s._v("// bad\ncomponents/\n|- TodoList.vue\n|- TodoItem.vue\n└─ TodoButton.vue\n\n// good\ncomponents/\n|- TodoList.vue\n|- TodoListItem.vue\n└─ TodoListItemButton.vue\n")])]),t("h3",{attrs:{id:"zi-bi-he-zu-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-bi-he-zu-jian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 自闭合组件")]),t("p",[s._v("在单文件组件中没有内容的组件应该是自闭合的。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- bad --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my-component")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my-component")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- good --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my-component")]),s._v(" />")]),s._v("\n")])]),t("h3",{attrs:{id:"prop-ming-da-xiao-xie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prop-ming-da-xiao-xie","aria-hidden":"true"}},[s._v("¶")]),s._v(" Prop 名大小写")]),t("p",[s._v("在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// bad")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'greeting-text'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("String")]),s._v("\n  }\n};\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// good")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("greetingText")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("String")]),s._v("\n  }\n}\n\n")])]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- bad --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("welcome-message")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("greetingText")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hi"')]),s._v(" />")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- good --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("welcome-message")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("greeting-text")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hi"')]),s._v(" />")]),s._v("\n")])]),t("h3",{attrs:{id:"props-huan-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props-huan-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" Props 换行")]),t("p",[s._v("多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- bad --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my-component")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bar")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"b"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("baz")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"c"')]),s._v(" />")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- good --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my-component")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bar")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"b"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("baz")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"c"')]),s._v(" />")]),s._v("\n")])]),t("h3",{attrs:{id:"zhi-ling-suo-xie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-ling-suo-xie","aria-hidden":"true"}},[s._v("¶")]),s._v(" 指令缩写")]),t("p",[s._v("指令缩写，用"),t("code",{pre:!0},[s._v(":")]),s._v("表示"),t("code",{pre:!0},[s._v("v-bind:")]),s._v("，用"),t("code",{pre:!0},[s._v("@")]),s._v("表示"),t("code",{pre:!0},[s._v("v-on:")])]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- bad --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-bind:value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-on:input")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onInput"')]),s._v(" />")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- good --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@input")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onInput"')]),s._v(" />")]),s._v("\n")])]),t("h3",{attrs:{id:"props-shun-xu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props-shun-xu","aria-hidden":"true"}},[s._v("¶")]),s._v(" Props 顺序")]),t("p",[s._v("标签的 Props 应该有统一的顺序，依次为指令、属性和事件。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("my-component")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"if"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-show")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ref"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"key"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":text")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@input")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onInput"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onChange"')]),s._v("\n/>")]),s._v("\n")])]),t("h3",{attrs:{id:"zu-jian-xuan-xiang-de-shun-xu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-xuan-xiang-de-shun-xu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 组件选项的顺序")]),t("p",[s._v("组件选项应该有统一的顺序。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [],\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {},\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {},\n\n  data() {},\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {},\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {},\n\n  created() {},\n\n  mounted() {},\n\n  destroyed() {},\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {}\n};\n")])]),t("h3",{attrs:{id:"zu-jian-xuan-xiang-zhong-de-kong-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-xuan-xiang-zhong-de-kong-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" 组件选项中的空行")]),t("p",[s._v("组件选项较多时，建议在属性之间添加空行。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n    formattedValue() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n    },\n\n    styles() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n    }\n  },\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    onInput() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n    },\n\n    onChange() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n    }\n  }\n};\n")])]),t("h3",{attrs:{id:"dan-wen-jian-zu-jian-ding-ji-biao-qian-de-shun-xu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dan-wen-jian-zu-jian-ding-ji-biao-qian-de-shun-xu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 单文件组件顶级标签的顺序")]),t("p",[s._v("单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。")]),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{pre:!0,attrs:{"v-pre":""}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  ...\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"actionscript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* ... */")]),s._v("\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* ... */")]),s._v("\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])}],e=t("2877"),p={},v=Object(e["a"])(p,r,n,!1,null,null,null);a["default"]=v.exports}}]);