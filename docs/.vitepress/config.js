import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'en-US',
  title: 'Klearance One Portal',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    sidebar: sidebarGuide(),
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Pengenalan',
      collapsible: true,
      items: [
        { text: 'Langkah Awal', link: '/pengenalan/langkahawal' },
        { text: 'Langkah Awal', link: '/pengenalan/langkahawal' },
        { text: 'Langkah Awal', link: '/pengenalan/langkahawal' },
        { text: 'Langkah Awal', link: '/pengenalan/langkahawal' },
        { text: 'Langkah Awal', link: '/pengenalan/langkahawal' },
      ]
    }
  ]
}