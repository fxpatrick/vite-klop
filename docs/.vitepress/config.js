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
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/klrkb/': [
        {
          text: 'Dokumen',
          items: [
            { text: 'Kepabeanan', link: '/klrkb/dokumenbc/' }, 
            { text: 'Internal', link: '/klrkb/dokumeninternal/' }, 
          ]
        },
        {
          text: 'Integrasi',
          items: [
            { text: 'Sync Client', link: '/klrkb/syncclient/' }, 
            { text: 'API', link: '/klrkb/api/' }, 
            { text: 'TPB CEISA', link: '/klrkb/tpbceisa/' }, 
            { text: 'CDMS KB', link: '/klrkb/cdmskb/' }, 
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/klriuip': [
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
    { text: 'Pengenalan', link: '/pengenalan/klearance.html', activeMatch: '/pengenalan/klearance.html' },
    { text: 'Klearance KB', link: '/klrkb/', activeMatch: '/klrkb/' },
    { text: 'Klearance IU/IP', link: '/klriuip/', activeMatch: '/klriuip/' },
    { text: 'Klearance PLB', link: '/klrplb/', activeMatch: '/klrplb/' },
  ]
}

