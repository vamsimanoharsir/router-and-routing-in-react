import { Routes, Route } from "react-router-dom"; //BrowserRouter import in index.js
import { Link } from "react-router-dom";
import Router1 from "./components/Router1";
import Router2 from "./components/Router2";
import Router3 from "./components/Router3";
import QueryParamsInUrl from "./components/QueryParamsInUrl";
import UseHistoryHook from "./components/UseHistoryHook";
import UseParamsHook from "./components/UseParamsHook";
import UseLocationHook from "./components/UseLocationHook";
import UseRouteMatchHook from "./components/UseRouteMatchHook";
import RouterPath from "./components/RouterPath";
import RoutePath1 from "./components/RoutePath1";


function App() {

  return (
    <div>
       {/* using Links we need not type endpoints */}
      {/* <div>
        <Link to="home">home</Link>
        <Link to="about">about</Link>
        <Link to="contact">contact</Link>
      </div> */}
      
      {/* for these in browser we need to type endpoints */}
      <Routes> 
        {/* <Route path="/home" element={<Router1 />} />
        <Route path="/about" element={<Router2/>}/>
        <Route path="/contact" element={<Router3/>}/> */}

        {/* <Route path="/url" element={<QueryParamsInUrl/>}/> */}
        {/* <Route path='/history' element={<UseHistoryHook/>}/> */}
        {/* <Route path='/params:username:id' element={<UseParamsHook/>}/> */}
        {/* <Route path='/location' element={<UseLocationHook/>}/> */}
        {/* <Route path='/routeMatch' element={<UseRouteMatchHook/>}/> */}
        {/* <Route path='/routeMatch:id:name' element={<UseRouteMatchHook/>}/> */}

        {/* before react version six with the below code when we give /path/exact both the 
        paths wil be rendered. but with latest versions both are different so we need not use 'exact path' */}
        <Route path="/path" element={<RouterPath/>}/>
        <Route path="/path/exact" element={<RoutePath1/>} />

      </Routes>
    </div>
  );
}

export default App;