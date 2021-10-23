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
import Covid from "./WebApp/Covid";
import Expenses from "./WebApp/Expenses"
import Rating from "./WebApp/Rating"
import Susan from "./WebApp/User/Susan";
import Satya from "./WebApp/User/Satya";
import Mark from "./WebApp/User/Mark";
import Team1 from "./WebApp/Team/Team1";
import Team2 from "./WebApp/Team/Team2";
import Form from "./WebApp/Form"
import Mainpage from "./WebApp2/Mainpage";
import Experience from "./WebApp2/Components/Experience"
import Profile from "./WebApp2/Components/Profile";
import HomeExp from './WebApp2/Components/HomeExp'


export default function Router() {
    return (
        <>
            <BrowserRouter>

                <Switch>
                    <Route path="/" exact component={Home} />

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
                    <Route path="/WebApp/Covid" component={Covid} />
                    <Route path="/WebApp/Expenses" component={Expenses} />
                    <Route path="/WebApp/Rating" component={Rating} />

                    <Route path="/WebApp/User/Susan" component={Susan} />
                    <Route path="/WebApp/User/Satya" component={Satya} />
                    <Route path="/WebApp/User/Mark" component={Mark} />
                    <Route path="/WebApp/Team/Team1" component={Team1} />
                    <Route path="/WebApp/Team/Team2" component={Team2} />
                    <Route path="/WebApp/Form" component={Form} />

                    <Route path="/HomeExp" component={HomeExp} />
                    {/* Main คือ หลักๆของเพจ */}
                    <Route path="/Main" exact component={Mainpage} /> 
                    {/* Main คือ หลักๆของเพจ */}
                    <Route path="/Main/Experience" component={Experience} />
                    <Route path="/Main/Profile" component={Profile} />
                
                    



                </Switch>
            </BrowserRouter>
        </>
    )
}