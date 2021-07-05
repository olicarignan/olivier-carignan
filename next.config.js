module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-robots-tag',
            value: 'all'
          }
        ]
      }
    ]
  }
};