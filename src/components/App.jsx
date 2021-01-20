import React, {useState,useRef,useEffect} from 'react'

import Footer from "./Footer"
import '../css/App.css';

 // API key
const api ={
    key: process.env.REACT_APP_API_KEY,
   base:"https://api.openweathermap.org/data/2.5/",
};



const App = () => {

// date 
const homeDate = useRef();
useEffect(()=> {
    homeDate.current = new Date().toLocaleDateString("de-DE")
},[])

// search
const [query, setQuery] = useState("")
const [weather,setWeather] = useState({})
const search = (e) => {
    if(e.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
       
        .then((res) => res.json())
        .then(result => {
            setQuery("");
            setWeather(result);
          
            console.log(result);
            
        })
    }
}


    return (
        <div className={(typeof weather.main !="undefined") ?((weather.main.temp > 16)
        ? "app warm": "app"):"app" }>
            <main>
                <div className="search-box">
                    <input type="text" 
                    placeholder="Search..." 
                    className="search-bar" 
                    onChange={e => setQuery(e.target.value)} 
                    value={query} 
                    onKeyPress={search}/>
                </div>
                {(typeof weather.main != "undefined")? (
                    <div>
                    <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date" >{homeDate.current}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                        {Math.round(weather.main.temp)}°c
                    </div>
                    <div className="weather">{weather.weather[0].main}</div>
                </div>
                    </div>
                ):("")}
                
            </main>

           
            < Footer />
        </div>
    )
}

export default App
