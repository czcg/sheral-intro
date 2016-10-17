# Sheral 使用指南
这是一个 demo 站点，不过也是 [Sheral](https://github.com/imweb/sheral) 的说明文档（非官方）。

这个 demo 网站有点 “精神分裂”，该脚手架其实是适合多页面简单网站的快速开发，介绍的确是一个侧重于移动端的 ui 库，从好了想，算是一举两得吧，即介绍了 ui 库，也给大家展示了这个脚手架的一些功能。

## 开始
整个脚手架的使用指南，请参看该项目的 [README](https://github.com/czcg/template) 文档，以下为运行发布操作简要叙述。

## 运行
第一次运行前，需安装依赖包，否则，可直接启动项目。进入项目目录后，执行如下命令：
```
# 安装 Nodejs 的依赖包
npm install
```
```
# 安装本网站所需的一些前端库
bower install
```
当然，以上命令可合并为 `npm i && bower i`，分开执行只是为了能更好的检测包安装的情况。

## 启动
本框架采用 gulp 工具进行前端自动化工程：
```
# 启动项目
gulp
```
启动后，gulp 任务将会自动打开一个 web server，并开启浏览器窗口，保持这个启动的终端不被关闭，接下来就可以开始开发了。

## 发布
执行以下命令，将会把生产版本的网站发布到 dist 目录中，供发布使用。
```
gulp build
```
dist 目录中的 css 和 js 文件都被合并、压缩，js 变量已混淆，完全满足生产环节的需求。

## 注意
因本仓库兼具展示页面之功能，所以将 dist 目录从 .gitignore 的列表中释放了出来，利用 github 的 git-pages 功能生成网站。但是一般项目，我们不建议将最终编译完成的代码也纳入 git 的代码托管中，除非有类似本项目之特殊用途。
