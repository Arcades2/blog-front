import { Outlet } from 'remix';

function Til() {
  return (
    <div className="min-h-[95vh] til">
      <div className="max-w-2xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Til;
