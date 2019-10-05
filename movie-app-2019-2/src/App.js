import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    console.log("constructor");
  }

  state = { //state는 직접 변경하면 안 됨
    isLoading: true,
    movies: [],
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  getMovies = async() => {
    const {
      data : {
        data: { movies }
      }
     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

     this.setState({ movies, isLoading: false });
  }

  componentDidMount() { //렌더링이 완료되고 호출
    console.log("component rendered");
    this.getMovies();

  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component will unmounted");
  }

  render() { //리액트는 자동으로 클래스 컴포넌트의 render 함수를 실행한다.
    console.log("render");
    const { isLoading, movies } = this.state;
    console.log(movies);
    return (
      <section className="container">
        {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div> ) : ( 
            <div className="movies">
              {movies.map(movie => (
                        <Movie 
                          id={movie.id}
                          year={movie.year}
                          title={movie.title}
                          summary={movie.summary}
                          poster={movie.medium_cover_image}
                          key={movie.id}
                          genres={movie.genres} />
              ))}
              </div>
        )}
      </section>
    
    );
  }
}

export default App;
