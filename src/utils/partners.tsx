import { Link } from '@tanstack/react-router'
import agGridDarkSvg from '~/images/ag-grid-dark.svg'
import agGridLightSvg from '~/images/ag-grid-light.svg'
import nozzleImage from '~/images/nozzle.png'
import nozzleDarkSvg from '~/images/nozzle-dark.svg'
import nozzleLightSvg from '~/images/nozzle-light.svg'
import bytesUidotdevImage from '~/images/bytes-uidotdev.png'
// import vercelLightSvg from '~/images/vercel-light.svg'
// import vercelDarkSvg from '~/images/vercel-dark.svg'
import netlifyLightSvg from '~/images/netlify-light.svg'
import netlifyDarkSvg from '~/images/netlify-dark.svg'

import clerkLightSvg from '~/images/clerk-logo-light.svg'
import clerkDarkSvg from '~/images/clerk-logo-dark.svg'

import speakeasyLightSvg from '~/images/speakeasy-light.svg'
import speakeasyDarkSvg from '~/images/speakeasy-dark.svg'
import neonLightSvg from '~/images/neon-light.svg'
import neonDarkSvg from '~/images/neon-dark.svg'
import unkeyBlackSvg from '~/images/unkey-black.svg'
import unkeyWhiteSvg from '~/images/unkey-white.svg'
import electricDarkSvg from '~/images/electric-dark.svg'
import electricLightSvg from '~/images/electric-light.svg'
import { Library } from '~/libraries'

type Partner = {
  name: string
  id: string
  libraries?: Library['id'][]
  sidebarImgLight?: string
  sidebarImgDark?: string
  href: string
  homepageImg: JSX.Element
  content: JSX.Element
  sidebarImgClass?: string
}

export const partners: Partner[] = []
