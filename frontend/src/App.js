 import './App.css';
 import { Routes, Route, useLocation } from 'react-router-dom';
 import Footer from './components/Footer';
 import BottomPager from './components/BottomPager';
 import TopQuickNav from './components/TopQuickNav';
 import HeaderBar from './components/HeaderBar';
 import Home from './pages/Home';
 import Services from './pages/Services';
 import ServiceFilm from './pages/ServiceFilm';
 import ServiceBranding from './pages/ServiceBranding';
 import ServiceArt from './pages/ServiceArt';
 import TheirStories from './pages/TheirStories';
 import OurStory from './pages/OurStory';
 import Varnan from './pages/Varnan';
 import Contact from './pages/Contact';
 import AboutTeam from './pages/AboutTeam';
 import AboutUs from './pages/AboutUs';
 import Portfolio from './pages/Portfolio';
 import bg from './images/BG.png';

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col pb-10" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'repeat' }}>
      {location.pathname !== '/' && <HeaderBar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/film" element={<ServiceFilm />} />
          <Route path="/services/branding" element={<ServiceBranding />} />
          <Route path="/services/art" element={<ServiceArt />} />
          <Route path="/their-stories" element={<TheirStories />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/varnan" element={<Varnan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-team" element={<AboutTeam />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
      <BottomPager />
      <TopQuickNav />
    </div>
  );
}

 export default App;
