// NewThread.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const NewThread = () => {
  const titleRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
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

        // 成功したら入力をリセット
        titleRef.current.value = '';
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
          ref={titleRef}
          placeholder="件名を入力してください"
          required
        />
        <button type="submit">スレッド作成</button>
      </form>
      <Link to="/">
        <button>スレッド一覧画面はこちら</button>
      </Link>
    </div>
  );
};

export default NewThread;
