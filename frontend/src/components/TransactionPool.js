import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router";
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';
import {API_BASE_URL, SECONDS_JS} from '../config';

const POLL_INTERVAL = 10 * SECONDS_JS;

function TransactionPool(){
    const navigate = useNavigate()
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = () => {
      fetch(`${API_BASE_URL}/transactions`)
      .then(response => response.json())
      .then(json => {
        console.log('transactions json', json)
        setTransactions(json);
      })
    }

    useEffect( () => {
      fetchTransactions()
      const intervalId = setInterval(fetchTransactions, POLL_INTERVAL);
      return () => clearInterval(intervalId);
    }, []);

    const fetchMineBlock = () => {
      fetch(`${API_BASE_URL}/blockchain/mine`)
      .then(() => {
        alert('Success!');
        navigate('/blockchain')
      })
    }

  return(
    <div className='TransactionPool'>
        <Link to='/'>Home</Link>

        <h3>Transaction Pool</h3>
        <div>
            {
                transactions.map(transaction => (
                    <div key={transaction.id}>

                        <Transaction transaction={transaction} />
                    </div>
                ))
            }
        </div>

        <Button variant='danger' onClick={fetchMineBlock}>
          Mine a block of these transactions
        </Button>
    </div>
  )
}

export default TransactionPool;