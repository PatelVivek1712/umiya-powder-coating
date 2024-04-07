import React from "react";
import NavBar from "./NavBar"; 
import "./CSS/UserProfile.css"; 
import userAvatar from "./images/user-avatar.png";

function UserProfile() {
  return (
    <div>
      <NavBar />
      <h1 className="main-heading">User Profile</h1>
      <div className="container">
        <div className="user-info">
          <img src={userAvatar} alt="User Avatar" />
          <div className="user-details">
            <h2>User Name</h2>
            <p>Email: xyz@gmail.com</p>
            <p>Mobile Number: 9876543210</p>
            <p>Address: Marwadi University</p>
          </div>
        </div>
        <div className="payment">
        <div className="payment-details">
          <h2>Payment Information</h2>
          <p>Total Payment Done: 500Rs</p>
          <p>Payment Remaining: 500Rs</p>
        </div>
        <div className="order-details">
          <h2>Order Details</h2>
          <ul>
            <li>Order 1: Product A - 200Rs</li>
            <li>Order 2: Product B - 300Rs</li>
            <li>Order 3: Product C - 500Rs</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
