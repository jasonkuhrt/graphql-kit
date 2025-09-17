import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'GraphQL Kit',
  description: 'GraphQL toolkit with Effect-based utilities',
  base: '/graphql-kit/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/grafaid' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'Core Modules',
          items: [
            { text: 'Grafaid', link: '/api/grafaid' },
            { text: 'Schema', link: '/api/schema' },
            { text: 'Catalog', link: '/api/catalog' },
            { text: 'Change', link: '/api/change' },
            { text: 'Version', link: '/api/version' },
            { text: 'Revision', link: '/api/revision' }
          ]
        },
        {
          text: 'Utilities',
          items: [
            { text: 'GraphQL Error', link: '/api/graphql-error' },
            { text: 'GraphQL Schema Loader', link: '/api/graphql-schema-loader' },
            { text: 'GraphQL Schema Path', link: '/api/graphql-schema-path' },
            { text: 'Schema Definition', link: '/api/schema-definition' },
            { text: 'Date Only', link: '/api/date-only' },
            { text: 'Version Coverage', link: '/api/version-coverage' },
            { text: 'Lifecycles', link: '/api/lifecycles' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jasonkuhrt/graphql-kit' }
    ],

    search: {
      provider: 'local'
    }
  }
})