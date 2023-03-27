import foto from "../../assets/img/foto.jpg";
import "../../assets/css/HojaVida.css";

function Foto() {
    return ( 
        <div className="fotito">
            <img src={foto} width="200" height="200" />
        </div>
     );
}

export default Foto;