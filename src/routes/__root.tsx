import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { PromoPopup } from '../components/PromoPopup'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Solara Cleaning Services | A Cleaner Home, A Brighter Day' },
      { name: 'description', content: 'Solara Cleaning Services keeps homes fresh in Pinellas County. Choose recurring, deep, or move-out cleaning and get a free quote.' },
      { name: 'theme-color', content: '#0f4c34' },
      { property: 'og:site_name', content: 'Solara Cleaning Services' },
      { property: 'og:image', content: 'https://solaracleaningfl.com/images/solara-search-logo.png' },
      { property: 'og:image:url', content: 'https://solaracleaningfl.com/images/solara-search-logo.png' },
      { property: 'og:image:secure_url', content: 'https://solaracleaningfl.com/images/solara-search-logo.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1254' },
      { property: 'og:image:height', content: '1254' },
      { property: 'og:image:alt', content: 'Solara Cleaning Services' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Solara Cleaning Services' },
      { name: 'twitter:image', content: 'https://solaracleaningfl.com/images/solara-search-logo.png' },
      { name: 'twitter:image:alt', content: 'Solara Cleaning Services' },
    ],
    links: [
      { rel: 'icon', href: '/images/solara-search-logo.png', type: 'image/png', sizes: '1254x1254' },
      { rel: 'shortcut icon', href: '/images/solara-search-logo.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&family=Yellowtail&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<PromoPopup /><Scripts /></body>
    </html>
  )
}
