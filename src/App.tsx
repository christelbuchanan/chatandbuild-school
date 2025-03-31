import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PromptGuidePage from './pages/PromptGuidePage'
import TutorialsPage from './pages/TutorialsPage'
import ResourcesPage from './pages/ResourcesPage'
import CommunityPage from './pages/CommunityPage'
import TutorialDetailPage from './pages/TutorialDetailPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-nunito">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prompt-guide" element={<PromptGuidePage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/tutorials/:id" element={<TutorialDetailPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
