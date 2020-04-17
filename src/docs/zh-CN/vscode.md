# VSCode 团队代码规范

> 编辑器代码风格一致，是前端代码规范的一部分。同一个项目，或者同一个小组，保持代码风格一致很必要。
>
> 就拿 iotfe 项目来说，很多小伙伴的代码存在譬如三元不等式一行或多行显示、import 用{}引入多个变量或者函数会一行或多行显示、冗余空格、分号不一致、单双引号不一致等等问题，这些看起来很是别扭。
>
> 因此，好的格式化工具和团队代码风格一致，显得格外重要。建议我们整个小组运用同一款 IDE，同一种代码校验，同一种格式化方式。

下面介绍一下即将统一采用的 VSCode + ESLint 自动保存，自动格式化的方式（强制性）

## VSCode 插件

### **_必装系列_**

- **Vetur**【Vue 开发工具】
- **Prettier - Code formatter**【代码格式化】
- **ESLint**【一个 Javascript Linter，帮助我们规范代码质量，提高团队开发效率】
- **Chinese (Simplified) Language Pack for Visual Studio Code**【适用于 VSCode 的中文（简体）语言包】
- **Auto Close Tag**【适用于 JSX、Vue、HTML，在打开标签并且键入 <tag-name 的时候，能自动补全要闭合的标签】
- **Auto Rename Tag**【适用于 JSX、Vue、HTML，在修改标签名时，能在你修改开始（结束）标签的时候修改对应的结束（开始）标签，帮你减少 50% 的击键】
- **Path Intellisense**【文件路径补全，在你用任何方式引入文件系统中的路径时提供智能提示和自动完成】
- **Npm Intellisense**【NPM 依赖补全，在你引入任何 node_modules 里面的依赖包时提供智能提示和自动完成】
- **Bracket Pair Colorizer**【识别代码中的各种括号，并且标记上不同的颜色，方便你扫视到匹配的括号，在括号使用非常多的情况下能环节眼部压力，编辑器快捷键固然好用，但是在临近嵌套多的情况下却有些力不从心】
- **GitLens**【能让我们在不离开编辑器，不执行任何命令的情况下知晓光标所在位置代码的修改时间、作者信息等】

### **_选装系列_**

- **Themes**【挑选漂亮的主题】
- **vscode-icons**【文件类型提供相应的图标】
- **Debugger for Chrome**【你可以直接在 VSCode 中加断点】
- **Git History**【可以查看 Git log, file, 和 line 历史记录】
- **Settings Sync**【主要用来同步家里和公司的 VSCode 配置】
- **Document This**【一键给代码中的类、函数加上注释】
- **HTML Boilerplate**【摆脱为 HTML 新文件重新编写头部和正文标签的苦恼】
- **Project Manager**【项目管理，让我们方便的在命令面板中切换项目文件夹，当然，你也可以直接打开包含多个项目的父级文件夹，但这样可能会让 VSCode 变慢】
- **HTML Snippets**【各种 HTML 标签片段】
- **TODO Highlight**【高亮 TODO 注释，以便更容易追踪任何未完成的业务】
- **Vue 2 Snippets**（Vue 代码片段补全）
- **markdownlint**【Markdown 语法提示器】
- **PowerShell**【是什么让你坚持用 cmd】
- **EditorConfig for VS Code**【支持 .editorconfig 配置规范】
- **Live Server**【实现本地服务器+自动刷新】
- **Import Cost**【显示导入包的大小】

## VSCode 配置规范

可以参考我的本地配置：

```json
{
    // PowerShell
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
    "php.validate.executablePath": "C:\\phpStudy\\PHPTutorial\\php\\php-7.2.1-nts\\php.exe",
    // 档案删除时确认
    "explorer.confirmDelete": false,
    // 主题风格
    "workbench.colorTheme": "Monokai",
    // 指定应该禁止哪些消息
    "gitlens.advanced.messages": {
        "suppressLineUncommittedWarning": true,
        "suppressShowKeyBindingsNotice": true,
        "suppressWelcomeNotice": true
    },
    // 指定用于GitLens快捷键的键映射
    "gitlens.keymap": "alternate", // 增加一个替代组快捷键
    "window.zoomLevel": 0,
    // tab间隔
    "editor.tabSize": 2,
    // 每次保存的时候自动格式化
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        // 这个属性能够在保存时，自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列，推荐设置为true
        "source.organizeImports": true
    },
    // 对于.vue文件,关闭prettier,交给eslint fix
    "eslint.validate": [
        "vue",
        "html",
        "javascript",
        "typescript",
        "javascriptreact",
        "typescriptreact"
    ],
    // 关闭eslint语法红色提示
    "vetur.validation.template": false,
    "vetur.format.defaultFormatterOptions": {
        "vetur.format.defaultFormatter.html": "prettyhtml",
        "vetur.format.defaultFormatter.css": "prettier",
        "vetur.format.defaultFormatter.postcss": "prettier",
        "vetur.format.defaultFormatter.scss": "prettier",
        "vetur.format.defaultFormatter.less": "prettier",
        "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
        "vetur.format.defaultFormatter.js": "prettier",
        "vetur.format.defaultFormatter.ts": "prettier",
        "prettyhtml": {
            "printWidth": 160, // 使用不同的最大行长度
            "singleQuote": false,
            "wrapAttributes": false, // 强制换行属性（当它有多个时，默认值为false）
            "sortAttributes": false // 按字母顺序排序属性（默认值：false）
        },
        /* prettier的配置 */
        "prettier": {
            "printWidth": 160, // 超过最大值换行
            "tabWidth": 2, // 缩进字节数
            "useTabs": false, // 缩进不使用tab，使用空格
            "semi": true, // 句尾添加分号
            "singleQuote": true, // 使用单引号代替双引号
            "proseWrap": "preserve", // 代码超出是否要换行 preserve保留
            "arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
            "bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
            "disableLanguages": [
                "vue"
            ], // 不格式化vue文件，vue文件的格式化单独设置
            "endOfLine": "auto", // 结尾是 \n \r \n\r auto
            "eslintIntegration": false, // 不让prettier使用eslint的代码格式进行校验
            "htmlWhitespaceSensitivity": "ignore", // 包裹文字时候结束标签的结尾尖括号掉到了下一行?
            "ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
            "jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
            "jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
            "parser": "babylon", // 格式化的解析器，默认是babylon
            "requireConfig": false, // Require a 'prettierconfig' to format prettier
            "stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
            "flattenTernaries": false, // 三元运算
            "trailingComma": "none", // 尾随逗号 <none, es5, all>
            "tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验
            "breakProperty": false, // 允许属性名和值断行
            "alignObjectProperties": false // 对齐冒号
        }
    },
    /* stylus 配置 */
    // 是否插入冒号
    "stylusSupremacy.insertColons": false,
    // 是否插入分号
    "stylusSupremacy.insertSemicolons": false,
    // 是否插入大括号
    "stylusSupremacy.insertBraces": false,
    // import之后是否换行
    "stylusSupremacy.insertNewLineAroundImports": false,
    // 两个选择器中是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": true,
    "explorer.confirmDragAndDrop": false,
    "git.enableSmartCommit": true,
    "git.confirmSync": false,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "breadcrumbs.enabled": true,
    // "[html]": {
    //     "editor.defaultFormatter": "esbenp.prettier-vscode"
    // },
    // 如果html的格式化效果不满意的话，可以单独设置html的格式化
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[markdown]": {
        "editor.defaultFormatter": "yzhang.markdown-all-in-one"
    },
    "vsicons.dontShowNewVersionMessage": true,
    "powershell.powerShellExePath": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
    "editor.renderWhitespace": "none",
    "editor.renderControlCharacters": false,
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    "editor.minimap.enabled": true,
    "sync.gist": "4b3ab3b9ca314f59f9ace2702e70586c",
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "python.formatting.provider": "yapf"
}
```

## EditorConfig 配置规范

```ini
root = true # 表明是最顶层的配置文件，发现设为 true 时，才会停止查找.editorconfig 文件

[*]
charset = utf-8 # 编码格式，支持 latin1、utf-8、utf-8-bom、utf-16be 和 utf-16le，不建议使用 uft-8-bom
indent_style = space # tab 为 hard-tabs，space 为 soft-tabs
indent_size = 2 # 设置整数表示规定每级缩进的列数和 soft-tabs 的空格数。如果设定为 tab，则会使用 tab_width 的值（如果已指定）
end_of_line = lf # 定义换行符，支持 lf、cr 和 crlf
insert_final_newline = true # 设为 true 表明使文件以一个空白行结尾，false 反之
trim_trailing_whitespace = true # 设为 true 表示会除去换行行首的任意空白字符，false 反之
```

## 开发小技巧

### 移至文件的开头/结尾

要使光标移到文件的第一行或最后一行，最快的方法是按`Ctrl + Home`开头，`Ctrl + End`结尾。

### 选择光标左/右侧的所有内容

`Ctrl + Shift + Home/End`

### 逐个选择文本

`Ctrl + Shift + 左/右箭头`逐个选择文本。
PS：注意它和`Shift + 左/右箭头`的区别！！！

### 向上/向下移动一行

按`Alt + 向上箭头`当前行向上移动，按`Alt + 向下箭头`当前行向下移动。

### 删除一行

`Ctrl + X` 或 `Ctrl + Shift + K`

### 复制游标批量添加内容

`Ctrl + Alt + 向上箭头`将光标添加到上面，`Ctrl + Alt + 向下箭头`将光标添加到下面

## 其他硬性要求

1. 单个文件代码行尽量不要超过 `500` 行，封装分割出去
2. 每个 `js` 文件在 `顶部` 务必写一些 `说明性文字` ，描述该文件的功能
3. 比较容易歧义，或者关键点，需要写 `注释` 给与说明
