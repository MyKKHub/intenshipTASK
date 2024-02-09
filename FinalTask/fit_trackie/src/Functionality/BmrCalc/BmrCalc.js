// src/components/BMRCalculator.js
import React, { useState } from 'react';
import './BmrCalc.css';

const BMRCalc = () => {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [bmrResult, setBMRResult] = useState(null);
  const [tdeeResult, setTDEResult] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const activityLevels = {
    sedentary: { label: 'Sedentary (little or no exercise)', multiplier: 1.2 },
    lightlyActive: { label: 'Lightly active (light exercise/sports 1-3 days/week)', multiplier: 1.375 },
    moderatelyActive: { label: 'Moderately active (moderate exercise/sports 3-5 days/week)', multiplier: 1.55 },
    veryActive: { label: 'Very active (hard exercise/sports 6-7 days a week)', multiplier: 1.725 },
    extremelyActive: { label: 'Extremely active (very hard exercise/sports & physical job or 2x training)', multiplier: 1.9 },
  };

  const validateForm = () => {
    const errors = {};

    if (!weight || isNaN(weight) || weight <= 0) {
      errors.weight = 'Please enter a valid weight.';
    }

    if (!height || isNaN(height) || height <= 0) {
      errors.height = 'Please enter a valid height.';
    }

    if (!age || isNaN(age) || age <= 0) {
      errors.age = 'Please enter a valid age.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const calculateBMR = () => {
    if (!validateForm()) {
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseFloat(age);

    let bmr = 0;

    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weightNum + 4.799 * heightNum - 5.677 * ageNum;
    } else {
      bmr = 447.593 + 9.247 * weightNum + 3.098 * heightNum - 4.33 * ageNum;
    }

    setBMRResult(bmr.toFixed(2));

    const tdee = bmr * activityLevels[activityLevel].multiplier;
    setTDEResult(tdee.toFixed(2));
  };

  return (
    <div className="bmr-calculator-container">
      <h2>BMR & TDEE Calculator</h2>
      <div className="bmr-inputs">
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          {formErrors.weight && <span className="error-message">{formErrors.weight}</span>}
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          {formErrors.height && <span className="error-message">{formErrors.height}</span>}
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          {formErrors.age && <span className="error-message">{formErrors.age}</span>}
        </label>
        <label>
          Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            {Object.keys(activityLevels).map((level) => (
              <option key={level} value={level}>
                {activityLevels[level].label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button className="btn btn-primary" onClick={calculateBMR}>
        Calculate BMR & TDEE
      </button>
      {bmrResult !== null && tdeeResult !== null && (
        <div className="bmr-result">
          <h3>Your BMR:</h3>
          <p>{bmrResult} calories/day</p>
          <h3>Your TDEE:</h3>
          <p>{tdeeResult} calories/day</p>
        </div>
      )}
    </div>
  );
};

export default BMRCalc;
