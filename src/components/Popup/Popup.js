import React, {Component} from 'react'
import './style.scss'

export default class AlbumList extends Component{
    state = {
        imageOpen: this.props.imageOpen
    }

    render(){
        const {albumData} = this.props
        const check = albumData.find(item => item.id === this.state.imageOpen)
        const image = check.url
        return(
            <div className='popup__bg'>
                <button className='popup__close' onClick={() => this.closePopup()}><i className="fas fa-times"></i></button>
                <button className='popup__move back' onClick={() => this.goLeft()}><i className="fas fa-chevron-left"></i></button>
                <img src={image} alt=''></img>
                <button className='popup__move frw' onClick={() => this.goRight()}><i className="fas fa-chevron-right"></i></button>
            </div>
        )
    }

    closePopup(){
        this.props.closePopup()
    }
    goRight(){
        const albumData = this.props.albumData
        const last = albumData.length - 1
        if(this.state.imageOpen < albumData[last].id){
            this.setState({
                imageOpen: this.state.imageOpen +1
            })
        }   
    }
    goLeft(){
        const albumData = this.props.albumData
        if(this.state.imageOpen > albumData[0].id){
            this.setState({
                imageOpen: this.state.imageOpen -1
            })
        }
    }

}