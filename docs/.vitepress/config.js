import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'id-ID',
  title: 'Klearance Online',
  description: 'Aplikasi Pelaporan Bea Cukai',
  head:[['link', { rel: "shortcut icon", href: "/klearancelogo.ico"}]],

  lastUpdated: true,
  locales: {
    '/': {
      lang: 'id-ID',
      selectText: 'Bahasa Indonesia'
    },
    '/en/': {
      lang: 'en-US',
      selectText: 'English'
    }
  },
  themeConfig: {
    logo: '/klearancelogo.png',
    siteTitle: false,
        localeLinks: {
      text: '',
      items: [
        { text: 'English', link: '/en/' },
        { text: 'Bahasa Indonesia', link: '/' }
      ]
    },
    algolia: {
      appId: '5CBKKTFX9W',
      apiKey: '648c192fb368017ea778d310f0bc2663',
      indexName: 'klearance-wiki'
    },
    nav: nav(),
    sidebar: {
      '/overview/': [
        {
          text: 'Overview',
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
            { text: 'Import Mapping', link: '/overview/importmapping' }, 
            { text: 'Dokumen Wajib Vendor', link: '/overview/dokumenwajibvendor' }, 
          ]
        },
        {
          text: 'Integrasi',
          items: [
            { text: 'API', link: '/overview/api' }, 
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
            { text: 'PIB', link: '/klriuip/pib/' }, 
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
    { text: 'Overview', link: '/overview/klearance', activeMatch: '/overview/klearance' },
    { text: 'Klearance KB', link: '/klrkb/mengundangvendorkb/', activeMatch: '/klrkb' },
    { text: 'Klearance IU/IP', link: '/klriuip/mengundangvendoriuip/', activeMatch: '/klriuip' },
    { text: 'Term of Services', link: '/legal/tos', activeMatch: '/legal/tos' },
  ]
}

