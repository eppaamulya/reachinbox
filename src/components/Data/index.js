import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/1', {
          headers: {
            'Authorization': `Bearer 1cf45a369ffac927acc825ff2946486b4071c0112c007d23e7edc181012365b8`,
          },
        });
        setData(response.data);  // Store the data in state
      } catch (error) {
        setError(error.message);  // Store the error in state if any
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* Render your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Data;

