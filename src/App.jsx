import SiteHeader from './components/SiteHeader'
import PartnerProgram from './components/PartnerProgram'
import SocialLogoLoop from './components/SocialLogoLoop'
import HowItWorks from './components/HowItWorks'
import CreatorsShowcase from './components/CreatorsShowcase'
import CreatorProgram from './components/CreatorProgram'
import FinalCta from './components/FinalCta'
import './App.css'

function App() {
  return (
    <div className="app">
      <SiteHeader />

      <main>
        <PartnerProgram />
        <SocialLogoLoop />
        <HowItWorks />
        <CreatorsShowcase />
        <CreatorProgram />
        <FinalCta />
      </main>
    </div>
  )
}

export default App
