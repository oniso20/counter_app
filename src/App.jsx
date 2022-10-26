import './App.css';
import './main.css';
import './header.css';
import './footer.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'
import Button from './Button'

const App = () => {
  return (
    <div>
      <Header name="Onis"/>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
