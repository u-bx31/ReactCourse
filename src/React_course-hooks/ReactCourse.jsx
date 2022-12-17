import { Link } from "react-router-dom";

const ReactCourse = () => {
    return (
        <div className='container bg-white p-0 min-vh-100'>
            <main>
                <section class="py-5 text-center container">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">React Hooks</h1>
                            <p>
                                those are the most usable hooks on react that I've learned on freeCodeCamp React Course. and those all of my notes that i've write in each hook<br/>
                            </p>
                            <p>
                                <Link to={"/"}class="btn btn-secondary my-2">Back to Home</Link>
                            </p>
                        </div>
                    </div>
                </section>

                <div class="album py-5 bg-light">
                    <div class="container ">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text"><b>Use State Hook</b><br/>
                                            - allows us to track state in a function component.
                                            - alows us to store values 
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/useState'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text"><b>Use Effect Hook</b><br/>
                                            - allows us to perform side effects in your components
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/useEffect'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text">
                                            <b>Forms in React</b><br />
                                            - how to get what we enter in inputs usign 'onChange()' method ;<br />
                                            - add inputs values into list <br />
                                            - display what we added ;
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/forms'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text"><b>React Router</b><br />
                                            - add simple navigation ;
                                            - navigate between pages without re-render;</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/reactRouter'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text">
                                            <b>use Ref</b><br />
                                            - access a DOM element directly.;<br />
                                            - to store a mutable value that does not cause a re-render when updated;
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/useRef'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text"><b>Use Reducer Hook</b><br/>
                                            - similar to 'useState' 
                                            - allows us to custom state logic
                                            - with useContext will be simillar to Redux ;
                                            - If you find yourself keeping track of multiple pieces of state that rely on complex logic use 'useReducer' may be helpful,
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/useReducer'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text"><b>Use Context Hook</b><br/>
                                            - instead of usign prop Drilling to acces to Data. useContext help alot on it;<br/>
                                            - it help to manage state globally;<br/>
                                            - you can pass a 'state' or 'function' on it ;<br/>
                                            - to use 'useContext' you need to import <br/>
                                            1 - createContext and make it accessible to all components<br/>
                                            2 - wrap your component with UserContext.provider ;<br/>
                                            3 - to get the data import useContext put the provider on props of use context ;
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/useContext'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text"><b>Prop Types</b><br/>
                                            - help us to validate the tyoe of props that we use <br/>
                                            - in this project i have a list of obejcts that one of those objects not complited i use prop types to validate if the props are not empty will display normal values but if not instead of values will display unkonw;
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/propTypes'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text"><b>Use callback and memo Hook</b><br/>
                                            - UseCallback : this hook help to memoized callback function;<br/>
                                            - One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
                                            -useMemo : this hook returns a memoized value.
                                            - The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group w-100">
                                                <Link type="button" to={'/course/useCallback'} class="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>

    );
}

export default ReactCourse;