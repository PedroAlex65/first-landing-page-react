import React from 'react'

const Main = () => {
  return (
    <div>
          <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Murazak Code</h3>
            </div>
            <div className="item-menu">
              <a href="#">Loguin</a>
            </div>
          </div>

          <div className="form">
            <h2>Entre em contato</h2>
            <form>
              <div className="items-forms">
                <input placeholder="Seu nome:" type="text" />
                <input placeholder="Sua idade:" type="text" />
                <input placeholder="Telefone:" type="text" />
                <input placeholder="Cidade:" type="text" />

                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="conteudo">
        <div className="center">
          <div className="conteudo-single">
            <h3>Titulo da chamada</h3>
            <p>
              {" "}
              Aque é o meu conteudo de exemplo para o site da danki code! Espeor
              que voce goste :)
            </p>
          </div>
          <div className="conteudo-single">
            <h3>Titulo da chamada</h3>
            <p>
              {" "}
              Aque é o meu conteudo de exemplo para o site da danki code! Espeor
              que voce goste :)
            </p>
          </div>
          <div className="conteudo-single">
            <h3>Titulo da chamada</h3>
            <p>
              {" "}
              Aque é o meu conteudo de exemplo para o site da danki code! Espeor
              que voce goste :)
            </p>
          </div>
          <div className="conteudo-single">
            <h3>Titulo da chamada</h3>
            <p>
              {" "}
              Aque é o meu conteudo de exemplo para o site da danki code! Espeor
              que voce goste :)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main