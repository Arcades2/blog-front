import { LoaderFunction, Outlet } from 'remix';

// TODO : Remove this once issue #1140 is resolved
export const loader: LoaderFunction = () => null;

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
