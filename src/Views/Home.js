import '../App.css';
import Navigation from '../Components/Navigation';
import hero from '../images/homepage.png'

function Home(props) {
  return (
    <div className="Home">
      <div className="content">
        <h1>Welcome to Cream City.</h1>
        <p className="aboutbeans">
          Cream City Coffee Roasters crafts rich brews in Milwaukee's Riverwest neighborhood.
          <a href="./shop">Shop our beans &#10157;</a>
        </p>
        <p className="aboutlocations">
          Founded in 2002, we've been supplying coffee shops with freshly roasted beans all over the Midwest for nearly 20 years.
          <a href="./locations">Find brew &#10157;</a>
        </p>
      </div>
      <img className="hero" src={hero} alt="A cup of coffee with some foam and a long cast shadow."></img>
      <Navigation 
        cartContents={props.cartContents}
        totalQuantity={props.totalQuantity}
        changeModalVisibility={props.changeModalVisibility}
        modalVisibility={props.modalVisibility}
      />
    </div>
  );
}

export default Home;
