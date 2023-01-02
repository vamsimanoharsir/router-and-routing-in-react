import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function QueryParamsInUrl(props) {

    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')

    return (
        <div>
            <form>
                <input type="text" placeholder='enter first name' onChange={(e)=>setFname(e.target.value)}/><br/>
                <input type="text" placeholder='enter last name' onChange={(e)=>setLname(e.target.value)}/><br/>
                {/* adding query params to the url on button click */}
                <Link onClick={(e)=>(!fname||!lname) ? e.preventDefault() : null} to={`/url1?fname=${fname}&lname=${lname}`}>
                    <button type="submit">click here</button>
                </Link>
            </form>        
        </div>
    );
}

export default QueryParamsInUrl;