import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ customerId: "", reviewBody: "", rating: 0 });

  useEffect(() => {
    axios
      .get("http://localhost:8080/review")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/review", newReview)
      .then((response) => {
        setReviews([...reviews, response.data]);
        setNewReview({ customerId: "", reviewBody: "", rating: 0 });
      })
      .catch((error) => {
        console.error("Post error", error);
      });
  };
  return (
    <div className="review">
      <h1>Customer Reviews</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer ID"
          value={newReview.customerId}
          onChange={(e) => setNewReview({ ...newReview, customerId: e.target.value })}
        />
        <textarea
          placeholder="Review Body"
          value={newReview.reviewBody}
          onChange={(e) => setNewReview({ ...newReview, reviewBody: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
        />
        <button type="submit">Submit Review</button>
      </form>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Customer ID: {review.customerId}</p>
          <p>Review: {review.reviewBody}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};


export default CustomerReviewPage;
