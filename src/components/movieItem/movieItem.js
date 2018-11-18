import React, { Component } from 'react';
import './styles.css';

class MovieItem extends Component{
  render() {
    const { logoTV } = this.props;  
    const {
          season, number,
          show: { name, premiered, image },
          } = this.props.data;
    return(
      <div className="card">
        <div className="card-img">
          <img className="card-img-top" onClick={()=> {this.props.toggleBigImage( ((image !== null) ? image.original : logoTV), name )}} src={(image !== null) ? image.medium : logoTV } alt={name} />
        </div>
        <div className="card-body">
          <div className="main--card-title">
            <h4 className="card-title">{name}</h4>
          </div>
          <p className="card-premiered">{premiered.substr(0,4)}</p>
          <div className="card-info">
            <div className="card--info-season">Сезон: {season}</div>
            <div className="card--info-epizode">Эпизод: {number}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieItem;