import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name : '홍길동'
  }
  static propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
  }
  state = {
    number: 0
  }
  render(){
    return (
        <div>
          <p>안녕하세요 제 이름은 {this.props.name}입니다.</p>
          <p>저는 {this.props.age}살입니다.</p>
          <p>숫자: {this.state.number}</p>
          <button onClick={() => {
            this.setState({
              number : this.state.number + 1
            })
          }}>더하기</button>
        </div>
    )
  }
}
// 예전의 default prop 설정 방법
// MyComponent.defaultProps = {
//   name: "홍길동"
// }
export default MyComponent;

