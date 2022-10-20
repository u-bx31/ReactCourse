import React from 'react';
// import BookList from './component/bookList';
// import Navbar from './component/navbar';
// import Setup from './React_course-hooks/use-State/useState';
import Setup from './React_course-hooks/useEffect/useEffect';


function App() {
  const body = document.body;

  body.style.backgroundColor = "rgb(147 147 147)";
  return (
    <div className='container p-4 text-center bg-white'>
      <Setup />
    </div>
  );
}

export default App;
