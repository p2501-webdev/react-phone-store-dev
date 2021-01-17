import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}

              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="Product image" />
                </div>
                {/* end of product info */}

                <div className="col-10 mx-auto col-md-6 my-3">
                  {/* product creator and price */}
                  <h2>{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Créé Par : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Prix : {price}
                      <span>€</span>
                    </strong>
                  </h4>
                  {/* end of product creator and price */}

                  {/* product description */}
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Informations sur le produit :{" "}
                  </p>
                  <p className=" text-muted lead">{info}</p>
                  {/* end of product description */}

                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer className="text-capitalize px-2">
                        retour galerie
                      </ButtonContainer>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                        className="text-capitalize px-2 font-weight-bold"
                      >
                        {inCart ? "Déjà dans le panier" : "ajouter au panier"}
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
