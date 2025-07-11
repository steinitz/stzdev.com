import { Link } from '@tanstack/react-router'

const footerLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: 'mailto:hello@stzdev.com' },
  { label: 'LinkedIn', to: 'https://linkedin.com/company/steinitz' },
  { label: 'GitHub', to: 'https://github.com/steinitz' },
  {
    label: 'Privacy Policy',
    to: '/privacy',
  },
  {
    label: 'Terms of Service',
    to: '/terms',
  },
]

export function Footer() {
  return (
    <div
      className={`flex flex-col items-start justify-center gap-4 p-8
      max-w-screen-lg mx-auto text-sm
      bg-white dark:bg-black/40 shadow-xl shadow-black/10 rounded-t-lg`}
    >
      <div className={`grid gap-1 sm:grid-cols-2 md:grid-cols-3`}>
        {footerLinks.map((item) => (
          <div key={item.to}>
            {item.to.startsWith('http') ? (
              <a href={item.to} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </div>
        ))}
      </div>
      <div className={`text-center opacity-20`}>
        &copy; {new Date().getFullYear()} STZ Dev
      </div>
    </div>
  )
}
