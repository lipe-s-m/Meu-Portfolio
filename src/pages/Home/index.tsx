import Header from "../../components/Header";
import UserPicPrincipal from "./../../icons/Icons/eu.jpeg";
import aspas from "./../../icons/Icons/aspas.png";
import html from "./../../icons/Skills/html5.png";
import css from "./../../icons/Skills/css.png";
import react from "./../../icons/Skills/react.png";
import node from "./../../icons/Skills/node.png";
import javascript from "./../../icons/Skills/js.png";
import typescript from "./../../icons/Skills/typescript.png";
import mysql from "./../../icons/Skills/mysql.png";
import java from "./../../icons/Skills/java.png";
import postgre from "./../../icons/Skills/postgre.png";
import agendamentoRu from "./../../icons/Pictures/agendamentoRU2.jpg"
import listaDeMusicas from "./../../icons/Pictures/listaDeMusicas.png"
import github from "./../../icons/Icons/github.png"
import site from "./../../icons/Icons/world.png"
import "./index.css";
import React from "react";

export default function Home() {
  return (
    <>
      <div id="container-page">
        <Header />
        <section id="apresentacao">
          <div className="container">
            <div className="textos">
              <p className="titulo-pequeno fade">Ola! Eu sou</p>
              <h1 className="titulo-grande fade">Felipe Serejo!</h1>
              <p className="titulo-medio fade">Desenvolvedor Web | FullStack</p>
            </div>

            <img
              className="minha-foto-principal"
              src={UserPicPrincipal}
              alt="Foto de Perfil"
            ></img>
          </div>
        </section>

        <article id="sobre-mim">
          <div className="container">
            <div className="textos">
              <h3 className="titulo-medio">Sobre Mim</h3>
              <h2 className="titulo-pequeno">
                Desenvolvedor FullStack | Junior
              </h2>

              <p className="sobre-mim-descricao">
                Oi! Eu sou o Felipe, tenho 19 anos e estou cursando Ciência da
                Computação na UFRRJ há quase dois anos. A programação é minha
                paixão, e meu objetivo é solucionar desafios de maneira
                inovadora, criando sistemas completos e interfaces intuitivas e
                agradáveis ao usuário.
                <br />
                Tenho experiência tanto em Front End quanto em Back End, com
                habilidades em HTML, CSS, JavaScript, NodeJS, MySQL e frameworks
                modernos como React. Tenho a capacidade de construir e integrar
                aplicações completas, desde a interface até o gerenciamento de
                dados e lógica de servidor. <br />
                Estou sempre buscando aprender algo novo e aprimorar minhas
                habilidades. Cada projeto é uma oportunidade para crescer e
                enfrentar novos desafios.
                <br />
                Vamos juntos criar algo incrível?
                <br />
              </p>
            </div>
            <img className="aspas" src={aspas} alt="Aspas decorativas"></img>
          </div>
        </article>

        <article id="tecnologias">
          <h3 className="titulo-pequeno">Tecnologias</h3>
          <p className="descricao">Abaixo estão algumas das tecnologias que utilizo. <br></br>Clique nos icones e descubra um pouco mais!</p>

          <div className="skills-icons">
            <img className="html" src={html} alt="HTML icon" />
            <img className="css" src={css} alt="CSS icon" />
            <img className="javascript" src={javascript} alt="Javascript icon" />
            <img className="typescript" src={typescript} alt="Typescript icon" />
            <img className="react" src={react} alt="ReactJS icon" />
            <img className="nodejs" src={node} alt="NodeJS icon" />
            <img className="java" src={java} alt="Java icon" />
            <img className="mysql" src={mysql} alt="MySQL icon" />
            <img className="postgre" src={postgre} alt="PostgreSQL icon" />
          </div>
        </article>

        <section id="projetos">
          <h3 className="titulo-pequeno">Projetos</h3>
          <div className="projetos-lista">
            <div className="projetos-card">
              <div className="divisor">
                <img className="agendamentoRu" src={agendamentoRu} alt="Projeto Agendamento no RU"></img>
              </div>
              <div className="textos">
                <span className="titulo-medio">Agendamento RU</span>
                <p className="descricao">
                  Desenvolvi um site que permite aos universitários da UFRRJ
                  agendarem horários no Restaurante Universitário. Além disso,
                  os alunos podem visualizar os cardápios disponíveis e os
                  administradores têm a capacidade de criar novos cardápios.
                  Utilizei autenticação do Google para garantir que apenas
                  usuários com domínio de e-mail da UFRRJ tenham acesso ao
                  sistema, e cadastrei cada usuário no banco de Dados.
                </p>
                <div className="skills-icons">
                  <img className="react" src={react} alt="ReactJS icon" />
                  <img className="nodejs" src={node} alt="NodeJS icon" />
                  <img className="mysql" src={mysql} alt="MySQL icon" />
                </div>
                <div className="projetos-rodape">
                  <div className="projeto">
                    <img className="repo-img" src={site} alt="site icon"></img> <span className="projeto-text"> &lt; Acessar Projeto /&gt; </span>
                  </div>
                  <div className="repositorio">
                    <img className="repo-img" src={github} alt="Github icon"></img> <span className="repo-text"> &lt; Repositório /&gt; </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="projetos-card">
            <div className="divisor">
                <img className="agendamentoRu" src={listaDeMusicas} alt="Projeto Agendamento no RU"></img>
              </div>
              <div className="textos">
                <span className="titulo-medio">Lista de Musicas</span>
                <p className="descricao">
                Desenvolvi este sistema para auxiliar os ministros na criação de repertórios de louvores em suas igrejas, proporcionando uma padronização eficiente das listas de músicas. A ideia surgiu da minha própria experiência e do tempo considerável que esse processo demanda. Com esse site, busco otimizar e simplificar essa tarefa, permitindo que os usuários se concentrem no essencial, enquanto a aplicação cuida da estilização do repertório.
                </p>
                <div className="skills-icons">
                  <img className="react" src={react} alt="ReactJS icon" />
                </div>
                <div className="projetos-rodape">
                  <div className="projeto">
                    <img className="repo-img" src={site} alt="site icon"></img> <span className="projeto-text"> &lt; Acessar Projeto /&gt; </span>
                  </div>
                  <div className="repositorio">
                    <img className="repo-img" src={github} alt="Github icon"></img> <span className="repo-text"> &lt; Repositório /&gt; </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="projetos-card">
            <div className="divisor">
                <img className="agendamentoRu" src={agendamentoRu} alt="Projeto Agendamento no RU"></img>
              </div>
              <div className="textos">
                <span className="titulo-medio">Agendamento RU</span>
                <p className="descricao">
                  Desenvolvi um site que permite aos universitários da UFRRJ
                  agendarem horários no Restaurante Universitário. Além disso,
                  os alunos podem visualizar os cardápios disponíveis e os
                  administradores têm a capacidade de criar novos cardápios.
                  Utilizei autenticação do Google para garantir que apenas
                  usuários com domínio de e-mail da UFRRJ tenham acesso ao
                  sistema, e cadastrei cada usuário no banco de Dados.
                </p>
                <div className="skills-icons">
                  <img className="react" src={react} alt="ReactJS icon" />
                  <img className="nodejs" src={node} alt="NodeJS icon" />
                  <img className="mysql" src={mysql} alt="MySQL icon" />
                </div>
                <div className="projetos-rodape">
                  <div className="projeto">
                    <img className="repo-img" src={site} alt="site icon"></img> <span className="projeto-text"> &lt; Acessar Projeto /&gt; </span>
                  </div>
                  <div className="repositorio">
                    <img className="repo-img" src={github} alt="Github icon"></img> <span className="repo-text"> &lt; Repositório /&gt; </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
