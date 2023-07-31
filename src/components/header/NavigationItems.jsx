import { NavLink } from 'react-router-dom';

const navLinkClassName = 'capitalize transition-all duration-100 hover:text-blue-50';

function NavigationItems({ isOpen }) {
  return (
    <ul
      style={!isOpen ? { transform: 'translateX(120%)' } : {}}
      className="text-md mb-2 ml-10 flex gap-12 rounded-full bg-blue-600 px-6 py-1 pr-10 text-blue-200"
    >
      <li>
        <NavLink className={navLinkClassName} to="/about">
          about
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClassName} to="/resume">
          resume
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClassName} to="/projects">
          projects
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClassName} to="/blogs">
          blogs
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClassName} to="/contact">
          contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavigationItems;
