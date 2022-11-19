import { useDispatch } from 'react-redux';
import { getToken } from './api/token';
import './App.css';
import Headers from './components/Headers';
import Main from './components/Main';
import { updateToken } from './store/tokenReducer';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Headers />
            <Main />
          </>
        }
      />
    </Routes>
  );
}

export default App;
