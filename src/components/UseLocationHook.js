import React from 'react';
import { useState } from 'react';
import {useLocation,Link} from 'react-router-dom'

function UseLocationHook(props) {

    const [name,setName]=useState('')
    //useLocation hook returns a new location each time url is changed
    const location=useLocation()
    const {pathname,search}=useLocation()
    console.log(pathname,search)
    console.log(location)//all keys in useLocation() object


    return (
        <div>
            <form>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                {/* every time url changes useLocation hook is executed */}
                <Link to={`?newUrl=${name}`}>
                <button type='submit'>click me</button>
                </Link>
            </form>
        </div>
    );
}

export default UseLocationHook;