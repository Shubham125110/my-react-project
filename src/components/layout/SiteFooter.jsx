function SiteFooter({ isCategoryPage }) {
  return (
    <footer className="flex min-h-[90px] items-center justify-between gap-6 border-t border-line py-5">
      <span className="grid size-[31px] shrink-0 place-items-center rounded-full bg-[#8ab4ff] font-sans text-[12px] font-bold text-[#111827]" aria-hidden="true">PG</span>
      <a className="hidden flex-1 items-center justify-center text-xs font-semibold text-[#111827] no-underline max-[620px]:inline-flex" href="/contact" aria-label="Contact us">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#8ab4ff] px-4 py-2.5 shadow-[0_4px_12px_rgba(138,180,255,0.2)] transition-transform hover:-translate-y-0.5">
          Contact us <span className="text-[15px]" aria-hidden="true">↗</span>
        </span>
      </a>
      <a className="shrink-0 text-[11px] font-semibold text-ink no-underline" href={isCategoryPage ? '/' : '#home'} aria-label={isCategoryPage ? 'Explore all categories' : 'Back to top'}>
        {isCategoryPage ? 'Explore categories' : 'Back to top'} <span className="ml-[6px] text-coral" aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}

export default SiteFooter
