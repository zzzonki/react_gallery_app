import React, {Component} from 'react'
import Loading from '../Loading'
import './style.scss'

export default class Album  extends Component{
    state = {
        error: null,
        isLoaded: false,
        albumData: []
    }
    
    componentDidMount(){
        const {albumId} = this.props
        const url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                albumData: result
              })
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              })
            }
          )
    }
    
    render(){
        const {title} = this.props
        const cover = this.state.isLoaded ? 
        <img src={this.state.albumData[0].thumbnailUrl}  alt=''></img>
        : <Loading />
        const albumLength = this.state.albumData.length
        const sOrNot = albumLength > 1 ? 's' : ''
        return(
            <div className='album' onClick={() => this.handleClick(this.state.albumData, title)}>
                <div className='album__cover'>
                    {cover}
                </div>
                <div className='album__desc'>
                    <ul>
                        <li>{title}</li>
                        <li>{albumLength} photo{sOrNot}</li>
                    </ul>
                </div>
            </div>
        )
    }

    albTest(){
        console.log(this.state.albumData[0].thumbnailUrl)
    }

    handleClick = (ad, title) =>{
        this.props.albumLifter(ad, title)
    }
}