// src/components/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; // Importa el contexto
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Usa el contexto
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        login(); // Cambia el estado de autenticación
        navigate('/home'); // Redirige al usuario autenticado
    };

    return (
        <div className="container-fluid-login d-flex flex-row vh-100">
            <div className="left-side">
                <div className="overlay"></div>
            </div>
            <div className="right-side d-flex flex-column justify-content-center align-items-center">
                <div className="logo mb-4">
                    <img src="images/cmpc.png" alt="CMPC Logo" />
                </div>
                <div className="title mb-4">
                    <img src="images/inv.png" alt="CMPC Logo" className="title-logo" />
                </div>
                <div className="login-box">
                    <p>Para acceder, debes iniciar sesión</p>
                    <form onSubmit={handleSubmit} className="w-100">
                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="nombreapellido@cmpc.cl"
                                required
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                required
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">INGRESAR</button>
                    </form>
                    <div className="help">
                        <p>No puedo ingresar. <a href="#">Ver posibles causas y soluciones</a></p>
                    </div>
                    <div className="separator mt-3">
                        <hr />
                        <img src="images/Azure.svg" alt="CMPC Logo" className="separator-logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
