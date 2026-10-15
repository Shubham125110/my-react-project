import Navbar from './Navbar.jsx'
import SiteFooter from './SiteFooter.jsx'

function PageLayout({ activeSection, isCategoryPage = false, children }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-[7.2%] max-[1050px]:px-[5%] max-[620px]:px-4">
      <Navbar activeSection={activeSection} isCategoryPage={isCategoryPage} />
      {children}
      <SiteFooter isCategoryPage={isCategoryPage} />
    </div>
  )
}

export default PageLayout
