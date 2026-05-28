import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ContactPage from './pages/ContactPage'
import DesignServicesPage from './pages/DesignServicesPage'
import GuidePage from './pages/GuidePage'
import GuidesPage from './pages/GuidesPage'
import HomePage from './pages/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ShareIdeaPage from './pages/ShareIdeaPage'
import TermsPage from './pages/TermsPage'
import ToolPage from './pages/ToolPage'
import ToolsPage from './pages/ToolsPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tools" element={<ToolsPage />} />
        <Route path="tools/:toolSlug" element={<ToolPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="guides/:guideSlug" element={<GuidePage />} />
        <Route path="design-services" element={<DesignServicesPage />} />
        <Route path="share-idea" element={<ShareIdeaPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
      </Route>
    </Routes>
  )
}

export default App
