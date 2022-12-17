import { Link } from "react-router-dom";

const ReactProjects = () => {
    return (
        <div className='container bg-white p-0 min-vh-100'>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">React Projects</h1>
                            <p>all of those Projects you will found them on this <a href="https://react-projects.netlify.app/">link</a><br/>
                            </p>
                            <p>
                                <Link to={"/"} className="btn btn-secondary my-2">Back to Home</Link>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container ">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text"><b>BirthDay Reminder</b><br/> 
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group w-100">
                                                <Link type="button" to={'/projects/birthDayReminder'} className="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text"><b>Tours</b><br/> 
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group w-100">
                                                <Link type="button" to={'/projects/tours'} className="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text"><b>Menu</b><br/> 
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group w-100">
                                                <Link type="button" to={'/projects/menu'} className="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text"><b>Cart</b><br/> 
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group w-100">
                                                <Link type="button" to={'/projects/cart'} className="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text"><b>Book Library</b><br/> 
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group w-100">
                                                <Link type="button" to={'/projects/bookLibrary'} className="btn btn-sm btn-outline-secondary">View</Link>
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

export default ReactProjects;