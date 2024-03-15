import React from "react"
import './App.css';
import Header from "./component/Header"
import Workspace from "./component/Workspace"
import Footer from "./component/Footer"

class App extends React.Component{
  render(){
    return (
      <div className="container">
        <Header />
        <Workspace />
        <Footer />
      </div>
    )
  }
}

export default App;
