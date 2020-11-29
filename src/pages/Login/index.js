import React from "react";

import Logo from "../../components/Logo";
import { Container, Form, Label } from "./styles";
import background from "../../assets/background.png";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <Container background={background}>
        <Logo />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Form>
            <input name="email" ref={register({ required: true })} />

            {errors.email && <span>Campo email é obrigatório!</span>}
          </Form>
          <Label>Senha</Label>
          <Form>
            <input name="senha" ref={register({ required: true })} />

            {errors.senha && <span>Campo senha é obrigatório!</span>}
          </Form>

          <Form>
            <input type="submit" value="LOGIN" />
          </Form>
        </form>
      </Container>
    </>
  );
}

export default Login;
