import { Outlet } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import Header from './header/Header';
import NavigationBar from './header/NavigationBar';

function AppLayout() {
  return (
    <div className=" mx-auto grid max-w-7xl gap-4 px-4  py-40 sm:grid-cols-[auto_1fr]">
      <SideBar />
      <div className=" relative mb-8 flex select-none flex-col overflow-x-hidden rounded-2xl bg-slate-50 px-4 py-2 shadow-xl">
        <Header />
        <NavigationBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
