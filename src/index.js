import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import labsReducer from './Reducers/LabsReducer';
import invsReducer from './Reducers/InvsReducer';
import itemsReducer from './Reducers/ItemsReducer';
import usersReducer from './Reducers/UsersReducer';
import noticesReducer from './Reducers/NoticesReducer';
import authReducer from './Reducers/AuthReducer';
import itemOrderReducer from './Reducers/ItemOrderReducer';
import itemBatchReducer from './Reducers/ItemBatchReducer';
import labInvitesReducer from './Reducers/LabInvitesReducer';

const appReducer = combineReducers({
	users: usersReducer,
	labs: labsReducer,
	inventories: invsReducer,
	items: itemsReducer,
	itemOrders: itemOrderReducer,
	itemBatches: itemBatchReducer,
	notices: noticesReducer,
	labInvites: labInvitesReducer,
	auth: authReducer
});

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOG_OUT') {
		state = undefined;
	}
	return appReducer(state, action);
};
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<ColorModeScript />
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
