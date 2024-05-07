import { useState } from 'react';
import lupe from '../assets/icons/lupe.svg';

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
    console.log('Suche gestartet:', searchQuery);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Suchen..."
        className="wider-search-bar" // Add a class for custom styling
        value={searchQuery}
        onChange={handleInputChange}
        style={{ // Apply inline styles for border and background color
          border: '1px solid black', // Add border around the input
          backgroundColor: 'lightblue', // Change the background color
          padding: '5px' // Add padding for better visibility
        }}
      />
      <button onClick={handleSearch} className="icon-button">
        <img src={lupe} alt="search icon" className="icon w-8" /> 
      </button>
    </div>
  );
};

export default SearchComponent;