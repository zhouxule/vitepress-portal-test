@echo off
echo =========================================
echo 开始部署 VitePress 网站到 GitHub Pages
echo =========================================

REM 1. 构建 VitePress 项目
echo 正在编译...
call npm run docs:build

REM 2. 进入输出目录
cd docs\.vitepress\dist

REM 3. 初始化临时 Git 仓库
echo 初始化临时 Git 仓库...
git init
git add -A
git commit -m "deploy"

REM 4. 推送到 gh-pages 分支
echo 推送到 gh-pages 分支...
git branch -M gh-pages
echo git remote add origin https://github.com/zhouxule/vitepress-portal-test.git
git push -f origin gh-pages

REM 5. 返回原目录
cd ..\..\..

echo =========================================
echo 部署完成！请到 GitHub Pages 查看效果。
echo =========================================
pause
