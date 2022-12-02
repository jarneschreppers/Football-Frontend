import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayersOverview from './components/player-overview';
import AddPlayer from './components/player-add';
import UpdatePlayer from './components/player-update';
import DeletePlayer from './components/player-delete';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
    return (
        <>
            <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
                <a
                    className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white-50 text-decoration-none"
                    href="/"
                >
                    Football
                </a>
                <nav>
                    <ul className="nav justify-content-center">
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Players
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item>
                            <li>
                                <Link to="/playersOverview" className="nav-link px-4 fs-5 text-black">
                                View players
                                </Link>
                            </li>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <li>
                                <Link to="/playersAdd" className="nav-link px-4 fs-5 text-black">
                                Add player
                                </Link>
                            </li>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <li>
                            <Link to="/playersUpdate" className="nav-link px-4 fs-5 text-black">
                               Update player
                            </Link>
                        </li>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <li>
                            <Link to="/playersDelete" className="nav-link px-4 fs-5 text-black">
                               Delete player
                            </Link>
                        </li>
                        </Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                </nav>
            </header>
            <main className="container mt-5">
                <Routes>
                    <Route path="/playersOverview" element={<PlayersOverview />} />
                    <Route path="/playersAdd" element={<AddPlayer />} />
                    <Route path="/playersUpdate" element={<UpdatePlayer />} />
                    <Route path="/playersDelete" element={<DeletePlayer />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
