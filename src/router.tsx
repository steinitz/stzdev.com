import { createRouter as TanStackCreateRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary'
import { NotFound } from './components/NotFound'
import { QueryClient } from '@tanstack/react-query'

export function createRouter() {
  const queryClient: QueryClient = new QueryClient()

  const router = routerWithQueryClient(
    TanStackCreateRouter({
      routeTree,
      defaultPreload: 'intent',
      defaultErrorComponent: DefaultCatchBoundary,
      scrollRestoration: true,
      defaultStaleTime: 1,
      defaultNotFoundComponent: () => {
        return <NotFound />
      },
      context: {
        queryClient,
      },
      Wrap: ({ children }) => children,
    }),
    queryClient
  )

  router.subscribe('onResolved', () => {
    try {
      ;(window as any)._carbonads?.refresh?.()
      document.querySelectorAll('[id^="carbonads_"]').forEach((el, i) => {
        if (i > 0) {
          el.remove()
        }
      })
    } catch {}
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
  interface StaticDataRouteOption {
    baseParent?: boolean
  }
}
