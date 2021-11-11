import React, { useEffect, useState } from 'react';
import UseAuth from '../../../hooks/UseAuth'
const Myorder = () => {
    const {user}= UseAuth()

    const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

    return (
        <div>
            {
              orders.map(data => console.log(data))  
            }
        </div>
    );
};

export default Myorder;