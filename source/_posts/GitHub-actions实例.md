---
layout: note
title: GitHub-actions实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```yaml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the action will run. Triggers the workflow on push or pull request
# events but only for the dev branch
on:
  push:
    branches: [ master ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      - uses: actions/setup-node@v1
        with:
          node-version: '13.x'

      # Runs a single command using the runners shell
      - name: install dependencies
        run: npm i

      # Runs a single command using the runners shell
      - name: generate files
        run: npm run generate

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.

      - uses: GoogleCloudPlatform/github-actions/setup-gcloud@master
        with:
          version: '276.0.0'
          service_account_email: ${{ secrets.GCP_SA_EMAIL }}
          service_account_key: ${{ secrets.GCP_SA_KEY }}

      - run: gsutil -m rsync -d -c -r dist gs://test.cheatninja.com
```


这里的GCP_SA_KEY是google cloud storage下载的json文件通过终端base64而成（仅本项目）[参考](https://cloud.google.com/iam/docs/creating-managing-service-account-keys)
