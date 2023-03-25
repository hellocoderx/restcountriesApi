import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    return ( <
        div className = "App" >
        <
        LoadCountris > < /LoadCountris> <
        /div>
    );
}

function LoadCountris() {
    const [countris, setCountrise] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountrise(data))

    }, [])

    return ( <
        div >
        <
        h1 > Visiting Every Countris Of The World!!! < /h1> <
        h2 > Name: { countris.length } < /h2> {
            countris.map(country => < Country name = { country.name.common }
                    population = { country.population } > < /Country>)
                } <
                /div>
        )
    }

    function Country(props) {
        return ( <
            div >
            <
            h2 > Country Name: { props.name } < /h2> <
            p > Population: { props.population } < /p> <
            /div>
        )
    }

    export default App;