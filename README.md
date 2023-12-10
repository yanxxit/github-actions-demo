# github-actions-demo
github actions demo

## 基本概念
GitHub Actions 有一些自己的术语。

1. workflow （工作流程）：持续集成一次运行的过程，就是一个 workflow。

2. job （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。

3. step（步骤）：每个 job 由多个 step 构成，一步步完成。

4. action （动作）：每个 step 可以依次执行一个或多个命令（action）。

### 介绍
```sh
jobs..steps[*].id : 步骤的唯一标识符
jobs..steps[*].name : 步骤显示在 GitHub 上的名称
jobs..steps[*].if : 自定义表达式，判断是否满足条件
jobs..steps[*].uses : 选择公共仓库中、或发布 Docker 容器映像作为一部分运行的操作。例如上面的实例都是使用了公共仓库提供的操作
jobs..steps[*].run : 运行 shell 命令程序。

```

## 整理
- [x] workflows 支持多个步骤文件，都会执行

## 参考
- [针不戳！GitHub Actions 入坑指南](https://juejin.cn/post/6960126908180725773)
- [编写自己的 GitHub Action，体验自动化部署](https://zhuanlan.zhihu.com/p/103552188)
- [GitHub Actions 文档](https://docs.github.com/zh/actions)
- [GitHub Actions](https://github.com/actions)