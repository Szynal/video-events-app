import { combineReducers } from 'redux';
import { reducer as voxeet } from '@voxeet/react-components';

export default () =>
    combineReducers({
        voxeet,
    });