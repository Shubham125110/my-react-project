import PhotoGallery from '../components/categories/PhotoGallery.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'

function CategoryPage({ category }) {
  const links = category?.links?.filter((link) => link?.url)

  return (
    <PageLayout activeSection="categories" isCategoryPage>
      <main>
        {category ? (
          <>
            <section className="mt-8 min-h-[220px] animate-[rise-in_600ms_ease_both] rounded-[28px] bg-[#111827] px-10 py-6 text-paper shadow-[0_20px_50px_rgba(17,24,39,0.12)] max-[620px]:mt-5 max-[620px]:min-h-0 max-[620px]:rounded-[22px] max-[620px]:px-6 max-[620px]:py-5" id="discover">
              <a className="inline-flex items-center gap-[9px] text-xs text-paper/70 no-underline transition-colors hover:text-[#8ab4ff]" href="/#categories"><span className="text-base text-[#8ab4ff]" aria-hidden="true">←</span> All categories</a>
              <p className="mt-4 mb-2 flex items-center gap-[9px] text-[11px] font-semibold tracking-[1.15px] text-[#8ab4ff] uppercase"><span className="size-[7px] rounded-full bg-[#8ab4ff]" /> {links?.length ? 'A collection of links' : 'A collection of places'}</p>
              <h1 className="m-0 font-heading text-[48px] leading-[1.15] font-normal text-paper max-[620px]:text-[34px]">{category.name}<em className="text-[#8ab4ff]">, Galaxy.</em></h1>
              <p className="mt-3 max-w-[490px] text-sm leading-[1.7] text-paper/75">{category.description}</p>
            </section>
            {links?.length ? (
              <>
                <aside className="my-9 flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-line bg-surface/55 text-xs font-medium tracking-[0.16em] text-muted/70 uppercase max-[620px]:my-6 max-[620px]:min-h-[150px]" aria-label="Advertisement space">
                  Advertisement
                </aside>
                <section className="py-12 pb-[75px] max-[620px]:py-9 max-[620px]:pb-[52px]" aria-labelledby="links-heading">
                  <div className="mb-[27px]">
                    <p className="mb-2 text-[10px] font-semibold tracking-[1.15px] text-muted uppercase max-[620px]:text-[9px]">Videos to Explore</p>
                    <h2 className="m-0 font-heading text-4xl leading-[1.2] font-normal text-ink max-[620px]:text-[31px]" id="links-heading">Best <em className="text-coral">links</em></h2>
                  </div>
                  <ul className="m-0 grid list-none grid-cols-3 gap-5 p-0 max-[1050px]:grid-cols-2 max-[620px]:gap-3">
                    {links.map((link, index) => (
                      <li className="min-w-0" key={`${link.url}-${index}`}>
                        <a className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface/75 text-ink no-underline shadow-[0_5px_18px_rgba(17,24,39,0.04)] transition duration-200 hover:-translate-y-1 hover:border-coral hover:bg-surface-hover hover:shadow-[0_14px_32px_rgba(17,24,39,0.1)] focus-visible:outline-2 focus-visible:outline-coral focus-visible:outline-offset-4" href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${link.label || new URL(link.url).hostname} in a new tab`}>
                          <img
                            className="block aspect-[1.55] w-full bg-leaf object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.035]"
                            src={link.thumbnail || `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=256`}
                            alt=""
                            loading="lazy"
                          />
                          <span className="flex items-center justify-between gap-3 px-4 py-3.5 max-[620px]:px-3.5">
                            <span className="min-w-0">
                              <span className="block truncate font-heading text-lg text-ink">{link.label || new URL(link.url).hostname}</span>
                              <span className="mt-1 block truncate text-[10px] tracking-[0.04em] text-muted">{new URL(link.url).hostname}</span>
                            </span>
                            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-sm text-coral transition-colors group-hover:border-[#111827] group-hover:bg-[#111827] group-hover:text-white" aria-hidden="true">↗</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            ) : (
              <PhotoGallery category={category} />
            )}
          </>
        ) : (
          <section className="min-h-[310px] animate-[rise-in_600ms_ease_both] border-b border-line py-[42px] pb-12 max-[620px]:min-h-0 max-[620px]:py-[30px] max-[620px]:pb-[35px]" id="discover">
            <a className="mb-[34px] inline-flex items-center gap-[9px] text-xs text-muted no-underline max-[620px]:mb-7" href="/"><span className="text-base text-coral" aria-hidden="true">←</span> Home</a>
            <h1 className="m-0 font-heading text-[54px] leading-[1.15] font-normal text-ink max-[620px]:text-[38px]">That collection is <em className="text-coral">Porn Galaxy</em></h1>
          </section>
        )}
      </main>
    </PageLayout>
  )
}

export default CategoryPage
