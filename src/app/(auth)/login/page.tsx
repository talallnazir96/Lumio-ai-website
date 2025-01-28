const Login = () => {
    return <>
        <section className="signin">
            <div className="container text-center">
                <h2 className="SectionHeading">Welcome to LumioAI</h2>
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="formsec">
                            <h3>Sign in</h3>
                            <hr/>
                            <form action="" className="mt-4">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email"/>
                                <label htmlFor="password">Password</label>
                                <input type="password"/>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <a href="#" className="loginbtn">Sign in</a>
                                    <a href="#">Forgot password?</a>
                                </div>
                                <hr/>
                                <p className="paratext">Don’t have an account? <a href="#" className="ps-2">Start
                                    here</a></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/assets/img/login.jpeg" className="img-fluid" alt="Login"/>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Login