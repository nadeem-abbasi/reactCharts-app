import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#003049'
		},
		secondary: { main: '#D62828' },
		error: { main: '#F45B69' }
	},
	spacing: 2,
	typography: {
		h3: {
			fontSize: '2.5rem'
		},
		h4: {
			fontSize: '2.0rem',
			fontWeight: 350
		}
	}
});
export default theme;
