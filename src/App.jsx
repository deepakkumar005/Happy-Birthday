import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import WishesPage from './pages/WishesPage';
import MemoriesPage from './pages/MemoriesPage';
import MemoriessPage from './pages/MemoriessPage';
import LetterPage from './pages/LetterPage';
import CelebrationPage from './pages/CelebrationPage';
import FloatingElements from './components/FloatingElements';
import './index.css';
import OneLast from './pages/OneLast';
import OneWish from './pages/OneWish';

function App() {
  return (
    <Router>
      <FloatingElements />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wishes" element={<WishesPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/memoriess" element={<MemoriessPage />} />
          <Route path="/letter" element={<LetterPage />} />
          <Route path="/celebrate" element={<CelebrationPage />} />
          <Route path="/sad" element={<OneWish />} />
          <Route path="/onelast" element={<OneLast />} />
          {/* <Route path="/personal" element={<my-personal-page />} > */}

        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
