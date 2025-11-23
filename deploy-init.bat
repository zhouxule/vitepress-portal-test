# 如果 git rm --cached 报错，先取消子模块注册
git submodule deinit docs/.vitepress/dist -f

# 然后移除
git rm -f docs/.vitepress/dist

# 重新创建目录（如果是空的）
mkdir -p docs/.vitepress/dist

# 添加一个占位文件确保目录存在
echo "# Build output directory" > docs/.vitepress/dist/README.md

# 添加到 Git
git add docs/.vitepress/dist

# 提交并推送
git commit -m "fix: remove submodule and restore as normal directory"
# git push origin main