import React from "react";
import Logo from "./ContainerLayout/Logo";
import Title from "./ContainerLayout/Title";
import List from "./ContainerLayout/List";
import Grille from "./ContainerLayout/Grille";
import Footer from "./ContainerLayout/Footer";
import Image from "./ContainerLayout/Image";
import Form from "./ContainerLayout/Form";
import "../styles/Container.css";
function Container() {
  return (
    <div className="wrapper">
      <div className="grid">
        <div className="main-content">
          <Logo />
          <Title />
          <List />
          <Grille />
          <Footer />
        </div>
        <div>
          <Image />
        </div>
      </div>
      <Form/>
    </div>
  );
}

export default Container;
