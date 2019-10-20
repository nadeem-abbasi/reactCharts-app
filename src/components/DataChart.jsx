import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from '../assets';
import { LineGraph } from './';
import PropTypes from 'prop-types';

const DataChart = (props) => {
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
				Data
			</Typography>
			{data.map((value, i) => {
				return (
					<LineGraph
						data={value}
						key={i}
						index={i}
						fill={false}
						classes={classes}
					/>
				);
			})}
		</>
	);
};

DataChart.propTypes = {
	data: PropTypes.array.isRequired,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string
};

export default withStyles(styles)(DataChart);
