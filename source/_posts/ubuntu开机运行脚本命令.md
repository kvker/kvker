---
layout: note
title: ubuntu开机运行脚本命令
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 新建个脚本文件new_service.sh

```
#!/bin/bash
# command content
# ..................................
exit 0
```

2. 设置权限

```
sudo chmod 755 new_service.sh
```

3. 把脚本放置到启动目录下

```
sudo mv new_service.sh /etc/init.d/
```

4. 将脚本添加到启动脚本

执行如下指令，在这里90表明一个优先级，越高表示执行的越晚

```
cd /etc/init.d/
sudo update-rc.d new_service.sh defaults 90
```

5. 移除Ubuntu开机脚本

```
sudo update-rc.d -f new_service.sh remov
```
  