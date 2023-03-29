import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'id-ID',
  title: 'Klearance Online',
  description: 'Aplikasi Pelaporan Bea Cukai',
  head: [['link', { rel: "shortcut icon", href: "/favico.ico" }]],
  editLink: {
    pattern: 'https://github.com/fxpatrick/vite-klop/edit/main/docs/:path'
  },
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
    logo: '/klearancelogo.svg',
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
          text: 'Master',
          items: [
            { text: 'Barang', link: '/overview/barang' },
            { text: 'Dokumen Wajib Vendor', link: '/overview/dokumenwajibvendor' },
            { text: 'PO Exception', link: '/overview/poexception' },
          ]
        },
        {
          text: 'Administrasi',
          items: [
            { text: 'User', link: '/overview/user' },
            { text: 'Group', link: '/overview/langkahawal.html#group-akses' },
            { text: 'Format Dokumen', link: '/overview/formatdokumen' },
            { text: 'Import Mapping', link: '/overview/importmapping' },
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
          text: 'Panduan Awal',
          items: [
            { text: 'Panduan Awal', link: '/klrkb/panduanawal/panduanawal' },
            { text: 'FAQs', link: '/klrkb/panduanawal/faqs' },
          ]
        },
        {
          text: 'Lainnya',
          items: [
            { text: '2 Faktor Autentikasi', link: '/klrkb/2fa' },
            { text: 'Lupa Password', link: '/klrkb/lainnya/forgotpassword' },
            { text: 'Mengundang User', link: '/klrkb/lainnya/inviteuser' },
            { text: 'Mengundang Vendor', link: '/klrkb/lainnya/mengundangvendor' }
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
            { text: 'User Eksternal', link: '/klriuip/usereksternal/' },
            { text: 'Purchase Order', link: '/klriuip/purchaseorder/' },
            { text: 'Shipment', link: '/klriuip/shipment/' },
            { text: 'Pembuatan Dokumen PIB', link: '/klriuip/pib/' },
            { text: 'Pembuatan Dokumen PEB', link: '/klriuip/peb/' },
          ]
        },
        {
          text: 'Dokumen',
          items: [
            { text: 'Internal', link: '/klriuip/dokumeninternal/' },
            { text: 'Eksternal', link: '/klriuip/dokumeneksternal/' },
          ]
        },
        {
          text: 'Integrasi',
          items: [
            { text: 'Sync Client', link: '/klriuip/syncclient/' },
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
    { text: 'Klearance KB', link: '/klrkb/panduanawal/panduanawal', activeMatch: '/klrkb' },
    { text: 'Klearance IU/IP', link: '/klriuip/mengundangvendoriuip/', activeMatch: '/klriuip' },
    { text: 'Term of Services', link: '/legal/tos', activeMatch: '/legal/tos' },
  ]
}

