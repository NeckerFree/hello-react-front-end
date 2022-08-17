import GreetingTypes from '../greetingTypes';

const greetingsCollection = [];
export default function greetingsReducer(state = greetingsCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case GreetingTypes.GET_GREETINGS:
      return payload;
    default:
      return state;
  }
}
