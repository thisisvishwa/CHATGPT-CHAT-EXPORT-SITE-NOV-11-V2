import React from 'react';
import { Provider } from 'react-redux';
import ThemeSwitcher from '../components/ThemeSwitcher';
import LanguageSelector from '../components/LanguageSelector';
import Authentication from '../components/Authentication';
import SearchFilter from '../components/SearchFilter';
import ConversationViewer from '../components/ConversationViewer';
import store from '../redux/store';

const IndexPage = () => {
  return (
    <Provider store={store}>
      <ThemeSwitcher />
      <LanguageSelector />
      <Authentication />
      <SearchFilter />
      <ConversationViewer />
    </Provider>
  );
};

export default IndexPage;