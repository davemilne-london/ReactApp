import React, {useEffect, useState} from "react";
import axios from "axios";
import './countries.css';

const countriesURL ="https://restcountries.eu/rest/v2/";

const CountrySearch = (props) => {
    return (<input id="textName" type="text" placeholder="Search for a country..." onChange={props.onChange}/>);
}

const FilterByRegion = (props) => {
    return (
        <select id="dropdownRegion" onChange={props.onChange}>
            <option value="">Filter by Region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    )
}



const CountryFlag = (props) => {
    return (
        <div className="country">
            <img src={props.flag} alt={props.name} />
            <h3>{props.name}</h3>
            <p><strong>Population: </strong>{props.population}</p>
            <p><strong>Region: </strong>{props.region}</p>
            <p><strong>Capital: </strong>{props.capital}</p>
        </div>
    )
}


const Countries = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchType, setSearchType] = useState('all');
    const [searchName, setSearchName] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {

        if (searchType!='name') {
            document.getElementById('textName').value='';
        } else if (searchType!='region') {
            document.getElementById('dropdownRegion').selectedIndex=0;
        }

        fetchArticles();
    }, [searchType, articles]);

    const onRegionChange = (e) => {
        setRegion(e.target.value);
        setSearchType(e.target.value !== '' ? 'region' : 'all');
    }

    const onNameChange = (e) => {
        setSearchName(e.target.value);
        setSearchType(e.target.value !== '' ? 'name' : 'all');
    }

    const fetchArticles = async () => {

        setIsLoading(true);
        
        let URLBase = countriesURL;
        if (searchType === 'all') {
            URLBase += 'all';
        } else if (searchType === 'name') {
            URLBase += 'name/' + searchName
        } else if (searchType === 'region') {
            URLBase += 'region/' + region;
        } else {
            console.log('unrecognised search type')
        }

        try {
            axios.get(URLBase)
                .then(({ data }) => {
                    setArticles(data);
                })
            
        } catch (e) {
            console.log(e);
        }
        
        setIsLoading(false);
    }

    return (
        <>
            <CountrySearch 
                onChange={onNameChange}
            />
            <FilterByRegion 
                onChange={onRegionChange}
            />
            <div id="divCountries">
                {isLoading ?? <p>Loading...</p>}
                {articles.map((item, i) =>
                    <CountryFlag 
                        key={i}
                        flag={item.flag}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital} />)
                }
            </div>
        </>
    );

}

export default Countries;