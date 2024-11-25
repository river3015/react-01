import React from 'react';
import ThreadCard from './ThreadCard.jsx';
import './ThreadList.css';

const ThreadList = ({ threads }) => {
  return (
    <div className="thread-list">
      {threads.map((thread ) => (
        <ThreadCard key={thread.id} id={thread.id} title={thread.title} />
      ))}
    </div>
  );
};

export default ThreadList;
