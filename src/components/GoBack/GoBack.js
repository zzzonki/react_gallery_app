import React, {Component} from 'react'
import './style.scss'

export default class GoBack extends Component{
    render(){

        return(
            <>
            <button className='button goback' onClick={() => this.handleClick()}>Back</button>
            </>
        )
    }

    handleClick = () =>{
        this.props.goBack()
    }
}