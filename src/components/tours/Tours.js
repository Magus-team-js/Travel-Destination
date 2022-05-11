
import Tour from "./tour/Tour";


const Tours = (props) => {


  return (
    <>
      <section className="hero">
        <div className="container">
          <Tour name={props.name} image={props.image} id={props.id} />
          {/* <h1>{props.name}</h1> */}
        </div>
      </section>
    </>
  );
}

export default Tours;
