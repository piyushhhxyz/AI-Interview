import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const AIChartGenerator = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateChart = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: "Generate JSON data for a line chart showing monthly sales for the past year",
          max_tokens: 150,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const generatedData = JSON.parse(response.data.choices[0].text.trim());
      setChartData(generatedData);
    } catch (error) {
      console.error('Error generating chart data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg mt-8">
      <h3 className="text-xl font-semibold mb-4">AI-Generated Chart</h3>
      <button
        onClick={generateChart}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Chart'}
      </button>
      {chartData && (
        <ResponsiveContainer width="100%" height={300} className="mt-4">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="month" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AIChartGenerator;