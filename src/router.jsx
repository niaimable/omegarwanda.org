import { useState, useEffect, createContext, useContext } from 'react';
const RouterContext = createContext(null);
export function Router({ children }) {
  const [path, setPath] = useState(window.location.hash.slice(1) || '/');
  useEffect(() => {
    const h = () => { setPath(window.location.hash.slice(1) || '/'); window.scrollTo(0,0); };
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);
  const navigate = (to) => { window.location.hash = to; window.scrollTo(0,0); };
  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}
export function useRouter() { return useContext(RouterContext); }
export function Link({ to, children, className, style, onClick }) {
  const { navigate } = useRouter();
  return (
    <a href={`#${to}`} className={className} style={style}
      onClick={(e) => { e.preventDefault(); navigate(to); if(onClick) onClick(e); }}>
      {children}
    </a>
  );
}
export function Route({ path: routePath, component: Component }) {
  const { path } = useRouter();
  return path === routePath ? <Component /> : null;
}
