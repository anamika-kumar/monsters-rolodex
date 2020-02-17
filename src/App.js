import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.components';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        // { Made it blank because the list will be fetched from the URL jsonplaceholer
        //   name: 'Frankestein',
        //   id: 'acs1'
        // },
        // {
        //   name: 'Dracula',
        //   id: 'asc2'
        // },
        // {
        //   name: 'Zombie',
        //   id: 'asc3'
        // },
      ],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this); to remove making this call in the constructor we have used arrow funtion in handleChange function.
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) //taking the response from the site and converting it into json so that javascript can understand
  .then(users => this.setState({ monsters: users }))//going to take the users from there and set our monsters to that array of users
}

handleChange = (e) => {
  this.setState({ searchField: e.target.value });
}


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        {/* <input 
          type='search' 
          placeholder='Search MoNsTeRs' 
          onChange={e => this.setState({ searchField: e.target.value }) }        
        /> */}
        <SearchBox
          placeholder='Search MoNsTeRs' 
          handleChange={e => this.setState({ searchField: e.target.value }) }
        />
        <CardList monsters={filteredMonsters}/>     
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>

          <button onClick={() => this.setState({string: 'Hello Ann'})}>Change Text</button>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> }
        </header> */}
      </div>
    );
}
}

export default App;
