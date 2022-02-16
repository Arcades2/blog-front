import DarkModeToggle from './DarkModeToggle';
import Nav from './Nav';

function Header() {
  return (
    <div className="py-2 border-b-2 border-solid border-black dark:border-white h-[5vh]">
      <div className="container mx-auto flex justify-between">
        <Nav />
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Header;
