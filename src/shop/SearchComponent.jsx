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
        className="wider-search-bar"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className="icon-button">
        <img src={lupe} alt="search icon" className="icon w-8" /> {/* Display the icon image inside the button */}
      </button>
    </div>
  );
};

export default SearchComponent;