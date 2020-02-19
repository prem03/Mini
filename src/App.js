
import React, { Component } from 'react';
import './App.css';
import Matches from './Person/Matches';
import { Layout , Header , Navigation , Drawer , Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {

  render () {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title="SportsHub" scroll>
              <Navigation>
                  <Link to="/cricket">Cricket</Link>
                  <Link to="/football">Football</Link>
                  <Link to="/contactus">Contact Us</Link>
                  <Link to="/loginsignup">Login / SignUp</Link>
              </Navigation>
          </Header>
          {/* <Drawer title="Title">
              <Navigation>
                  <Link to="/cricket">Cricket</Link>
                  <Link to="/football">Football</Link>
                  <Link to="/forum">Forum</Link>
                  <Link to="/">ContactUs</Link>
              </Navigation>
          </Drawer> */}
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
     </div>
     
      // <div className="App">
      //   <p>{this.state.match[0].id}</p>
      //   {/* <button onClick= {this.GetMatchNumber()}></button> */}
      //   {
      //     /**
      //      * Don't invoke onClick callback immediately, either
      //      *  - define in-line callback
      //      *    <button onClick= {() => this.GetMatchNumber()}></button>
      //      *  - or set callback as your function, notice no parans on function 
      //      *    <button onClick= {this.GetMatchNumber}></button>
      //      */
      //   }
      //   {/* <button onClick= {() => this.getMatchNumber()}>submit</button> */}
      //   <Matches 
      //     id={this.state.match[0].id} 
      //     stat={this.state.match[0].stat} 
      //     score={this.state.match[0].score} 
      //     description={this.state.match[0].description} />
      //   <Matches 
      //     id={this.state.match[1].id} 
      //     stat={this.state.match[1].stat} 
      //     score={this.state.match[1].score} 
      //     description={this.state.match[1].description}/>
      //   <Matches 
      //     id={this.state.match[2].id} 
      //     stat={this.state.match[2].stat} 
      //     score={this.state.match[2].score} 
      //     description={this.state.match[2].description}/>
      // </div>
    );
  }
}

export default App;

