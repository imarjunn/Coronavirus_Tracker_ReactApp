import axios from 'axios';

const apiURL = "https://api.covid19api.com/summary";
const apiIndia = "https://api.covid19india.org/v4/data.json";

export const fetchData = async () => {
    let covURL = apiURL;
    const data  = await axios.get(covURL);

    return data;
}

export const fetchCountries = async() => {
    let covURL = apiURL;

    try{
    const data = await axios.get(covURL);
    const countArr = data.data.Countries;
    return countArr.map((country,index) => country);
    }
    catch(error){
        console.log(error);
    }
}

export const fetchStates = async() => {
    let covIndia = apiIndia;

    const data = await axios.get(covIndia);
    return data;
}