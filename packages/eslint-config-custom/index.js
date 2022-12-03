module.exports = {
  extends: ["next", "eslint:recommended", "turbo", "prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
