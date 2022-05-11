import Header from '../header/Header'
import Tours from '../tours/Tours'
import Footer from '../footer/Footer'
import cardData from '../../data/db.json';



const Home = () => {
  return (
    <>
      <Header title='Travel Destination' />
      {
        cardData.map(card => (
          <Tours name={card.name} image={card.image} id={card.id} />
        ))
      }
      <Footer url='www.facebook.com' url2='www.Instagram.com' url3='www.LinkedIn.com' name='Bahaa/Esraa' />
    </>
  );
}

export default Home;