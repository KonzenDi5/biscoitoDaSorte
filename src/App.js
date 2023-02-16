import React, { Component } from "react";
import './estilo.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.frases = [
      'Me perco fácil nesse teu sorriso. ❤', 
      'Conexão é a coisa mais linda e rara que há. 💗',
      'Sou apaixonado por cada detalhe do teu ser. 💗',
       'Estar com você, sorrir e agradecer! 🍀',
      'Ainda bem que eu tenho você! 💟', 
      'Somos 8 e 80, juntos formamos o infinito desse amor. 💖',
      'Você é a causa da minha felicidade. Você é o motivo do meu sorriso ... Você é quem faz a vida parecer ter sentido. ✨',
        'Te conhecer foi como escutar uma canção pela primeira vez e saber que seria a minha favorita para sempre. 🥰',
        'Minha sorte grande, meu amor  por toda a vida. 😍',
        'Você é minha felicidade, minha verdade, meu motivo de paz. 💕',
        'Amar é saber ceder, se importar, se revoltar, mas resolver e sempre voltar pro lar. 💕'
        ]
  }

  quebraBiscoito(){
    let state = this.state
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = this.frases[numeroAleatorio]
    this.setState(state)
  }

  render() {
    return <div className="container">
      <img className="img" src={require('./assets/biscoito.png')}/>
      <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
      <h3 className="textoFrase">{this.state.textoFrase}</h3>
    </div>;
  }
}


class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}
export default App;
