import React, {Component} from 'react'
import './style.scss'
import ImageItem from '../ImageItem'
import Popup from '../Popup'

export default class ImageList extends Component{
    state = {
        imageOpen: null
    }

    render(){
        const {albumData, title} = this.props
        const body = this.state.imageOpen ? <Popup closePopup={this.closePopup} imageOpen={this.state.imageOpen} albumData={albumData} />
        : null
        return(
            <>
            <header className='header'>
                <h2 className='title'>Album</h2>
                <div className='title__line'></div>
                <p className='subtitle'>{title}</p>
            </header>
            <section className='gallery'>
                {albumData.map(item =>(
                    <ImageItem key={item.id} thumbnailUrl={item.thumbnailUrl} id={item.id} imageLifter={this.imageLifter} />
                ))}
            </section>
            {body}
            </>
        )
    }

    imageLifter = (image) =>{
        this.setState({
            imageOpen: image
        })
        setTimeout(() => {
            console.log(this.state.imageOpen)
            console.log(this.props.albumData)
        }, 1);
    }

    closePopup = () =>{
        this.setState({
            imageOpen: null
        })
    }
}