import React from 'react'

class PlayerOne extends React.Component{
    constructor(props){
        super(props);
    }

    changeText(a){
        if(a){
            return "This user is playing now"
        }
        else{
            return "Play"
        }
    }
    render(){
        return(
            <div style = {{border: "2px solid black"}}>
                <h3>Player One</h3>
                <label>Name: </label>
                <label>{this.props.name}</label>
                <br/>
                <label>Played number of times:  </label>
                <label>{this.props.no}</label>
                <br/><br/>
                <button disabled={this.props.a} onClick={this.props.click} >{this.changeText(this.props.a)} ></button>
                
            </div>

        );
    }
}

export default PlayerOne