import React from 'react';
import BookList from './component/bookList';
import Navbar from './component/navbar';
import Setup from './React_course-hooks/use-State/useState';


function App() {
  const body = document.body;

  body.style.backgroundColor = "rgb(214, 238, 240)";
  return (
    <div className='container p-4 text-center'>
      <Setup />
    </div>
  );
}

export default App;
