import * as React from 'react'
import * as ReactDom from 'react-dom'
import {
  Outlet,
  ScriptOnce,
  createRootRouteWithContext,
  redirect,
  useMatches,
  useRouterState,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import appCss from '~/styles/app.css?url'
import carbonStyles from '~/styles/carbon.css?url'
import { seo } from '~/utils/seo'
import ogImage from '~/images/og.png'
import { TanStackRouterDevtoolsInProd } from '@tanstack/react-router-devtools'
import { NotFound } from '~/components/NotFound'
import { CgSpinner } from 'react-icons/cg'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { getThemeCookie, useThemeStore } from '~/components/ThemeToggle'
import { GoogleScripts } from '~/components/GoogleScripts'
import { BackgroundAnimation } from '~/components/BackgroundAnimation'
import { SearchProvider } from '~/contexts/SearchContext'
import { SearchModal } from '~/components/SearchModal'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title:
          'STZDev | Modern Web Development Solutions',
        description: `Professional web development solutions and tools for modern applications.`,
        image: `https://stzdev.com${ogImage}`,
        keywords:
          'stzdev,web development,react,modern web,software development,javascript,typescript'
      }),
      {
        name: 'google-adsense-account',
        content: 'ca-pub-9403278435468733',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'stylesheet',
        href: carbonStyles,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      },
    ],
    scripts: [
      // Google Tag Manager script
      {
        children: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5N57KQT4');
        `,
      },
    ],
  }),
  beforeLoad: async (ctx) => {
    if (
      ctx.location.href.match(/\/docs\/(react|vue|angular|svelte|solid)\//gm)
    ) {
      throw redirect({
        href: ctx.location.href.replace(
          /\/docs\/(react|vue|angular|svelte|solid)\//gm,
          '/docs/framework/$1/'
        ),
      })
    }
  },
  staleTime: Infinity,
  loader: async () => {
    return {
      themeCookie: await getThemeCookie(),
    }
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => {
    return (
      <RootDocument>
        <NotFound />
      </RootDocument>
    )
  },
  component: RootComponent,
})

function RootComponent() {
  return (
    <SearchProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </SearchProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { themeCookie } = Route.useLoaderData()
  
  // Initialize theme state synchronously
  useThemeStore.setState({ mode: themeCookie })
  
  // Set initial theme class
  const isDark = themeCookie === 'dark' || (themeCookie === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (typeof document !== 'undefined' && isDark) {
    document.documentElement.classList.add('dark')
  }

  const matches = useMatches()

  const isLoading = useRouterState({
    select: (s) => s.status === 'pending',
  })

  const [canShowLoading, setShowLoading] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(true)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const isRouterPage = useRouterState({
    select: (s) => s.resolvedLocation?.pathname.startsWith('/router'),
  })

  const showDevtools = canShowLoading && isRouterPage

  const [themeClass, setThemeClass] = React.useState('')

  React.useEffect(() => {
    const isDark = themeCookie === 'dark' || (themeCookie === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setThemeClass(isDark ? 'dark' : '')
  }, [themeCookie])

  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var theme = document.cookie.match(/theme=([^;]+)/)?.[1] || 'auto';
            var isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
            if (isDark) document.documentElement.classList.add('dark');
          })();
        `}} />
        <HeadContent />
        {matches.find((d) => d.staticData?.baseParent) ? (
          <base target="_parent" />
        ) : null}
        <GoogleScripts />
      </head>
      <body>
        <BackgroundAnimation />
        <React.Suspense fallback={null}>{children}</React.Suspense>
        {showDevtools ? (
          <TanStackRouterDevtoolsInProd position="bottom-right" />
        ) : null}
        {canShowLoading ? (
          <div
            className={`fixed top-0 left-0 h-[300px] w-full
        transition-all duration-300 pointer-events-none
        z-30 dark:h-[200px] dark:!bg-white/10 dark:rounded-[100%] ${
          isLoading
            ? 'delay-500 opacity-1 -translate-y-1/2'
            : 'delay-0 opacity-0 -translate-y-full'
        }`}
            style={{
              background: `radial-gradient(closest-side, rgba(0,10,40,0.2) 0%, rgba(0,0,0,0) 100%)`,
            }}
          >
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[30px] p-2 bg-white/80 dark:bg-gray-800
        rounded-lg shadow-lg`}
            >
              <CgSpinner className="text-3xl animate-spin" />
            </div>
          </div>
        ) : null}
        <SearchModal />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5N57KQT4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="gtm"
          ></iframe>
        </noscript>
        <Scripts />
      </body>
    </html>
  )
}
