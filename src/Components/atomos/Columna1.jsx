import Foto from "./Foto";
import "../../assets/css/HojaVida.css";
function Columna1() {
    return ( 
       

        <div className="colum1">

            <Foto/>

            <div>
                <h1>contactos</h1>
                <p>Telefono: 9681310329</p>
                <p>Facebook: Andresmartinez</p>
                <p>Correo: cmartinezmorales@gmail.com</p>
            </div>
            
            <div>
                <h1>Habilidades</h1>
                <p>* Jugar Futbol</p>
                <p>* Jugar basquetbol</p>
            </div>

            <div>
                <h1>Informacion Complementaria</h1>
                <p>* Certificado del curso basico de AWS </p>
                <p>* Certificado en taekwondo</p>
            </div>
        </div>


    
     );
}

export default Columna1;