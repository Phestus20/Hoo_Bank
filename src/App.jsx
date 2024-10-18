import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary components from React Router
import Billing from './components/Billing'; // Importing Billing component
import Business from './components/Business'; // Importing Business component
import CardDeals from './components/CardDeals'; // Importing CardDeals component
import Clients from './components/Clients'; // Importing Clients component
import CTA from './components/CTA'; // Importing Call To Action component
import Stats from './components/Stats'; // Importing Stats component
import Footer from './components/Footer'; // Importing Footer component
import Navbar from './components/Navbar'; // Importing Navbar component
import Hero from './components/Hero'; // Importing Hero component
import Testimonials from './components/Testimonials'; // Importing Testimonials component
import Form from './components/Form'; // Importing Form component
import Dashboard from './components/Dashboard'; // Importing Dashboard component
import styles from './style'; // Importing styles

const App = () => {
  return (
    <Router>
      {/* Main container for the application */}
      <div className="bg-primary w-full overflow-hidden">
        
        {/* Navbar section */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar /> {/* Rendering the Navbar */}
          </div>
        </div>

        {/* Hero section */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero /> {/* Rendering the Hero component */}
          </div>
        </div>

        {/* Setting up routes for different pages */}
        <Routes>
          <Route path="/" element={
            // Main content for the home page
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Stats /> {/* Rendering Stats component */}
                <Business /> {/* Rendering Business component */}
                <Billing /> {/* Rendering Billing component */}
                <CardDeals /> {/* Rendering CardDeals component */}
                <Testimonials /> {/* Rendering Testimonials component */}
                <Clients /> {/* Rendering Clients component */}
                <CTA /> {/* Rendering Call To Action component */}
                <Footer /> {/* Rendering Footer component for home page */}
              </div>
            </div>
          } />
          <Route path="/form" element={<Form />} /> {/* Route for the Form page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the Dashboard page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Exporting the App component