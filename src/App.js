import { useFetch } from './components/Hooks/useFetch';

//style
import './App.css';

//Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import SetProducts from './components/Sort/SortProducts';
import { useState } from 'react';

function App() {
  const { data, error, loading } = useFetch(
    'https://fakestoreapi.com/products'
  );
  const [searchFilter, setSearchFilter] = useState();

  return (
    <div className='App'>
      <Header setSearchFilter={setSearchFilter} />
      <SetProducts />
      <main>
        <Main data={data} searchFilter={searchFilter} />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
