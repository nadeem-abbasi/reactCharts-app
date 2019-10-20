import React, { Component } from 'react';
import { Grid, Typography, AppBar, Toolbar, Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { styles } from '../assets';
import { DataChart, SignalChart } from './';
import { connect } from 'react-redux';
import { sendData } from '../actions';

class MainChart extends Component {
	componentDidMount() {
		this.props.sendData();
	}

	render() {
		const { classes, chartData, dataError } = this.props;
		return (
			<Grid
				container
				spacing={2}
				justify="space-between"
				alignItems="center"
				direction="row"
			>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h3" component="h3">
							Sudden Peaks Chart
						</Typography>
					</Toolbar>
				</AppBar>

				{chartData && chartData.data.length > 0 && (
					<Grid item xs={6}>
						<DataChart data={chartData.data} />
					</Grid>
				)}
				{chartData && chartData.signal.length > 0 && (
					<Grid item xs={6}>
						<SignalChart data={chartData.signal} />
					</Grid>
				)}
				{dataError && (
					<Grid item xs={12}>
						<Card className={classes.graphCard}>
							<i style={{ color: '#F45B69' }}>No Data available!</i>
						</Card>
					</Grid>
				)}
			</Grid>
		);
	}
}
MainChart.propTypes = {
	chartData: PropTypes.object,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	sendData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		chartData: state.chartReducer.chartData,
		dataError: state.chartReducer.dataError
	};
};

export default connect(
	mapStateToProps,
	{ sendData }
)(withStyles(styles)(MainChart));
