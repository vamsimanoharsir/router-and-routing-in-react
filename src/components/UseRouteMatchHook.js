import React from 'react';
import {useMatch} from 'react-router-dom';

function UseRouteMatchHook(props) {

    //in latest versions useRouteMatch() is replaced by useMatch()
    const rm=useMatch('routeMatch:id:name');
    console.log('rm is ',rm)
    //rm contains params, pathname, pathnamebase, pattern
    return (
        <div>
            this is use route match
        </div>
    );
}

export default UseRouteMatchHook;