# Tutorial Git + Yarn 3

[I. GIT](#i-git)

- [1. Sửa dụng `git cherry-pick`](#1-sử-dụng-git-cherry-pick)

  - [a. Lấy 1 commit từ 1 branch (branch-feature-A) bỏ vào master](#a-lấy-1-commit-từ-1-branch-branch-feature-a-bỏ-vào-master)

  - [b. Lấy n commits từ 1 brach bỏ vào master](#b-lấy-n-commits-từ-1-brach-bỏ-vào-master)

  - [c. 1 lần commit cho cả 2 branches](#c-1-lần-commit-cho-cả-2-branches)

[II. YARN 3](#ii-yarn-3)

- [1. Enable corepack](#1-enable-corepack)

- [2. Config yarn 3 for vscode](#2-config-yarn-3-for-vscode)

- [3. Cú pháp sử dụng `yarn`](#3-cú-pháp-sử-dụng-yarn)

# I. GIT

## 1. Sử dụng `git cherry-pick`

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

# II. [YARN 3](https://yarnpkg.com/)

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

- **Bước 1**: Install the ZipFS extension, which is maintained by the Yarn team.

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
