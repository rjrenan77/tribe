import React from "react";
import background from "../../assets/background.png";
import { Container } from "./styles";

function Background() {
  return (
    <Container>
      <img src={background} alt="" />
    </Container>
  );
}

export default Background;
