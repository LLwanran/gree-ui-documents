(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ace0314"],{"2d1f":function(s,a,e){},"76ca":function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"markdown-body"},[e("h1",[s._v("勾选按钮")]),e("p",[s._v("用于标记切换某种状态，如协议勾选")]),s._m(0),s._m(1),s._m(2),e("demo-block",[e("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[e("gree-agree",{attrs:{disabled:s.agreeConf.disabled,size:s.agreeConf.size},on:{change:function(a){return s.onChange(s.agreeConf.name,s.agreeConf.checked,a)}},model:{value:s.agreeConf.checked,callback:function(a){s.$set(s.agreeConf,"checked",a)},expression:"agreeConf.checked"}},[s._v("\n  我已阅读并同意格力\n  "),e("a",[s._v("用户注册协议")]),s._v("和\n  "),e("a",[s._v("隐私政策")])])],1),e("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[e("pre",{pre:!0,attrs:{class:"hljs"}},[e("code",{pre:!0,attrs:{"v-pre":""}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("gree-agree")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf.checked"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf.disabled"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf.size"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onChange(agreeConf.name, agreeConf.checked, $event)"')]),s._v("\n>")]),s._v("\n  我已阅读并同意格力\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("用户注册协议"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("和\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("隐私政策"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("gree-agree")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("agreeConf")]),s._v(": {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("checked")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'agree0'")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'md'")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("introduction")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'选中状态'")]),s._v("\n        }\n      };\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onChange(name, checked) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(\n          "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`agree name = "),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${name}")]),s._v(" is "),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${checked ? "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'checked'")]),s._v(" : "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unchecked'")]),s._v("}")]),s._v("`")]),s._v("\n        );\n      }\n    }\n  };\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(3),e("demo-block",[e("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[e("gree-agree",{attrs:{disabled:s.agreeConf2.disabled,size:s.agreeConf2.size},on:{change:function(a){return s.onChange(s.agreeConf2.name,s.agreeConf2.checked,a)}},model:{value:s.agreeConf2.checked,callback:function(a){s.$set(s.agreeConf2,"checked",a)},expression:"agreeConf2.checked"}},[s._v("\n  我已阅读并同意格力\n  "),e("a",[s._v("用户注册协议")]),s._v("和\n  "),e("a",[s._v("隐私政策")])])],1),e("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[e("pre",{pre:!0,attrs:{class:"hljs"}},[e("code",{pre:!0,attrs:{"v-pre":""}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("gree-agree")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf2.checked"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf2.disabled"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf2.size"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onChange(agreeConf2.name, agreeConf2.checked, $event)"')]),s._v("\n>")]),s._v("\n  我已阅读并同意格力\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("用户注册协议"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("和\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("隐私政策"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("gree-agree")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("agreeConf2")]),s._v(": {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("checked")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'agree1'")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'md'")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("introduction")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'未选中状态'")]),s._v("\n        }\n      };\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onChange(name, checked) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(\n          "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`agree name = "),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${name}")]),s._v(" is "),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${checked ? "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'checked'")]),s._v(" : "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unchecked'")]),s._v("}")]),s._v("`")]),s._v("\n        );\n      }\n    }\n  };\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(4),e("demo-block",[e("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[e("gree-agree",{attrs:{disabled:s.agreeConf3.disabled,size:s.agreeConf3.size},on:{change:function(a){return s.onChange(s.agreeConf3.name,s.agreeConf3.checked,a)}},model:{value:s.agreeConf3.checked,callback:function(a){s.$set(s.agreeConf3,"checked",a)},expression:"agreeConf3.checked"}},[s._v("\n  我已阅读并同意格力\n  "),e("a",[s._v("用户注册协议")]),s._v("和\n  "),e("a",[s._v("隐私政策")])])],1),e("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[e("pre",{pre:!0,attrs:{class:"hljs"}},[e("code",{pre:!0,attrs:{"v-pre":""}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("gree-agree")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf3.checked"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf3.disabled"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"agreeConf3.size"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onChange(agreeConf3.name, agreeConf3.checked, $event)"')]),s._v("\n>")]),s._v("\n  我已阅读并同意格力\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("用户注册协议"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("和\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("隐私政策"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("gree-agree")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("agreeConf3")]),s._v(": {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("checked")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'agree2'")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'md'")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("introduction")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'禁止选择状态'")]),s._v("\n        }\n      };\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onChange(name, checked) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(\n          "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`agree name = "),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${name}")]),s._v(" is "),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${checked ? "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'checked'")]),s._v(" : "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unchecked'")]),s._v("}")]),s._v("`")]),s._v("\n        );\n      }\n    }\n  };\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(5),s._m(6),s._m(7),s._m(8),e("p",[s._v("勾选状态发生变化事件")]),s._m(9)],1)},r=[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("h2",{attrs:{id:"an-xu-yin-ru"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru","aria-hidden":"true"}},[s._v("¶")]),s._v(" 按需引入")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("pre",{pre:!0,attrs:{class:"hljs"}},[e("code",{pre:!0,attrs:{"v-pre":""}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Agree } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gree-ui'")]),s._v(";\n\nVue.component(Agree.name, Agree);\n")])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("h3",{attrs:{id:"xuan-zhong-zhuang-tai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xuan-zhong-zhuang-tai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 选中状态")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("h3",{attrs:{id:"wei-xuan-zhong-zhuang-tai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wei-xuan-zhong-zhuang-tai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 未选中状态")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("h3",{attrs:{id:"jin-zhi-xuan-ze-zhuang-tai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jin-zhi-xuan-ze-zhuang-tai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 禁止选择状态")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Props")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性")]),e("th",[s._v("说明")]),e("th",[s._v("类型")]),e("th",[s._v("默认值")]),e("th",[s._v("备注")])])]),e("tbody",[e("tr",[e("td",[s._v("v-model")]),e("td",[s._v("是否选中")]),e("td",[s._v("Boolean")]),e("td",[e("code",{pre:!0},[s._v("false")])]),e("td",[s._v("-")])]),e("tr",[e("td",[s._v("disabled")]),e("td",[s._v("是否禁用")]),e("td",[s._v("Boolean")]),e("td",[e("code",{pre:!0},[s._v("false")])]),e("td",[s._v("-")])]),e("tr",[e("td",[s._v("size")]),e("td",[s._v("按钮大小")]),e("td",[s._v("String")]),e("td",[e("code",{pre:!0},[s._v("md")])]),e("td",[s._v("可选值参考组件"),e("code",{pre:!0},[s._v("Icon")])])])])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Events")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("h3",{attrs:{id:"at-change-name-checked"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#at-change-name-checked","aria-hidden":"true"}},[s._v("¶")]),s._v(" @change(name, checked)")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性")]),e("th",[s._v("说明")]),e("th",[s._v("类型")])])]),e("tbody",[e("tr",[e("td",[s._v("name")]),e("td",[s._v("单选按钮名称，唯一标识")]),e("td",[s._v("Number/String")])]),e("tr",[e("td",[s._v("checked")]),e("td",[s._v("是否选中")]),e("td",[s._v("Boolean")])])])])}],n={data:function(){return{agreeConf:{checked:!0,name:"agree0",size:"md",disabled:!1,introduction:"选中状态"},agreeConf2:{checked:!1,name:"agree1",size:"md",disabled:!1,introduction:"未选中状态"},agreeConf3:{checked:!0,name:"agree2",size:"md",disabled:!0,introduction:"禁止选择状态"}}},methods:{onChange:function(s,a){console.log("agree name = ".concat(s," is ").concat(a?"checked":"unchecked"))}}},l=n,v=(e("f210"),e("2877")),_=Object(v["a"])(l,t,r,!1,null,"715eaee2",null);a["default"]=_.exports},f210:function(s,a,e){"use strict";var t=e("2d1f"),r=e.n(t);r.a}}]);