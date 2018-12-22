import React, { Component } from 'react';
import classNames from 'classnames'
import classnames from 'classnames/bind'
import styles from './App.module.css';

const cx = classnames.bind(styles);
class App extends Component {
  render() {
    return (
      <>
      <div className={[styles.box, styles.blue].join(' ')}></div>
      {/* classnames 라이브러리 사용 */}
      <div className={ classNames(styles.box, styles.blue) }></div>
      {/* classnames/bind 사용 */}
      <div className={cx('box', 'blue')}>aaa</div>
      </>
    );
  }
}

export default App;
