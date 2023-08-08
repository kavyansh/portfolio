import { useCurrentPath } from '../../hooks/useCurrentPath';

function Header() {
  let currentPathName = useCurrentPath();

  if (currentPathName === 'about') currentPathName += ' Me';
  return (
    <header className="relative my-4 w-max pb-3.5 before:absolute before:bottom-0 before:h-[4px] before:w-[100px] before:rounded-full before:bg-blue-500 before:content-[''] ">
      <h1 className="text-4xl font-bold capitalize text-blue-950">{currentPathName}</h1>
    </header>
  );
}

export default Header;
