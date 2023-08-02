import { Outlet } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import Header from './header/Header';
import NavigationBar from './header/NavigationBar';

function AppLayout() {
  return (
    <div className="mx-auto mt-32 grid max-w-[1500px] gap-4 px-4 sm:grid-cols-[auto_1fr]">
      <SideBar />
      <div className="relative mb-8 flex select-none flex-col rounded-2xl bg-slate-100 px-4 py-2 shadow-xl">
        <Header />
        <NavigationBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
