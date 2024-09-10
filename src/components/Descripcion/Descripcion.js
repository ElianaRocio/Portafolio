
export default function Descripcion({ foto, titulo, texto, tiempo, precio, children, costo }) {
    return (
        <>
            <div className="container ">
                <div className="row">
                    
                    <div className="col">
                        <h2 className="titulo2">{titulo}</h2>
                        <p className="tcos">{tiempo}</p>
                        <h4 className="textodes">{precio}</h4>
                        <p className="textodes">{texto}</p>
                        <h3 className="textodes">{costo}</h3> 
                        
                        
                                               
                    </div>
                </div>
            </div>
        </>
    );
}
 















