import { useState } from "react";

export const AddProduct = ({onNewProduct}) => {
    const [product, setProduct] = useState({});

    const submitAdd = () => {
        onNewProduct(product);
        setProduct({});
    }

    return(
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAdd"> Añadir producto</button>

            <div className="modal fade" id="modalAdd" tabIndex="-1" aria-labelledby="modalAddLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalAddLabel">Añadir nuevo producto</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-4">
                            <input 
                                id="name" 
                                name="name" 
                                type="text" 
                                placeholder="Nombre"
                                onChange={(e) => setProduct({...product, name: e.target.value})}>
                            </input>
                        </div>
                        <div className="col-8">
                            <input 
                                id="description" 
                                name="description" 
                                type="text" 
                                placeholder="Descripción"
                                onChange={(e) => setProduct({...product, description: e.target.value})}>
                            </input>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={submitAdd} type="button" className="btn btn-primary">Enviar</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default AddProduct;