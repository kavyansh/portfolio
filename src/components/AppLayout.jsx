import { Outlet } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import Header from './header/Header';
import NavigationBar from './Navigation/NavigationBar';

function AppLayout() {
  return (
    <div className="mx-auto mt-32 grid max-w-[1500px] gap-4 px-4 sm:grid-cols-[auto_1fr]">
      <SideBar />
      <div className="relative mb-8 flex min-h-[622px] select-none flex-col gap-6  rounded-2xl bg-gray-50 px-4 py-2 shadow-xl">
        <NavigationBar />
        <div className="flex flex-col gap-4 divide-y">
          <Header />
          <main className="h-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
