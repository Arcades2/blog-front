import { NavLink } from 'remix';

function Nav() {
  const activeClassName = 'underline text-teal-400 font-semibold';
  return (
    <div className="flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassName : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="til"
        className={({ isActive }) => (isActive ? activeClassName : '')}
      >
        Today I learned
      </NavLink>
    </div>
  );
}

export default Nav;
