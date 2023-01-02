import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom' //from react version sic useHistory is replaced by useNavigate

function UseHistoryHook(props) {

    const [name,setName]=useState('')

    const history=useNavigate();
    //console.log('history is ',history)

    const handleSubmit=(e)=>{
        e.preventDefault()
        //passing query params into the url same like QueryParamsInUrl.js
        //history.push(path) will not work
        history(`?history/name=${name}`)
    }

    return (
        <div>
            <form>
                <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
                <button onClick={handleSubmit}>click me</button>
            </form>
        </div>
    );
}

export default UseHistoryHook;