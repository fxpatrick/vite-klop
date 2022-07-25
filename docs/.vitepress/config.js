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
      '/overview/': [
        {
          text: 'overview',
          items: [
            { text: 'Klearance', link: '/overview/klearance' }, 
            { text: 'Arsitektur', link: '/overview/arsitektur' }, 
            { text: 'Langkah Awal', link: '/overview/langkahawal' }, 
          ]
        },
        {
          text: 'Administrasi',
          items: [
            { text: 'User', link: '/overview/user' }, 
            { text: 'Group', link: '/overview/langkahawal.html#group-akses' }, 
            { text: 'Format Dokumen', link: '/overview/formatdokumen' }, 
            { text: 'Import Mapping', link: '/klrkb/cdmskb/' }, 
          ]
        }
      ],
      '/klrkb/': [
        {
          text: 'Langkah Awal',
          items: [
            { text: 'Mengundang Vendor', link: '/klrkb/mengundangvendorkb/' }, 
          ]
        },
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
          text: 'Langkah Awal',
          items: [
            { text: 'Mengundang Vendor', link: '/klriuip/mengundangvendoriuip/' }, 
            { text: 'Eksternal', link: '/klriuip/usereksternal/' }, 
          ]
        },
        {
          text: 'Dokumen',
          items: [
            { text: 'Kepabeanan', link: '/klriuip/dokumenbc/' }, 
            { text: 'Internal', link: '/klriuip/dokumeninternal/' }, 
            { text: 'Eksternal', link: '/klriuip/dokumeneksternal/' }, 
          ]
        },
        {
          text: 'Integrasi',
          items: [
            { text: 'Sync Client', link: '/klriuip/syncclient/' }, 
            { text: 'API', link: '/klriuip/api/' }, 
            { text: 'PIB', link: '/klriuip/tpbceisa/' }, 
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

