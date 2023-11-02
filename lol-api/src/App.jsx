import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import CharacterPage from './pages/character/index'
import Campeoes from './pages/campeoes'
import { LayoutClient } from './layout'
import Home from './pages/homepage'
import Inicio from './pages/introducao'

function App() {

  return (
    <BrowserRouter>

        <Switch>

          <Route path='/' exact>
            <Inicio/>
          </Route>

          <LayoutClient>

          <Route path='/character/:id'>
            <CharacterPage />
          </Route>

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
