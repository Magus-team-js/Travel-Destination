import React from 'react';
import Header from '../header/Header'
import Tours from '../tours/Tours'
import Footer from '../footer/Footer'


const Home = () => {
  return (
    <>
      <Header title='Travel Destination' />
      {
      <Tours />
      }
      <Footer url='www.facebook.com' url2='www.Instagram.com' url3='www.LinkedIn.com' name='Bahaa/Esraa' />
    </>
  );
}

export default Home;