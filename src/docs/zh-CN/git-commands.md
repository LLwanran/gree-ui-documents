# Git 命令速查

`git init` <strong style="color: #ed4014;">初始化本地 git 仓库（创建新仓库）</strong>  
`git config --global user.name "liyaofei"` 配置用户名  
`git config --global user.email "316683022@qq.com"` 配置邮件  
`git config --global color.ui true` git status 等命令自动着色  
`git config --global color.status auto`  
`git config --global color.diff auto`  
`git config --global color.branch auto`  
`git config --global color.interactive auto`  
`git config --global --unset http.proxy` 删除 git 上的代理配置  
`git clone git+ssh://git@127.0.0.1/gree-ui.git` clone 远程仓库  
`git status` <strong style="color: #ed4014;">查看当前版本状态（是否修改）</strong>  
`git add xyz` 添加 xyz 文件至 index  
`git add .` <strong style="color: #ed4014;">增加当前子目录下所有更改过的文件至 index</strong>  
`git commit -m 'commit message'` <strong style="color: #ed4014;">提交</strong>  
`git commit --amend -m 'xxx'` 合并上一次提交（用于反复修改）  
`git commit -am 'xxx'` 将 add 和 commit 合为一步  
`git rm xxx` 删除 index 中的文件  
`git rm -r *` 递归删除  
`git log` <strong style="color: #ed4014;">显示提交日志</strong>  
`git log -n` 显示 n 行日志 -n 为 n 行  
`git log --stat` 显示提交日志及相关变动文件  
`git show dfb02e6e4f2f7b573337763e5c0013802e392818` 显示某个提交的详细内容  
`git show dfb02` 可只用 commitid 的前几位  
`git show HEAD` <strong style="color: #ed4014;">显示 HEAD 提交日志</strong>  
`git show HEAD^` 显示 HEAD 的父（上一个版本）的提交日志 ^^为上两个版本 ^5 为上 5 个版本  
`git tag` <strong style="color: #ed4014;">显示已存在的 tag</strong>  
`git tag -a v2.0 -m 'xxx'` 增加 v2.0 的 tag  
`git show v2.0` 显示 v2.0 的日志及详细内容  
`git log v2.0` 显示 v2.0 的日志  
`git diff` <strong style="color: #ed4014;">显示所有未添加至 index 的变更</strong>  
`git diff --cached` 显示所有已添加 index 但还未 commit 的变更  
`git diff HEAD^` 比较与上一个版本的差异  
`git diff HEAD -- ./lib` 比较与 HEAD 版本 lib 目录的差异  
`git diff origin/master..master` 比较远程分支 master 上有本地分支 master 上没有的  
`git diff origin/master..master --stat` 只显示差异的文件，不显示具体内容  
`git remote add origin git+ssh://git@192.168.53.168/VT.git` 增加远程定义（用于 push/pull/fetch）  
`git branch` <strong style="color: #ed4014;">显示本地分支</strong>  
`git branch --contains 50089` 显示包含提交 50089 的分支  
`git branch -a` 显示所有分支  
`git branch -r` 显示所有原创分支  
`git branch --merged` 显示所有已合并到当前分支的分支  
`git branch --no-merged` 显示所有未合并到当前分支的分支  
`git branch -m master master_copy` 本地分支改名  
`git checkout -b master_copy` <strong style="color: #ed4014;">从当前分支创建新分支 master_copy 并检出</strong>  
`git checkout -b master master_copy` 上面的完整版  
`git checkout features/performance` 检出已存在的 features/performance 分支  
`git checkout --track hotfixes/BJVEP933` 检出远程分支 hotfixes/BJVEP933 并创建本地跟踪分支  
`git checkout v2.0` 检出版本 v2.0  
`git checkout -b devel origin/develop` 从远程分支 develop 创建新本地分支 devel 并检出  
`git checkout -- README` 检出 head 版本的 README 文件（可用于修改错误回退）  
`git merge origin/master` <strong style="color: #ed4014;">合并远程 master 分支至当前分支</strong>  
`git cherry-pick ff44785404a8e` 合并提交 ff44785404a8e 的修改  
`git push origin master` <strong style="color: #ed4014;">将当前分支 push 到远程 master 分支</strong>  
`git push origin :hotfixes/BJVEP933` 删除远程仓库的 hotfixes/BJVEP933 分支  
`git push --tags` 把所有 tag 推送到远程仓库  
`git fetch` <strong style="color: #ed4014;">获取所有远程分支（不更新本地分支，另需 merge）</strong>  
`git fetch --prune` 获取所有原创分支并清除服务器上已删掉的分支  
`git pull origin master` <strong style="color: #ed4014;">获取远程分支 master 并 merge 到当前分支</strong>  
`git mv README README2` 重命名文件 README 为 README2  
`git reset --hard HEAD` 将当前版本重置为 HEAD（通常用于 merge 失败回退）  
`git rebase` <strong style="color: #ed4014;">合并多次提交纪录</strong>  
`git branch -d hotfixes/BJVEP933` 删除分支 hotfixes/BJVEP933（本分支修改已合并到其他分支）  
`git branch -D hotfixes/BJVEP933` 强制删除分支 hotfixes/BJVEP933  
`git ls-files` 列出 git index 包含的文件  
`git show-branch` 图示当前分支历史  
`git show-branch --all` 图示所有分支历史  
`git whatchanged` 显示提交历史对应的文件修改  
`git revert dfb02e6e4f2f7b573337763e5c0013802e392818` 撤销提交 dfb02e6e4f2f7b573337763e5c0013802e392818  
`git ls-tree HEAD` 内部命令：显示某个 git 对象  
`git rev-parse v2.0` 内部命令：显示某个 ref 对于的 SHA1 HASH  
`git reflog` <strong style="color: #ed4014;">显示所有提交，包括孤立节点</strong>  
`git show HEAD@{5}` 查看仓库中 HEAD 在五次前的值  
`git show master@{yesterday}` 显示 master 分支昨天的状态  
`git log --pretty=format:'%h %s' --graph` 图示提交日志  
`git show HEAD~3` 显示 HEAD 的第 3 父提交  
`git show -s --pretty=raw 2be7fcb476`  
`git stash` <strong style="color: #ed4014;">暂存当前修改，将所有至为 HEAD 状态</strong>  
`git stash list` 查看所有暂存  
`git stash show -p stash@{0}` 参考第一次暂存  
`git stash apply stash@{0}` 应用第一次暂存  
`git grep "delete from"` 文件中搜索文本“delete from”  
`git grep -e '#define' --and -e SORT_DIRENT` 查找在仓库的哪个地方定义了'SORT_DIRENT'  
`git gc` 检查是否需要进行任何清洁工作  
`git fsck` 恢复误删 stash 贮藏的数据
