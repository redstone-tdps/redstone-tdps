import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-zinc-950 flex flex-col font-sans text-slate-100 selection:bg-red-500/30">
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
