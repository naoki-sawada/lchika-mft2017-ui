import * as actions from 'actions';
import Socket from 'utils/Socket';

const initState = () => {
  return new Socket();
};

export const initial = initState();

const handlers = {};

export default function(state = initial, action) {
  const handler = handlers[action.type];
  return !handler ? state : handler(state, action);
}
