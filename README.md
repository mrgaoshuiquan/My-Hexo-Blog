# 失忆的普信男 · Ops Gao Blog

> 一个普信男运维工程师的技术博客，专注运维 15 年。  
> 分享 Linux / 系统运维 / 自动化 / AI 工具 / 跨境电商环境配置等实战经验。
>
> A personal ops engineer blog, 15 years of experience in operations.  
> Sharing Linux / SysOps / Automation / AI Tools / Cross-border E-commerce & more.

🌐 访问地址 / Website：[https://gaoops.com/](https://gaoops.com)

---

## 📖 博客简介 / About

本博客基于 [Hexo](https://hexo.io/) 搭建，使用 [Butterfly](https://butterfly.js.org/) 主题，托管于 Vercel + GitHub。

This blog is built with [Hexo](https://hexo.io/) and the [Butterfly](https://butterfly.js.org/) theme, hosted on Vercel + GitHub.

内容涵盖 / Topics covered：

- 🖥️ Linux 系统运维与故障排查 / Linux SysOps & Troubleshooting
- ⚙️ 自动化运维与脚本工具 / Automation & Scripting
- 🤖 AI 工具选型与使用建议 / AI Tool Selection & Tips
- 🌐 跨境电商 / 环境配置 / 网络相关 / Cross-border E-commerce / Network Config
- 📦 应用部署与系统优化 / App Deployment & System Optimization

---

## 🛠️ 技术栈 / Tech Stack

| 技术 / Tech | 说明 / Description |
|---|---|
| [Hexo](https://hexo.io/) 5.5.4 | 静态博客框架 / Static blog framework |
| [Butterfly](https://butterfly.js.org/) | 博客主题 / Blog theme |
| [Node.js](https://nodejs.org/) | 运行环境 / Runtime |
| [Git](https://git-scm.com/) | 版本管理 / Version control |
| [Vercel](https://vercel.com/) | 自动构建 & 托管 / Auto build & hosting |
| [GitHub](https://github.com/) | 源码仓库 / Source repository |
| [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) | 音乐播放器插件 / Music player plugin |
| [Live2D](https://github.com/EYHN/hexo-helper-live2d) | 看板娘插件 / Live2D widget |

---

## 💻 本地运行 / Local Development

### 环境要求 / Requirements

- Node.js >= 12.x
- Git
- npm 或 / or yarn

### 克隆项目 / Clone

```bash
git clone https://github.com/mrgaoshuiquan/My-Hexo-Blog.git
cd My-Hexo-Blog
```

### 安装依赖 / Install

```bash
npm install
```

### 本地预览 / Preview

```bash
hexo clean && hexo server
```

浏览器访问 / Open in browser：[http://localhost:4000](http://localhost:4000)

### 常用命令 / Commands

```bash
hexo clean       # 清理缓存 / Clean cache
hexo generate    # 生成静态文件 / Generate static files
hexo server      # 本地预览 / Local preview
```

---

## 🚀 部署说明 / Deployment

本项目采用 **Vercel 自动部署** 方式 / This project uses **Vercel Auto Deployment**：

1. 将源码推送到 GitHub `main` 分支 / Push source code to GitHub `main` branch
2. Vercel 监听到变更后自动拉取源码 / Vercel detects changes and pulls source code
3. Vercel 执行 `hexo generate` 生成静态文件 / Vercel runs `hexo generate`
4. 自动发布上线 / Auto publish to production

### 一键推送脚本 / One-click Push Script（Windows）

项目根目录提供 `代码一键强推.bat`，双击即可推送到 GitHub：

```bat
git add .
git commit -m "backup source: %date% %time%"
git push origin main --force
```

> ⚠️ 注意 / Note：请勿使用 `hexo deploy`，否则会将静态文件覆盖源码，破坏 Vercel 自动构建。  
> Do NOT run `hexo deploy` — it will overwrite source code with static files and break Vercel builds.

---

## 📬 联系方式 / Contact

- 📧 Email：[vip@gaoops.com](mailto:vip@gaoops.com)
- 🌐 博客 / Blog：[gaoops.com](https://gaoops.com)
- 🐙 GitHub：[@mrgaoshuiquan](https://github.com/mrgaoshuiquan)

---

## 📄 版权声明 / License

本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。  
All articles on this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise stated.

转载请注明来源 / Please credit：**失忆的普信男（Ops Gao Blog）**
