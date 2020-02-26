import React, { Component } from 'react';
import Matches from './Matches';


class Basketball extends Component{
    state = {
        match: [
          { id: '', event_home_team: '', event_away_team: '',event_halftime_result:'', event_final_result:''},
          { id: '', event_home_team: '', event_away_team: '',event_halftime_result:'', event_final_result:''},
          { id: '', event_home_team: '', event_away_team: '',event_halftime_result:'', event_final_result:''},
          { id: '', event_home_team: '', event_away_team: '',event_halftime_result:'', event_final_result:''},
          { id: '', event_home_team: '', event_away_team: '',event_halftime_result:'', event_final_result:''},
          { id: '', event_home_team: '', event_away_team: '',event_halftime_result:'', event_final_result:''},
          { id: '', event_home_team: '', event_away_team: '',event_halftime_result:'', event_final_result:''},
          { id: '', event_home_team: '', event_away_team: '',event_halftime_result:'', event_final_result:''}
        ],
        otherState: 'some other value'
      }
      getMatchNumber = async () => {
        const responseOfmatchNo = await fetch(`https://allsportsapi.com/api/basketball/?met=Livescore&APIkey=fcf3a5576b7ecc29c86a0094f0799963f78ce3de1d5249c4f9c1f9118f6a8fb0&from=2020-02-15&to=2020-02-26`);
        const dataOfMatchNo = await responseOfmatchNo.json();
        console.log(dataOfMatchNo);
        // this.setState({ match: dataOfMatchNo.result });
      }
      componentDidMount(){
        this.getMatchNumber();
      }
    render(){
        return(
        <div className="Football">
        <button onClick= {() => this.getMatchNumber}></button>
        <Matches 
          id={this.state.match[0].event_home_team} 
          stat={this.state.match[0].event_away_team} 
          score={this.state.match[0].event_halftime_result} 
          description={this.state.match[0].event_final_result}/>
        <Matches 
          id={this.state.match[1].event_home_team} 
          stat={this.state.match[1].event_away_team} 
          score={this.state.match[1].event_halftime_result} 
          description={this.state.match[1].event_final_result}/>
        <Matches 
           id={this.state.match[2].event_home_team} 
           stat={this.state.match[2].event_away_team} 
           score={this.state.match[2].event_halftime_result} 
           description={this.state.match[2].event_final_result}/>
        <Matches 
            id={this.state.match[3].event_home_team} 
            stat={this.state.match[3].event_away_team} 
            score={this.state.match[3].event_halftime_result} 
             description={this.state.match[3].event_final_result}/>
         <Matches 
            id={this.state.match[4].event_home_team} 
            stat={this.state.match[4].event_away_team} 
            score={this.state.match[4].event_halftime_result} 
            description={this.state.match[4].event_final_result}/>
        <Matches 
            id={this.state.match[5].event_home_team} 
            stat={this.state.match[5].event_away_team} 
            score={this.state.match[5].event_halftime_result} 
            description={this.state.match[5].event_final_result}/>
        <Matches 
            id={this.state.match[6].event_home_team} 
            stat={this.state.match[6].event_away_team} 
            score={this.state.match[6].event_halftime_result} 
            description={this.state.match[6].event_final_result}/>
        <Matches 
            id={this.state.match[7].event_home_team} 
            stat={this.state.match[7].event_away_team} 
            score={this.state.match[7].event_halftime_result} 
            description={this.state.match[7].event_final_result}/>
      </div>
        )
    }
}

export default Basketball;