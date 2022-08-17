import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import '../index.css';
import Greeting from './Greeting';
import getRandomGreeting from '../redux/greetings/greetingActions';

const Greetings = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const greetingsCollection = useSelector((state) => state.greetingReducer);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, []);

  const filteredGreetings = greetingsCollection.filter((greeting) => greeting.message
    .toLowerCase().includes(search.toLowerCase()));

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section className="pageContainer">
      <h3 className="sectionHeader">Greetings</h3>
      <div className="searchDivDeparatment">
        <input className="input-style" type="text" placeholder="Search Department" onChange={handleChange} data-testid="search-1" />
      </div>
      <section className="greetingsContainer" data-testid="container-a">
        {filteredGreetings.map((greeting) => (
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
