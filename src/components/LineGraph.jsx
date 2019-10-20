import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';
import PropTypes from 'prop-types';
import { styles } from '../assets';
import { withStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';

const LineGraph = (props) => {
	const { data, classes, index } = props;
	const colors = ['#F08080', '#51cda0', '#4f81bc'];

	return (
		<Card className={classes.graphCard}>
			<Typography varian="h4" component="h4" color="primary">
				Test #{index + 1}
			</Typography>
			<ResponsiveContainer width="90%" height={130}>
				<LineChart data={data}>
					<XAxis dataKey="x" interval={2} name="Point" />
					<YAxis dataKey="y" name="Value" />
					<CartesianGrid vertical={false} />
					<Tooltip
						formatter={(value) => {
							return [value, 'Value'];
						}}
						labelFormatter={(value) => {
							return ['Point: ', value];
						}}
					/>
					<Legend align="right" />
					<Line
						type="linear"
						dataKey="y"
						stroke={colors[index]}
						dot={false}
						name={`Series ${index + 1}`}
					/>
				</LineChart>
			</ResponsiveContainer>
		</Card>
	);
};
LineGraph.propTypes = {
	data: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string
};
export default withStyles(styles)(LineGraph);
