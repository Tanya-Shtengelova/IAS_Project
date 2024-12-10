import React from 'react'
import { Switch, Route} from "react-router-dom";
import Main from './pages/Main'
import Mai from './pages/mem'

const Routers=()=>{
    return(
        <>
        <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/Main" component={Main} exact/>
            <Route path="/mem" component={Mai} exact/>
        </Switch>
        </>
    )
}
export default Routers;
