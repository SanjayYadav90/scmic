import React from 'react'
import News from './News';
import WeDo from './WeDo';
import WeOffer from './WeOffer';
import Services from './Services';
import BestOffers from './BestOffers';
import Testimonials from './testimonials';

function Home() {
  return (
    <div>
      <WeDo />
      <WeOffer />
      <Services />
      <BestOffers />
      <Testimonials />
      <News />
    </div>
  )
}

export default Home
