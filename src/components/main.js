import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './landingpage';
import Cricket from './cricket';
import Football from './football';
import ContactUs from './contactus';
import LoginSignup from './loginsignup';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={Landingpage}/>
        <Route path ="/cricket" component={Cricket}/>
        <Route path ="/football" component={Football}/>
        <Route path ="/contactus" component={ContactUs}/>
        <Route path ="/loginsignup" component={LoginSignup}/>
    </Switch>
)

export default Main;