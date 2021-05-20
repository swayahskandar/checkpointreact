import React, { Component } from 'react'
import Intro from "./Intro/Intro"
import Cards from "./Cards/Cards"
import brand from   "./brand/brand"




export default class Main extends Component {


    render() {
        return (
            <div>
                <Intro />
                <Cards />
                <Brand />
            </div>
        )
    }
}


