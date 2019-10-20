import React from 'react';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';
import { styles } from '../assets';
import { withStyles } from '@material-ui/styles';
import { Card, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const AreaGraph = (props) => {
	const { data, classes, index } = props;
	const colors = ['#F08080', '#51cda0', '#4f81bc'];
	return (
		<Card className={classes.graphCard}>
			<Typography varian="h4" component="h4" color="primary">
				Test #{index + 1}
			</Typography>
			<ResponsiveContainer width="90%" height={130}>
				<AreaChart data={data}>
					<XAxis dataKey="x" interval={3} name="point" />
					<YAxis dataKey="y" name="value" />
					<CartesianGrid vertical={false} />
					<Tooltip
						formatter={(value) => {
							return [value, 'value'];
						}}
						labelFormatter={(value) => {
							return ['Point: ', value];
						}}
					/>
					<Legend align="right" />
					<Area
						type="linear"
						dataKey="y"
						stroke={colors[index]}
						fill={colors[index]}
						name={`Series ${index + 1}`}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</Card>
	);
};
AreaGraph.propTypes = {
	data: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string
};
export default withStyles(styles)(AreaGraph);
