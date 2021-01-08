import '../App.css';
import '../Components/Navigation';
import Navigation from '../Components/Navigation';

function Home(props) {
  return (
    <div className="Home">
      Hello! Welcome to the homepage
      <Navigation cartContents={props.cartContents}/>
    </div>
  );
}

export default Home;
