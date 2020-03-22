import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import topIngredients from './../topIngredients.json';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const AddIngredient = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestion] = useState([]);
  const { addIngredient } = useContext(GlobalContext);

  const onChange = (e, { newValue }) => {
    e.preventDefault();
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestion(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestion([]);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newIngredient = {
      id: Math.floor(Math.random() * 100000000),
      value
    };
    addIngredient(newIngredient);
    setValue('');
    console.log(value);
  };

  const escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const getSuggestions = value => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp(escapedValue, 'i');

    return topIngredients.filter(ingredient => regex.test(ingredient.name));
  };

  const onSuggestionSelected = (e, { suggestionValue }) => {
    console.log(suggestionValue, ' is selected!');
  };

  const getSuggestionValue = suggestion => suggestion.name;

  //const renderSuggestion = suggestion => <div>{suggestion.name}</div>;
  const renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.name, query);
    const parts = parse(suggestion.name, matches);
    return (
      <div>
        {parts.map((part, index) => {
          console.log(parts);
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    );
  };

  const inputProps = {
    placeholder: 'Ex: apples',
    value,
    onChange
  };

  return (
    <form className="w-full max-w-sm relative" onSubmit={onSubmit}>
      {/*
      <input
        type="text"
        name="ingredient"
        placeholder="Ex: apples"
        value={value}
        onChange={onChange}
        className="bg-white px-4 py-3 pr-32 rounded-full w-full border border-orange-400 focus:outline-none focus:border-orange-700"
      /> */}
      <Autosuggest
        suggestions={suggestions.slice(0, 20)}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />
      <button
        className="absolute top-0 right-0 min-h-full text-sm font-bold uppercase tracking-wider pr-3 w-32"
        type="submit"
      >
        Add to list
      </button>
    </form>
  );
};

export default AddIngredient;
