import * as React from 'react'
import { Link, Outlet, useLocation } from '@tanstack/react-router'
import { CgClose, CgMenuLeft, CgMusicSpeaker } from 'react-icons/cg'
import { MdLibraryBooks, MdLineAxis, MdSupport, MdEmail } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'
import { sortBy } from '~/utils/utils'
import logoColor100w from '~/images/logo-color-100w.png'
import {
  FaDiscord,
  FaGithub,
  FaTshirt,
  FaUsers,
} from 'react-icons/fa'
import { getSponsorsForSponsorPack } from '~/server/sponsors'
import { libraries } from '~/libraries'
import { Scarf } from '~/components/Scarf'
import { ThemeToggle, useThemeStore } from '~/components/ThemeToggle'
import { TbBrandLinkedin } from 'react-icons/tb'
import { BiSolidCheckShield } from 'react-icons/bi'
import { SearchButton } from '~/components/SearchButton'

export const Route = createFileRoute({
  staleTime: Infinity,
  loader: async (ctx) => {
    return {
      sponsorsPromise: getSponsorsForSponsorPack(),
    }
  },
  component: LibrariesLayout,
})

function LibrariesLayout() {
  const activeLibrary = useLocation({
    select: (location) => {
      return libraries.find((library) => {
        return location.pathname.startsWith(library.to!)
      })
    },
  })

  const detailsRef = React.useRef<HTMLElement>(null!)
  const linkClasses = `flex items-center justify-between group px-2 py-1 rounded-lg hover:bg-gray-500 hover:bg-opacity-10 font-black`

  // Preferred Tools section
  const preferredTools = [
    { label: 'React', colorClass: '' },
    { label: 'TanStack Start', to: '/start', external: false }, // where does it get the colored title, TanStack Start?
    { label: 'TanStack Router', to: '/router', external: false },
    { label: 'TanStack Query', to: '/query', external: false },
    { label: 'AI Agent', colorClass: '' },
    { label: 'GenSX', to: 'https://github.com/gensx-inc/gensx', external: true, colorClass: 'text-emerald-500 dark:text-emerald-400' },
    { label: 'Authentication' },
    { label: 'Better Auth', to: 'https://www.better-auth.com', external: true, colorClass: 'text-orange-500 dark:text-orange-400' },
  ]

  const items = (
    <>
      {/* Preferred Tools Section */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wider px-2 mb-2">
          Preferred Tools
        </h3>
        {preferredTools.map((tool, i) => {
          if (!tool.to) {
            return (
              <p
                key={i}
                className={twMerge(linkClasses, 'font-normal')}
              >
                <div className="flex items-center gap-2">
                  <div className={tool.colorClass || ''}>{tool.label}</div>
                </div>
              </p>
            )
          }
          else if (tool.external) {
            return (
              <a
                key={i}
                href={tool.to}
                target="_blank"
                rel="noopener noreferrer"
                className={twMerge(linkClasses, 'font-normal')}
              >
                <div className="flex items-center gap-2">
                  <div className={tool.colorClass || ''}>{tool.label}</div>
                </div>
              </a>
            )
          } else {
            // Find matching library for internal links
            const matchingLibrary = libraries.find(lib => lib.to === tool.to)
            if (matchingLibrary) {
              const [prefix, name] = matchingLibrary.name.split(' ')
              return (
                <Link
                  key={i}
                  to={tool.to}
                  onClick={() => {
                    detailsRef.current.removeAttribute('open')
                  }}
                >
                  {(props) => {
                    return (
                      <div
                        className={twMerge(
                          linkClasses,
                          'font-normal',
                          props.isActive
                            ? 'bg-gray-500/10 dark:bg-gray-500/30 font-bold'
                            : ''
                        )}
                      >
                        <span>
                          <span className="font-light dark:font-bold dark:opacity-40">
                            {prefix}
                          </span>{' '}
                          <span className={matchingLibrary.textStyle}>{name}</span>
                        </span>
                        {matchingLibrary.badge ? (
                          <span
                            className={twMerge(
                              `px-2 py-px font-black bg-gray-500/10 dark:bg-gray-500/20 rounded-full text-[.7rem] group-hover:opacity-100 transition-opacity text-white animate-pulse`,
                              matchingLibrary.textStyle
                            )}
                          >
                            {matchingLibrary.badge}
                          </span>
                        ) : null}
                      </div>
                    )
                  }}
                </Link>
              )
            } else {
              return (
                <Link
                  key={i}
                  to={tool.to}
                  className={twMerge(linkClasses, 'font-normal')}
                >
                  <div className="flex items-center gap-2">
                    <div>{tool.label}</div>
                  </div>
                </Link>
              )
            }
          }
        })}
      </div>

      {/* Streamlined bottom navigation */}
      {[
        {
          label: 'Contact',
          icon: <MdEmail />,
          to: 'mailto:hello@stzdev.com',
        },
        {
          label: 'Blog',
          icon: <CgMusicSpeaker />,
          to: '/blog',
        },
        {
          label: 'GitHub',
          icon: <FaGithub />,
          to: 'https://github.com/stzdev',
        },
        {
          label: 'Ethos',
          icon: <BiSolidCheckShield />,
          to: '/ethos',
        },
      ].map((item, i) => {
        return (
          <Link
            to={item.to}
            key={i}
            className={twMerge(linkClasses, 'font-normal')}
            activeProps={{
              className: twMerge(
                '!font-bold bg-gray-500/10 dark:bg-gray-500/30'
              ),
            }}
            target={item.to.startsWith('http') ? '_blank' : undefined}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4 justify-between">
                {item.icon}
              </div>
              <div>{item.label}</div>
            </div>
          </Link>
        )
      })}
    </>
  )

  const logo = (
    <div className="flex-1 flex items-center gap-4 justify-between">
      <Link to="/" className={twMerge(`flex items-center gap-1.5`)}>
        <img
          src={logoColor100w}
          alt=""
          className="w-[30px] rounded-full overflow-hidden border-2 border-black dark:border-none"
        />
        <div className="font-black text-xl">STZ Dev</div>
      </Link>
      <div className="flex items-center gap-1">
        <a
          href="https://linkedin.com/company/stzdev"
          className="opacity-70 hover:opacity-100"
        >
          <TbBrandLinkedin className="text-xl" />
        </a>
        <a
          href="mailto:hello@stzdev.com"
          className="opacity-70 hover:opacity-100"
        >
          <MdEmail className="text-xl" />
        </a>
      </div>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  )

  const smallMenu = (
    <div className="lg:hidden bg-white/50 dark:bg-black/60 sticky top-0 z-20 backdrop-blur-[20px]">
      <details
        ref={detailsRef as any}
        id="docs-details"
        className="border-b border-gray-500 border-opacity-20"
      >
        <summary className="p-4 flex gap-2 items-center justify-between">
          <div className="flex-1 flex gap-2 items-center text-xl md:text-2xl">
            <CgMenuLeft className="icon-open mr-2 cursor-pointer" />
            <CgClose className="icon-close mr-2 cursor-pointer" />
            {logo}
          </div>
        </summary>
        <div
          className="flex flex-col gap-4 whitespace-nowrap h-[0vh] overflow-y-auto
          border-t border-gray-500 border-opacity-20 text-lg bg-white/80 dark:bg-black/20"
        >
          <div className="p-2 pb-0">
            <SearchButton />
          </div>
          <div className="space-y-px text-sm p-2">
            {items}
          </div>
        </div>
      </details>
    </div>
  )

  const largeMenu = (
    <>
      <div className="min-w-[250px] hidden lg:flex flex-col h-screen sticky top-0 z-20 bg-white/50 dark:bg-black/30 shadow-xl dark:border-r border-gray-500/20">
        <div className="p-4 flex gap-2 items-center text-2xl border-b border-gray-500/10 dark:border-gray-500/20">
          {logo}
        </div>
        <div className="p-2">
          <SearchButton />
        </div>
        <div className="flex-1 flex flex-col gap-4 whitespace-nowrap overflow-y-auto text-base pb-[50px]">
          <div className="space-y-1 text-sm p-2">
            {items}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div
      className={`min-h-screen flex flex-col min-w-0 lg:flex-row w-full transition-all duration-300`}
    >
      {smallMenu}
      {largeMenu}
      <div className="flex flex-1 min-h-0 relative justify-center overflow-x-hidden">
        <Outlet />
      </div>
      {activeLibrary && 'scarfId' in activeLibrary && activeLibrary.scarfId ? <Scarf id={activeLibrary.scarfId} /> : null}
    </div>
  )
}
