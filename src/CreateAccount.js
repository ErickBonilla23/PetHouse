import React, { useState } from 'react';

export function CreateAccount() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendDataToGoogleSheets(formData);
        alert('Account created successfully!');
    };

    const sendDataToGoogleSheets = async (data) => {
        try {
            const response = await fetch('https://docs.google.com/spreadsheets/d/1q8MhYPxNaaoNxddCMJ8WhUKdmERnocG2t9DAqSi1MEA/edit?usp=sharing', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error('Error en el envío de datos');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
<div className="min-h-screen bg-sky-500 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start p-6 mt-10">
        {/* Cuadro blanco detrás de la imagen */}


{/* Imagen del perro */}
<div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
    <img
        src="PerritoCreateAccount.png"
        alt="PetHouse"
        className="w-full lg:w-3/4 max-w-xl max-h-[400px] object-contain rounded-l-lg"
    />
</div>


        {/* Formulario */}
        <div className="w-full md:w-1/2 p-6 z-10">
            <h2 className="text-2xl font-semibold mb-4">Bienvenido a PetHouse</h2>
            <p className="mb-4 text-gray-600">
                Te invitamos a ser parte de nuestra comunidad, para encontrar una casita para los más bonitos de la casa.
            </p>
            <form className="space-y-4">
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border p-2 rounded w-full"
                    required
                />
                <div className="flex items-center">
                    <input type="checkbox" required className="mr-2" />
                    <label className="text-gray-600 text-sm">
                        I agree to the Terms of Service and Privacy Policy
                    </label>
                </div>
                <button type="submit" className="bg-yellow-400 text-white p-2 rounded w-full">
                    Create Account
                </button>
            </form>
            <p className="text-center text-gray-600 text-sm mt-4">
                Already have an account? <a href="#" className="text-blue-600">Log in</a>
            </p>
        </div>
    </div>
</div>

        </div>
    );
}


