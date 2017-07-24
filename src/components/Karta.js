import React, {Component} from 'react';
import "./Karta.css"
import autoBind from "react-autobind";

export default class Karta extends Component {
    constructor(props){
    super(props);
    autoBind(this);
    }
filterByKoren (e){ 
    this.props.filterByKoren(e.target.text)
}
filterByPrepis(e){
    this.props.filterByPrepis(e.target.text)
}
filterBySemanticky(e){
    this.props.filterBySemanticky(e.target.text)
}
filterByAlfanumericky(e){
    this.props.filterByAlfanumericky(e.target.text)
}


render (){
    return(
        <table className="table table-striped">
            <tbody>
            <tr>
                <td className="first">číslo karty</td>
                <td>{this.props.field1}</td>
            </tr>
            <tr>
                <td className="first">počet lexémů</td>
                <td>{this.props.lexemCount}</td>
            </tr>
            <tr className="info">
                <td className="first" >kořen</td> 
                <td className="filter"> <a onClick={this.filterByKoren}>{this.props.field2}</a></td>
            </tr>
            <tr>
                <td className="first">charakteristika arabského kořene</td>
                <td>{this.props.field3}</td>
            </tr>
            <tr className="first info">
                <td className="first">fonetický přepis</td> 
                <td className="filter"><a onClick={this.filterByPrepis}>{this.props.field4}</a></td>
            </tr>
            <tr className="first info">
                <td className="first ">sémantická jednotka</td> 
                <td className="filter"><a onClick={this.filterBySemanticky}>{this.props.field5}</a></td>
            </tr>
            <tr>
                <td className="first">charakteristika sémantické jednotky</td> 
                <td>{this.props.field6}</td>
            </tr>
            <tr>
                <td className="first">arabský záznam</td> 
                <td>{this.props.field7}</td>
            </tr>
            <tr>
                <td className="first">množné číslo</td> 
                <td>{this.props.field8}</td>
            </tr>
            <tr>
                <td className="first">doslovný obsah lístku v českém jazyce bez hlavičky</td> 
                <td>{this.props.field9}</td>
            </tr>
             <tr>
                <td className="first">charakteristika obsahu lístku</td> 
                <td>{this.props.field10}</td>
            </tr>
             <tr>
                <td className="first">doslovný obsah lístku v německém jazyce bez hlavičky</td>
                <td>{this.props.field11}</td>
            </tr>
             <tr className=" info">
                <td className="first">alfanumerický kód</td> 
                <td className="filter"><a onClick={this.filterByAlfanumericky}>{this.props.field12}</a></td>
            </tr>
             <tr>
                <td className="first">poznámky</td> 
                <td>{this.props.field13}</td>
            </tr>
            </tbody>
        </table>    
    )
}


}