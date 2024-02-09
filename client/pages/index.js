import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h1>Welcome to Your Authentication and Authorization Home Page</h1>
          <p className="lead">Explore the features and functionalities of your application.</p>
          <img
            src="/images/default.png"
            className="img-fluid mt-4 rounded"
            alt="Home Page Image"
          />
          <p className="mt-4">
            Ready to get started? Log in or sign up now!
          </p>
          <div className="btn-group mt-2" role="group">
            <Link href="/login" passHref>
              <button className="btn btn-primary m-2">Log In</button>
            </Link>
            <Link href="/register" passHref>
              <button className="btn btn-success m-2">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
