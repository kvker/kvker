---
layout: note
title: git常用命令
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 基础

* `git init` 相应目录下创建git空间
* `git add X git` 空间增加控制文件
* `git add . ` 添加全部文件到空间
* `git commit -m` “提交内容” 提交到git空间，携带备注内容（多次add一次提交）
* `git commit —amend` 修改最后一次commit的内容，如果已经push，则无法修改
* `git reset --soft HEAD~1` 撤销最后一次提交，如未push
* `git status` 查看git空间修改状态
* `git diff X` 对应文件修改了什么
* `git diff hash1 hash2` 版本间修改了哪些内容
* `git diff hash1 hash2` —stat 版本间修改了哪些文件
* `git diff branch1 branch2 —stat` 分支间间修改了哪些文件
* `git log` 查看上传版本
* `git log —pretty=oneline` 简化查看上传版本内容
* `git log br1 ^br2` 查看分支1中有的提交，而分支2中没有的提交，加上 -p 查看具体内容
* `git log br1..br2` 查看分支1到分支2中的提交变化，加上 -p 查看具体内容
* `git log br1 …br2` 单纯查看分支1和分支2提交的变化，加上 -p 查看具体内容
* `git log —left-right br1 br2` 具体查看分支1和分支2变化，并且说明分别是哪边，加上 -p 查看具体内容
*  `git log -- [filePath]` 查看具体哪个文件的修改记录，已删除也行
* `git reset —hard (commit_id)` 前往对应版本
* `git reflog` 查看对git的命令历史
* `git checkout — (file)` 添加到暂存区之前回到修改前状态，可用于恢复文件，不过只能恢复到最新版本
* `git reset HEAD (file)` 从暂存区取出来，有必要再执行上面命令回到修改前
* `git rm X` 删除版本库对应内容
* `git remote add origin (自定义) (gitSSH协议地址或HTTPS地址)` 关联一个远程库
* `git remote set-url —add origin (gitSSH协议地址或HTTPS地址)` 添加另一个远程关联库
* `git push origin —all` 所有远程库一起提交
* `git push --tags` 提交所有tag
* `git remote rm origin` 删除远程库
* `git push -u origin master` 第一次推送master分支的所有内容，同时会关联起来
* `git push origin [branch-name]` 非第一次推送最新修改
* `git clone (github提供的SSH协议地址或HTTPS地址)` 克隆github上的一个库
* `git clone -b [branch-name] (github提供的SSH协议地址或HTTPS地址) `克隆github上库具体分支
* `git branch` 查看分支
* `git branch X` 创建分支
* `git checkout X` 切换到分支
* `git checkout -b X` 创建并切换到分支
* `git merge X` 合并分支到当前分支
* `git name-rev --name-only HEAD` 查看当前分支名
* `git branch -d X` 删除分支
* `git branch -D X` 强行删除分支
* `git push --delete origin X` 删除远程分支（远程不要是默认分支）
* `git log --graph —pretty=oneline —abbrev-commit` 查看分支合并图
* `git merge --no-ff -m “提交内容” X` 有分支情况下普通合并，留有分支记录(快速合并没有分支记录)
* `git stash` 临时开辟一个分支处理其他事(如bug),并将当前的任务临时存放起来
* `git stash list` 查看现有的 stash 列表
* `git stash pop [id]` 返回工作现场
* `git stash apply [id]` 恢复对应的stash
* `git stash drop [id]` 删除stash，默认删除 0
* `git remote` 查看远程库信息
* `git remote -v`查看远程库详细信息
* `git revert X` 撤销某次提交，会保留提交与 history
* `git fetch` 抓取远程分支到本地，需要 merge 合并
* `git pull` 抓取远程的分支并自动合并(抓取后有冲突要解决冲突)
* `git checkout -b branch-name origin/branch-name` 在本地创建和远程分支对应的分支(命名最好一样)
* `git branch --set-upstream branch-name origin/branch-name` 建立本地分支和远程分支的关联
* `git tag tag-name` 给最新commit打标签
* `git tag` 查看所有标签
* `git tag tag-name commit-id` 给特定的commit版本打标签
* `git show tag-name` 查看相应标签
* `git tag -a tag-name -m` “说明文字” commit-id 打标签并指定说明
* `git tag -s tag-name -m` “说明文字” commit-id 私钥打标签(没卵用，麻烦)
* `git tag -d tag-name` 删除对应标签
* `git push origin tag-name` 推送标签到远程
* `git push origin --tags` 推送所有标签到远程
* `git push origin :refs/tags/v0.9` 删除远程标签(最好先删除本地的)
* `git push origin xxx -f` 强制推送
* `git rm --cache [FILE]` 将文件从 git 缓存中取出，比如用来重新忽略
* `git cherry-pick [commitID]` 只合并某个提交的修改
* `git push origin --all` 推送全部分支
* `git fetch --all` 抓取全部分支
* `git pull --all` 拉取全部分支
* `git branch -r` 查看本地所有分支，用于clone后，不显示的全部分支切换

### 历史版本commit修改

* (使用 `git commit --amend` 可以直接修改最近一次)
* (使用 `git commit --amend –reset-author` 可以直接修改最近一次作者)
* `git rebase -i HEAD~n` n表示修改到倒数多少个版本，然后弹出`pick xxxpick xxx…`修改哪一个则将对应的pick换成edit//此处可能有问题//0.’:wq’ 后若没有自动进入进入 vim，则：git commit —amend//1.若显示‘Could not execute editor’需要配置修改器，如vim：config —global core.editor /usr/bin/vim//2.可能需要键入指令才能进入：config —global core.editor /usr/bin/vim然后会有vim弹出修改即可修改完成后，git rebase —continue指令回到修改前的版本如果无意进入git rebase -i HEAD~n或修改错误，git rebase —skip可跳出改状态
* 远程协作 `git push origin branch-name`(失败)—> git pull(no tracking information)—> git branch —set-upstream branch-name origin/branch-name —>解决冲突 —> git push origin branch-name
* 别名 `git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"`
* 计算行数与提交数 `git log --since="2022-03-01" --before="2022-03-31" --author="$(git config --get user.name)" --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }'`
  