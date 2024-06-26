import React, { useState } from 'react';

function CreatePost({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('공지사항');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content, category });
    setTitle('');
    setContent('');
    setCategory('공지사항');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="제목" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="내용" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="공지사항">공지사항</option>
        <option value="자유게시판">자유게시판</option>
        <option value="Q&A">Q&A</option>
      </select>
      <button type="submit">작성</button>
    </form>
  );
}

export default CreatePost;
