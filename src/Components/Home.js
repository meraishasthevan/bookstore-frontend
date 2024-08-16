import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBooks } from '../Redux/actions';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state,setState] = useState(
    {

      intialBooks:[]
    }
  )

  const {intialBooks} = state;

  useEffect(() => {
    getApiIntial()
  }, []);

const url = 'https://bookstore-backend-3da6.onrender.com/api/books'
  const getApiIntial = async() => {
    try {
      const {data} = await axios.get(url);
      console.log(data);
      dispatch(setBooks(data.data))
      
      setState(prev =>({...prev,intialBooks:data.data}))
    } catch (error) {
      console.log(error);
      
    }

  }

  const handleViewDetails = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="Home">
      <Navbar />
      <header>
        <h1>Bookstore</h1>
      </header>
      <main>
        <div className="books-container">
          {intialBooks?.map((book) => (
            <div key={book.id} className="book">
              <div className="book-info">
                <img src={book.bookImg} alt={book.booktitle} className="book-img" />
                <div className="book-title">{book.booktitle}</div>
                <div className="book-author">by {book.bookauthor}</div>
                <div className="book-price">${(book.bookprice)}</div>
                <div className="book-description">{book.bookdescription}</div>
              </div>
              <button className="view-details" onClick={() => handleViewDetails(book.id)}>
                Show Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
