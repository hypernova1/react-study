import React, { Component } from 'react';

class LifeCircle extends Component {
  state = {
    number: 0,
    color: null
  }

  myRef = null;

  // 컴포넌트를 만들 때 처음으로 실행
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // props로 받아온 값을 state에 동기화 시키는 메서드
  // 컴포넌트를 마운트하거나 props를 변경할 때 호출
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps');
    if(nextProps.color !== prevState.color){
      return { color: nextProps.color }
    }
    return null;
  }

  // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
  componentDidMount(){
    console.log('componentDidMount');
  }

  // props나 state를 변경했을 때 리렌더링을 할지 결정 (true-default/false)
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate nextProps: ', nextProps,'nextState: ', nextState);
    return nextState.number % 10 !== 4;
  }

  // 컴포넌트를 DOM에서 제거할 때 실행
  // componentDidMount에서 등록한 이벤트, 타이머 및 직접 생성한 DOM이 있다면 여기서 제거
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  // render 메서드를 호출한 후 DOM에 반영하기 직전에 호출하는 메서드
  // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용 (ex. 스크롤바 위치)
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color){
      return this.myRef.style.color;
    }
    return null;
  }

  // 리렌더링을 완료한 후 실행
  // prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 가능
  // getSnapshotBeforeUpdate에서 반환값이 있을 시 여기에서 snapshot값을 전달 받을 수 있음
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate');
    if(snapshot){
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render(){
    console.log('render')
    const style = {
      color: this.props.color

    }
    return (
      <div>
        <h1 style={style} ref={ref => this.myRef = ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>

      </div>
    )
  }
}

export default LifeCircle;