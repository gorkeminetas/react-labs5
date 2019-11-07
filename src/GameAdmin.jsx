import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <PlayerOne/>
                <PlayerTwo/>
                <hr>
                <label>
                    Name Player One:
                </label>
                <input/>
                <br/>
                <label>
                    Name Player Two:
                </label>
                <input/>
                </hr>

            </div>
        )
    }
}

export default GameAdmin