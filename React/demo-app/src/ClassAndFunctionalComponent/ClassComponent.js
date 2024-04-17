import './Components.css';
import React, { Component } from 'react'

export default class ClassComponent extends Component {
      constructor(){
        super();
        this.state = {
            customText: 'Welcome to State in Class',
            input:''
          }
      }
      
      componentDidMount() {
        setTimeout(() => {
          this.setState({customText:'Modified Text after 3 sec'})
        }, 3000);
      }
    
      componentDidUpdate() {
        const myDiv=document.getElementById('inp');
        myDiv.innerHTML='Input :'+this.state.input;
      }
    
      handleInput = e => {
        this.setState({ input:e.target.value });
      };




  render() {
    return (
        <div className='mainComponentDiv'>
            <div>This is ClassComponent</div>
            <div>This is the state in Class component that changes after 3 sec<br/>{this.state.customText}</div>
            <div >Enter input<br/>A simple input handler
            <div id='inp'>Input : </div>
          <input placeholder='Enter text here' onChange={this.handleInput}></input>
      </div>
        </div>
    )
  }
}
