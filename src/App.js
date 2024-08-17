import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return (
    <div>
      <h1>Redux Observable</h1>
      <button onClick={handleFetchData}>Fetch Data</button>
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
