import foto from "../../assets/img/foto.jpg";

function HojaVida() {
    return ( 
        <div className="div-father">

            <div className="colum1">
                <div>
                    <img src={foto} alt="" />
                </div>

                <div>
                    <h1>contactos</h1>
                    <p>Telefono: 9681310329</p>
                    <p>Facebook: Andresmartinez</p>
                    <p>Correo: cmartinezmorales@gmail.com</p>
                    
                </div>
            </div>

            <div className="colum2"></div>


        </div>
     );
}

export default HojaVida;