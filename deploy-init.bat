@echo off
echo =========================================
echo ��ʼ���� VitePress ��վ�� GitHub Pages
echo =========================================

REM 1. ���� VitePress ��Ŀ
echo ���ڱ���...
call npm run docs:build

REM 2. �������Ŀ¼
cd docs\.vitepress\dist

REM 3. ��ʼ����ʱ Git �ֿ�
echo ��ʼ����ʱ Git �ֿ�...
git init
git add -A
git commit -m "deploy"

REM 4. ���͵� gh-pages ��֧
echo ���͵� gh-pages ��֧...
git branch -M gh-pages
echo git remote add origin https://github.com/zhouxule/vitepress-portal-test.git
git push -f origin gh-pages

REM 5. ����ԭĿ¼
cd ..\..\..

echo =========================================
echo ������ɣ��뵽 GitHub Pages �鿴Ч����
echo =========================================
pause
