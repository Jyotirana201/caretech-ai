import React, { useEffect, useState } from 'react';

function HairSkinSolution() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.details) {
        console.log('POSTMESSAGE DETAILS:', event.data.details);
        setDetails(event.data.details);
      }
    };

    const saved = sessionStorage.getItem('hairSkinPrediction');
    if (saved) {
      const parsed = JSON.parse(saved);
      console.log('SESSIONSTORAGE DETAILS:', parsed);
      setDetails(parsed);
      sessionStorage.removeItem('hairSkinPrediction');
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (!details) {
    return (
      <div>
        <h2>Waiting for data...</h2>
        <p>Please ensure this page was opened from the form.</p>
      </div>
    );
  }

  const renderPair = (key1, key2, img1, img2) => {
    if (!details[key1] && !details[key2]) return null;
    return (
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        {details[key1] && (
          <div>
            <img src={img1} alt={key1} style={{ width: 100, height: 100 }} />
            <p>{details[key1]}</p>
          </div>
        )}
        {details[key2] && (
          <div>
            <img src={img2} alt={key2} style={{ width: 100, height: 100 }} />
            <p>{details[key2]}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Personalized Hair & Skin Plan</h1>
      {renderPair('Solution1', 'Solution2', '/banner1.png', '/banner1.png')}
      {renderPair('Solution3', 'Solution4', '/banner1.png', '/banner1.png')}
      {renderPair('Remedy1', 'Remedy2', '/banner1.png', '/banner1.png')}
      {renderPair('Remedy3', 'Remedy4', '/banner1.png', '/banner1.png')}
      {renderPair('Exercise1', 'Exercise2', '/banner1.png', '/banner1.png')}
      {renderPair('Exercise3', 'Exercise4', '/banner1.png', '/banner1.png')}
      {renderPair('DietPlan1', 'DietPlan2', '/banner1.png', '/banner1.png')}
      {renderPair('DietPlan3', 'DietPlan4', '/banner1.png', '/banner1.png')}
    </div>
  );
}

export default HairSkinSolution;
