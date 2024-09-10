// src/App.js
import React, { useState,  useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation  } from 'react-router-dom';
import Login from './components/Login/Login';
import Inicio from './components/Inicio/Inicio';
import InventariosMermas from './components/Inventarios/InventariosMermas';
import MantencionCartolas from './components/Inventarios/MantencionCartolas';
import { AuthProvider, useAuth } from './AuthContext';
import ProductosExcluidos from './components/Administracion/ProductosExcluidos';
import Novedades from './components/Administracion/Novedades';
import Usuarios from './components/Usuarios/Usuarios';
import Conciliacion from './components/Procesos/Conciliacion';
import ProcesosCerrados from './components/Procesos/ProcesosCerrados';
import EliminarProcesos from './components/Procesos/EliminarProcesos';
import InfoNovedades from './components/Informes/InfoNovedades';
import InfoAjustes from './components/Informes/InfoAjustes';
import InfoAjusteProd from './components/Informes/InfoAjusteProd';
import InfoConciliacion from './components/Informes/InfoConciliacion';
import VerInventarios from './components/SCI/VerInventarios';
const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/" />;
};

const AppContent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    useEffect(() => {
      if (location.pathname !== '/home') {
          setShowWelcomeMessage(false);
      } else {
          setShowWelcomeMessage(true);
      }
    }, [location.pathname]);
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div className="d-flex">
            <Inicio isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div id="content" className={`flex-grow-1 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button 
                            type="button" 
                            id="sidebarCollapse" 
                            className={`navbar-btn ${isSidebarOpen ? 'active' : ''}`} 
                            onClick={toggleSidebar}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {!showWelcomeMessage && (
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="search-container">
                                <input type="text" placeholder="Buscar..." />
                                <button className="search-button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                          )}
                        <div className="user-info d-flex align-items-center ms-3">
                            <img src="images/icon-user.png" alt="User" className="user-avatar" />
                            <span className="ms-3">Nombre Usuario</span>
                        </div>
                    </div>
                </nav>
                {showWelcomeMessage && (
                    <div>
                        <h5 style={{ color: '#348437' }}>Bienvenido al sistema de inventarios</h5>
                        <p style={{ fontSize: '15px', color: '#348437' }}>Simplifica tu gestión y mantén todo bajo control de manera eficiente y segura.</p>
                        <div className="line"></div>
                        <p style={{ fontSize: '15px', color: '#348437' }}>Haz click en los módulos del <strong>menú</strong> para navegar</p>
                    </div>
                )}
                <Routes>
                    <Route path="/inventarios-mermas" element={<InventariosMermas />} />
                    <Route path="/mantencion-cartolas" element={<MantencionCartolas />} />
                    <Route path="/productos-excluidos" element={<ProductosExcluidos />} />
                    <Route path="/novedades" element={<Novedades />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                    <Route path="/conciliacion" element={<Conciliacion />} />
                    <Route path="/procesos-cerrados" element={<ProcesosCerrados />} />
                    <Route path="/eliminar-procesos" element={<EliminarProcesos />} />
                    <Route path="/informe-novedades" element={<InfoNovedades />} />
                    <Route path="/informe-ajustes" element={<InfoAjustes />} />
                    <Route path="/informe-ajuste-produccion" element={<InfoAjusteProd />} />
                    <Route path="/informe-conciliacion" element={<InfoConciliacion />} />
                    <Route path="/ver-inventarios" element={<VerInventarios />} />
                </Routes>
            </div>
        </div>
    );
};

const App = () => (
    <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/*" element={<AppContent />} />
            </Routes>
        </Router>
    </AuthProvider>
);

export default App;
