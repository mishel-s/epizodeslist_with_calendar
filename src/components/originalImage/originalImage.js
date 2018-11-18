import React, { Component } from 'react';
import './styles.css';
import logoTV from "../../assets/img/tv-png.png";

class OriginalImage extends Component {
  render() {
    const { show, originalImgLink, originalImgName } = this.props;
    return(
      <div className="big-image" style={{ display: show }} onClick={()=> {this.props.toggleBigImage(originalImgLink)}} >
        <div className="bground"></div>
        <img className="card-img-big" src={ originalImgLink ?  originalImgLink : logoTV } alt={originalImgName} />
      </div>
    )
  }
}

export default OriginalImage;