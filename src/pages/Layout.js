// Layout.js
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <h5>L2</h5>
                            {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
                        </a>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2">Home</Link></li>
                        <li><Link to="/aboutme" className="nav-link px-2">Sobre Mim</Link></li>
                        <li><Link to="/skills" className="nav-link px-2">Skills/Habilidades</Link></li>
                        <li><Link to="/project" className="nav-link px-2">Projetos</Link></li>
                        <li><Link to="/contact" className="nav-link px-2">Contato</Link></li>
                    </ul>

                    {/* <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div> */}
                </header>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutme">Sobre Mim</Link></li>
                    <li><Link to="/skills">Skills/Habilidades</Link></li>
                    <li><Link to="/project">Projetos</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};
export default Layout;