function CategoryCard({ category }) {
  const hasExternalLinks = Boolean(category.links?.length)
  const photoCount = category.photos?.length ?? 0
  const firstPhoto = category.photos?.[0]
  const firstLink = category.links?.[0]
  const fallbackThumbnail = firstLink?.url
    ? `https://www.google.com/s2/favicons?domain=${new URL(firstLink.url).hostname}&sz=256`
    : ''
  const cardImage = firstPhoto?.image || firstLink?.thumbnail || fallbackThumbnail
  const cardAlt = firstPhoto?.alt || category.name
  const countLabel = hasExternalLinks ? `${firstLink ? category.links.length : 0} links` : `${String(photoCount).padStart(2, '0')} photos`

  return (
    <a
      className="group flex min-w-0 items-stretch gap-3 rounded-xl border border-line/80 bg-surface/75 p-2 text-inherit no-underline shadow-[0_3px_12px_rgba(17,24,39,0.035)] transition duration-200 hover:-translate-y-0.5 hover:border-coral hover:bg-surface-hover hover:shadow-[0_9px_22px_rgba(17,24,39,0.09)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
      href={`/category/${encodeURIComponent(category.slug)}`}
      target={hasExternalLinks ? '_blank' : undefined}
      rel={hasExternalLinks ? 'noopener noreferrer' : undefined}
    >
      <div className="relative size-[88px] shrink-0 self-center overflow-hidden rounded-lg bg-leaf max-[620px]:size-[78px]">
        {cardImage ? (
          <img className="block size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none" src={cardImage} alt={cardAlt} loading="lazy" />
        ) : (
          <div className="grid size-full place-items-center bg-leaf text-center text-[10px] uppercase tracking-[0.2em] text-muted">No image</div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-between gap-2 py-1 pr-1">
        <div className="min-w-0">
          <h3 className="mb-1 break-words font-heading text-lg leading-tight font-normal text-ink">{category.name}</h3>
          {category.description && <p className="m-0 text-[11px] leading-[1.45] text-muted">{category.description}</p>}
          <span className="mt-1.5 inline-flex rounded-full bg-surface-hover px-2 py-0.5 text-[9px] font-semibold text-muted">{hasExternalLinks ? 'External links' : 'Photo collection'}</span>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-1">
          <span className="grid size-7 place-items-center rounded-full border border-line text-sm text-coral transition-colors duration-150 group-hover:border-[#111827] group-hover:bg-[#111827] group-hover:text-white motion-reduce:transition-none" aria-hidden="true">↗</span>
          <span className="text-[9px] font-medium text-muted">{countLabel}</span>
        </div>
      </div>
    </a>
  )
}

export default CategoryCard
