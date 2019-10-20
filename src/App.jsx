import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './assets/';
import { Charts } from './components/';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Charts />
				</ThemeProvider>
			</Provider>
		);
	}
}

export default App;
