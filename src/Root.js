import React, {useState} from 'react';
import HomePage from "./views/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutPage from "./views/AboutPage/AboutPage";
import ContactPage from "./views/ContactPage/ContactPage";
import AppPage from "./views/AppPage/AppPage";
import GalleryPage from "./views/GalleryPage/GalleryPage";


function Root() {


    let hideMenu = () => {
        if (isMenuOpened){
            setMenuOpened(!isMenuOpened);
        }
    };

    let handleClick = e => {
        e.preventDefault();
        console.log('button clicked!');
        setMenuOpened(!isMenuOpened);


    };


    let [isMenuOpened, setMenuOpened] = useState( true);

    return (



      <BrowserRouter>


          <Navigation handleClick={handleClick} isMenuOpened={isMenuOpened}/>
              <Switch>

                  <Route
                      exact path='/'
                      render={(props) => <HomePage {...props} handleClick={handleClick} isOpened={isMenuOpened}/>}
                  />

                  <Route
                      exact path='/about'
                      render={(props) => <AboutPage {...props} hideMenu={hideMenu} isOpened={isMenuOpened}/>}
                  />

                  <Route
                      exact path='/gallery'
                      render={(props) => <GalleryPage {...props} hideMenu={hideMenu} isOpened={isMenuOpened}/>}
                  />

                  <Route
                      exact path='/app'
                      render={(props) => <AppPage {...props} hideMenu={hideMenu} isOpened={isMenuOpened}/>}
                  />

                  <Route
                      exact path='/contact'
                      render={(props) => <ContactPage {...props} hideMenu={hideMenu} isOpened={isMenuOpened}/>}
                  />


              </Switch>

          <Footer/>
      </BrowserRouter>

  );
}

export default Root;
