import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'en-US',
  title: 'Klearance Online',
  description: 'Aplikasi Pelaporan Bea Cukai',
  lastUpdated: true,
  themeConfig: {
    logo: '/klearancelogo.png',
    siteTitle: false,
    nav: nav(),
    sidebar: {
      '/Overview/': [
        {
          text: 'overview',
          items: [
            { text: 'Klearance', link: '/overview/klearance' }, 
            { text: 'Langkah Awal', link: '/overview/langkahawal' }, 
            { text: 'Arsitektur', link: '/overview/arsitektur' }, 
          ]
        },
        {
          text: 'Administrasi',
          items: [
            { text: 'User', link: '/overview/user' }, 
            { text: 'Group', link: '/overview/group' }, 
            { text: 'Format Dokumen', link: '/overview/formatdokumen' }, 
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
    { text: 'overview', link: '/overview/klearance.html', activeMatch: '/overview/klearance.html' },
    { text: 'Klearance KB', link: '/klrkb/', activeMatch: '/klrkb/' },
    { text: 'Klearance IU/IP', link: '/klriuip/', activeMatch: '/klriuip/' },
    { text: 'Klearance PLB', link: '/klrplb/', activeMatch: '/klrplb/' },
  ]
}

