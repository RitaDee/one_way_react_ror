/* eslint-disable import/prefer-default-export */
import { greetingActions } from '../slice/greetingSlice';

export const fetchGreetingData = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/messages');
    if (!response.ok) {
      throw new Error('Failed to fetch greeting data');
    }
    const data = await response.json();

    data.forEach((el) => {
      const greeting = el.text;
      dispatch(greetingActions.addGreeting(greeting));
    });
  } catch (error) {
    console.error(error);
    // Dispatch an action to handle the error state in your application if needed.
  }
};
