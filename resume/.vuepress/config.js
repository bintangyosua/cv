module.exports = {
  title: "Bintang Yosua's Resume",
  base: "/",
  head: [["link", { rel: "icon", href: "/images/resume.svg" }]],
  themeConfig: {
    navbar: false,
    sidebar: [
      {
        title: "History",
        collapsable: false,
        children: ["/"],
      },
    ],
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "Resume",
      description: "Resume of Bintang Yosua",
    },
    "/id/": {
      lang: "id-ID",
      title: "CV",
      description: "Curriculum Vitae of Bintang Yosua",
    },
    "/jp/": {
      lang: "ja-JP",
      title: "履歴書",
      description: "履歴書 of Bintang Yosua",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "简历",
      description: "简历 of Bintang Yosua",
    },
    "/sv/": {
      lang: "sv-SE",
      title: "CV",
      description: "CV för Bintang Yosua",
    },
  },
};
