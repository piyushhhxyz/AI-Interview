import React, { useState } from 'react';
import { Search } from 'lucide-react';
import axios from 'axios';

const AISearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: query,
          max_tokens: 150,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      onSearch(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error fetching AI response:', error);
      onSearch('Sorry, I couldn\'t process your request. Please try again.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Ask AI anything..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white rounded-full py-3 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
        disabled={loading}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
        ) : (
          <Search size={20} />
        )}
      </button>
    </form>
  );
};

export default AISearchBar;