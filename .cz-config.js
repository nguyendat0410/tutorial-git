module.exports = {
  types: [
    { value: 'feat', name: '✨ feat:\tMột tính năng mới' },
    { value: 'fix', name: '🐛 fix:\tMột bản sửa lỗi' },
    { value: 'docs', name: '📝 📚 docs:\tThêm hoặc cập nhật tài liệu' },
    {
      value: 'style',
      name: '💄 style:\tThêm hoặc cập nhật styles, ui hoặc ux',
    },
    {
      value: 'refactor',
      name: '♻️ refactor:\tThay đổi mã không sửa lỗi cũng như không thêm tính năng',
    },
    {
      value: 'perf',
      name: '⚡️ perf:\tThay đổi mã giúp cải thiện hiệu suất',
    },
    {
      value: 'test',
      name: '✅ test:\tThêm trường hợp thử nghiệm',
    },
    {
      value: 'chore',
      name: '🚚 chore:\tNhững thay đổi đối với quy trình xây dựng hoặc các công cụ phụ trợ\n\t\tvà các thư viện như tạo tài liệu',
    },
    { value: 'revert', name: '⏪️ revert:\tKhôi phục một commit trước đó' },
    { value: ':construction: wip', name: '🚧 wip:\tCông việc đang được tiến hành' },
    {
      value: 'build',
      name: '👷 build:\tThêm hoặc cập nhật liên quan đến quá trình xây dựng',
    },
    {
      value: 'ci',
      name: '💚 ⚙️ ci:\tThêm hoặc cập nhật liên quan đến quá trình xây dựng',
    },
  ],

  scopes: [
    { name: 'ui' },
    { name: 'android' },
    { name: 'ios' },
    { name: 'home' },
    { name: 'planner' },
    { name: 'settings' },
  ],

  messages: {
    type: "Chọn loại COMMIT mà bạn đang thực hiện:",
    scope: '\nBiểu thị SCOPE của thay đổi này (tùy chọn):',
    // used if allowCustomScopes is true
    customScope: 'Biểu thị SCOPE của sự thay đổi này:',
    subject: 'Viết một mô tả SHORT, IMPERATIVE về sự thay đổi:\n',
    body: 'Cung cấp mô tả LONGER về thay đổi (tùy chọn). Sử dụng "|" để ngắt dòng mới:\n',
    breaking: 'Liệt kê mọi BREAKING CHANGE (tùy chọn):\n',
    footer: 'Liệt kê mọi ISSUES CLOSED do thay đổi này (tùy chọn). Ví dụ: #31, #34:\n',
    confirmCommit: 'Bạn có chắc chắn muốn tiếp tục với cam kết ở trên không?',
  },

  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'conflict' }],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],
  subjectLimit: 100,
};
