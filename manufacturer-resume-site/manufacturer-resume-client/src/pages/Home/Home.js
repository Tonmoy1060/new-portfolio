import React from 'react';
import Banner from './Banner';
import MessageSection from './MessageSection';
import Services from './Services';
import Testimonials from './Testimonials';
import TrainChild from './TrainChild';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Services></Services>
         <TrainChild></TrainChild>
         <Testimonials></Testimonials>
         <MessageSection></MessageSection>
      </div>
   );
};

export default Home;