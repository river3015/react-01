import React, { useState, useEffect } from 'react';
import ThreadList from './ThreadList';
import Pagination from './Pagination';
import './App.css'
import { Link } from 'react-router-dom';

const App = () => {

  const [threads, setThreads] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleFirst = () => setOffset(0);
  const handleNext = () => setOffset(prevOffset => prevOffset + 10);
  const handlePrev = () => setOffset(prevOffset => Math.max(prevOffset - 10, 0));

  async function getThreadList() {
    const url = `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`レスポンスステータス: ${response.status}`);
      }
      const data = await response.json();
      setThreads(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getThreadList();
  }, [offset]);

  return (
    <div className="container">
      <Link to="/threads/new">
        <button>スレッド作成はこちら</button>
      </Link>
      <ThreadList threads={threads} />
      <Pagination
        handleFirst={handleFirst}
        handlePrev={handlePrev}
        handleNext={handleNext}
        offset={offset}
      />
    </div>
  );
};

export default App;
