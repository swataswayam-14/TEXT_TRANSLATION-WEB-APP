import React, { useState } from 'react';
import axios from 'axios';

const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en');

  const translateText = async () => {
    const API_KEY = '';
    const API_URL = 'https://translation.googleapis.com/language/translate/v2';
    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        q: inputText,
        target: targetLanguage,
      }
    );
    setOutputText(response.data.data.translations[0].translatedText);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Text Translator</h1>
      <div className="flex flex-col items-center">
        <textarea
          className="placeholder-black bg-coral-black border border-gray-400 rounded-lg p-2 w-96 h-32 mb-4"
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <select
          className="border border-gray-400 rounded-lg p-2 w-96 mb-4"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
        </select>
        <button
          className="bg-fuchsia-black hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          onClick={translateText}
        >
          Translate
        </button>
        <br/>
        <br/>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-full"
          onClick={() => {
            setInputText('');
            setOutputText('');
          }}
        >
          Clear
        </button>
        <textarea
          className="placeholder-black bg-coral-black border border-gray-400 rounded-lg p-2 w-96 h-32 mt-4"
          placeholder="Translation output"
          value={outputText}
          readOnly
        />
      </div>
    </div>
  );
};

export default Translate;

