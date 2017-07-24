import React, {Component} from "react"
import autoBind from "react-autobind";
import "./Vyhledavac.css"

export default class Vyhledavac extends Component {
constructor(props){
    super(props);
    autoBind(this);
    this.state = {
        filterKoren:"",
        filterPrepis:"",
        filterSemanticky:"",
        filterAlfanumericky:"",
        filterPreklad:""
        
    }
}
/*sumbit (e){
    e.preventDefault();   
}*/


filterKoren(e){
    this.setState({filterKoren: e.target.value})   
}
filterPrepis(e){
    this.setState({filterPrepis: e.target.value})   
}
filterSemanticky(e){
    this.setState({filterSemanticky: e.target.value})   
}
filterAlfanumericky(e){
    this.setState({filterAlfanumericky: e.target.value})   
}
filterPreklad(e){
    this.setState({filterPreklad: e.target.value})   
}


backToBasic(e){
    e.preventDefault();
    this.props.backToBasic();
}
filterByKoren (e){
    e.preventDefault();
    this.props.filterByKoren(this.state.filterKoren)
}
filterByPrepis (e){
    e.preventDefault();
    this.props.filterByPrepis(this.state.filterPrepis)
}
filterBySemanticky (e){
    e.preventDefault();
    this.props.filterBySemanticky(this.state.filterSemanticky)
}
filterByAlfanumericky (e){
    e.preventDefault();
    this.props.filterByAlfanumericky(this.state.filterAlfanumericky)
}
filterByPreklad (e){
    e.preventDefault();
    this.props.filterByPreklad(this.state.filterPreklad)
}

    render (){
        return(
            <div>
                <div style={{fontSize:20}}>
                    Nalezeno {this.props.filteredJson} lexemu
                </div>
                <button onClick={this.backToBasic}className="btn btn-primary">Zpět na celou databázi</button>
                <hr/>
                <form onSubmit={this.sumbit}>
                    <div className="form-group ">
                        <label for = "koren">Vyhledávání pomocí kořene</label>
                        <input onChange={this.filterKoren} type = "text" id= "koren" className = "form-control input" placeholder ="arabský kořen"/>                    
                    </div> 
                    <button onClick = {this.filterByKoren} className="btn btn-primary">Vyhledej</button>  
                    <hr/>
                    <div className="form-group ">
                        <label for = "prepis">Vyhledávání fonetického přepisu</label>
                        <input onChange={this.filterPrepis} type = "text" id= "prepis" className = "form-control input" placeholder ="fonetický přepis"/>                    
                    </div>  
                    <button onClick = {this.filterByPrepis} className="btn btn-primary">Vyhledej</button>
                    <hr/>
                    <div className="form-group">
                        <label for = "semanticky">Vyhledávání pomocí sémantické jednotky</label>
                        <input onChange={this.filterSemanticky} type = "text" id= "semanticky" className = "form-control input" placeholder ="sémantická jednotka"/>                    
                    </div>  
                    <button onClick = {this.filterBySemanticky} className="btn btn-primary">Vyhledej</button>
                    <hr/>
                    <div className="form-group ">
                        <label for = "alfanumericky">Vyhledávání pomocí alfanumerického kódu</label>
                        <input onChange={this.filterAlfanumericky} type = "text" id= "alfanumericky" className = "form-control input" placeholder ="alfanumerický kód"/>                    
                    </div>  
                    <button onClick = {this.filterByAlfanumericky} className="btn btn-primary">Vyhledej</button>
                    <hr/>
                    <div className="form-group ">
                        <label for = "preklad">Vyhledávání v překladu</label>
                        <input onChange={this.filterPreklad} type = "text" id= "preklad" className = "form-control input" placeholder ="část českého nebo německého překladu"/>                    
                    </div>  
                    <button onClick = {this.filterByPreklad} className="btn btn-primary">Vyhledej</button>
                </form>  
                      
            </div>    
        )
    }
}