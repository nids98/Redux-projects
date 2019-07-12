import React, { Component } from 'react'
import CharacterList from './CharactersList'
import HerosList from './HerosList'
import SquadStat from './SquadStat'
import '../styles/index.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>SuperSquad</h1>
                <div className='col-md-4'>
                    <CharacterList />
                </div>
                <div className='col-md-4'>
                    <HerosList />
                </div>
                <div className='col-md-4'>
                    <SquadStat />
                </div>
            </div>
        )
    }
}

export default App