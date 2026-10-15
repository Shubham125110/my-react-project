import { useMemo, useState } from 'react'
import { categories } from '../data/categories.js'
import CategoryCard from '../components/categories/CategoryCard.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('default')
  const visibleCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    const matches = categories.filter((category) => category.name.toLowerCase().includes(query))

    if (sortOrder === 'asc') return [...matches].sort((first, second) => first.name.localeCompare(second.name))
    if (sortOrder === 'desc') return [...matches].sort((first, second) => second.name.localeCompare(first.name))
    return matches
  }, [searchQuery, sortOrder])

  return (
    <PageLayout activeSection="discover">
      <main id="home">
        <section className="relative mt-8 flex min-h-[220px] animate-[rise-in_650ms_ease_both] items-center justify-between overflow-hidden rounded-[28px] bg-[#111827] px-9 py-6 text-paper shadow-[0_24px_60px_rgba(17,24,39,0.14)] max-[620px]:mt-5 max-[620px]:min-h-0 max-[620px]:rounded-[22px] max-[620px]:px-6 max-[620px]:py-6" id="discover">
          <div className="intro-copy relative z-10 max-w-[720px]">
            <p className="mb-3 flex items-center gap-[9px] text-[11px] font-semibold tracking-[1.15px] text-[#8ab4ff] uppercase"><span className="size-[7px] rounded-full bg-[#8ab4ff]" /> A Galaxy for Porn Lovers</p>
            <h1 className="m-0 font-heading text-[42px] leading-[1.08] font-normal text-paper max-[620px]:text-[clamp(2rem,9vw,2.6rem)]">Come here<br /><em className="text-[#8ab4ff]">Something Best For You</em></h1>
            <p className="mt-[17px] max-w-[420px] text-sm leading-[1.8] text-paper/75 max-[620px]:max-w-[330px] max-[620px]:text-[13px]">
              Find Best and Filtered Porn Here
            </p>
          </div>
          <div className="ml-5 mt-2 mr-[2%] flex size-[112px] shrink-0 rotate-[8deg] flex-col items-center justify-center gap-2 rounded-full border border-[#8ab4ff]/60 bg-[#8ab4ff] text-center font-heading text-[13px] leading-[1.35] text-[#111827] shadow-[0_12px_30px_rgba(79,141,247,0.18)] max-[900px]:hidden" aria-label="A note about our guides">
            <span className="text-[19px] text-[#111827]" aria-hidden="true">✳</span>
            <span>Less Struggle<br />More feeling.</span>
          </div>
        </section>

        <aside className="my-9 flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-line bg-surface/55 text-xs font-medium tracking-[0.16em] text-muted/70 uppercase max-[620px]:my-6 max-[620px]:min-h-[150px]" aria-label="Advertisement space">
          Advertisement
        </aside>

        <section className="py-10 pb-14 max-[620px]:py-8 max-[620px]:pb-10" id="categories" aria-labelledby="trips-heading">
          <div className="mb-5 flex items-end justify-between gap-2.5 max-[620px]:items-start">
            <div>
              <p className="mb-2 text-[10px] font-semibold tracking-[1.15px] text-muted uppercase max-[620px]:text-[9px]">Now no Struggle in Finding Best Porn</p>
              <h2 className="m-0 font-heading text-4xl leading-[1.2] font-normal text-ink max-[620px]:text-[31px]" id="trips-heading">Find your kind of <em className="text-coral">Porn</em></h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/75 px-3 py-1.5 text-xs whitespace-nowrap text-ink max-[620px]:mt-5 max-[620px]:px-2.5 max-[620px]:text-[10px]">
              <span className="font-semibold tabular-nums">{categories.length}</span> collections
            </span>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3 max-[620px]:gap-2.5">
            <label className="relative min-w-[220px] flex-1 max-[620px]:min-w-full">
              <span className="sr-only">Search categories</span>
              <svg className="pointer-events-none absolute top-1/2 left-3.5 size-[17px] -translate-y-1/2 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
                <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <input
                className="h-11 w-full appearance-none rounded-xl border border-line bg-surface/80 pr-11 pl-10 text-sm text-ink shadow-[0_2px_8px_rgba(17,24,39,0.03)] outline-none transition placeholder:text-muted/80 hover:border-coral focus:border-coral focus:ring-2 focus:ring-coral/15"
                type="search"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-ink focus-visible:outline-2 focus-visible:outline-coral motion-reduce:transition-none"
                  type="button"
                  aria-label="Clear category search"
                  onClick={() => setSearchQuery('')}
                >
                  <svg className="size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </label>
            <label className="flex h-11 shrink-0 items-center gap-2 rounded-xl border border-line bg-surface/80 px-3 text-xs font-medium text-muted shadow-[0_2px_8px_rgba(17,24,39,0.03)] max-[620px]:flex-1">
              <span>Sort</span>
              <select
                className="min-w-[110px] cursor-pointer bg-transparent py-1 text-sm text-ink outline-none max-[620px]:min-w-0 max-[620px]:flex-1"
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                aria-label="Sort categories"
              >
                <option value="default">Default</option>
                <option value="asc">A–Z</option>
                <option value="desc">Z–A</option>
              </select>
            </label>
          </div>

          <div className="mb-3 flex min-h-5 items-center justify-between text-xs text-muted" aria-live="polite">
            {searchQuery ? (
              <span>{visibleCategories.length} {visibleCategories.length === 1 ? 'category' : 'categories'} found</span>
            ) : (
              <span>{categories.length} categories</span>
            )}
          </div>

          {visibleCategories.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {visibleCategories.map((category) => (
                <CategoryCard category={category} key={category.slug} />
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-dashed border-line bg-surface/60 px-4 py-8 text-center text-sm text-muted" role="status">
              No categories found
            </p>
          )}
        </section>
      </main>
    </PageLayout>
  )
}

export default HomePage
