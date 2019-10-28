# Git Commit Message

> commit message 是开发的日常操作，写好 log 不仅有助于他人 review，还可以有效的输出 CHANGELOG，对项目的管理至关重要，但是实际工作中却常常被大家忽略。
>
> > 很有意思，平时经常能看到各种提交风格：有用 emoji 的，有用唐诗宋词的，有用随机生成的。风格没有对错，只要能够体现出 commit 所做的修改即可。

---

> 实际上，这种东西，当然要借助工具了，才能够写得即规范，又格式化，还能够支持后续分析。
> 目前比较建议的是，使用终端工具 `commitizen/cz-cli` + `commitizen/cz-conventional-changelog` + `conventional-changelog/standard-version` 一步解决提交信息和版本发布。
>
> > 甚至，如果想更狠一点，在持续集成里面加入 `marionebl/commitlint` 检查 commit 信息是否符合规范，也不是不可以。

## Commit Message 格式

目前规范使用较多的是 `Angular` 团队的规范，继而衍生了 `Conventional Commits specification`。很多工具也是基于此规范，它的 message 格式如下：

```text
type(<scope>): <Subject> #<github-ref-id>

<body>

<footer>
```

如上这个结构，大致分为三个部分(使用空行分割)：

- `标题行`: 必填，描述主要修改类型和内容
- `主题内容`: 描述为什么修改，做了什么样的修改，以及开发的思路等等
- `页脚注释`: 放 `Breaking Changes` 或 `Closed Issues`

分别由如下部分构成:

- `type`: commit 的类型
- `feat`: 新特性
- `fix`: 修改问题
- `refactor`: 代码重构
- `docs`: 文档修改
- `style`: 代码格式修改，注意不是 css 修改
- `test`: 测试用例修改
- `chore`: 其他修改，比如构建流程，依赖管理.
- `scope`: commit 影响的范围，比如：route、component、utils、build...
- `subject`: commit 的概述
- `body`: commit 具体修改内容，可以分为多行
- `footer`: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接

这样一个符合规范的 `commit message`，就好像是一份邮件。（**GreeUI 组件库即参照此规范来提交**）

### Git 提交消息规则

1. 用空行将`body`与`body`分开
2. 将`subject`限制为 70 个字符
3. `subject`要大写
4. `subject`不要以句号结尾
5. 在`subject`中使用祈使语气
6. 用 80 个字符包装`body`
7. 用 `body` 来解释 what、why、how

## 总结

`commit message` 的规范性很重要，但是是否需要强制限制，每个团队和个人都有自己的想法，但是个人认为：好的习惯，受益终身。
