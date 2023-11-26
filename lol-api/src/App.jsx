import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import CharacterPage from './pages/character/index'
import Campeoes from './pages/campeoes'
import { LayoutClient } from './layout'
import Home from './pages/homepage'
import Inicio from './pages/introducao'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>

      <Switch>

        <Route path='/' exact>
          <Inicio />
        </Route>

        <Route path='/character/:name'>
          <CharacterPage />
        </Route>

        <LayoutClient>

          <Route path='/champions'>
            <Campeoes />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

        </LayoutClient>

      </Switch>



    </BrowserRouter>
  )
}

export default App
