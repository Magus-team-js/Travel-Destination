import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import cardData from '../../data/db.json';

const TourDetails = () => {
  const { id } = useParams();

  return (
    <section className="full">
      <Header title='City' />
      <div className="container">
        {
          cardData.filter((city) => city.id === id)
            .map(
              (e) => (
                <>
                  <h1>{e.name}</h1>
                  <img src={e.image} alt={e.name} />
                  <p>{e.info}</p>
                  <p>{e.price}</p>
                </>
              )
            )
        }
      </div>
      <Footer url='www.facebook.com' url2='www.Instagram.com' url3='www.LinkedIn.com' name='Bahaa/Esraa' />
    </section>
  );
}

export default TourDetails;
