import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png"
import { API_BASE_URL } from "../config";

function App() {
const [walletInfo, setWalletInfo] = useState({});

useEffect(() => {
  fetch(`${API_BASE_URL}/wallet/info`)
  .then(response => response.json())
  .then(json => setWalletInfo(json));
}, []);

  return (
    <div className="App">
      <img className="logo" src={logo} alt="app-logo"/>
      <h3>Welcome to Pychain</h3>
      <br />
      <Link to='/blockchain'>Blockchain</Link>
      <Link to='/conduct-transaction'>Conduct a Transaction</Link>
      <Link to='/transaction-pool'>Transaction Pool</Link>
      <div className="WalletInfo">
        <div>Address: {walletInfo.address}</div>
        <div>Balance: {walletInfo.balance}</div>
      </div>
    </div>
  );
}

export default App;