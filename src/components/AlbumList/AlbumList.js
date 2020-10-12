import React, {Component} from 'react'
import './style.scss'
import Album from '../Album'
import Loading from '../Loading'

export default class AlbumList extends Component{
    state = {
        error: null,
        isLoaded: false,
        albumsData: []
    }
    
    componentDidMount(){
        const {user} = this.props
        const url = 'https://jsonplaceholder.typicode.com/albums?userId=' + user
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                albumsData: result
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
        const {name, city} = this.props
        return(
        <>
            {this.state.error ? <p>Ошибка загрузки данных с сервера.</p>
            : this.state.isLoaded ?
            <>
            <header className='header'>
                <h2 className='title'>{name}</h2>
                <div className='title__line'></div>
                <p className='subtitle location'>{city}</p>
            </header>
            <div className='album-list'>
                {this.state.albumsData.map(item =>(
                    <Album albumLifter={this.props.albumLifter} key={item.id} albumId={item.id} title={item.title} />
                ))}
            </div>
            </>
            : <Loading />
            }
        </>
        )
    }

   
}