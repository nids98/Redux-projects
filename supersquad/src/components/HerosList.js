import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCharacterById } from '../actions'

class HerosList extends Component {
    render() {
        const heros = this.props.heros
        return (
            < div >
                <h4>My Heros squad </h4>
                <ul className='list-group'>
                    {
                        heros.map(h => {
                            return (
                                <li className='list-group-item' key={h.id}>
                                    <div className='list-item'>{h.name}</div>
                                    <div className="list-item right-button" onClick={() => this.props.removeCharacterById(h.id)}> x </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        heros: state.heros
    }
}
export default connect(mapStateToProps, { removeCharacterById })(HerosList)