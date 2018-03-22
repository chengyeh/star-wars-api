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
      planet: {},
      starship: {}
    }
    this.getData = this.getData.bind(this);
  }

  async getData(event, category) {
    const num = Math.floor(Math.random() * 61) + 1;
    console.log(num);
    try {
      const url = await fetch(`https://swapi.co/api/${category}/${num}`)
      const data = await url.json();
      this.setState({people: data})
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return(
      <div>
        <header>
          <img className='logo' alt='logo' src={logo} />
        </header>
        <Section category={this.state.people} categoryText='people'>
          <Button category='people' onClick={this.getData} />
        </Section>
        <Section category={this.state.planet} categoryText='planet'>
          <Button category='planets' onClick={this.getData} />
        </Section>
        <Section category={this.state.starship} categoryText='starship'>
          <Button category='starships' onClick={this.getData} />
        </Section>
      </div>
    );
  }

}

export default App;