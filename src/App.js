import React, { Component } from 'react';
import './App.css';
import autoBind from "react-autobind";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Karta from "./components/Karta.js"
import Vyhledavac from "./components/Vyhledavac.js"

class App extends Component {
constructor (props){
  super(props)
  autoBind(this);
  

  this.state = {
    lexem : 0,
    karta: 1,
    json: require("./Kolcejson.json"),
    filteredJson: []
  } 

}
backToBasic(){
  this.setState({filteredJson:[],karta:1,lexem:0})
}

filterByKoren(koren){
  this.setState({filteredJson: this.state.json.filter(lexem => lexem.FIELD2 === koren )})
}
filterByPrepis(koren){
  this.setState({filteredJson: this.state.json.filter(lexem => lexem.FIELD4 === koren )})
}
filterBySemanticky(koren){
  this.setState({filteredJson: this.state.json.filter(lexem => lexem.FIELD5 === koren )})
}
filterByAlfanumericky(koren){
  this.setState({filteredJson: this.state.json.filter(lexem => lexem.FIELD12 === koren )})
}
filterByPreklad(text){
    this.setState({filteredJson: this.state.json.filter(lexem => lexem.FIELD9.includes(text) ||lexem.FIELD11.includes(text) )})
}

predchoziLexem(){
 
  if(this.state.lexem > 0){
  this.setState({
    lexem : this.state.lexem-1
  })}
}

nasledujiciLexem(){
 
  
  this.setState({
    lexem : this.state.lexem +1
  })
}

predchoziKarta(){
  if(this.state.karta > 1){
  this.setState({
    karta : this.state.karta -1,
    lexem: 0
  })}
}

nasledujiciKarta(){
  this.setState({
    karta : this.state.karta +1,
    lexem: 0
  })
}
 
  render() {
    var filter = []
    var lexemCount = 0
    if(this.state.filteredJson.length > 1){
      filter = this.state.filteredJson
      lexemCount = this.state.lexem+1+"/"+filter.length
   }
    else{
      filter = this.state.json.filter(karta => karta.FIELD1 == this.state.karta)
      lexemCount = this.state.lexem+1+"/"+filter.length
   }
    
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-3">
            <button className="btn btn-danger" onClick = {this.predchoziKarta}>Předchozí karta</button>
          </div>            
          <div className="col-md-6">
          </div>
          <div className="col-md-3">
            <button className="btn btn-success" onClick = {this.nasledujiciKarta}>Následujicí karta</button>
          </div>    
        </div> 
        <div className="row">
          
        <div className="col-md-3">
            <button className="btn btn-danger lexem" onClick = {this.predchoziLexem}>Předchozí lexém</button>
          </div> 
          <div className="col-md-6 " >
            <Karta filterByKoren = {this.filterByKoren} filterByPrepis={this.filterByPrepis} filterBySemanticky={this.filterBySemanticky} filterByAlfanumericky={this.filterByAlfanumericky} lexemCount={lexemCount} field1={filter[this.state.lexem].FIELD1} field2={filter[this.state.lexem].FIELD2}  field3={filter[this.state.lexem].FIELD3} field4={filter[this.state.lexem].FIELD4} field5={filter[this.state.lexem].FIELD5} field6={filter[this.state.lexem].FIELD6} field7={filter[this.state.lexem].FIELD7} field8={filter[this.state.lexem].FIELD8} field9={filter[this.state.lexem].FIELD9} field10={filter[this.state.lexem].FIELD10} field11={filter[this.state.lexem].FIELD11} field12={filter[this.state.lexem].FIELD12} field13={filter[this.state.lexem].FIELD13}/>
          </div> 
           <div className="col-md-3">
            <button className="btn btn-success lexem" onClick = {this.state.lexem +1 < filter.length ? this.nasledujiciLexem:null}>Následujicí lexém</button>
          </div>
             
        </div> 
        <Vyhledavac filterByKoren={this.filterByKoren} filterByPrepis={this.filterByPrepis}
        filterBySemanticky={this.filterBySemanticky} filterByAlfanumericky={this.filterByAlfanumericky} filterByPreklad={this.filterByPreklad} json = {this.state.json}backToBasic={this.backToBasic} filteredJson={this.state.filteredJson.length}/> 
      </div>
    );
  }
}

export default App;
