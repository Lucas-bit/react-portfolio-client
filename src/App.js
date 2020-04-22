import React from 'react';


//CSS
import './css/animate.css'
import './css/bootstrap.min.css'
import './css/magnific-popup.css'
import './css/normalize.css'
import './css/font-awesome.min.css'
import './css/owl.carousel.css'
import './css/owl.theme.default.css'
import './css/responsive.css'
import './css/style.css'
import './css/App.css'

//Components
import Header from './components/Header/header'
import Jumbotron from './components/Jumbotron/jumbotron'
import About from './components/About/about'
import Resume from './components/Resume/resume'
import MyServices from './components/MyServices/myServices'
import MyWorks from './components/MyWorks/myWorks'
import Contact from'./components/Contact/contact'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div>
      <Header/>
      <Jumbotron/>
      <About/>
      <Resume/>
      <MyServices/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
