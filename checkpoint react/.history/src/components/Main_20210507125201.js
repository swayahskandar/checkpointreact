import React, { Component } from 'react'
import Intro from "./Intro/Intro"
import Cards from "./Cards/Cards"





export default class Main extends Component {


    render() {
        return (
            <div>
                <Intro />
                <Cards />
            </div>
        )
    }
}


