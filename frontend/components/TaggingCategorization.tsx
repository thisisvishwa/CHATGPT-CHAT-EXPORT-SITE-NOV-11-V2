import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const TaggingCategorization: React.FC = () => {
  const [tag, setTag] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleTagSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actions.addTag(tag));
    setTag('');
  };

  const handleCategorySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actions.addCategory(category));
    setCategory('');
  };

  return (
    <div id="tagging-categorization">
      <form onSubmit={handleTagSubmit}>
        <input type="text" value={tag} onChange={handleTagChange} placeholder="Add a tag" />
        <button type="submit">Add Tag</button>
      </form>
      <form onSubmit={handleCategorySubmit}>
        <input type="text" value={category} onChange={handleCategoryChange} placeholder="Add a category" />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default TaggingCategorization;