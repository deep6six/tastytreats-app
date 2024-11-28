import React, { useState, useEffect } from "react";
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
            await axios.delete(`http://localhost:8080/review/${id}`);
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


export default CustomerReviewPage;
