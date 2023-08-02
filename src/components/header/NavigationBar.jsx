import { useState } from 'react';
import NavigationItems from './NavigationItems';

const navOpenIcon = (
  <svg style={{ fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
  </svg>
);

const navCloseIcon = (
  <svg style={{ fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute right-0 top-[-20px]">
      <NavigationItems isOpen={isOpen} />
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="h-100 absolute right-0 top-0 z-[1] flex cursor-pointer rounded-sidedrop bg-blue-600 px-[0.600rem] py-2 text-blue-100 before:absolute before:right-0 before:top-0 before:z-[-1] before:h-4 before:w-4 before:rounded-sm before:bg-blue-600 before:content-['']"
      >
        {!isOpen ? navOpenIcon : navCloseIcon}
      </div>
    </div>
  );
}

export default NavigationBar;
