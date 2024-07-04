import {useState} from 'react';

const useDependentOptions = () => {
  const [selectedDivision, setSelectedDivision] = useState(null);

  const handleDivisionChange = divisionId => {
    setSelectedDivision(divisionId);
  };

  return {selectedDivision, handleDivisionChange};
};

export default useDependentOptions;
