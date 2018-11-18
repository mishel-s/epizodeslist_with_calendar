import React, { Component } from 'react';
import './App.css';
import logoTV from "./assets/img/tv-png.png";
import Calendar from 'react-calendar';
import MovieList from './containers/movieList/movieList.js';
import MDSpinner from "react-md-spinner";
import getEpizodesList from './api/request.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        epizodesList: [],
    }
  }

  setEpizodesList = (date) => {
    getEpizodesList(date)
      .then(data => {
        this.setState({
          epizodesList: data,
        })
      })                
  } 

  onChangeDate = date => {this.setState({ date: date})}

  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <h1>SUPER FILM</h1>
        </header>
        <main className="App-main">
          { (this.state.epizodesList.length)
            ? (
              <div className="dayMovieList">
                <button
                  className="bt-back"
                  onClick={ () => { this.setState({ epizodesList: [] }) } }
                >&lt;
                </button>
                <MovieList
                  moviesData={this.state.epizodesList}
                  logoTV={logoTV}
                  date={this.state.date}
                />
              </div>
            )
            : (!this.state.epizodesList.length)
            ? (
              <React.Fragment>
                <div className="content">
                  <img src={logoTV} alt="tv" />
                  <span>Для получения списка сериалов,<br/> 
                  пожалуйста, выберите <br/>
                  необходимый месяц и день</span>
                </div>
                <div className="calendar">
                  <Calendar           
                    onChange={this.onChangeDate} 
                    value={this.state.date}
                    onClickDay={() => {this.setEpizodesList(this.state.date)}}
                  />
                </div>
              </React.Fragment>
            )
            : (
              <div>
                <MDSpinner size={70} borderSize={3} singleColor="rgb(216, 83, 83)" />
              </div>
            )
          }
        </main>
      </div>
    )
  }
}

export default App;
