import React, { Component } from 'react';
import './tour.scss'

class Tour extends Component {
  render() {
    // console.log(this.props)
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props
    return (
      <article className="tour">
        <div className="img__container">
          <img src={img} alt="type of tour" />
          <span className="close__btn">
            <i className="fas fa-window-close" />
          </span>
        </div>

        <div className="tour__info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info {" "}
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}

export default Tour;