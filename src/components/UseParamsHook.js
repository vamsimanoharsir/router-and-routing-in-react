import React from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'

function UseParamsHook(props) {
    const [name,setName]=useState('')

    const params=useParams()
    const {username,id}=useParams()
    return <div>params are {username} and {id} </div>
    //as in app.js we have params username and id we need to give http://localhost:2002/params:react:3
    //the number of params should match in app.js
    console.log('params is ',params)

    return (
        <div>
            <form>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <button>click me</button>
            </form>        
        </div>
    );
}

export default UseParamsHook;