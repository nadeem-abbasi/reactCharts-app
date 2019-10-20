import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../assets';
import { AreaGraph } from './';

const SignalChart = (props) => {
	let { data, classes } = props;

	data = data.map((value, i) => {
		return value.map((val, index) => {
			return { x: index, y: val };
		});
	});
	return (
		<>
			<Typography
				component="h3"
				variant="h3"
				color="primary"
				className={classes.header}
			>
				Peaks
			</Typography>
			{data.map((value, i) => {
				return (
					<AreaGraph
						data={value}
						key={i}
						index={i}
						fill={true}
						classes={classes}
					/>
				);
			})}
		</>
	);
};
SignalChart.propTypes = {
	data: PropTypes.array.isRequired,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string
};
export default withStyles(styles)(SignalChart);
