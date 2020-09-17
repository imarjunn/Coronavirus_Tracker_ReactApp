import React, { Component } from 'react';
import styles from './CountrySelector.module.css';
import { fetchCountries } from '../../api';

class CountrySelector extends Component {

    state={
        displayCountry: []
    }

    async componentDidMount(){
        const fetchedCountries = await fetchCountries();
        ///console.log(fetchedCountries.data.Countries[1].Country);
        //console.log(fetchedCountries.length);
        this.setState({displayCountry: fetchedCountries});
        //console.log(this.state.displayCountry);
    }

    selectCountryKey = (i) => {
        const index = i;
        this.props.selectCountryHandler(index);
    }

    render(){
        const {displayCountry} = this.state;
        const { selectCountryHandler } = this.props;
        return (
            <div className={styles.ListCountries}>
                <form className={styles.Form}>
                    <select className={styles.Select} onChange = {(e) => selectCountryHandler(e.target.value)}>
                        <option key = "Global" value="Global">Global</option>
                        {displayCountry.map((country,index)=> <option key = {index} value={index}>{country.Country}</option>)}
                    </select>
                </form>
            </div>
            );
    }
}

/*
return (
            <div className={styles.ListCountries}>
                <form className={styles.Form}>
                    <select className={styles.Select} onChange = {(e) => selectCountryHandler(e.target.value)}>
                        <option key = "Global" value="Global">Global</option>
                        {displayCountry.map((country,index)=> <option key = {index} value={index}>{country}</option>)}
                    </select>
                </form>
            </div>
        );
*/

export default CountrySelector;