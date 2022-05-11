import React from 'react';
import { useState } from "react"
import { useParams } from 'react-router-dom';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import cardData from '../../data/db.json';

const TourDetails = () => {
  const { id } = useParams();
  const [seeMore, setSeeMore] = useState(false);
  function toggle () {
        setSeeMore(!seeMore)
    }
  return (
    <section className="full">
      <Header title='City' />
      <div className="container">
                    {
                cardData.map(element => {
                    const text = element.info;
                    if (element.id == id) {
                        return (
                            <div>
                            <img src={element.image} alt={element.name} style={{width :"50rem"}} />
                            <h2>{element.name}</h2>
                            <h3>{seeMore ? text : `${text.substring(0, 300)}`}
                             <button className="btn" onClick={toggle}>{seeMore? "See Less":"See More"}</button>
                            </h3>
                            <h3>{element.price}</h3>
                            </div>
                        )
                    }
                })
            }
      </div>
      <Footer url='www.facebook.com' url2='www.Instagram.com' url3='www.LinkedIn.com' name='Bahaa/Esraa' />
    </section>
  );
}

export default TourDetails;