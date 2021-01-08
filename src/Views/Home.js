import '../App.css';
import '../Components/Navigation';
import Navigation from '../Components/Navigation';

function Home(props) {
  return (
    <div className="Home">
      Hello! Welcome to the homepage
      <Navigation 
        cartContents={props.cartContents}
        changeModalVisibility={props.changeModalVisibility}
        modalVisibility={props.modalVisibility}
      />
    </div>
  );
}

export default Home;
