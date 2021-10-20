import React from 'react'
import './Home.css'
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  return (
    <>
      <div className="Home-app">
        <div className="font-up">
          <h1>Teachin Eaksuverapong</h1>
          <h2>My Project</h2>
        </div>
        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/Resume" })} >
            Resume
          </button>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/Multipage" })} >
            SinglePage
          </button>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/Exp" })}>
            Experience
          </button>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/WebApp" })}>
            Web Apps
          </button>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/DogeCoin" })}>
            Api
          </button>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/CoinPrice" })}>
            Api2
          </button>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/Login" })}>
            Register-Login Api
          </button>
        </div>

      </div>
    </>
  )
}

export default Home
