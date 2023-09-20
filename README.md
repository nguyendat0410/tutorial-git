# Tutorial Git + Yarn 3

[I. GIT](#i-git)

- [1. Khởi tao.](#1-khởi-tạo)
  - [a. Init](#a-init)
  - [b. Clone](#b-clone)
  - [c. Status](#c-status)
  - [d. Branch](#d-branch)
  - [e. Commit](#e-commit)
  - [f. Logs](#f-logs)
  - [g. Checkout](#g-checkout)
  - [h. Reset](#h-reset)
  - [i. Revert](#i-revert)
  - [j. Merge](#j-merge)
  - [k. Rebase](#k-rebase)
  - [l. Diff](#l-diff)
  - [m. Stash](#m-stash)
- [2. Cấu hình cơ bản](#2-cấu-hình-cơ-bản)
  - [a. Cấu hình email, username](#a-cấu-hình-email-username)
  - [b. Nhớ tài khoản khi dùng http](#b-nhớ-tài-khoản-khi-dùng-http)
  - [c. Ignore files](#c-ignore-files)
  - [d. Thêm remote](#d-thêm-remote)
  - [e. Kiểm tra remote hiển tại](#e-kiểm-tra-remote-hiển-tại)
  - [f. Thay đổi tên remote](#f-thay-đổi-tên-remote)
  - [g. Cấu hình URL remote](#g-cấu-hình-url-remote)
  - [h. Xoá URL remote](#h-xoá-url-remote)
  - [i. Add files](#i-add-files)
  - [j. Pull](#j-pull)
  - [k. Push](#k-push)
  - [l. Fetch](#l-fetch)
- [3. Hiển thị tất cả commit ở các nhánh](#3-hiển-thị-tất-cả-commit-ở-các-nhánh)
- [4. Sử dụng `git cherry-pick`](#4-sử-dụng-git-cherry-pick)

  - [a. Lấy 1 commit từ 1 branch (branch-feature-A) bỏ vào master](#a-lấy-1-commit-từ-1-branch-branch-feature-a-bỏ-vào-master)

  - [b. Lấy n commits từ 1 brach bỏ vào master](#b-lấy-n-commits-từ-1-brach-bỏ-vào-master)

  - [c. 1 lần commit cho cả 2 branches](#c-1-lần-commit-cho-cả-2-branches)

- [5. Tip xoá nhiều nhánh](#5-tip-xoá-nhiều-nhánh)

[II. YARN 3](#ii-dự-án-sample-yarn-3)

- [1. Enable corepack](#1-enable-corepack)

- [2. Config yarn 3 for vscode](#2-config-yarn-3-for-vscode)

- [3. Cú pháp sử dụng `yarn`](#3-cú-pháp-sử-dụng-yarn)

# I. GIT

## 1. Khởi tạo

### a. Init

```
git init
```

### b. Clone
```
# Clone repo:
git clone <url> {folder_name}

# Clone single branch of repo:
git clone -b <branch_name> <url> {folder_name}
```

### c. Status
```
git status

git status -s
```

### d. Branch
```
# List all branch of local:
git branch

# List all branch of local and remote:
git branch --all

# Create new branch and does not switch to new branch
git branch <new_branch>

# Create new branch and switch to new branch
git checkout -b <new_branch>

# Rename current branch to new_branch_name
git branch -m new_branch_name

# Delete branch on local
git branch -D <branch_name1> <branch_name2> ...

# Delete branch on remote
git push origin :<branch_name1> :<branch_name2> ...
git push origin --delete <branch_name1> <branch_name2>
```

### e. Commit
```
# Commit a message
git commit -m "Sample message"

# Edit commit message of last commit
git commit --amend -m "Edit sample message"
```

### f. Logs
```
# View short logs:
git log --oneline -10

# View pretty logs:
git log --oneline --decorate --all --graph
```

### g. Checkout
```
# Checkout to branch
git checkout <branch_name>

# Checkout to commit hash
git checkout <commit_hash>

# Checkout file with commit hash
git checkout <commit_hash> <file_path>

# Checkout file from another branch
git checkout <branch_name> <file_path>
```

### h: Reset
```
# Reset HEAD
git reset --hard
git reset origin/master --hard

# Reset with commit hash
git reset <commit_hash>
```

### i. Revert
```
# Revert with commit hash
git revert <commit_hash>
```

### j. Merge
```
git merge <branch_name>
```

### k. Rebase
```
# Rebase <branch_name> into current branch
git rebase <branch_name>

# Rebase <branch_name2> into <branch_name1>
git rebase <branch_name1> <branch_name2>

git rebase -i <commit_hash>

# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

### l. Diff
```
# Diff two commit:
git diff <commit_hash1> <commit_hash2>

# Diff two branches:
git diff <branch_name1> <branch_name2>

# Diff file on two branches:
git diff <branch_name1> <branch_name2> -- <file_path>
```

### m. Stash
```
# Stashed all changed
git stash

# List all stash
git stash list

# Show detail a stash
git stash show stash@{0}

# Apply latest stash to current branch
git stash pop

# Apply stash{0} into current branch
git stash pop stash@{0}

# Apply stash{0} into current branch
git stash apply stash@{0}

# Drop stash{0} into current branch
git stash drop stash@{0}

# Clear all stash
git stash clear
```

## 2. Cấu hình cơ bản

### a. Cấu hình email, username

```
git config --global user.email "your_email@example.com"
git config --global user.username "your name"
```

### b. Nhớ tài khoản khi dùng http

```
# Cài đặt mãi mãi
git config --global credential.helper cache

# Cài đặt 600 số giây = 5 phút
git config --global credential.helper 'cache --timeout=600'

git config credential.helper cache
```

### c. Ignore files

```
git update-index --assume-unchanged
git update-index --no-assume-unchanged
```

### d. Thêm remote

```
git remote add <remote_name> <url>
```

### e. Kiểm tra remote hiển tại

```
git remote -v
```

### f. Thay đổi tên remote

```
git remote rename <old_name> <new_name>
```

### g. Cấu hình URL remote

```
git remote set-url origin https://github.com/user/repo2.git
# Change the 'origin' remote's URL
```

### h. Xoá URL remote

```
git remote rm <remote_name>
```

### i. Add files

```
# Add multi files
git add <file1> <file2> ....

# Add all files
git add .

# Adding all (deleted, modified and new)
git add --all
```

### j. Pull

```
git pull

git pull <remote_name> <branch_name>
```

### k. Push

```
git push <remote_name> <branch_name>

# Force update
git push -f <remote_name> <branch_name>
```

### l. Fetch

```
# Update remote without deleting branches
git fetch <remote_name>

# Update remote and deleting branch (if have)
git fetch <remote_name> --prune
```

## 3. Hiển thị tất cả commit ở các nhánh

```
git log --graph --all --decorate

git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short
```

## 4. Sử dụng `git cherry-pick`

```
git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]
    [-S[<keyid>]] <commit>…
git cherry-pick --continue
git cherry-pick --quit
git cherry-pick --abort
```

### a. Lấy 1 commit từ 1 branch (branch-feature-A) bỏ vào master

```
git checkout master

git cherry-pick branch-feature-A~1

# Hoặc chúng ta có thể chỉ định hash commit
git cherry-pick b8f733bd
```

### b. Lấy n commits từ 1 brach bỏ vào master

```
# Nếu muốn thêm 1 vài commit, không liên tục
git cherry-pick commit_id1 commit_id3

# Nếu muốn thêm 1 loạt commit lần lượt cạnh nhau
git cherry-pick commit_id1...commit_id5

# Với code trên, thì  commit_id1 sẽ ko được thêm vào
# Để đưa commit được tính vào trong branch muốn thêm thì
git cherry-pick commit_id1^..commit_id5
```

### c. 1 lần commit cho cả 2 branches

Commit A cần apply cho 2 branches là branch-X và branch-Y

```
# Đang ở branch-X, thực hiện commit để tạo ra commit A
git add -A
git commit -m "finish commit A"

# Checkout sang branch Y và dùng cherry-pick nào
git checkout branch-Y
git cherry-pick branch-X
```

Với lệnh này, cherry-pick sẽ lấy commit cuối cùng ở branch branch-X và merge vào branch branch-Y

Fix conflict
Cũng như git merge hay rebase, git cherry-pick cũng xãy ra conflict nếu xung đột code. việc của chúng ta chỉ đơn giản là fix conflict sau đó dùng:

```
git add .
git commit
```

## 5. Tip xoá nhiều nhánh

**Window**
```
git checkout master

# Xoá tất cả các nhánh ngoài nhánh đang focus
git branch -D (git branch --list).trim()

# Xoá nhánh với regex với từ: fix-
git branch -D (git branch --list 'fix-*').trim()
```

**Linux | Macos**

```
# Xoá tất cả các nhánh ngoài nhánh đang focus
git branch -D `git branch --list`

# Xoá nhánh với regex với từ: fix-
git branch -D `git branch | grep -E fix-*`
```

# II. Dự án Sample [YARN 3](https://yarnpkg.com/)

## 1. Enable corepack

Start by enabling Corepack, if it isn't already:

```
corepack enable

```

Then initialize a new project:

```
yarn init -2

```

## 2. [Config yarn 3 for vscode](https://yarnpkg.com/getting-started/editor-sdks)

- **Bước 1**: Install the [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) extension, which is maintained by the Yarn team.

- **Bước 2**: Run the following command, which will generate a .vscode/settings.json file:

```
yarn dlx @yarnpkg/sdks vscode
```

- **Bước 3**: For safety reason VSCode requires you to explicitly activate the custom TS settings:

```
i. Press ctrl+shift+p in a TypeScript file
ii. Choose "Select TypeScript Version"
iii. Pick "Use Workspace Version"
```

## 3. Cú pháp sử dụng `yarn`

If you're coming from npm, the main changes are:

1. Chạy command `yarn` là đủ để chạy cài đặt! hoặc có thể gõ command `yarn install`.

2. Thêm package hoặc các gói phụ thuộc chạy command `yarn add`.

3. Nâng cấp các package, gói phụ thuộc trong dự án chạy command `yarn up`.

4. Các kịch bản được viết trong package.json. Có thể chạy command `yarn build` đồng nghĩa với `yarn run build`!

5. Hầu hết các lệnh liên quan đến đăng ký đều được di chuyển sau npm (ex: `yarn npm audit`).
