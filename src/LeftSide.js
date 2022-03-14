import React, {Component} from 'react'
import Categorias from './Categorias.js'


class LeftSide extends React.Component {
    render() {
        return(
            <div class="inner-left-container">
                <h1>Bibliotecapp</h1>
                <hr />
                <Categorias />
            
            </div>
        )
    }
}


export default LeftSide