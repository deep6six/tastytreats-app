/*import React, { useState, useEffect } from "react";
import axios from "axios";
 import "./CustomerReviewPage.css";
const CustomerReviewPage = () => {
  const [customerId, setCustomerId] = useState('');
    const [reviewBody, setReviewBody] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews when the component mounts
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:8080/reviews');
            setReviews(response.data);
        } catch (error) {
            console.error('There was an error fetching the reviews!', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = {
            customerId: parseInt(customerId),
            reviewBody,
            rating: parseInt(rating)
        };

        try {
            const response = await axios.post('http://localhost:8080/review', review);
            console.log('Review submitted:', response.data);
            setSuccess('Your review has been successfully submitted.');
            setError('');
            fetchReviews(); // Refresh the list of reviews
        } catch (error) {
            console.error('There was an error submitting the review!', error);
            setError('There was an error submitting the review.');
            setSuccess('');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/reviews/${id}`);
            console.log('Review deleted');
            fetchReviews(); // Refresh the list of reviews
        } catch (error) {
            console.error('There was an error deleting the review!', error);
            setError('There was an error deleting the review.');
        }
    };

    return (
      
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <h1>Customer Reviews</h1>
            <form onSubmit={handleSubmit} style={{ width: '50%', marginBottom: '20px' }}>
                <div>
                  
                    <label>Customer ID:</label>
                    <input
                        type="text"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Review:</label>
                    <textarea
                        value={reviewBody}
                        onChange={(e) => setReviewBody(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                        min="1"
                        max="5"
                    />
                </div>
                <button type="submit">Submit Review</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && (
                    <div style={{ color: 'green', marginTop: '10px' }}>
                        <h3>Submit Successful</h3>
                        <p>Your submission has been submitted</p>
                        <button onClick={() => setSuccess('')}>Close</button>
                        
                    </div>
                )}
            </form>
            <ul style={{ width: '50%' }}>
                {reviews.map((review) => (
                    <li key={review.id} style={{ marginBottom: '10px' }}>
                        <p>{review.reviewBody}</p>
                        <p>Rating: {review.rating}</p>
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default CustomerReviewPage;*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WriteReview.css";
import { Link } from "react-router-dom";
const CustomerReviewPage = () => {
    const [customerId, setCustomerId] = useState('');
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewBody, setReviewBody] = useState('');
    const [rating, setRating] = useState(1);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:8080/reviews');
            setReviews(response.data);
        } catch (error) {
            console.error('There was an error fetching the reviews!', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = {
            customerId: parseInt(customerId),
            reviewTitle,
            reviewBody,
            rating: parseInt(rating)
        };

        try {
            const response = await axios.post('http://localhost:8080/review', review);
            console.log('Review submitted:', response.data);
            setSuccess('Your review has been successfully submitted.');
            setError('');
            fetchReviews();
            setCustomerId('');
            setReviewTitle('');
            setReviewBody('');
            setRating(1);
        } catch (error) {
            console.error('There was an error submitting the review!', error);
            setError('There was an error submitting the review.');
            setSuccess('');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/reviews/${id}`);
            console.log('Review deleted');
            fetchReviews();
        } catch (error) {
            console.error('There was an error deleting the review!', error);
            setError('There was an error deleting the review.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100vh', }}>
           <h1 className="write-review-title">Leave a Review</h1>
            <div className="parent-container1" style={{ width: '60%', height: '75%', }}>
                
                <div className="outer-container2" style={{ width: '60%', height: '100%' }}>
                    <form onSubmit={handleSubmit} style={{ width: '100%', marginBottom: '20px' }}>
                        <div>
                            <label style={{ fontSize: '32px' }}>Overall Rating:</label>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        style={{
                                            background: star <= rating ? '#85144B' : '#ddd',
                                            border: 'none',
                                            borderRadius: '5px',
                                            padding: '10px 20px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setRating(star)}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label  style={{ fontSize: '32px' }} >Review Title:</label>
                            <input
                                type="text"
                                value={reviewTitle}
                                onChange={(e) => setReviewTitle(e.target.value)}
                                required
                                placeholder="Write a title..."
                                style={{ width: '100%', padding: '10px', fontSize: '40px' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '32px' }}>Review:</label>
                            <textarea
                                value={reviewBody}
                                onChange={(e) => setReviewBody(e.target.value)}
                                required
                                placeholder="Leave a review body..."
                                style={{ width: '100%', height: '600px', margin: '10px 0', padding: '10px', fontSize: '40px' }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button type="submit" style={{ padding: '10px 20px', fontSize: '40  px' }}>Submit Review</button>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && (
                            <div style={{ color: 'green', marginTop: '10px' }}>
                                <h3>Submit Successful</h3>
                                <p>Your submission has been submitted</p>
                                <Link to="/review" style={{ marginTop: '10px' }}> <button onClick={() => setSuccess('')}>Close</button></Link>
                            </div>
                        )}
                    </form>
                    <ul style={{ width: '100%' }}>
                        {reviews.map((review) => (
                            <li key={review.id} style={{ marginBottom: '20px' }}>
                                <h3>{review.reviewTitle}</h3>
                                <p>{review.reviewBody}</p>
                                <p>Rating: {Array.from({ length: review.rating }).map((_, index) => '★')}</p>
                                 <button onClick={() => handleDelete(review.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewPage;