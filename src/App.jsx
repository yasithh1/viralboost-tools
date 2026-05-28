import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/Layout'
import ContactPage from './pages/ContactPage'
import FreeResourcesPage from './pages/FreeResourcesPage'
import GuidePage from './pages/GuidePage'
import GuidesPage from './pages/GuidesPage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import PricingPage from './pages/PricingPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ServicesPage from './pages/ServicesPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="guides/:guideSlug" element={<GuidePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="free-resources" element={<FreeResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}

export default App
