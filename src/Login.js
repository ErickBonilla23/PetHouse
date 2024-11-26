import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
    };

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f5f5f5' }}>
            <div className="row w-75 bg-white shadow-lg" style={{ borderRadius: '30px' }}>
                {/* Imagen de gatos */}
                <div className="col-md-6 p-0">
                    <img
                        src="https://c1.wallpaperflare.com/preview/277/65/106/cat-kitten-play-stuffed-animal.jpg" 
                        alt="Gatos jugando"
                        style={{ width: '100%', height: '100%', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', objectFit: 'cover' }}
                    />
                </div>

                {/* Formulario de inicio de sesión */}
                <div className="col-md-6 p-5" style={{ backgroundColor: '#00c4cc', borderRadius: '0 30px 30px 0' }}>
                    <div className="text-center mb-4">
                        <img src="logosinfondo.png" alt="Logo PetHouse" width="150" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username" className="h5 text-white">Usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ borderRadius: '50px' }}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password" className="h5 text-white">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ borderRadius: '50px' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-light btn-block mt-4" style={{ borderRadius: '50px' }}>
                            Ingresar
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <a href="#!" className="text-white">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="text-center mt-2">
                        <a href="#!" className="text-white">Crear una cuenta</a>
                    </div>
                </div>
            </div>
        </div>
    );
};