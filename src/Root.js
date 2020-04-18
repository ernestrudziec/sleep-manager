import React, {useState} from 'react';
import HomePage from "./views/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";


function Root() {


    return (



      <BrowserRouter>


          <Navigation/>
              <Switch>

                  <Route exact path='/' component={HomePage}/>

              </Switch>

          <Footer/>
      </BrowserRouter>

  );
}

export default Root;
