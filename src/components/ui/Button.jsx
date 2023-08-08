import { Link } from 'react-router-dom';

function Button({ children, type, link = '', fileName = '', onClick = null }) {
  if (type === 'download')
    return (
      <Link
        to={link}
        className=" rounded-xl bg-blue-600 px-8 py-3 text-xs text-blue-100 shadow-lg hover:bg-blue-500"
        download={fileName}
        target="_black"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  return (
    <button className=" rounded-xl bg-blue-600 px-8 py-3 text-xs text-blue-100 shadow-lg hover:bg-blue-500">
      {children}
    </button>
  );
}

export default Button;
