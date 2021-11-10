import React, { Component } from 'react';
import ListaDeNotas from './Components/ListaDeNotas';
import FormularioCadastro from './Components/FormularioCadastro'

class App extends Component{
  render(){
    return (  
      <>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </>
    );
  }
}

export default App;
