import { categories } from './data/categories.js'
import CategoryPage from './pages/CategoryPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  if (window.location.pathname.replace(/\/+$/, '') === '/contact') return <ContactPage />

  const encodedCategorySlug = window.location.pathname.startsWith('/category/')
    ? window.location.pathname.split('/').filter(Boolean).at(-1)
    : null
  let categorySlug = null

  if (encodedCategorySlug) {
    try {
      categorySlug = decodeURIComponent(encodedCategorySlug)
    } catch {
      categorySlug = null
    }
  }

  if (!categorySlug) return <HomePage />

  const category = categories.find((item) => item.slug === categorySlug)
  return <CategoryPage category={category} />
}

export default App
