import { useLocation } from 'react-router-dom';

export const useMenuItems = () => {
  const location = useLocation();

  return [
    { name: 'Inicio', path: '/Inicio', active: location.pathname === '/' },
    { name: 'Servicios', path: '/servicios', active: location.pathname === '/servicios' },
    { name: 'Sobre Nosotros', path: '/About', active: location.pathname === '/About' },
    { name: 'Contacto', path: '/Contacto', active: location.pathname === '/Contacto' }
  ];
};