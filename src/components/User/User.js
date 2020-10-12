import React, {Component} from 'react'
import './style.scss'

export default class User extends Component{
    render(){
        const {username, name, userId, city} = this.props
        return(
            <div className='user__card' onClick={() => this.handleClick(userId, name, city)}>
                <div className='user__nickname'>{username}</div>
                <div className='user__name'>{name}</div>
            </div>
        )
    }

    handleClick = (user, name, city) =>{
        this.props.userLifter(user, name, city)
    }
}