import bigAssCategory from './category-data/big_ass/big_ass.js'
import threeSomeCategory from './category-data/three_some/three_some.js'
import cumInsideCategory from './category-data/cum_inside/cum_inside.js'
import sharingBedCategory from './category-data/sharing_bed/sharing_bed.js'
import strangerCategory from './category-data/stranger/stranger.js'
import blowJobCategory from './category-data/blow_job/blow_job.js'
import cheatingCategory from './category-data/cheating/cheating.js'
import stepMomCategory from './category-data/step_mom/step_mom.js'
import stepSisterCategory from './category-data/step_sis/step_sis.js'
import analCategory from './category-data/anal/anal.js'
import milfCategory from './category-data/milf/milf.js'
import bigTitsCategory from './category-data/big_tits/big_tits.js'
import teenCategory from './category-data/teen/teen.js'
import sharingwifeCategory from './category-data/wife_sharing/wife_sharing.js'


const isHttpUrl = (value) => {
  if (typeof value !== 'string') return false

  try {
    return ['http:', 'https:'].includes(new URL(value).protocol)
  } catch {
    return false
  }
}

export const categories = [
  bigAssCategory,
  threeSomeCategory,
  cumInsideCategory,
  sharingBedCategory,
  strangerCategory,
  blowJobCategory,
  cheatingCategory,
  stepMomCategory,
  stepSisterCategory,
  analCategory,
  milfCategory,
  bigTitsCategory,
  teenCategory,
  sharingwifeCategory,
].map((category) => {
  return {
    ...category,
    photos: Array.isArray(category.photos)
      ? category.photos.filter((photo) => isHttpUrl(photo?.image))
      : [],
    links: Array.isArray(category.links)
      ? category.links.filter((link) => isHttpUrl(link?.url))
      : [],
  }
})
