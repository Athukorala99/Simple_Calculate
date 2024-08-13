import { useState } from 'react';
import { Calculator } from 'lucide-react';

const CalculatorApp = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (number: string) => {
    if (currentValue === '0') {
      setCurrentValue(number);
    } else {
      setCurrentValue(currentValue + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setPreviousValue(currentValue);
    setOperator(operator);
    setCurrentValue('0');
  };

  const handleEqualsClick = () => {
    if (operator === '+') {
      setCurrentValue((parseFloat(previousValue) + parseFloat(currentValue)).toString());
    } else if (operator === '-') {
      setCurrentValue((parseFloat(previousValue) - parseFloat(currentValue)).toString());
    } else if (operator === '*') {
      setCurrentValue((parseFloat(previousValue) * parseFloat(currentValue)).toString());
    } else if (operator === '/') {
      setCurrentValue((parseFloat(previousValue) / parseFloat(currentValue)).toString());
    }
    setPreviousValue('');
    setOperator('');
  };

  const handleClearClick = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperator('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <div className="flex justify-center mb-4">
        <Calculator size={48} color="blue" />
      </div>
      <div className="text-3xl text-right mb-4">{currentValue}</div>
      <div className="grid grid-cols-4 gap-4">
        <button onClick={() => handleNumberClick('7')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">7</button>
        <button onClick={() => handleNumberClick('8')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">8</button>
        <button onClick={() => handleNumberClick('9')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">9</button>
        <button onClick={() => handleOperatorClick('/')} className="bg-orange-500 text-white p-4 rounded-md hover:bg-orange-600">/</button>
        <button onClick={() => handleNumberClick('4')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">4</button>
        <button onClick={() => handleNumberClick('5')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">5</button>
        <button onClick={() => handleNumberClick('6')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">6</button>
        <button onClick={() => handleOperatorClick('*')} className="bg-orange-500 text-white p-4 rounded-md hover:bg-orange-600">*</button>
        <button onClick={() => handleNumberClick('1')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">1</button>
        <button onClick={() => handleNumberClick('2')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">2</button>
        <button onClick={() => handleNumberClick('3')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">3</button>
        <button onClick={() => handleOperatorClick('-')} className="bg-orange-500 text-white p-4 rounded-md hover:bg-orange-600">-</button>
        <button onClick={() => handleNumberClick('0')} className="bg-gray-200 p-4 rounded-md hover:bg-gray-300">0</button>
        <button onClick={handleClearClick} className="bg-red-500 text-white p-4 rounded-md hover:bg-red-600">C</button>
        <button onClick={handleEqualsClick} className="bg-green-500 text-white p-4 rounded-md hover:bg-green-600">=</button>
        <button onClick={() => handleOperatorClick('+')} className="bg-orange-500 text-white p-4 rounded-md hover:bg-orange-600">+</button>
      </div>
    </div>
  );
};

export default CalculatorApp;