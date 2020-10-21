import React, {useEffect, useState} from "react";
import axios from "axios";

const countriesURL ="https://restcountries.eu/rest/v2/";

const CountrySearch = (props) => {
    return (<input type="text" placeholder="Search for a country..."/>);
}

const FilterByRegion = (props) => {
    return (
        <select>
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    )
}


const CountryDetails = (props) => {

    if (props.isLoading) {
        return <p>Loading...</p>
    }
    
    return (
        <div id="divCountries">
            {props.articles.map((item, i) =>
                <CountryFlag 
                    key={i}
                    flag={item.flag}
                    name={item.name}
                    population={item.population}
                    region={item.region} />)
            }
        </div>        
    )
}

const CountryFlag = (props) => {
    return (
        <div class="country">
            <img src={props.flag} alt={props.name} />
            <h2>{props.name}</h2>
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
        fetchArticles();
    }, [searchType]);

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
                    setArticles({array: data});
                })
            
        } catch (e) {
            console.log(e);
        }
        
        setIsLoading(false);
    }

    return (
        <>
            <CountrySearch />
            <FilterByRegion />
            <div id="divCountries">
                {isLoading ?? <p>Loading...</p>}
                {articles.map((item, i) =>
                    <CountryFlag 
                        key={i}
                        flag={item.flag}
                        name={item.name}
                        population={item.population}
                        region={item.region} />)
                }
            </div>
        </>
    );

}

export default Countries;