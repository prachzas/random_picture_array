import React, { Component } from 'react';
// import Ptum from './Ptum.jpg';
// import Ptoon from './Ptoon.jpg';
// import Ppure from './Ppure.jpg';
// import Ppea from './Ppea.jpg';
import Paek from './paek_optimized.jpg';
import Pgot from './Pgot.png';
import Pnam from './Pnam.png';
// import prach from './prach.jpg'

import Ptum from './ptum_optimized.jpg';
import Ptoon from './ptoon_optimized.jpg';
import Ppure from './ppure_optimized.jpg';
import Ppea from './ppea_optimized.jpg';
import prach from './prach_optimized.jpg'
import './RandomPic.css';
class RandomPic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [Ptum, Ptoon, Ppure, Ppea, Paek, Pgot, Pnam, prach],
            selectedNote: null,
            clicked: false,
            randomIndex: Math.floor((Math.random() * 8)),
            count: 1,
            loaderStatus: null
        }
    }

    handleClick = () => {
       // console.log("randomIndex = " + this.state.randomIndex)
       // console.log("before splice " + this.state.notes.length)
        //console.log("count = " + this.state.count)
        if (this.state.count === 9) {
            alert("รูปหมดแล้วจ้า")
            this.resetArray()
            this.setState({
                randomIndex: Math.floor(Math.random() * (this.state.notes.length)),
            })
            return;
        }
        if (this.state.randomIndex === -1) {
            this.setState({
                randomIndex: Math.floor(Math.random() * (this.state.notes.length - 1)),
            })
        }
        this.setState({
            count: this.state.count + 1,
            selectedNote: this.state.notes[this.state.randomIndex],
            randomIndex: Math.floor(Math.random() * (this.state.notes.length - 1)),
            clicked: false
        })
        this.removeElementOffArray(this.state.randomIndex)
    }

    reLoad = () => {
        this.setState({
            loaderStatus: true
        })
        setTimeout(() => {
            this.setState({ 
                loaderStatus: false,
                clicked: true
            })
            
        }, 2000);
        this.handleClick()
    }

    removeElementOffArray = (x) => {
        this.state.notes.splice(x, 1)
    }
    resetArray = () => {
        console.log(this.state.count)
        this.setState({
            clicked: false,
            count: 1,
            notes: [Ptum, Ptoon, Ppure, Ppea, Paek, Pgot, Pnam, prach],
            randomIndex: Math.floor(Math.random() * (this.state.notes.length))
        })
        return;
    }
    render() {
        return (
            <div className="container">
                <button className="random" onClick={this.reLoad}>Random</button>
                <button className="reset" onClick={this.resetArray}>Reset</button>
                {this.state.loaderStatus ? (<div className="loader"></div>) : (<div></div>)}
                {((!this.state.clicked)) ? (
                    <div></div>
                ) : (
                        <div>
                            <img src={this.state.selectedNote} alt="Logo" />
                        </div>
                    )}

            </div>
        );
    }
}

export default RandomPic;