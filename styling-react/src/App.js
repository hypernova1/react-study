import React, { Component } from 'react';
import StyledButton from './component/StyedButton'
// import classNames from 'classnames'
// import classnames from 'classnames/bind'
// import styles from './App.module.css';
// import styles from './App.scss'

// const isBlue = true;
// const cx = classnames.bind(styles);

// 일반 css
// <div className={[styles.box, styles.blue].join(' ')}></div>
// classnames 라이브러리 사용
// <div className={ classNames(styles.box, styles.blue) }></div>
// classnames/bind 사용
// <div className={cx('box', {blue: isBlue})}>bbb</div>

// Sass
// <div className={cx('box', {blue: isBlue})}>
//   <div className={cx('box-inside')}/>
// </div> 


class App extends Component {
  render() {
    return (
      <div>
        <StyledButton>버튼</StyledButton>
      </div>
    );
  }
}

export default App;
