function SiteFooter({ isCategoryPage }) {
  return (
    <footer className="flex min-h-[91px] items-center justify-between gap-4 border-t border-line max-[620px]:flex-wrap max-[620px]:py-5" id="about">
      <span className="font-heading text-[25px] font-bold text-ink" aria-hidden="true">PG<span className="text-coral">.</span></span>
      <p className="font-heading text-base text-muted italic max-[620px]:order-3 max-[620px]:w-full max-[620px]:text-center max-[620px]:text-sm">Explore more. Find your next favorite.</p>
      <a className="text-[11px] font-semibold text-ink no-underline" href={isCategoryPage ? '/' : '#home'} aria-label={isCategoryPage ? 'Explore all categories' : 'Back to top'}>
        {isCategoryPage ? 'Explore categories' : 'Back to top'} <span className="ml-[6px] text-coral" aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}

export default SiteFooter
