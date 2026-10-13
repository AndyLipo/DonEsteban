
import { useLocation } from 'react-router-dom';

export const useMenuItems = () => {
  const location = useLocation();

  return [
    {
      name: 'Inicio',
      path: '/',
      active: location.pathname === '/'
    },
    {
      name: 'Sobre Nosotros',
      path: '/About',
      active: location.pathname === '/About'
    },
    {
      name: 'Contacto',
      path: '/Contacto',
      active: location.pathname === '/Contacto'
    },
    {
      name: 'Trabajos',
      path: null,
      active: ['/destapacion', '/plomeria'].includes(
        location.pathname.toLowerCase()
      ),
      children: [
        {
          name: 'Destapación',
          path: '/destapacion',
          active: location.pathname.toLowerCase() === '/destapacion'
        },
        {
          name: 'Plomería',
          path: '/plomeria',
          active: location.pathname.toLowerCase() === '/plomeria'
        }
      ]
    }
  ];
};
