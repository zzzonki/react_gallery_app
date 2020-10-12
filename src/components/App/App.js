import React, {Component} from 'react';
import ImageList from '../ImageList'
import AlbumList from '../AlbumList'
import GoBack from '../GoBack'
import './style.scss'
import UsersList from '../UsersList/UsersList';

class App extends Component{
  state ={
    error: null,
    isLoaded: false,
    isUserChosen: false,
    userChosen: null,
    isAlbumOpen: false,
    albumData: [],
    usersData: [],
    userName: null,
    userCity: null,
    albumTitle: null
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            usersData: result
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
    const list = this.state.isUserChosen ? (this.state.isAlbumOpen ? <ImageList albumOpen={this.state.albumOpen} albumData={this.state.albumData} title={this.state.albumTitle} albumId={this.state.albumOpen} /> : <AlbumList user={this.state.userChosen} name={this.state.userName} city={this.state.userCity} albumLifter={this.albumLifter} />)
    : <UsersList usersData={this.state.usersData} userLifter={this.userLifter} />
    const wayBack = this.state.isUserChosen ? (this.state.isAlbumOpen ? <GoBack goBack={() => this.goBackAlbums()} /> : <GoBack goBack={() => this.goBackUsers()} />) : null
    return (
      <div className="app">
        {wayBack}
        {list}
      </div>
    )
  }

  albumLifter = (ad, title) =>{
    this.setState({
      isAlbumOpen: true,
      albumData: ad,
      albumTitle: title
    })
  }

  userLifter = (user, name, city) =>{
    this.setState({
      isUserChosen: true,
      userChosen: user,
      userName: name,
      userCity: city
    })
  }  

  goBackAlbums(){
    this.setState({
      albumOpen: null,
      isAlbumOpen: false
    })
  }

  goBackUsers(){
    this.setState({
      userChosen: null,
      isUserChosen: false
    })
  }
}

export default App;
