import { useEffect, useRef, useState } from 'react';
import Avatar from './Avatar';
import Button from '../ui/Button';
import UserDetails from './UserDetails';

function SideBar() {
  const sideBar = useRef(null);
  const [sideBarTopMargin, setSideBarTopMargin] = useState(0);
  const scrollLimit = useRef(0);

  useEffect(
    function () {
      function handleScroll() {
        if (window.scrollY + 100 > scrollLimit.current) return;
        if (sideBarTopMargin + 90 < 0 || window.scrollY - 90 < 0) setSideBarTopMargin(0);
        else setSideBarTopMargin(window.scrollY - 50);
      }
      window.addEventListener('scroll', handleScroll);
      scrollLimit.current = document.body.scrollHeight;
    },
    [sideBarTopMargin],
  );

  return (
    <div>
      <div
        ref={sideBar}
        style={{ marginTop: sideBarTopMargin, paddingTop: sideBarTopMargin > 0 ? '10rem' : '4rem' }}
        className="sidebar px- relative mt-20 flex items-center rounded-2xl bg-slate-50 py-2 pb-2 shadow-xl sm:w-72 sm:flex-col"
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
        style={{ paddingTop: sideBarTopMargin > 0 ? '6.4rem' : '3rem' }}
        className="mb-2 pt-6 font-merriweather text-3xl transition-all duration-300 ease-linear"
      >
        Yash <span className=" font-semibold">Srivastava</span>
      </h1>
      <h2 className="my-1 rounded-full bg-gray-100 px-4 py-1 text-lg">Software Engineer</h2>
      <div className="my-4">
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
        <Button
          type="download"
          fileName="Yash_Srivastava.pdf"
          link="https://cloud.appwrite.io/v1/storage/buckets/64c67484aeff59511269/files/64c675e546ed8eb9c6e3/view?project=64c6746e6e538b52e163&mode=admin"
        >
          <div className="flex items-center gap-2">
            <svg style={{ fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
            <span className="text-lg capitalize">Download CV</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
