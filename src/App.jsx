import React, { useState, useEffect } from 'react';

const fruits = [
  'apple', 'banana', 'orange', 'grape', 'strawberry',
  'watermelon', 'pineapple', 'kiwi', 'mango', 'peach'
];

function App() {
  const [wordList, setWordList] = useState([]); // 현재 화면에서 보여주는 단어 목록
  const [input, setInput] = useState('');       // 입력창에 적은 텍스트 저장
  const [gameOver, setGameOver] = useState(false); // 게임 종료 여부 
  const [completed, setCompleted] = useState(false); // 모든 단어가 완료됐는지의 여부

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver && !completed) {
        const newWord = fruits[Math.floor(Math.random() * fruits.length)];
        setWordList(prevList => [...prevList, newWord]);
        if (wordList.length + 1 === fruits.length) {
          setCompleted(true);
        }
      }
    }, 500); // 단어 생성 간격을 3초로 설정

    return () => clearInterval(interval);
  }, [gameOver, completed]);

  useEffect(() => {
    if (wordList.length >= fruits.length || completed) {
      setGameOver(true);  // 화면에 모든 과일이 표시되면 게임 종료
    }
  }, [wordList, completed]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const index = wordList.findIndex(word => word.toLowerCase() === input.toLowerCase());
      if (index !== -1) {
        const newList = [...wordList];
        newList.splice(index, 1);
        setWordList(newList);
      }
      setInput('');
    }
  };

  const handleRestart = () => {
    setWordList([]);
    setInput('');
    setGameOver(false);
    setCompleted(false);
  };

  return (
    <div className="App">
      <h2>🎮타자연습 게임🎮</h2>
      <div>
        {wordList.map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        disabled={gameOver}
      />
      {gameOver && (
        <div>
          <p>게임 종료 - 단어가 너무 많이 쌓였거나 모든 단어가 나왔습니다!</p>
          <button onClick={handleRestart}>게임 재시작</button>
        </div>
      )}
    </div>
  );
}

export default App;
