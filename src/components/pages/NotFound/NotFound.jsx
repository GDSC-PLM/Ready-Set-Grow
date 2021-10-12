import React, { Component } from "react";
import "./styles/notFound.css";

export default class NotFound extends Component {
  render() {
    return (
        <section className="not-found-page">
            <h1>404 - Page not Found</h1>
            <div className="gap">
                Just created a temporary gap here. Remove when working on this part of website.
            </div>
        </section>
    );
  }
}