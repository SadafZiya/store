import { useFetch } from './components/Hooks/useFetch';

//style
import './App.css';

//Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import SetProducts from './components/Sort/SortProducts';

function App() {
  const { data, error, loading } = useFetch(
    'https://fakestoreapi.com/products'
  );

  return (
    <div className='App'>
      <Header />
      <SetProducts />
      <main>
        <Main data={data} />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
