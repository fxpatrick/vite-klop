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
      '/pengenalan/': [
        {
          text: 'Pengenalan',
          items: [
            { text: 'Klearance', link: '/pengenalan/klearance' }, 
            { text: 'Langkah Awal', link: '/pengenalan/langkahawal' }, 
            { text: 'Arsitektur', link: '/pengenalan/arsitektur' }, 
          ]
        },
        {
          text: 'Administrasi',
          items: [
            { text: 'User', link: '/pengenalan/user' }, 
            { text: 'Group', link: '/pengenalan/group' }, 
            { text: 'Format Dokumen', link: '/pengenalan/formatdokumen' }, 
          ]
        }
      ],
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

      '/klriuip': [
        {
          text: 'Config',
          items: [
            { text: 'this is home', link: '/config/' }, 
            { text: 'Three', link: '/config/three' }, 
            { text: 'Four', link: '/config/four' } 
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

