import React , { Component } from 'react'
import {  Switch,  Route} from 'react-router-dom'
import { routes } from "./routes"
import SideBar from  './../containers/common/sidebar/sideBarCmp'
import HeaderCmp from  './../containers/common/header/headerCmp'



class RouteSwitch extends Component {
    
    render() {
        return (
            <div >
                <SideBar {...this.props}/>
                <HeaderCmp/>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </Switch>
            </div>
        )
    }
}



export default RouteSwitch;
