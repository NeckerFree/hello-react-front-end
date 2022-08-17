import ApiServices from '../../dataAccess/apiServices';
import GreetingTypes from '../greetingTypes';

const getRandomGreeting = () => async (dispatch) => {
  const response = await ApiServices.getRandomGreeting();
  const greetings = [];
  const entries = response.data;
  entries.forEach((inputEntry) => {
    const greeting = { ...inputEntry };
    greetings.push(greeting);
  });
  dispatch({
    type: GreetingTypes.GET_GREETINGS,
    payload: greetings,
  });
};

export default getRandomGreeting;
