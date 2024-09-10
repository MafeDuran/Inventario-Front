import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Inicio.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const [openSubMenu, setOpenSubMenu] = useState('');
    const [activeSubMenu, setActiveSubMenu] = useState('');

    useEffect(() => {
        const path = location.pathname;
        if (path.startsWith('/inventarios-mermas')) {
            setOpenSubMenu('inventarios');
            setActiveSubMenu('inventarios-mermas');
        } else if (path.startsWith('/mantencion-cartolas')) {
            setOpenSubMenu('inventarios');
            setActiveSubMenu('mantencion-cartolas');
        } else if (path.startsWith('/productos-excluidos')) {
            setOpenSubMenu('administracion');
            setActiveSubMenu('productos-excluidos');
        }
        else if (path.startsWith('/novedades')) {
            setOpenSubMenu('administracion');
            setActiveSubMenu('novedades');
        } else if (path.startsWith('/procesos')) {
            setOpenSubMenu('procesos');
            setActiveSubMenu(path.split('/')[1] || '');
        } else if (path.startsWith('/sci')) {
            setOpenSubMenu('sci');
            setActiveSubMenu(path.split('/')[1] || '');
        } else if (path.startsWith('/informes')) {
            setOpenSubMenu('informes');
            setActiveSubMenu(path.split('/')[1] || '');
        } else if (path.startsWith('/privilegios')) {
            setOpenSubMenu('privilegios');
            setActiveSubMenu(path.split('/')[1] || '');
        }
    }, [location.pathname]);

    const toggleSubMenu = (menu) => {
        if (openSubMenu === menu) {
            setOpenSubMenu('');
            setActiveSubMenu('');
        } else {
            setOpenSubMenu(menu);
            setActiveSubMenu(menu);
        }
    };
    const handleLogoClick = () => {
        setOpenSubMenu(''); // Cerrar todos los submenús
        setActiveSubMenu(''); // Reiniciar el submenú activo
    };

    const handleMenuClick = (event, menu) => {
        event.preventDefault(); // Prevenir el comportamiento del href
        toggleSubMenu(menu);
    };
    return (
        <nav id="sidebar" className={isOpen ? 'active' : ''}>
            <div className="sidebar-header align-items-center">
                <Link to="/home" onClick={handleLogoClick}>
                    <img src="images/inv.png" width="150" alt="Logo" />
                </Link>
                <h5>Bienvenido</h5>
            </div>

            <ul className="list-unstyled components">
                <li className={openSubMenu === 'inventarios' ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => handleMenuClick(e, 'inventarios')}
                        className={`dropdown-toggle ${openSubMenu !== 'inventarios' ? 'collapsed' : ''}`}
                    >
                        <img src="/images/iconos/inventarios.svg" width="30" alt="Inventarios" /> Inventarios
                    </a>
                    <ul className={`collapse list-unstyled ${openSubMenu === 'inventarios' ? 'show' : ''}`}>
                        <li>
                            <Link
                                to="/inventarios-mermas"
                                onClick={() => setActiveSubMenu('inventarios-mermas')}
                                className={activeSubMenu === 'inventarios-mermas' ? 'active' : ''}
                            >
                                Inventarios de Mermas
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/mantencion-cartolas"
                                onClick={() => setActiveSubMenu('mantencion-cartolas')}
                                className={activeSubMenu === 'mantencion-cartolas' ? 'active' : ''}
                            >
                                Mantención de Cartolas
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={openSubMenu === 'administracion' ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => handleMenuClick(e, 'administracion')}
                        className={`dropdown-toggle ${openSubMenu !== 'administracion' ? 'collapsed' : ''}`}
                    >
                        <img src="/images/iconos/admin.svg" width="30" alt="Administracion" /> Administración
                    </a>
                    <ul className={`collapse list-unstyled ${openSubMenu === 'administracion' ? 'show' : ''}`}>
                        <li>
                            <Link
                                to="/productos-excluidos"
                                onClick={() => setActiveSubMenu('productos-excluidos')}
                                className={activeSubMenu === 'productos-excluidos' ? 'active' : ''}
                            >
                                Productos Excluidos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/novedades"
                                onClick={() => setActiveSubMenu('novedades')}
                                className={activeSubMenu === 'novedades' ? 'active' : ''}
                            >
                                Novedades
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={openSubMenu === 'procesos' ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => handleMenuClick(e, 'procesos')}
                        className={`dropdown-toggle ${openSubMenu !== 'procesos' ? 'collapsed' : ''}`}
                    >
                        <img src="/images/iconos/procesos.svg" width="30" alt="Procesos" /> Procesos
                    </a>
                    <ul className={`collapse list-unstyled ${openSubMenu === 'procesos' ? 'show' : ''}`}>
                        <li>
                            <Link
                                to="/conciliacion"
                                onClick={() => setActiveSubMenu('conciliacion')}
                                className={activeSubMenu === 'conciliacion' ? 'active' : ''}
                            >
                                Conciliación
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/procesos-cerrados"
                                onClick={() => setActiveSubMenu('procesos-cerrados')}
                                className={activeSubMenu === 'procesos-cerrados' ? 'active' : ''}
                            >
                                Procesos Cerrados
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/eliminar-procesos"
                                onClick={() => setActiveSubMenu('eliminar-procesos')}
                                className={activeSubMenu === 'eliminar-procesos' ? 'active' : ''}
                            >
                                Eliminar Procesos
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={openSubMenu === 'sci' ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => handleMenuClick(e, 'sci')}
                        className={`dropdown-toggle ${openSubMenu !== 'sci' ? 'collapsed' : ''}`}
                    >
                        <img src="/images/iconos/sistema.svg" width="30" alt="SCI" /> SCI
                    </a>
                    <ul className={`collapse list-unstyled ${openSubMenu === 'sci' ? 'show' : ''}`}>
                        <li>
                            <Link
                                to="/ver-inventarios"
                                onClick={() => setActiveSubMenu('ver-inventarios')}
                                className={activeSubMenu === 'ver-inventarios' ? 'active' : ''}
                            >
                                Ver Inventarios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/revisar-inventarios"
                                onClick={() => setActiveSubMenu('revisar-inventarios')}
                                className={activeSubMenu === 'revisar-inventarios' ? 'active' : ''}
                            >
                                Revisar Inventarios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/informe-inventarios"
                                onClick={() => setActiveSubMenu('informe-inventarios')}
                                className={activeSubMenu === 'informe-inventarios' ? 'active' : ''}
                            >
                                Informe de Inventarios
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={openSubMenu === 'informes' ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => handleMenuClick(e, 'informes')}
                        className={`dropdown-toggle ${openSubMenu !== 'informes' ? 'collapsed' : ''}`}
                    >
                        <img src="/images/iconos/informes.svg" width="30" alt="Informes" /> Informes
                    </a>
                    <ul className={`collapse list-unstyled ${openSubMenu === 'informes' ? 'show' : ''}`}>
                        <li>
                            <Link
                                to="/informe-novedades"
                                onClick={() => setActiveSubMenu('informe-novedades')}
                                className={activeSubMenu === 'informe-novedades' ? 'active' : ''}
                            >
                                Informe Novedades
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/informe-conciliacion"
                                onClick={() => setActiveSubMenu('informe-conciliacion')}
                                className={activeSubMenu === 'informe-conciliacion' ? 'active' : ''}
                            >
                                Informe Conciliación
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/informe-ajustes"
                                onClick={() => setActiveSubMenu('informe-ajustes')}
                                className={activeSubMenu === 'informe-ajustes' ? 'active' : ''}
                            >
                                Informe de Ajuste
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/informe-ajuste-produccion"
                                onClick={() => setActiveSubMenu('informe-ajuste-produccion')}
                                className={activeSubMenu === 'informe-ajuste-produccion' ? 'active' : ''}
                            >
                                Ic. Ajustes - Producción
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/informe-balance-cartolas"
                                onClick={() => setActiveSubMenu('informe-balance-cartolas')}
                                className={activeSubMenu === 'informe-balance-cartolas' ? 'active' : ''}
                            >
                                Informe Balance Cartolas
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={openSubMenu === 'privilegios' ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => handleMenuClick(e, 'privilegios')}
                        className={`dropdown-toggle ${openSubMenu !== 'privilegios' ? 'collapsed' : ''}`}
                    >
                        <img src="/images/iconos/privilegios.svg" width="30" alt="Privilegios" /> Privilegios
                    </a>
                    <ul className={`collapse list-unstyled ${openSubMenu === 'privilegios' ? 'show' : ''}`}>
                        <li>
                            <Link
                                to="/roles"
                                onClick={() => setActiveSubMenu('roles')}
                                className={activeSubMenu === 'roles' ? 'active' : ''}
                            >
                                Roles
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/menu"
                                onClick={() => setActiveSubMenu('menu')}
                                className={activeSubMenu === 'menu' ? 'active' : ''}
                            >
                               Menú
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/usuarios"
                                onClick={() => setActiveSubMenu('usuarios')}
                                className={activeSubMenu === 'usuarios' ? 'active' : ''}
                            >
                               Usuarios
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li className="text-center">
                    <img src="images/cmpc.png" alt="Logo-Cmpc" width="100" />
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
