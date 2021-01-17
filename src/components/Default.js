import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">erreur</h1>
            <h1 className="display-3">404</h1>
            <h5>(page not found)</h5>
            <br />
            <h4>
              L'URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              n'existe pas :(
            </h4>
            <br />
            <Link to="/" className="text-decoration-none">
              <h3>retour à la page d'accueil</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
