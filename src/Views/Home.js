import '../App.css';
import '../Components/Navigation';
import Navigation from '../Components/Navigation';

function Home(props) {
  return (
    <div className="Home">
      Hello! Welcome to the homepage
      <Navigation 
        cartContents={props.cartContents}
        changeVisibility={props.changeVisibility}
        visibility={props.visibility}
      />
    </div>
  );
}

export default Home;
