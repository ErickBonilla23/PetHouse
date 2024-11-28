import React, { useState } from 'react';
 
export const AdopcionMascotasForm = () => {
    return (
        <div style={{ backgroundColor: "#FFF8DC", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            {/* Sección de encabezado */}
            <div
                style={{
                    backgroundColor: "#FFD700",
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "#FF4500", margin: 0 }}>¡Adopta una Mascota!</h1>
                <p style={{ margin: "10px 0", fontSize: "18px" }}>Proporciona información sobre ti para poder adoptar</p>
            </div>
 
            {/* Sección del formulario */}
            <div
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: "20px",
                    borderRadius: "10px",
                    marginTop: "20px",
                    maxWidth: "800px",
                    margin: "20px auto",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 style={{ marginBottom: "10px", color: "#333" }}>Adopción de Mascotas</h2>
                <p style={{ marginBottom: "20px", fontSize: "16px", color: "#555" }}>
                    Para poder adoptar una mascota, necesitamos conocer más sobre ti.
                </p>
 
                <form>
                    {/* Campo: Nombre completo */}
                    <label style={labelStyle}>
                        Nombre completo *
                        <input type="text" style={inputStyle} placeholder="Tu respuesta" required />
                    </label>
 
                    {/* Campo: Correo electrónico */}
                    <label style={labelStyle}>
                        Correo electrónico *
                        <input type="email" style={inputStyle} placeholder="Tu respuesta" required />
                    </label>
 
                    {/* Campo: Dirección */}
                    <label style={labelStyle}>
                        Dirección *
                        <input type="text" style={inputStyle} placeholder="Tu respuesta" required />
                    </label>
 
                    {/* Campo: Número de teléfono */}
                    <label style={labelStyle}>
                        Número de teléfono *
                        <input type="tel" style={inputStyle} placeholder="Tu respuesta" required />
                    </label>
 
                    {/* Campo: Valor del recibo de luz */}
                    <label style={labelStyle}>
                        Valor de su recibo de luz mensual *
                        <input type="number" style={inputStyle} placeholder="Tu respuesta" required />
                    </label>
 
                    {/* Campo: Valor del recibo de agua */}
                    <label style={labelStyle}>
                        Valor de su recibo de agua mensual *
                        <input type="number" style={inputStyle} placeholder="Tu respuesta" required />
                    </label>
 
                    {/* Pregunta de selección: Capacidad para mantener una mascota */}
                    <div style={labelStyle}>
                        ¿Crees que eres capaz de mantener una mascota? *
                        <div>
                            <label>
                                <input type="radio" name="capacidad" value="Si" required /> Sí
                            </label>
                            <label style={{ marginLeft: "10px" }}>
                                <input type="radio" name="capacidad" value="No" required /> No
                            </label>
                        </div>
                    </div>
 
                    {/* Campo: Explicación */}
                    <label style={labelStyle}>
                        Si tu respuesta fue sí, ¿por qué eres capaz de poder mantener una mascota?
                        <textarea style={{ ...inputStyle, height: "80px" }} placeholder="Tu respuesta" />
                    </label>
 
                    {/* Botón de enviar */}
                    <div style={{ textAlign: "center" }}>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#FF8C00",
                                color: "#FFFFFF",
                                border: "none",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "16px",
                            }}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
 
// Estilos reutilizables
const labelStyle = {
    display: "block",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#333",
};
 
const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #CCC",
    fontSize: "14px",
};