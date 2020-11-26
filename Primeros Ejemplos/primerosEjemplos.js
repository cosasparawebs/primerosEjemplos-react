// import React from 'react';
// import './App.css';

// function HelloWorld(props) {
//   console.log(props)
//   return (
//     <div id="hello">
//       <h3>{props.sub}</h3>
//       {props.mytext}
//     </div>
//   )
// }

// class HelloWorld extends React.Component {

//     state = {
//       show: true
//     }
  
//     toggleShow = () => {
//       this.setState({show: !this.state.show})
//     }
  
//     render() {
//       if(this.state.show){
//         return(
//           <div id="hello">
//           <h3>{this.props.sub}</h3>
//           {this.props.mytext}
//           <button onClick={this.toggleShow}>Cambiar estado</button>
//         </div>
//         )
//       } else{
//         return <h1>
//           No hay elementos
//           <button onClick={this.toggleShow}>Cambiar estado</button>
//         </h1>
//       }
//     }
//   }
  
  
//   function App() {
//     return (
//     <div>Este es mi componente: 
//       <HelloWorld mytext="hola ramon" sub="subtitulo"/> 
//       <HelloWorld mytext="zaraza" sub="otro subtitulo"/> 
//       <HelloWorld mytext="zaraza 3" sub="subtitulo 3"/>
//     </div>
//     );
//   }

// export default App;