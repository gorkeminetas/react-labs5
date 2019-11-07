import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component{
    constructor(){
        super();
        this.PlayerOneChanged=this.PlayerOneChanged.bind(this);
        this.PlayerTwoChanged=this.PlayerTwoChanged.bind(this);

        this.state={
            PlayerOneName: "", PlayerTwoName: ""
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

    render(){

        const {PlayerOneName,PlayerTwoName}=this.state;
        return(
            <div>
                <PlayerOne name={PlayerOneName}/>
                <PlayerTwo name={PlayerTwoName}/>
                <hr>
                <label>
                    Set Name of Player One:
                </label>
                <input type="text" value={PlayerOneName} onChange={this.PlayerOneChanged}/>
                <br/>
                <label>
                    Set Name of Player Two:
                </label>
                <input type="text" value={PlayerTwoName} onChange={this.PlayerTwoChanged}/>
                </hr>

            </div>
        )
    }
}

export default GameAdmin