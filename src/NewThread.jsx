// NewThread.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NewThread.css'

const NewThread = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get('title')?.trim();
    if (title) {
      try {
        const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title }),
        });

        if (!response.ok) {
          throw new Error(`レスポンスステータス: ${response.status}`);
        }

        console.log(title);
        console.log(JSON.stringify({ title }));
        form.reset();
        console.log("スレッドが作成されました");
      } catch (error) {
        console.error("スレッド作成エラー:", error.message);
      }
    } else {
      alert("件名を入力してください");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="件名を入力してください"
          required
        />
        <button type="submit">スレッド作成</button>
      </form>
      <Link to="/" className="return-thread">スレッド一覧画面はこちら</Link>
    </div>
  );
};

export default NewThread;
