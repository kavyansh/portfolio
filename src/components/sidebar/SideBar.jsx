import { useEffect, useRef, useState } from 'react';
import Avatar from './Avatar';
import UserDetails from './UserDetails';
import DownloadCV from './DownloadCV';

function SideBar() {
  const sideBar = useRef(null);
  const [sideBarTopMargin, setSideBarTopMargin] = useState(0);
  const [scrollEventAttached, setScrollEventAttached] = useState(false);
  const scrollLimit = useRef(0);

  const sideBarStyles = {
    base: `sidebar flex items-center rounded-2xl bg-slate-50 px-4 py-2 pb-2 shadow-xl sm:flex-col`,
  };

  useEffect(
    function () {
      // if (scrollEventAttached) return;
      function handleScroll() {
        if (window.scrollY > 0 && sideBarTopMargin === 0) {
          setSideBarTopMargin(10);
        } else if (sideBarTopMargin > 0 && window.scrollY === 0) {
          setSideBarTopMargin(0);
        }
      }
      window.addEventListener('scroll', handleScroll);
      scrollLimit.current = document.body.scrollHeight;
      setScrollEventAttached(true);
    },
    [sideBarTopMargin, scrollEventAttached],
  );

  return (
    <div ref={sideBar}>
      <div
        style={
          sideBarTopMargin > 0
            ? {
                paddingTop: '10rem',
                position: 'sticky',
                marginTop: `${sideBarTopMargin}px`,
                top: `10px`,
              }
            : {
                paddingTop: '4.5rem',
                position: 'relative',
                marginTop: `${sideBarTopMargin}px`,
                top: '0px',
              }
        }
        className={sideBarStyles.base}
      >
        <SideBarTop sideBarTopMargin={sideBarTopMargin} />
        <SideBarBottom />
      </div>
    </div>
  );
}

function SideBarTop({ sideBarTopMargin }) {
  return (
    <div className="flex flex-col items-center transition-all duration-300 ease-linear">
      <div
        style={{ top: sideBarTopMargin > 0 ? '40px' : '-22%' }}
        className="absolute w-[70%] transition-all duration-300 ease-linear"
      >
        <Avatar />
      </div>

      <h1
        style={{ paddingTop: sideBarTopMargin > 0 ? '5.6rem' : '3rem' }}
        className="mb-2 pt-6 font-merriweather text-3xl transition-all duration-300 ease-linear"
      >
        Yash <span className=" font-semibold">Srivastava</span>
      </h1>
      <h2 className="my-1 rounded-full bg-gray-100 px-4 py-1 text-lg">Software Engineer</h2>
      <div className="my-2.5">
        <ul className="flex gap-4 opacity-50">
          <li>
            <a href="">
              <img className="h-3.5 w-3.5" src="src/assets/facebook-f.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="h-3.5 w-3.5" src="src/assets/hashnode.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="h-3.5 w-3.5" src="src/assets/linkedin-in.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SideBarBottom() {
  return (
    <div className=" rounded-lg bg-blue-50">
      <div className="flex flex-col items-center  px-4 pb-4">
        <UserDetails />
        <DownloadCV />
      </div>
    </div>
  );
}

export default SideBar;
