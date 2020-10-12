import React, {Component} from 'react'
import './style.scss'
import User from '../User'

export default class UserList extends Component{
    render(){
        const {usersData} = this.props
        return(
            <>
            <header className='header'>
                <h2 className='title'>Users</h2>
                <div className='title__line'></div>
                <p className='subtitle'>Chouse the user to see his albums</p>
            </header>
            {usersData.map(item =>(
                    <User key={item.id} userId={item.id} username={item.username} name={item.name} city={item.address.city} userLifter={this.props.userLifter} />
                ))}
            </>
        )
    }
}