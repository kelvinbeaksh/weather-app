import React, { useState } from 'react';

interface Props {
  onSearch: (city: string, country: string) => void;
}

const WeatherForm: React.FC<Props> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city.trim(), country.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
      <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default WeatherForm;
