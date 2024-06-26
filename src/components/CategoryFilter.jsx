import React from 'react';

function CategoryFilter({ category, setCategory }) {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="전체">전체</option>
      <option value="공지사항">공지사항</option>
      <option value="자유게시판">자유게시판</option>
      <option value="Q&A">Q&A</option>
    </select>
  );
}

export default CategoryFilter;
