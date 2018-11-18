import React, { Component } from 'react';
import MovieItem from '../../components/movieItem/movieItem.js';
import MDSpinner from "react-md-spinner";
import OriginalImage from '../../components/originalImage/originalImage.js';
import serialEnding from './functions.js';
import './styles.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 'short',
      bigImage: 'none',
      originalImgLink: '',
      originalImgName: '',
    }
  }

  toggleList = () => {
    this.setState({
      list: (this.state.list === 'short') ? 'long' : 'short',
    })
  }

  toggleBigImage = (originalImgLink, originalImgName) => {
    console.log('1');
    this.setState({ 
      bigImage: (this.state.bigImage === 'none') ? 'flex' : 'none',
      originalImgLink: originalImgLink,
      originalImgName: originalImgName,
     })
  }

  toggleArrow = () => {
    return (this.state.list === 'short') 
      ? <div className="bt-arrow">&gt;</div>
      : <div className="bt-arrow">&lt;</div>
  }

  quantitySerials = () => {
    return ( (this.props.moviesData.length-3) < 0 ) ? 0 : (this.props.moviesData.length-3)
  }

  

  render() {
    const { date, moviesData, logoTV } = this.props;
    return (
      <div className="movieList">
        <div className="movieList-date">
          {date.toLocaleString("ru", { day: 'numeric', month: 'long' })} {date.getFullYear()}
        </div>
        { ( moviesData && (this.state.list === 'short') )
          ? (moviesData.slice(0, 3)).map((movie)=> (
              <div key={movie.id} id={movie.id}>
                <MovieItem
                  data={movie}
                  logoTV={logoTV}
                  toggleBigImage={this.toggleBigImage}
                  show={this.state.bigImage}
                  originalImgLink={this.state.originalImgLink}
                />
              </div>
            ))
          :  ( moviesData && (this.state.list === 'long') )
          ? moviesData.map((movie)=> (
              <div key={movie.id} id={movie.id}>
                <MovieItem
                  data={movie}
                  logoTV={logoTV}
                  toggleBigImage={this.toggleBigImage}
                  show={this.state.bigImage}
                />
              </div>
            ))
          : (
            <div>
              <MDSpinner size={70} borderSize={3} singleColor="rgb(216, 83, 83)" />
            </div>
          )
        }
        <div className="block-bt">
          <button className="bt-longList" 
                  onClick={ this.toggleList }
          >
            Ещё { this.quantitySerials() } сериал{serialEnding(moviesData)} {this.toggleArrow()}
          </button>
        </div>
        <OriginalImage 
          originalImgLink={this.state.originalImgLink}
          toggleBigImage={this.toggleBigImage}
          show={this.state.bigImage}
          originalImgName={this.state.originalImgName}
        />
      </div>
    );
  }
}

export default MovieList;