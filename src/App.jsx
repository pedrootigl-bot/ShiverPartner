import SiteNav from './components/SiteNav'
import SiteHeader from './components/SiteHeader'
import PartnerProgram from './components/PartnerProgram'
import AudienceMotion from './components/AudienceMotion'
import SocialLogoLoop from './components/SocialLogoLoop'
import HowItWorks from './components/HowItWorks'
import EarnWays from './components/EarnWays'
import CreatorDashboard from './components/CreatorDashboard'
import WhoCanJoin from './components/WhoCanJoin'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import './App.css'

function App() {
  return (
    <div className="app">
      <SiteNav />
      <SiteHeader />

      <main>
        <PartnerProgram />
        <AudienceMotion />
        <SocialLogoLoop />
        <HowItWorks />
        <EarnWays />
        <CreatorDashboard />
        <WhoCanJoin />
        <Faq />
        <FinalCta />
      </main>
    </div>
  )
}

export default App
