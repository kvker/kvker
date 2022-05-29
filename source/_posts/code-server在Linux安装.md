---
layout: note
title: code-server在Linux安装
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```shell
Debian, Ubuntu
NOTE: The standalone arm64 .deb does not support Ubuntu <16.04. Please upgrade or build with yarn.

curl -fOL https://github.com/cdr/code-server/releases/download/v3.9.3/code-server_3.9.3_amd64.deb
sudo dpkg -i code-server_3.9.3_amd64.deb
sudo systemctl enable --now code-server@$USER
# Now visit http://127.0.0.1:8080. Your password is in ~/.config/code-server/config.yaml
Fedora, CentOS, RHEL, SUSE
NOTE: The standalone arm64 .rpm does not support CentOS 7. Please upgrade or build with yarn.

curl -fOL https://github.com/cdr/code-server/releases/download/v3.9.3/code-server-3.9.3-amd64.rpm
sudo rpm -i code-server-3.9.3-amd64.rpm
sudo systemctl enable --now code-server@$USER
```
  