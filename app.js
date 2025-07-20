function ErrorBoundary({ children }) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error) => {
      console.error('Application error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return React.createElement('div', { 
      className: 'min-h-screen flex items-center justify-center bg-gray-900 text-white' 
    }, 'Something went wrong. Please refresh the page.');
  }

  return children;
}

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState('home');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  React.useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, []);

  const renderPage = () => {
    if (currentPage === 'admin') {
      return React.createElement(AdminDashboard, { 
        isDarkMode: isDarkMode, 
        onBack: () => setCurrentPage('home') 
      });
    }
    
    return React.createElement(React.Fragment, null,
      React.createElement(ScrollAnimations),
      React.createElement(Header, { 
        isDarkMode: isDarkMode, 
        toggleTheme: toggleTheme,
        onAdminClick: () => setCurrentPage('admin')
      }),
      React.createElement(Hero, { isDarkMode: isDarkMode }),
      React.createElement(About, { isDarkMode: isDarkMode }),
      React.createElement(Skills, { isDarkMode: isDarkMode }),
      React.createElement(Experience, { isDarkMode: isDarkMode }),
      React.createElement(Education, { isDarkMode: isDarkMode }),
      React.createElement(Portfolio, { isDarkMode: isDarkMode }),
      React.createElement(Contact, { isDarkMode: isDarkMode }),
      React.createElement(Footer)
    );
  };

  try {
    return React.createElement('div', { 
      className: `App ${isDarkMode ? 'dark' : 'light'}` 
    }, renderPage());
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ErrorBoundary, null, React.createElement(App)));