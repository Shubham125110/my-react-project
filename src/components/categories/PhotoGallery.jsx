function PhotoGallery({ category }) {
  const photos = category.photos.filter((photo) => photo?.image)

  return (
    <section className="py-12 pb-[75px] max-[620px]:py-9 max-[620px]:pb-[52px]" aria-labelledby="gallery-heading">
      <div className="mb-[27px] flex items-end justify-between">
        <div>
          <p className="mb-2 text-[10px] font-semibold tracking-[1.15px] text-muted uppercase max-[620px]:text-[9px]">A few places to start</p>
          <h2 className="m-0 font-heading text-4xl leading-[1.2] font-normal text-ink max-[620px]:text-[31px]" id="gallery-heading">The photo <em className="text-coral">journal</em></h2>
        </div>
        <span className="pb-[7px] text-[11px] text-muted max-[620px]:text-[9px] max-[620px]:whitespace-nowrap">{photos.length} photographs</span>
      </div>
      <div className="grid grid-cols-3 gap-5 max-[620px]:grid-cols-2 max-[620px]:gap-x-[13px] max-[620px]:gap-y-[26px]">
        {photos.map((photo, index) => (
          <figure className={`group m-0 min-w-0 animate-[rise-in_500ms_ease_both] ${index === 1 ? 'delay-[80ms]' : index === 2 ? 'delay-[160ms]' : ''}`} key={photo.image}>
            <div className="aspect-[0.9] overflow-hidden rounded-xl bg-leaf">
              <img className="block size-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.035]" src={photo.image} alt={photo.alt} loading={index > 1 ? 'lazy' : 'eager'} />
            </div>
            <figcaption className="flex justify-between gap-2 pt-[11px] text-[11px] text-muted">
              <span>{photo.place}</span>
              <span className="font-heading text-sm text-coral">0{index + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default PhotoGallery
