import React from 'react';
import { connect } from 'react-redux';
import { fetchDataFromAPI } from './actions';

const App = ({ loading, data, error, fetchData }) => {
  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
        {error && <p>Error: {error}</p>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  error: state.error,
});

const mapDispatchToProps = {
  fetchData: fetchDataFromAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
