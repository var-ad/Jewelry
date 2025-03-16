import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, onNavigate }) {
  const [activePage, setActivePage] = useState('home');

  const handleNavigate = (page) => {
    setActivePage(page);
    onNavigate(page);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header onNavigate={handleNavigate} activePage={activePage} />

      {/* Page Content */}
      <main className="flex-grow container mx-0 p-0">
        {children}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} activePage={activePage} />
    </div>
  );
}

export default Layout;
