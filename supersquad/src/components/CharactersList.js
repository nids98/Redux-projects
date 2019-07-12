import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions'

class CharactersList extends Component {
    render() {
        console.log(this.props)
        const characters = this.props.characters
        return (
            <Fragment>
                <h4>Characters</h4>
                <ul className="list-group"> {
                    characters.map(c => {
                        return (
                            <li key={c.id} className="list-group-item">
                                <div className="list-item"> {c.name} </div>
                                <div className="list-item right-button" onClick={() => this.props.addCharacterById(c.id)}> + </div>
                            </li>
                        )
                    })
                }
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addCharacterById
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)