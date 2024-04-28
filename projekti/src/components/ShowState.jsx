import react from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';



const ShowState = (props) => {

    const changeState_X = (event) => {

        console.log('Clicked X')
        //console.log(props.state.new_X)
        //props.Trace1();
        //console.log(event.target.value)
        //console.log('After Clicked 2')
    
        props.setState((state) => {
            return {
             ...state,
             new_X: event.target.value
            }
        })
    }

    const changeState_User = (event) => {
        props.setState((state) => {
            return {
                ...state,
                 new_User: event.target.value
            }
        })
    }

    const changeState_Frame = (event) => {
        props.setState((state) => {
            return {
                ...state,
                 new_Frame: event.target.value
            }
        })
    }

    const changeState_Text = (event) => {
        props.setState((state) => {
            return {
                ...state,
                 new_Text: event.target.value
            }
        })
    }

    const changeState_URL = (event) => {
        props.setState((state) => {
            return {
                ...state,
                 new_URL: event.target.value
            }
        })
    }

    const changeState_Y = (event) => {

        console.log('Clicked Y')
        //console.log(props.state.new_X)
        //props.Trace1();
        //console.log(event.target.value)
        //console.log('After Clicked 2')
        
        props.setState((state) => {
            return {
                ...state,
                 new_Y: event.target.value
            }
        })
    }
    return ( <div>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>aa</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>

        <h1>tässä statet</h1>
        <label>User = {props.state.new_User}</label>
        <input type="text" onChange={changeState_User} value={props.state.new_User}></input>
        <p />
        <label>Frame = {props.state.new_Frame}</label>
        <input type="text" onChange={changeState_Frame} value={props.state.new_Frame}></input>
        <p />
        <label>x = {props.state.new_X}</label>
        <input type="text" onChange={changeState_X} value={props.state.new_X}></input>
        <p />
        <label>y = {props.state.new_Y}</label>
        <input type="text" onChange={changeState_Y} value={props.state.new_Y}></input>
        <p />
        <label>Text = {props.state.new_Text}</label>
        <input type="text" onChange={changeState_Text} value={props.state.new_Text}></input>
        <p />
        <label>y = {props.state.new_URL}</label>
        <input type="text" onChange={changeState_URL} value={props.state.new_URL}></input>
        </div>
        
        
    )
}



export default ShowState