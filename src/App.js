import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Component/Header';
import ArticleList from './Component/ArticleList';
import './App.css';

const App = () => {
  
  const[data, setData] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
        const result = await axios('');

        console.log(result.data.articles);
        setData(result.data.articles);
    }

    fetchItems();
  }

  );
  return (
    <div className="App">
      <Header />
      <ArticleList data={data} />
    </div>
  );
}

export default App;
