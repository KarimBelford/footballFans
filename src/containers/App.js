import React, { Component } from 'react';
import CardList from '../components/CardList';
import { fans } from "./fans";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state = {
            fans: fans,
            searchfield: ''
        }
    }

   // componentDidMount(){
      //  fetch('https://jsonplaceholder.typicode.com/users')
      // .then(response => response.json())
      // .then(users => this.setState({fans: users}));
  //  }

    onSearching = (event) =>{
        this.setState({searchfield: event.target.value})

    }

    render() {
        const {fans, searchfield} = this.state;
        const filteredFans = fans.filter(fan => {
            return fan.club.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !fans.length ?
         <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>Football Fans</h1>
                <SearchBox searching = {this.onSearching}/>
                <Scroll>
                
                    <CardList fans = {filteredFans}/>
                    
                </Scroll>
            </div>
        );
    }
    
}
export default App;