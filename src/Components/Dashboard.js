import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {

        const response = await axios.get( 'https://bookstore-backend-3da6.onrender.com/api/client'); 
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:',error);
      }
    };

    fetchOrderDetails();
  }, [navigate]);

  return (
    <div className="order-confirmation container">
      <h1>Order Confirmation</h1>
      {orderDetails ? (
        <div>
          <h2>Thank you for your purchase!</h2>
          <p><strong>Order ID:</strong> {orderDetails.id}</p>
          <p><strong>Name:</strong> {orderDetails.booktitle}</p>
          <p><strong>Price:</strong> ₹ {orderDetails.bookprice}</p>
          <p><strong>Author:</strong> {orderDetails.bookauthor}</p>
          <p><strong>Email:</strong> {orderDetails.bookemail}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;