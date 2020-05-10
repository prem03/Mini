import React, { Component } from 'react';
import Matches from './Matches';

class Cricket extends Component{
    state = {
        match: [
          { id: '', stat: '', score: '',description:''},
          { id: '', stat: '', score: '',description:''},
          { id: '', stat: '', score: '',description:''},
          { id: '', stat: '', score: '',description:''}
    
        ],
        otherState: 'some other value'
      }
      getMatchNumber = async () => {
        const responseOfmatchNo = await fetch(`https://cricapi.com/api/matches?apikey=A3XepSFHxjfOGXABymTAtvdK1BE2`);
        const dataOfMatchNo = await responseOfmatchNo.json();
        console.log(dataOfMatchNo);
    
        const resolvedFetchedJSON = await Promise.all(
          dataOfMatchNo.matches.map(request => {
            return fetch(`http://cricapi.com/api/cricketScore?unique_id=${request.unique_id}&apikey=A3XepSFHxjfOGXABymTAtvdK1BE2`)
            .then(response => response.json());
          })
        );
        console.log(resolvedFetchedJSON); 
        this.setState({ match: resolvedFetchedJSON });
      }
      componentDidMount(){
        this.getMatchNumber();
      }
    render(){
        console.log(this.state.match[0].stat);
        return(
        <div className="Cricket">
        <button onClick= {() => this.getMatchNumber}></button>
        <Matches 
          id={this.state.match[0].id} 
          stat={this.state.match[0].stat} 
          score={this.state.match[0].score} 
          description={this.state.match[0].description} />
        <Matches 
          id={this.state.match[1].id} 
          stat={this.state.match[1].stat} 
          score={this.state.match[1].score} 
          description={this.state.match[1].description}/>
        <Matches 
          id={this.state.match[2].id} 
          stat={this.state.match[2].stat} 
          score={this.state.match[2].score} 
          description={this.state.match[2].description}/>
        <Matches 
          id={this.state.match[3].id} 
          stat={this.state.match[3].stat} 
          score={this.state.match[3].score} 
          description={this.state.match[3].description}/>
      </div>
        )
    }
}

export default Cricket;