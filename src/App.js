import React, { Component } from 'react';
import './App.css'
import Button from './Button';
import logo from './logo.svg';
import Section from './Section';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: {},
      planets: {},
      starships: {}
    }
    this.getData = this.getData.bind(this);
  }

  async getData(event, category) {
    const num = Math.floor(Math.random() * 61) + 1;
    console.log(num);
    try {
      const url = await fetch(`https://swapi.co/api/${category}/${num}`)
      const data = await url.json();
      this.setState({[category]: data})
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return(
      <div className='container'>
        <header>
          <img className='logo' alt='logo' src={logo} />
        </header>
        <div className='content'>
          <Section category={this.state.people} categoryText='people'>
            <Button category='people' onClick={this.getData} />
          </Section>
          <Section category={this.state.planets} categoryText='planet'>
            <Button category='planets' onClick={this.getData} />
          </Section>
          <Section category={this.state.starships} categoryText='starship'>
            <Button category='starships' onClick={this.getData} />
          </Section>
        </div>
      </div>
    );
  }

}

export default App;