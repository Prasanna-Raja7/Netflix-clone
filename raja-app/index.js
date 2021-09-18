import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Parentcomp extends React.Component{
  constructor()
  {
    super();
    this.state = {value:"Raja",id:"1"};
  }
  componentWillMount() {
    alert("Poda vena");
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({value:"useless"})
    },3000)
  }
  render()
  {
    return <div>
      <h1>Hi my name is {this.state.value} and my ID is {this.state.id}</h1>
      <button type="button" onClick={this.changeval}>Click Here</button>
    </div>
  }
  changeval = () => {
    this.setState({value:"Prasanna",id:"5"});
  }
}

const ele = 
      <div className="header">
        <h1>HI</h1>
        <h2>How r u</h2>
      </div>
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
/*<React.StrictMode>
    
  </React.StrictMode>*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

