import { Link } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'
import { Footer } from '~/components/Footer'
import { sample } from '~/utils/utils'
import { SITE_NAME } from '~/utils/constants'

import splashLightImg from '~/images/splash-light.png'
import splashDarkImg from '~/images/splash-dark.png'
import steveSteinitzImg from '~/images/people/stevesteinitz.png'

export const textColors = [
  `text-rose-500`,
  `text-yellow-500`,
  `text-teal-500`,
  `text-blue-500`,
]

export const gradients = [
  `from-rose-500 to-yellow-500`,
  `from-yellow-500 to-teal-500`,
  `from-teal-500 to-violet-500`,
  `from-blue-500 to-pink-500`,
]

const resources = [
  {
    name: 'AI-Agent Development Blog',
    cardStyles: `border-t-4 border-blue-500 hover:(border-cyan-500)`,
    href: '/blog',
    description: `In-depth articles about building AI agents with React, best practices, case studies, and the latest developments in AI-powered web applications.`,
  },
  {
    name: 'Free Email Consultation',
    cardStyles: `border-t-4 border-green-500 hover:(border-emerald-500)`,
    href: 'mailto:hello@stzdev.com',
    description: `Start a free consultation to discuss your AI-agent project. We'll explore your ideas and plan next steps.`,
  },
]

export const Route = createFileRoute(
  {
    loader: () => {
      return {
        randomNumber: Math.random(),
      }
    },
    component: Index,
  }
)

function Index() {
  const { randomNumber } = Route.useLoaderData()
  const gradient = sample(gradients, randomNumber)

  return (
    <>
      {/* <img
        src={waves}
        className="-bottom-[50px] -left-[10px] z-0 fixed opacity-20"
      />
      <img
        src={toyPalmChair}
        className="-bottom-[50px] -right-[100px] z-0 fixed opacity-20"
      /> */}
      <div className="max-w-full z-10 space-y-24">
        <div className="space-y-8">
          <div className="flex flex-col xl:flex-row items-center gap-4 xl:pt-24 xl:justify-center">
            <img
              src={splashLightImg}
              className="w-[300px] pt-8 xl:pt-0 xl:w-[400px] 2xl:w-[500px] dark:hidden"
              alt={`${SITE_NAME} Logo`}
            />
            <img
              src={splashDarkImg}
              className="w-[300px] pt-8 xl:pt-0 xl:w-[400px] 2xl:w-[500px] hidden dark:block"
              alt={`${SITE_NAME} Logo`}
            />
            <div className="flex flex-col items-center gap-6 text-center px-4 xl:text-left xl:items-start">
              <div className="flex gap-2 lg:gap-4 items-center">
                <h1
                  className={`inline-block
            font-black text-5xl
            md:text-6xl
            lg:text-8xl`}
                >
                  <span
                    className={`
            inline-block text-black dark:text-white
            mb-2 [letter-spacing:-.04em] pr-1.5
            `}
                  >
                    {SITE_NAME}
                  </span>
                </h1>
              </div>
              <h2
                className="font-bold text-2xl max-w-md
            md:text-4xl md:max-w-2xl
            2xl:text-5xl lg:max-w-2xl text-balance"
              >
                Building the future with{' '}
                <span className="underline decoration-dashed decoration-teal-500 decoration-3 underline-offset-4">
                  AI Agents
                </span>
              </h2>
              <p
                className="text opacity-90 max-w-sm
            lg:text-xl lg:max-w-2xl text-balance"
              >
                Expert React development services for companies creating
                intelligent, autonomous AI agents. From concept to production,
                we build scalable, type-safe solutions that work.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 lg:max-w-screen-lg md:mx-auto">
          <h3 className={`text-4xl font-light`}>AI-Agent Development Services</h3>

          <div className="mt-8">
            <h4 className={`text-2xl font-medium mb-6`}>
              Core Expertise
            </h4>
            {/* Service Cards */}
            <div
              className={`grid grid-cols-1 gap-6 gap-y-8 justify-center
                sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3`}
            >
              {[
                {
                  name: 'Complexity Spidey Sense',
                  tagline: 'Foreseeing Project Pitfalls',
                  description: 'An intuitive ability to detect and avoid technical debt and architectural complexity before it stalls development. Keeping projects "sober" and focused, even in the initial chaos of creation.',
                  color: 'text-blue-500',
                  bgColor: 'bg-blue-500/10',
                  borderColor: 'hover:border-blue-500'
                },
                {
                  name: 'Joyful Agentic Pairing',
                  tagline: 'Tireless Human-AI Collaboration',
                  description: 'A patient and enthusiastic partnership with AI development tools. I leverage the tireless nature of AI to solve stubborn challenges, turning the "mysterious" into the functional through persistent iteration.',
                  color: 'text-cyan-500',
                  bgColor: 'bg-cyan-500/10',
                  borderColor: 'hover:border-cyan-500'
                },
                {
                  name: 'Strategic System Architecture',
                  tagline: 'Building Enduring Foundations',
                  description: 'High-level visualization that transforms abstract AI concepts into robust, production-ready systems. I focus on creating the enduring structures that allow intelligent, autonomous agents to thrive.',
                  color: 'text-green-500',
                  bgColor: 'bg-green-500/10',
                  borderColor: 'hover:border-green-500'
                }
              ].map((service, i: number) => {
                return (
                  <div
                    key={service.name}
                    className={twMerge(
                      `border-2 border-transparent rounded-xl shadow-md p-8 transition-all duration-300
                      bg-white/90 dark:bg-black/40 backdrop-blur-sm
                      dark:border-gray-800/50`,
                      'hover:shadow-lg',
                      'relative overflow-hidden group',
                      'min-h-[250px] xl:min-h-[220px]',
                      service.borderColor
                    )}
                    style={{
                      zIndex: i,
                    }}
                  >
                    {/* Background content that will blur on hover */}
                    <div className="z-0 relative group-hover:blur-[0.5px] transition-[filter] duration-200">
                      <div className="flex gap-2 justify-between items-center">
                        <div
                          className={twMerge(
                            `flex items-start gap-2 text-[1.2rem] font-extrabold [letter-spacing:-.04em] leading-[1.1]`,
                            service.color
                          )}
                        >
                          <span className={twMerge("mt-1 rounded-lg leading-none flex items-center shrink-0", service.bgColor)}>
                            <span className="font-black text-xs leading-none p-1.5 px-2 text-current">
                              STZ
                            </span>
                          </span>
                          <div className="flex flex-col">
                            {service.name.split(' ').map((word, i) => (
                              <span key={i} className="text-current block">
                                {word}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className={twMerge(`text-sm italic font-medium mt-3`, service.color)}
                      >
                        {service.tagline}
                      </div>

                      {/* Description preview with ellipsis */}
                      <div
                        className={`text-sm mt-3 text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed`}
                      >
                        {service.description}
                      </div>
                    </div>

                    {/* Foreground content that appears on hover */}
                    <div
                      className="absolute inset-0 z-30 bg-white/95 dark:bg-black/95 p-6
                          backdrop-blur-sm flex flex-col justify-center opacity-0 group-hover:opacity-100
                          transition-opacity duration-300"
                    >
                      <div
                        className={`text-sm text-gray-800 dark:text-gray-200 leading-relaxed`}
                      >
                        {service.description}
                      </div>
                      <div className="mt-6 text-center">
                        <span
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/10 
                              rounded-full text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Learn more about this service
                          <svg
                            className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className={`lg:max-w-screen-lg px-4 mx-auto`}>
          <h3 className={`text-4xl font-light mb-6`}>Resources & Contact</h3>
          <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-4`}>
            {resources.map((resource) => (
              <Link
                key={resource.name}
                to={resource.href.startsWith('/') ? resource.href : undefined}
                href={resource.href.startsWith('mailto:') ? resource.href : undefined}
                className={`flex gap-2 justify-between border-2 border-transparent rounded-lg p-4 md:p-8
              transition-all bg-white/90 dark:bg-black/40
              shadow-xl shadow-blue-700/10 dark:shadow-blue-500/30
              hover:border-blue-500
              `}
                target={resource.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={resource.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <div
                  className={`col-span-2
                    md:col-span-5`}
                >
                  <div className={`text-2xl font-bold text-blue-500`}>
                    {resource.name}
                  </div>
                  <div className={`text-sm mt-2`}>{resource.description}</div>
                  <div
                    className={`inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow uppercase font-black text-sm`}
                  >
                    {resource.href.startsWith('mailto:') ? 'Get in touch →' : 'Explore →'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="px-4 lg:max-w-screen-lg md:mx-auto">
          <h3 className={`text-4xl font-light mb-6`}>Why Choose {SITE_NAME}?</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Project Visualization</h4>
              <p className="text-gray-600 dark:text-gray-400">A "crystal ball" for potential issues, identifying architectural obstacles before they become blockers.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Tireless Patience</h4>
              <p className="text-gray-600 dark:text-gray-400">Deep, focused persistence combined with a patient, enthusiastic approach to solving complex problems.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.613.306a4 4 0 01-1.898.47 4 4 0 01-1.898-.47l-.613-.306a6 6 0 00-3.86-.517l-2.388.477a2 2 0 00-1.022.547V18a2 2 0 002 2h11a2 2 0 002-2v-2.572z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11l-3 3m0 0l-3-3m3 3V8" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Complexity Avoidance</h4>
              <p className="text-gray-600 dark:text-gray-400">Expertly distinguishing between essential and accidental complexity to keep your system clean and maintainable.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="px-4 py-12 mx-auto max-w-screen-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Meet the Founder
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Experienced developer passionate about AI Agents and modern web tools
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 max-w-md border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-500/20 shadow-lg">
                      <img
                        alt={`Avatar of Steve Steinitz`}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        src={steveSteinitzImg}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Steve Steinitz
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    Founder & Lead Developer
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    Helping companies build AI-powered applications using React, TanStack, and modern web tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mx-auto max-w-screen-lg">
          <div
            className={`
          rounded-md p-4 grid gap-6
          bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden relative
          shadow-xl shadow-blue-700/30
          sm:p-8 sm:grid-cols-3 items-center`}
          >
            <div
              className={`absolute transform opacity-10 z-0
            right-0 top-0 -translate-y-1/3 translate-x-1/3
            sm:opacity-20`}
            >
              <svg width={300} height={300} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div className={`sm:col-span-2`}>
              <h3 className={`text-3xl`}>Ready to Build Your AI Agent?</h3>
              <p className={`mt-4`}>
                Let's discuss your project requirements and explore how we can help you build
                a powerful, scalable AI agent solution. From initial concept to production deployment.
              </p>
            </div>
            <div className={`flex items-center justify-center`}>
              <a
                href="mailto:hello@stzdev.com"
                className={`block w-full mt-4 px-4 py-2 bg-white text-blue-600
                text-center rounded shadow-lg z-10 uppercase font-black hover:bg-gray-100 transition-colors`}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
        <div className="h-4" />


        <div className={`h-20`} />
        <Footer />
      </div>
    </>
  )
}
