import React from 'react'
//import Navbar from './components';
/*import {Billing,Business,Button,
  CardDeals,Clients,CTA,FeedbackCard,
  Hiro,Footer,Navbar,Stats,
  Testimonials,GetStated} from './components'*/

  import Billing from './components/Billing';
    import Business from './components/Business';
    import Button from './components/Button';
    import CardDeals from './components/CardDeals';
    import Clients from './components/Clients';
    import CTA from './components/CTA';
    import Stats from './components/Stats';
    import FeedbackCard from './components/FeedbackCard';
    import Footer from './components/Footer';
    import GetStated from './components/GetStarted';
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Testimonials from './components/Testimonials';

import styles from './style';

const App = () => (
    <div className="  bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
     </div>

     <div className={` bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
     </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       
     <Stats />

     <Business />

     <Billing />

     <CardDeals />

     <Testimonials />

     < Clients />

     <CTA />

     <Footer />

      </div>
     </div>


    </div>
  );


export default App
