import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component{
    constructor(){
        super();
        this.PlayerOneChanged=this.PlayerOneChanged.bind(this);
        this.PlayerTwoChanged=this.PlayerTwoChanged.bind(this);
        this.PlayerOneActivity=this.PlayerOneActivity.bind(this);
        this.PlayerTwoActivity=this.PlayerTwoActivity.bind(this);

        this.state={
            PlayerOneName: "", PlayerTwoName: "" ,
            PlayerOneActive: false , PlayerTwoActive: true
        }
        
    }
    PlayerOneChanged(ev){

    const PlayerOneName=ev.target.value;
    this.setState({PlayerOneName});
    }

    PlayerTwoChanged(ev){

        const PlayerTwoName=ev.target.value;
        this.setState({PlayerTwoName});
        }

    PlayerOneActivity(ev){
        this.setState({PlayerOneActive: true ,PlayerTwoActive : false});
    }
    PlayerTwoActivity(ev){
        this.setState({PlayerOneActive: false ,PlayerTwoActive : true});
    }
    render(){

        const {PlayerOneName,PlayerTwoName,PlayerOneActive,PlayerTwoActive}=this.state;
        return(
            <div>
                <PlayerOne name={PlayerOneName} a={PlayerOneActive} clicked={this.PlayerOneActivity}/>
                <br/>
                <PlayerTwo name={PlayerTwoName} a={PlayerTwoActive} clicked={this.PlayerTwoActivity}/>
                <hr/>
                

                <div>
                    <label>
                    Set Name of Player One:
                </label> 
                <input type="text" value={PlayerOneName} onChange={this.PlayerOneChanged}/>
                <br/>
                </div>
               
                <div>
                   <label>
                    Set Name of Player Two:
                </label>
                <input type="text" value={PlayerTwoName} onChange={this.PlayerTwoChanged}/> 
                <br/>
                </div>

                </div>
        
                
                

            
        )
    }
}

export default GameAdmin