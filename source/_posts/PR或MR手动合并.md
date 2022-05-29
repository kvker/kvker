---
layout: note
title: PR或MR手动合并
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

Check out, review, and merge locally

Step 1. Fetch and check out the branch for this merge request

`git fetch origin`

`git checkout -b jump origin/jump`
Step 2. Review the changes locally

Step 3. Merge the branch and fix any conflicts that come up

`git fetch origin`

`git checkout origin/master`

`git merge --no-ff jump`

Step 4. Push the result of the merge to GitLab

`git push origin master`
  