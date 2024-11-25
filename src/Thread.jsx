import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import PostCard from './PostCard';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Thread.css';

const Thread = () => {

  const params = useParams();
  const threadId = params.id.replace(":", "");
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleFirst = () => setOffset(0);
  const handleNext = () => setOffset(prevOffset => prevOffset + 10);
  const handlePrev = () => setOffset(prevOffset => Math.max(prevOffset - 10, 0));

  async function getThreadPost() {
    const url = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts?offset=${offset}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`レスポンスステータス: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data.posts);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getThreadPost();
  }, [offset]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    // const post = document.querySelector('input[name="text"]').value.trim();
    const post = formData.get('text')?.trim();
    if (post) {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post }),
        });

        if (!response.ok) {
          throw new Error(`レスポンスステータス: ${response.status}`);
        }

        form.reset();
        console.log("投稿が追加されました", JSON.stringify({ post }));
        getThreadPost();
      } catch (error) {
        console.error("投稿追加エラー:", error.message);
      }
    } else {
      alert("投稿を追加してください");
    }
  };

  return (
    <div className="container">
      <Link to="/" className="return-thread-list">スレッド一覧はこちら</Link>
      <h2>投稿一覧</h2>
      <div className="thread-list">
      {posts.map(element => (
        <PostCard key={element.id} post={element.post} />
      ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="投稿を入力してください"
          required
        />
        <button type="submit">投稿を追加</button>
      </form>
      <Pagination
        handleFirst={handleFirst}
        handlePrev={handlePrev}
        handleNext={handleNext}
        offset={offset}
      />
    </div>
  );
};

export default Thread;