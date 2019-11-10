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
            PlayerOneActive: false , PlayerTwoActive: true,
            PlayerOneCount: 0,PlayerTwoCount:1
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
        const PlayerOneCount=this.state.PlayerOneCount+1;
        this.setState({PlayerOneActive: true ,PlayerTwoActive : false, PlayerOneCount});
    }
    PlayerTwoActivity(ev){
        const PlayerTwoCount=this.state.PlayerTwoCount+1;
        this.setState({PlayerOneActive: false ,PlayerTwoActive : true, PlayerTwoCount});
    }
    render(){

        const {PlayerOneName,PlayerTwoName,PlayerOneActive,PlayerTwoActive,PlayerOneCount,PlayerTwoCount}=this.state;
        return(
            <div>
                <PlayerOne name={PlayerOneName} a={PlayerOneActive} clicked={this.PlayerOneActivity} no={PlayerOneCount}/>
                <br/>
                <PlayerTwo name={PlayerTwoName} a={PlayerTwoActive} clicked={this.PlayerTwoActivity} no={PlayerTwoCount}/>
                <hr/>
                

                <div>
                    <label>
                    Set Name of Player One:
                </label> 
                <input type="text" value={PlayerOneName} onChange={this.PlayerOneChanged}/>
                <br/><br/>
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