import React, {Component} from 'react';
import Activities from './activity';
import AddNewActivity from './fill';

class App extends Component{
  state = {
    todo:[
      {id: 1, activity: "Play games "},
      {id: 2, activity: "Make Haq haq haq jokes"},
      {id: 3, activity: "Still Haq haq haq jokes"},
      {id: 4, activity: "More Haq haq haq jokes"},
      {id: 5, activity: "Get like really really super annoying"},
      {id: 6, activity: "Wait for people to give feedback on how boring you are"},
      {id: 7, activity: "Then now go to bed because today has really being a god day"}
    ]
  }
  lessBoring = (id) =>{
    const actz = this.state.todo.filter(del => {
      return del.id !== id
    });
    this.setState({
      todo: actz
    })
  }
  moreBoring = (todo) =>{
    todo.id = Math.random() * 10;
    let sact = [...this.state.todo, todo];
    this.setState({
      todo: sact 
    })
  }
  render(){
    return(
      <div className="App container">
      <h1 className="center blue-text">Activities</h1>
      <Activities activity={this.state.todo} reduce={this.lessBoring}/> 
      <AddNewActivity bore={this.moreBoring}/>   
      </div>
    )
  }
}

export default App;
