---
layout: note
title: HTTPS证书与key的生成
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

证书生成步骤如下：

1.进入到/usr/local/nginx/conf/下，新建目录crt（mkdir crt）

2.进入到crt（cd crt）

3.开始生成证书，使用命令：openssl genrsa -des3 -out server.key 1024 生成key，会出现以下提示

  ```
  Generating RSA private key, 1024 bit long modulus

  ......................................................++++++

  .................++++++

  e is 65537 (0x10001)

  Enter pass phrase for server.key:（此处随意输入证书密码开心就行，比如123456）

  Verifying - Enter pass phrase for server.key:（重复输入一次）
  ```

4.使用命令openssl req -new -key server.key -out server.csr 生成csr，(注：此步骤生成证书，需要输入国家/地区/公司/个人相关信息，不需要真实，内容差不多就行，可参考下面的加粗部分)

  ```
  Enter pass phrase for server.key:

  You are about to be asked to enter information that will be incorporated

  into your certificate request.

  What you are about to enter is what is called a Distinguished Name or a DN.

  There are quite a few fields but you can leave some blank

  For some fields there will be a default value,

  If you enter '.', the field will be left blank.

  -----

  Country Name (2 letter code) [GB]:CN

  State or Province Name (full name) [Berkshire]:Shandong

  Locality Name (eg, city) [Newbury]:liangshang

  Organization Name (eg, company) [My Company Ltd]:hahah

  Organizational Unit Name (eg, section) []:biubiu

  Common Name (eg, your name or your server's hostname) []:nanxiaoliu

  Email Address []:nanxiaoliu@channelsoft.com



  Please enter the following 'extra' attributes

  to be sent with your certificate request

  A challenge password []:123456

  An optional company name []:（敲回车）
  ````

5.cp server.keyserver.key.org

6.openssl rsa -inserver.key.org-out server.key

  ```
  Enter pass phrase forserver.key.org:123456

  writing RSA key
  ```

7.openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

  `Signature ok`

---

到此，证书创建完毕。
  