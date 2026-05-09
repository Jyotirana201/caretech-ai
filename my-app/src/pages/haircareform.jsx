import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import styles from './hair.module.css';
import bgImage from "../assets/melting4.png";
import formBgImage from "../assets/work6.png";


const inputGroups = [
  { columns: 2, fields: ['Age', 'Gender'] },
  { columns: 3, fields: ['Junk Food', 'Sleep Hours', 'Split Ends'] },
  { columns: 1, fields: ['Hair Type'] },
  {
    columns: 3,
    fields: [
      'Acne', 'Hair Length', 'Whiteheads', 'Heat Damage', 'Fizzy Hair',
      'Blackheads', 'Pimples', 'Skin Type', 'Dark Spots',
    ],
  },
  { columns: 1, fields: ['Uneven Skin Tone', 'Face Wash Frequency'] },
  { columns: 2, fields: ['Dry Hair', 'Fine Line', 'Hair Fall', 'Makeup Use'] },
  { columns: 1, fields: ['Alcohol Consumption'] },
  {
    columns: 3,
    fields: [
      'Stress', 'Lice', 'Dandruff', 'Smoke', 'Wrinkles',
      'Dry Patches', 'Redness', 'Itching', 'Genetics',
    ],
  },
  { columns: 1, fields: ['Skin Sensitivity', 'Sunscreen Use'] },
  { columns: 2, fields: ['Sunburn', 'Exfoliation'] },
  { columns: 1, fields: ['Hormonal Issues'] },
];

const allLabels = inputGroups.flatMap(group => group.fields);

const dropdownFields = [
  'Skin Type', 'Stress', 'Lice', 'Smoke', 'Wrinkles', 'Redness', 'Itching', 'Sunscreen Use',
  'Hair Type', 'Skin Sensitivity', 'Sunburn',
  'Hair Length', 'Acne', 'Genetics', 'Pimples', 'Exfoliation',
  'Junk Food', 'Alcohol Consumption',
  'Fizzy Hair', 'Dry Hair', 'Fine Lines', 'Hair Fall', 'Makeup Use',
  'Split Ends', 'Uneven Skin Tone',
  'Face Wash Frequency', 'Gender', 'Heat Damage', 'Hormonal Issues',
];

const optionsMap = {
  'Gender': [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
  ],
  'Skin Type': [
    { label: 'Dry', value: 0 },
    { label: 'Normal', value: 1 },
    { label: 'Oily', value: 2 },
    { label: 'Combination', value: 3 }
  ],
  'Hair Length': [
    { label: 'Short', value: 0 },
    { label: 'Medium', value: 1 },
    { label: 'Long', value: 2 }
  ],
  'Hair Type': [
    { label: 'Straight', value: 0 },
    { label: 'Curly', value: 1 },
    { label: 'Wavy', value: 2 }
  ],
  'Junk Food': [
    { label: 'No', value: 0 },
    { label: 'Yes', value: 1 }
  ],
  'Fizzy Hair': [
    { label: 'No', value: 0 },
    { label: 'Yes', value: 1 }
  ],
  'Split Ends': [
    { label: 'No', value: 0 },
    { label: 'Yes', value: 1 }
  ],
  'Face Wash Frequency': [
    { label: 'Daily', value: 0 },
    { label: 'Twice a Week', value: 1 },
    { label: 'Weekly', value: 2 }
  ]
};

// Add yes/no options for all other fields except some excluded ones
const yesNoFields = allLabels.filter(
  field => ![
    'Age', 'Gender', 'Skin Type', 'Hair Length', 'Hair Type',
    'Face Wash Frequency', 'Sleep Hours', 'Junk Food',
    'Fizzy Hair', 'Split Ends'
  ].includes(field)
);

yesNoFields.forEach(field => {
  optionsMap[field] = [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 }
  ];
});

function renderNumberedList(text) {
  if (!text) return null;

  // Split only by newline, not semicolon or comma
  const items = text.split('\n').filter(item => item.trim().length > 0);

  return (
    <ol style={{ paddingLeft: '20px' }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          {item.trim()}
        </li>
      ))}
    </ol>
  );
}

const planImages = {
  dietplan1: '/dietplan1.png',
  dietplan2: '/dietplan2.png',
  dietplan3: '/dietpan3.png',
  dietplan4: '/dietplan4.png',
  exercise1: '/exercise1.png',
  exercise2: '/exercise3.png',
  exercise3: '/exercise4.png',
  exercise4: '/exercise2.png',
  benefit1: '/benifit1.png',
  benefit2: '/benifit2.png',
  products1: '/product1.png',
  products2: '/product4.png',
  remedy1: '/remedy1.png',
  remedy2: '/remedy2.png',
  remedy3: '/remedy3.png',
  remedy4: '/remedy4.png',
  routine1: '/product2.png',
  routine2: '/product3.png',
  solution1: '/solution1.png',
  solution2: '/solution2.png',
  solution3: '/solution3.png',
  solution4: '/solution4.png',
  tips1: '/tips.png',
  repercussion1: '/loss.png',
  repercussion2: '/loss2.png',


};





function HairSkin() {




  const [inputs, setInputs] = useState(Array(allLabels.length).fill(''));
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
AOS.init({
duration: 1000,
easing: 'ease-in-out',
once: false,
mirror: false
});
}, []);

useEffect(() => {
  AOS.refresh(); // refresh AOS when content changes
  }, [result]);

  
  const handleChange = (index, value) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleSubmit = async () => {
    setError('');
    setResult(null);

    if (inputs.length !== allLabels.length) {
      setError('Internal Error: Input and label count mismatch.');
      return;
    }

    const incompleteIndex = inputs.findIndex(val => val === '');
    if (incompleteIndex !== -1) {
      const missingLabel = allLabels[incompleteIndex] || `Field at index ${incompleteIndex}`;
      setError(`Please fill all fields (Missing: ${missingLabel})`);
      return;
    }

    const ageIndex = allLabels.indexOf('Age');
    const sleepIndex = allLabels.indexOf('Sleep Hours');
    const age = parseFloat(inputs[ageIndex]);
    const sleep = parseFloat(inputs[sleepIndex]);

    if (isNaN(age) || age < 0 || age > 200) {
      setError('Age must be a valid number between 0 and 200.');
      return;
    }

    if (isNaN(sleep) || sleep < 0 || sleep > 36) {
      setError('Sleep Hours must be a valid number between 0 and 36.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/hairpredict/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs: inputs.map(val => parseFloat(val)) }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Backend Error:', errorData.error);
        throw new Error(`Request failed with status ${response.status}: ${errorData.error}`);
      }

      const result = await response.json();
      setResult(result);
    } catch (err) {
      console.error('Fetch Error:', err.message);
      setError('Prediction failed: ' + err.message);
    } finally {
      setLoading(false);
    }

  
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Navbar */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      ></div>

      {/* Form Section */}
      <div
        style={{
          backgroundImage: `url(${formBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            maxWidth: '900px',
            width: '100%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          <a href="/">
            <img src="logobg.png" alt="Logo" className={styles.navbarLogo} />
          </a>
          <h1 className={styles['form-title']}>Skin & Hair Health Detector</h1>

          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            {inputGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={styles[`grid-${group.columns}`]}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${group.columns}, 1fr)`,
                  gap: '20px',
                  marginBottom: '5px',
                }}
              >
                {group.fields.map((label) => {
                  const index = allLabels.indexOf(label);
                  return (
                    <div className={styles['input-group']} key={label}>
                      <label>{label}</label>
                      {optionsMap[label] ? (
                        dropdownFields.includes(label) ? (
                          <select
                            value={inputs[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className={styles['dropdown-field']}
                          >
                            <option value="">Select {label}</option>
                            {optionsMap[label].map((option, i) => (
                              <option key={i} value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        ) : (
                          <div className={styles['radio-group']}>
                            {optionsMap[label].map((option, i) => (
                              <label key={i} className={styles['radio-label']}>
                                <input
                                  type="radio"
                                  name={label}
                                  value={option.value}
                                  checked={inputs[index] === option.value.toString()}
                                  onChange={() => handleChange(index, option.value.toString())}
                                />
                                {option.label}
                              </label>
                            ))}
                          </div>
                        )
                      ) : (
                        <input
                          type="number"
                          value={inputs[index]}
                          onChange={(e) => handleChange(index, e.target.value)}
                          placeholder={`Enter ${label}`}
                          className={styles['input-field']}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            {error && <p className={styles['error-text']}>{error}</p>}

            <button type="submit" className={styles['submit-button']} disabled={loading}>
              {loading ? 'Detecting...' : 'Detect'}
            </button>
          </form>

{result !== null && (
  <div className={styles.resultContainer}>
    <h2 className={styles.heading}>Personalized Care Advice</h2>

    {Object.entries(result.details).map(([planName, planText], index) => {
      const imageUrl = planImages[planName.toLowerCase()] || '';
      const direction = index % 2 === 0 ? 'fade-right' : 'fade-left';
      const rowClass =
        index % 2 === 0 ? styles.planRow : `${styles.planRow} ${styles.reverseRow}`;

      return (
        <div
          key={planName}
          data-aos={direction}
          className={rowClass}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
        >
          {/* Text content */}
          <div className={styles.textSection}>
            <h3 className={styles.planTitle}>
              {planName.replace(/_/g, ' ')}
            </h3>
            {renderNumberedList(planText)}
          </div>

          {/* Image */}
          {imageUrl && (
            <div
              className={styles.imageWrapper}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={imageUrl}
                alt={planName}
                className={styles.planImage}
              />
            </div>
          )}
        </div>
      );
    })}
  </div>
)}




        </div>
      </div>
    </div>
  );
}

export default HairSkin;
