export function Registro() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Enviar = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://api.sheetbest.com/sheets/e05d52c9-a33d-4f35-b822-3d96d9ed138c", {
                Email: email,
                Password: password
            });
            alert("Usuario registrado con éxito");
            setEmail("");
            setPassword("");
        } catch (error) {
            alert("Hubo un problema al registrar el usuario");
        }
    }

    return(
        
    )
}