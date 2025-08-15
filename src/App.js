import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from './components/Skills/skills';
import MyPortfolio from './components/MyPortfolio/myPortfolio';
import Experience from "./components/Experience/experience";
import ContactPage from "./components/ContactPage/contactPage";
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <MyPortfolio/>
      <Experience/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
