// UserDetailsForm.js
import React, { useState } from 'react';
import './UserDataForm.css';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'male',
    height: '',
    weight: '',
    fitnessLevel: 'beginner',
    goal: '',
    dailyActivity: 'littleOrNoActivity',
    currentWeight: '',
    targetWeight: '',
    medicalConditions: '',
    emotionalHealth: '',
    location: '',
    primaryGoal: 'weightGoal',
    weightGoal: '',
    nutritionGoal: '',
    waterGoal: '',
    stepsGoal: '',
    foodPreferences: {
      isVegetarian: false,
      isNonVegetarian: false,
      allergies: '',
      preferredCuisine: '',
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    // Add your form validation logic here
    // For simplicity, let's check if required fields are filled
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.age.trim()) {
      errors.age = 'Age is required';
    }
    if (!formData.height.trim()) {
      errors.height = 'Height is required';
    }
    if (!formData.weight.trim()) {
      errors.weight = 'Weight is required';
    }
    if (!formData.goal.trim()) {
      errors.goal = 'Fitness Goal is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      // Add logic to handle form submission (e.g., send data to the server)
      // For demonstration purposes, log the collected data to the console
      console.log('User Details:', formData);
      setFormSubmitted(true);

      // Reset the form after submission
      setFormData({
        fullName: '',
        age: '',
        gender: 'male',
        height: '',
        weight: '',
        fitnessLevel: 'beginner',
        goal: '',
        dailyActivity: 'littleOrNoActivity',
        currentWeight: '',
        targetWeight: '',
        medicalConditions: '',
        emotionalHealth: '',
        location: '',
        primaryGoal: 'weightGoal',
        weightGoal: '',
        nutritionGoal: '',
        waterGoal: '',
        stepsGoal: '',
        foodPreferences: {
          isVegetarian: false,
          isNonVegetarian: false,
          allergies: '',
          preferredCuisine: '',
        },
      });
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <div className="user-details-form">
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (previous form fields) */}
        <label>
          Daily Activity Level:
          <select
            name="dailyActivity"
            value={formData.dailyActivity}
            onChange={handleChange}
          >
            <option value="littleOrNoActivity">Little or No Activity</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
          </select>
        </label>
        <label>
          Current Weight (kg):
          <input
            type="number"
            name="currentWeight"
            value={formData.currentWeight}
            onChange={handleChange}
            className={formErrors.currentWeight && 'error-input'}
          />
          {formErrors.currentWeight && (
            <span className="error-message">{formErrors.currentWeight}</span>
          )}
        </label>
        <label>
          Target Weight (kg):
          <input
            type="number"
            name="targetWeight"
            value={formData.targetWeight}
            onChange={handleChange}
            className={formErrors.targetWeight && 'error-input'}
          />
          {formErrors.targetWeight && (
            <span className="error-message">{formErrors.targetWeight}</span>
          )}
        </label>
        <label>
          Medical Conditions:
          <textarea
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            rows="4"
          />
        </label>
        <label>
          Emotional Health:
          <textarea
            name="emotionalHealth"
            value={formData.emotionalHealth}
            onChange={handleChange}
            rows="4"
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Primary Goal:
          <select
            name="primaryGoal"
            value={formData.primaryGoal}
            onChange={handleChange}
          >
            <option value="weightGoal">Weight Goal</option>
            <option value="nutritionGoal">Nutrition Goal</option>
            <option value="waterGoal">Water Goal</option>
            <option value="stepsGoal">Steps Goal</option>
          </select>
        </label>
        {formData.primaryGoal === 'weightGoal' && (
          <>
            <label>
              Weight Goal (kg):
              <input
                type="number"
                name="weightGoal"
                value={formData.weightGoal}
                onChange={handleChange}
              />
            </label>
          </>
        )}
        {formData.primaryGoal === 'nutritionGoal' && (
          <>
            <label>
              Nutrition Goal:
              <input
                type="text"
                name="nutritionGoal"
                value={formData.nutritionGoal}
                onChange={handleChange}
              />
            </label>
          </>
        )}
        {formData.primaryGoal === 'waterGoal' && (
          <>
            <label>
              Water Goal (ml):
              <input
                type="number"
                name="waterGoal"
                value={formData.waterGoal}
                onChange={handleChange}
              />
            </label>
          </>
        )}
        {formData.primaryGoal === 'stepsGoal' && (
          <>
            <label>
              Steps Goal:
              <input
                type="number"
                name="stepsGoal"
                value={formData.stepsGoal}
                onChange={handleChange}
              />
            </label>
          </>
        )}
        <label>
          Food Preferences:
          <div className="food-preferences">
            <label>
              Vegetarian:
              <input
                type="checkbox"
                name="isVegetarian"
                checked={formData.foodPreferences.isVegetarian}
                onChange={handleChange}
              />
            </label>
            <label>
              Non-Vegetarian:
              <input
                type="checkbox"
                name="isNonVegetarian"
                checked={formData.foodPreferences.isNonVegetarian}
                onChange={handleChange}
              />
            </label>
          </div>
          <label>
            Allergies:
            <input
              type="text"
              name="allergies"
              value={formData.foodPreferences.allergies}
              onChange={handleChange}
            />
          </label>
          <label>
            Preferred Cuisine:
            <input
              type="text"
              name="preferredCuisine"
              value={formData.foodPreferences.preferredCuisine}
              onChange={handleChange}
            />
          </label>
        </label>
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && (
        <div className="submission-message">Form submitted successfully!</div>
      )}
    </div>
  );
};

export default UserDetailsForm;
