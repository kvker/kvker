---
layout: note
title: 树莓派4B使用HDMI无声问题处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```sh
# uncomment if hdmi display is not detected and composite is being output
hdmi_force_hotplug=1


# uncomment to force a specific HDMI mode (this will force VGA)
hdmi_group=1
hdmi_mode=4


# uncomment to force a HDMI mode rather than DVI. This can make audio work in
# DMT (computer monitor) modes
hdmi_drive=2
hdmi_force_edid_audio=1
```
  