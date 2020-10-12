import React, {Component} from 'react'
import './style.scss'

export default class ImageItem extends Component{
    render(){
        const {thumbnailUrl, id} = this.props
        return(
            <div className='image-item' onClick={() => this.handleClick(id)}>
                <img src={thumbnailUrl} alt=''></img>
            </div>
        )
    }
    handleClick =(image) =>{
        this.props.imageLifter(image)
    }
}