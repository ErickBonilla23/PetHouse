import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        phone: '',
        waterBill: '',
        electricityBill: '',
        canKeepPet: '',
        whyKeepPet: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendDataToMicrosoftForm(formData);
        alert('Formulario enviado correctamente');
    };

    const sendDataToMicrosoftForm = async (data) => {
        try {
            const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdu5u6RpbkG5pzX6psVwgzgjsannB1SL7u-0tsXczh4nxBMxA/viewform', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error('Error al enviar datos');
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <h2 className="text-2xl font-semibold mb-6">Formulario de Registro</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        value={formData.address}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Número de teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="number"
                        name="waterBill"
                        placeholder="Valor de su recibo de agua mensual"
                        value={formData.waterBill}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="number"
                        name="electricityBill"
                        placeholder="Valor de su recibo de luz mensual"
                        value={formData.electricityBill}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <select
                        name="canKeepPet"
                        value={formData.canKeepPet}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    >
                        <option value="">¿Crees que eres capaz de mantener una mascota?</option>
                        <option value="Sí">Sí</option>
                        <option value="No">No</option>
                    </select>
                    {formData.canKeepPet === 'Sí' && (
                        <textarea
                            name="whyKeepPet"
                            placeholder="Si tu respuesta fue sí, ¿por qué eres capaz de poder mantener una mascota?"
                            value={formData.whyKeepPet}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                    )}
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
