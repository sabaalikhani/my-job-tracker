import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const BarChartComponent = ({ data }) => {
	return (
		<ResponsiveContainer width='100%' height={300}>
			<BarChart data={data} margin={{ top: 50 }}>
				<CartesianGrid strokeDashArray='3 3 ' />
				<XAxis dataKey='date' />
				<YAxis allowDecimals={false} />
				<Tooltip />
				<Bar dataKey='count' fill='#8b5cf6' barSize={75} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default BarChartComponent;
