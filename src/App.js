import React, { Component } from 'react';
import WeatherDiv from './components/WeatherDiv';

import SimpleSlider from './components/SimpleSlider'
import BtnFilter from "./components/BtnFilter"
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import './App.css';
import './components/WeatherDiv'
import './components/BtnNavBar.scss';

class App extends Component {
    state = {
        weatherData: [],
        lo: true,
    }

    getWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83')
            .then(res => res.json())
            .then(res => this.setState({ weatherData: res, lo: false }))
        // .then(res => this.state.lo ? console.log("pipi")
        // : console.log('totototo',this.state.weatherData.weather[0]))
    }

    componentDidMount() {
        this.getWeather()
    }

    render() {

        if (this.state.lo) {
            return (<div>loading</div>)
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <BtnFilter />
                        <BtnLogin />
                        <BtnFavorite />

                    </header>
                    <WeatherDiv weatherData={this.state.weatherData} />

               
                    <SimpleSlider/>
             
                    
                   
                </div>
            )
        }
    }
}

export default App;
