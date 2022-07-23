import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'en-US',
  title: ' ',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  themeConfig: {
    logo: '/klearancelogo.png',
    nav: nav(),
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/pengenalan/': [
        {
          text: 'Pengenalan',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Klearance', link: '/pengenalan/klearance' }, // /guide/index.md
            { text: 'Langkah Awal', link: '/pengenalan/langkahawal' }, // /guide/index.md
            { text: 'One', link: '/guide/one' }, // /guide/one.md
            { text: 'Two', link: '/guide/two' } // /guide/two.md
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            // This shows `/config/index.md` page.
            { text: 'Index', link: '/config/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/': [
        {
          text: 'Config',
          items: [
            // This shows `/config/index.md` page.
            { text: 'this is home', link: '/config/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        }
      ]
    },
    footer: {
      message: 'Bea Cukai Lebih Baik',
      copyright: 'Copyright © 2022 PT Solusi Manufaktur Teknologi'
    }
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/', activeMatch: '/config/' },
  ]
}

