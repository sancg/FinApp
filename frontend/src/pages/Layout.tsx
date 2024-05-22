import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/extra">Extra</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
