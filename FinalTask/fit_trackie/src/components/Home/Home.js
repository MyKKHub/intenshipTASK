// src/components/Home.js
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import fitnessImage from '../../images/fitness.webp'; // Replace with your actual image path
import './Home.css'; // Import the CSS file
import HeaderHome from './HeaderHome/HeaderHome';
import FooterHome from './FooterHome/FooterHome';

const Home = () => {

  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your registration form submission logic here
    console.log('Form submitted:', registrationForm);
  };

  return (
    <div>
      <header>
        <HeaderHome />
      </header>
    <div className="container mt-5">
      <div className="text-center">
        <h2>Welcome to Fit Trackie!</h2>
        <p className="lead">Your go-to app for fitness tracking and improvement.</p>
        <img src={fitnessImage} alt="Fitness" className="img-fluid rounded" />
      </div>

      <section id="fitness-functionalities" className="mt-5">
  <div className="row g-4 functionalities">
    {/* Diet */}
    <div className="col">
      <div className="card h-100">
         <h4 className="card-title">Diet</h4>
        <img src="https://source.unsplash.com/400x300/?diet" alt="Diet" />
        <div className="overlay">
          <h4 className="card-title">Diet</h4>
          <p className="card-text">Explore our nutrition plans and dietary recommendations.</p>
          {/* Add links or buttons to navigate to the diet page */}
        </div>
      </div>
    </div>

    {/* Training */}
    <div className="col">
      <div className="card h-100">
      <h4 className="card-title">Training</h4>
        <img src="https://source.unsplash.com/400x300/?training" alt="Training" />
        <div className="overlay">
        <h4 className="card-title">Training</h4>
          <p className="card-text">Discover workout routines and training programs.</p>
          {/* Add links or buttons to navigate to the training page */}
        </div>
      </div>
    </div>

    {/* Routine */}
    <div className="col">
      <div className="card h-100">
        <h4 className="card-title">Routine</h4>
        <img src="https://source.unsplash.com/400x300/?routine" alt="Routine" />
        <div className="overlay">
        <h4 className="card-title">Routine</h4>
          <p className="card-text">Create and manage your fitness routines and schedules.</p>
          {/* Add links or buttons to navigate to the routine page */}
        </div>
      </div>
    </div>

    {/* Community */}
    <div className="col">
      <div className="card h-100">
        <h4 className="card-title">Community</h4>
        <img src="https://source.unsplash.com/400x300/?community" alt="Community" />
        <div className="overlay">
        <h4 className="card-title">Community</h4>
          <p className="card-text">Connect with other fitness enthusiasts in our community.</p>
          {/* Add links or buttons to navigate to the community page */}
        </div>
      </div>
    </div>

    {/* BMR Calculator */}
    <div className="col">
      <div className="card h-100">
        <h4 className="card-title">Fitness Calculator</h4>
        <img src="https://source.unsplash.com/400x300/?calculator" alt="BMR Calculator" />
        <div className="overlay">
        <h4 className="card-title">Fitness Calculator</h4>
          <p className="card-text">Calculate your Fitness level to plan your calorie intake and training routine.</p>
        </div>
      </div>
    </div>

    {/* Supplement */}
    <div className="col">
      <div className="card h-100">
        <h4 className="card-title">Supplement</h4>
        <img src="https://source.unsplash.com/400x300/?supplement" alt="Supplement" />
        <div className="overlay">
        <h4 className="card-title">Supplement</h4>
          <p className="card-text">Explore our recommended supplements for your fitness journey.</p>
          {/* Add links or buttons to navigate to the supplement page */}
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Registration Assistance */}
      <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Registration Assistance</h4>
                <p className="card-text">Give us your details, and we'll guide you through the registration process.</p>
                {/* Registration Form */}
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={registrationForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={registrationForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={registrationForm.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success">Get Assistance</button>
                </form>
                {/* End Registration Form */}
              </div>
            </div>
          </div>

      {/* Latest Fitness Trends */}
      <section className="mt-5">
        <h3>Latest Fitness Trends</h3>
        <p>Stay updated with the latest trends in the fitness world.</p>
        {/* Add content for the latest fitness trends */}
      </section>

      {/* Featured Workouts */}
      <section className="mt-5">
        <h3>Featured Workouts</h3>
        <p>Try our curated list of featured workouts for an effective fitness routine.</p>
        {/* Add content for the featured workouts */}
      </section>

      {/* Call-to-Action */}
      <section className="mt-5">
        <h3>Start Your Fitness Journey Today!</h3>
        <p>Join Fit Trackie and embark on a healthier and fitter lifestyle.</p>
        <Link to="/signup" className="btn btn-success">Sign Up Now</Link>
      </section>
    </div>
    <footer>
          <FooterHome />
    </footer>
    </div>
  );
};

export default Home;
