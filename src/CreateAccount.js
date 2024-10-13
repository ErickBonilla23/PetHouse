import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CreateAccount() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar la creación de la cuenta (por ejemplo, enviar los datos al servidor)
    console.log('Datos del formulario:', formData);
    alert('Cuenta creada con éxito');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%',width: '100%', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', objectFit: 'cover' ,backgroundColor: '#FFEB3B' }}>
      <div className="row bg-white rounded p-4">
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <img src="https://img.freepik.com/fotos-premium/sesion-fotos-al-aire-libre-fotografia-mascotas-dos-perros-corriendo-parque-manana-corgi-maltes_374656-471.jpg" alt="Perrito" width="100%" height="auto" />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="text-center mb-4">PETHOUSE</h2>
          <form className="needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="form-group mb-3">
              <label htmlFor="nombre">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                id="nombre" 
                name="nombre" 
                placeholder="Usuario" 
                value={formData.nombre}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="apellidos">Apellidos</label>
              <input 
                type="text" 
                className="form-control" 
                id="apellidos" 
                name="apellidos" 
                placeholder="Usuario" 
                value={formData.apellidos}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="correo">Correo</label>
              <input 
                type="email" 
                className="form-control" 
                id="correo" 
                name="correo" 
                placeholder="Usuario" 
                value={formData.correo}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="contraseña">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="contraseña" 
                name="contraseña" 
                placeholder="******" 
                value={formData.contraseña}
                onChange={handleChange}
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Crear Cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}
