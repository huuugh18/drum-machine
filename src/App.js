import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class App extends Component {
  constructor(){
    super()
    this.state={
        displaySound:''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = soundType => {
    console.log(soundType)
    this.setState({displaySound:soundType})
  }
  // handleClick (soundType) {
  //   this.setState((state) => ({
  //     displaySound: soundType
  //   }))
  // }
  render() {
    return (
      <div className="App" id="drum-machine">
        <div id="display">
        </div>
        <div id="drum-components">
          <DrumPadElement sound={'elephant'} actionKey={'Q'} onClickDrum={this.handleClick}/>
          <DrumPadElement sound={'trumpet'} actionKey={'W'} onClickDrum={this.handleClick}/>
        </div>
      </div>
    );
  }
}

class DrumPadElement extends Component {
  // constructor(props){
  //   super(props)

  // }
  handleClick = () => {
    this.props.onClickDrum(this.props.sound)
  }
  render(){
    return(
      <div className="drum-pad" id={this.props.sound}>
        <Button 
          onClick={this.handleClick}
          color="primary"
          variant="contained"
        >
          {this.props.actionKey}
        </Button>
      </div>
    )
  }
}

export default App;
