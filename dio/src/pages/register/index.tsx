import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { IFormData } from "./types";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({

    nome: yup
      .string()
      .required("campo obrigatório"),
    email: yup
      .string()
      .email("email não é valido")
      .required("campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("campo obrigatório"),
    confPassword: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("campo obrigatório"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha invalido.");
      }
    } catch {
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A platarma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas do
            mercado!
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>
              Faça seu cadastro, é simples, rápido e fácil!
            </TitleLogin>
            <SubTitleLogin>Preencha os campos:</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />

              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />

              <Input
                name="confPassword"
                errorMessage={errors?.confPassword?.message}
                control={control}
                placeholder="Confirme a Senha"
                type="password"
                leftIcon={<MdLock />}
              />

              <Button title="Cadastrar" variant="secondary" type="submit" />
            </form>

            <SubTitleLogin>
              <br />
              Ao clicar em "Criar minha conta grátis", declaro que aceito as
              políticas de privacidade e os termos de Uso da DIO.
            </SubTitleLogin>
            <Row>
              <EsqueciText>Já tem conta?</EsqueciText>
              <CriarText>
                <Link to="/login">Fazer Login</Link>
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
