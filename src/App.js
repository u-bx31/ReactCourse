import React from 'react';
//---first - project ---
// import BookList from './component/bookList';
// import Navbar from './component/navbar';

//----Course section----
// import Setup from './React_course-hooks/use-State/useState';
import Setup from './React_course-hooks/useEffect/useEffect';
// import Setup from './React_course-hooks/forms/forms';
// import Setup from './React_course-hooks/useRef/useRef';
// import Setup from './React_course-hooks/useReducer/useReducer';
// import Setup from './React_course-hooks/use-Context/useContext';

//--Projects Section --- 
// import Project from './React-Projects/BirthReminder/container';


function App() {
  return (
    <div className='container bg-white p-2 p-sm-4 text-center'>
      <Setup />
    </div>
  );

  //----------------------
  // return (
  //   <div className='container p-2 p-sm-4 text-center'>
  //     <Project />
  //   </div>
  // );
}

export default App;
