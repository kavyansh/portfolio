import { matchRoutes, useLocation } from 'react-router-dom';
import { routes } from './../App';

export const useCurrentPath = () => {
  const location = useLocation();
  const routePaths = routes[0].children;
  const [{ route }] = matchRoutes(routePaths, location);

  return route.path
    .split('/')
    .filter((path) => !path.includes(':'))
    .at(-1);
};
