
import ReactCourse from "./ReactCourse";
import { Route, Routes } from "react-router-dom";
import SetupuseState from './use-State/useState';
import SetupuseEffect from './useEffect/useEffect';
import SetupReactrouter from './react-router';
import SetupForms from './forms/forms';
import SetupUseRef from './useRef/useRef';
import SetupUseReducer from './useReducer/useReducer';
import SetupUseContext from './use-Context/useContext';
import SetupProTypes from './propTypes';
import SetupUseMemoCallBack from './use-CallBack-memo_react-Memo';
import { Helmet } from "react-helmet";

const Index = () => {
    return (
        <>
            <Helmet>
                <title>React Course | Course</title>
            </Helmet>
            <Routes>
                <Route path='/' element={<ReactCourse />} />
                <Route path='/useState' element={<SetupuseState />} />
                <Route path='/useEffect' element={<SetupuseEffect />} />
                <Route path='/reactRouter/*' element={<SetupReactrouter />} />
                <Route path='/forms' element={<SetupForms />} />
                <Route path='/useRef' element={<SetupUseRef />} />
                <Route path='/useReducer' element={<SetupUseReducer />} />
                <Route path='/useContext' element={<SetupUseContext />} />
                <Route path='/propTypes' element={<SetupProTypes />} />
                <Route path='/useCallback' element={<SetupUseMemoCallBack />} />
            </Routes>
        </>
    );
}

export default Index;