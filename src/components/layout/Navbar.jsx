function Navbar({ activeSection, isCategoryPage, isContactPage }) {
  const links = [
    { label: 'Discover', section: 'discover', homeHref: '#discover' },
    { label: 'Categories', section: 'categories', homeHref: '#categories' },
    { label: 'Contact us', section: 'contact', homeHref: '#contact' },
  ]
  const linkHref = (section, homeHref) => {
    if (section === 'contact') return '/contact'
    return isCategoryPage || isContactPage ? `/${homeHref}` : homeHref
  }
  const actionHref = isCategoryPage || isContactPage ? '/#categories' : '#categories'

  return (
    <header className="flex min-h-[82px] animate-fade-in items-center justify-between rounded-b-2xl bg-[#111827] px-6 text-paper shadow-[0_8px_24px_rgba(17,24,39,0.12)] max-[620px]:min-h-[68px] max-[620px]:px-3">
      <a className="inline-flex items-center gap-[9px] font-heading text-[23px] text-paper no-underline max-[620px]:gap-[7px] max-[620px]:text-lg" href="/" aria-label="Porn Galaxy">
        <span className="grid size-[31px] place-items-center rounded-full bg-[#8ab4ff] font-sans text-[12px] font-bold text-[#111827] max-[620px]:size-[27px]" aria-hidden="true">PG</span>
        Porn Galaxy
      </a>
      <nav className="flex h-[82px] items-center gap-[39px] max-[620px]:h-[68px] max-[620px]:gap-[17px]" aria-label="Main navigation">
        {links.map(({ label, section, homeHref }) => {
          const isActive = activeSection === section
          return (
            <a
              className={`relative text-[13px] font-medium no-underline max-[620px]:text-[11px] ${isActive ? 'text-[#8ab4ff] after:absolute after:-bottom-[12px] after:left-0 after:right-0 after:h-[3px] after:rounded-full after:bg-[#8ab4ff]' : 'text-paper/75 transition-colors duration-150 hover:text-[#8ab4ff]'} ${section !== 'discover' ? 'max-[620px]:hidden' : ''}`}
              href={linkHref(section, homeHref)}
              key={section}
            >
              {label}
            </a>
          )
        })}
      </nav>
      <a className="inline-flex items-center gap-2 rounded-full bg-[#8ab4ff] px-4 py-2.5 text-xs font-semibold text-[#111827] no-underline transition-transform hover:-translate-y-0.5 max-[620px]:px-3 max-[620px]:py-2 max-[620px]:text-[10px]" href={actionHref}>
        {isCategoryPage ? 'All categories' : 'Explore'} <span className="text-[15px]" aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navbar
