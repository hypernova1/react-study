import React, { Component } from 'react';

class EventPractice extends Component{
  state = {
    message : '',
    username : ''
  }
  // ES5 (기명함수)
  // constructor(props){
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleChange(e){
  //   this.setState({
  //     message: e.target.value
  //   });
  //   console.log(e.target.value)
  // }
  // handleClick(){
  //   alert(this.state.message);
  //   this.setState({
  //     message: ''
  //   });
  // }
  
  // ES6 (화살표 함수)
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  }
  render(){
    return(
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="username" placeholder="이름 입력" 
          value={this.state.username} onChange={ this.handleChange }/>
        <input type="text" name="message" placeholder="메시지 입력"
          value={this.state.message} onChange={ this.handleChange } onKeyPress={ this.handleKeyPress } />
        <button onClick={this.handleClick}>확인</button> 
      </div>
    )
  }

}

export default EventPractice;