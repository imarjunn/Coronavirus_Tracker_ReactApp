import React, { Component } from 'react';
import styles from './App.module.css';

import Aux from './hoc/Aux';
import { Cards, Carousel, Chart, CountrySelector,Icons,IndiaBreakDown } from './components';
import { fetchData } from './api';

class App extends Component {

  state = {
    cardData: [],
    country: [],
    toFindIndex : []
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({cardData: fetchedData.data.Global});
  }

  selectCountryHandler = async (value) => {
    const fetchedData = await fetchData();
    //console.log(country);
    //this.setState({toFindIndex: fetchedData.data.Countries});
    console.log(value);
    this.setState({cardData: fetchedData.data.Countries[value]});
  }

  render(){

    const {cardData, country} = this.state;
    return (
      <Aux>
        <Cards cardData={cardData} />
        <div>
          <CountrySelector selectCountryHandler = {this.selectCountryHandler} />
        </div>   
          <Chart cardData={cardData} />   
          <IndiaBreakDown />
      </Aux>
    );
  }
}

export default App;
