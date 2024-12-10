import React,{useState} from 'react'
import Web3 from 'web3'
import {BrowserRouter as Router} from 'react-router-dom'

import {UserList} from './Contract/UserList'
import {Context} from './Contract/Context'
import Routers from './router'

const App=()=>{
  const [web3] =useState(new Web3('HTTP://127.0.0.1:8545'));
  const AddressContract='0x7Dc3E3388f12a83Fe39ebFba3231792448B20A69'
  const [Contract] = useState(new web3.eth.Contract(UserList,AddressContract))
  
  return(
      <Router>
       <Context.Provider value={{web3,Contract}}>
      <Routers/>
       </Context.Provider>
      </Router>
  )
}
export default App

