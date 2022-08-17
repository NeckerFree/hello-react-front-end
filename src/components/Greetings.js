import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import '../index.css';
import Greeting from './Greeting';
import getRandomGreeting from '../redux/greetings/greetingActions';

const Greetings = () => {
  const dispatch = useDispatch();
  const greetingsCollection = useSelector((state) => state.greetingReducer);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <section className="pageContainer">
      <h3 className="sectionHeader">Greetings</h3>
      <div className="searchDivDeparatment">
        <div>
          <button type="button" onClick={refreshPage}>Get next Greeting</button>
        </div>
      </div>
      <section className="greetingsContainer" data-testid="container-a">
        {greetingsCollection.map((greeting) => (
          <div className="greetingElement" key={greeting.id}>
            <Greeting
              message={greeting.message}
            />
          </div>
        ))}
      </section>
    </section>

  );
};
export default Greetings;
