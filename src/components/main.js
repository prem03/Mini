import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './landingpage';
import Cricket from './cricket';
import Football from './football';
import ContactUs from './contactus';
import LoginSignup from './loginsignup';
import Basketball from './basketball';
import SportsCard from './SportsCard';
import Carousel from './Carousel';
import LandingPage from './landingpage';
import Footer from './footer';
import PlayerStats from './PlayerStats';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={Landingpage}/>
        <Route path ="/cricket" component={Cricket}/>
        <Route path ="/football" component={Football}/>
        <Route path ="/contactus" component={ContactUs}/>
        <Route path ="/loginsignup" component={LoginSignup}/>
        <Route path ="/basketball" component={Basketball}/>
        <Route path ="/SportsCard" component={SportsCard}/>
        <Route path ="/Carousel" component={Carousel}/>
        <Route path ="/landingpage" component={LandingPage}/>
        <Route path ="/footer" component={Footer}/>
        <Route path ="/PlayerStats" component={PlayerStats}/>
    </Switch>
)

export default Main;