import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import DogeCoin from "./Api/DogeCoin"
import MultiPage from "./MultiPages/MultiPage"
import DashBoard from "./WebApp/DashBoard";
import Login from "./LoginRegis/login";
import Register from "./LoginRegis/Register"
import CoinPrice from "./Api2/CoinPrice";
import MasterPage from "./WebApp/MasterPage";
import Success from "./LoginRegis/Success"
import Account from "./LoginRegis/Account";
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/Home" exact component={Home} />

                    <Route path="/Resume" component={Resume} />

                    <Route path="/DogeCoin" component={DogeCoin} />

                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Success" component={Success} />
                    <Route path="/Account" component={Account} />

                    <Route path="/CoinPrice" component={CoinPrice} />

                    <Route path="/MultiPage" exact component={MultiPage} />

                    <Route path="/WebApp" exact component={MasterPage} />
                    <Route path="/WebApp/DashBoard" component={DashBoard} />


                </Switch>
            </BrowserRouter>
        </>
    )
}