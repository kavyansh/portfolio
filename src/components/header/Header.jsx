import { useLocation } from 'react-router-dom';

function Header() {
  const currentLocation = useLocation();
  let currentPathName = currentLocation.pathname.split('/').at(-1);

  if (currentPathName === 'about') currentPathName += ' Me';
  return (
    <header className="relative my-2 w-max pb-2 before:absolute before:bottom-0 before:h-[4px] before:w-[60%] before:rounded-full before:bg-blue-500 before:content-[''] ">
      <h1 className="text-3xl font-bold capitalize">{currentPathName}</h1>
    </header>
  );
}

export default Header;
