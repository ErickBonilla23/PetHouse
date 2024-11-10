import React, { useState } from 'react';


export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        //  lógica de inicio de sesión
    };

    return (
        <div>

            <div className="flex items-center justify-center min-h-screen bg-yellow-400 p-4">
                <div className="flex bg-white rounded-lg shadow-lg max-w-4xl w-full">
                    {/* Sección del formulario */}
                    <div className="w-1/2 p-8">
                        <h2 className="text-3xl font-bold text-gray-800">PetHouse</h2>
                        <p className="text-gray-600 mt-2">
                            Hola ingresa tu usuario, para ser parte de PetHouse.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div>
                                <label className="block text-sm text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                                        placeholder="Password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                    >
                                        {/* Icono de ojo para mostrar/ocultar contraseña */}
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-200"
                            >
                                Login
                            </button>
                        </form>
                        <div className="flex justify-between items-center mt-4">
                            <a href="#" className="text-sm text-gray-600 hover:underline">
                                Olvide mi contraseña.
                            </a>
                        </div>
                        <hr className="my-4" />
                        <p className="text-sm text-gray-600">
                            Si no tienes una cuenta, puedes{" "}
                            <a href="#" className="font-medium text-indigo-500 hover:underline">
                                Registrarte
                            </a>.
                        </p>
                    </div>

                    {/* Sección de la imagen */}

                    <div className="w-1/2 hidden lg:block">
                        <img
                        
                            src="/imagendelogin.gif"
                            alt="PetHouse"
                            className="w-full h-full object-cover rounded-r-lg"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

