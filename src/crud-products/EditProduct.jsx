import { useState } from "react";

export const EditProduct = ({productToEdit, onEditProduct}) => {
    const [product, setProduct] = useState(productToEdit);
    const modalNameId = 'modalEdit' + productToEdit.id;

    const submitEdit = () => {
        onEditProduct(product);
        setProduct({});
    }

    return(
        <>
            <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target={"#" + modalNameId}>Editar</button>

            <div className="modal fade" id={modalNameId} tabIndex="-1" aria-labelledby="modalEditLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalEditLabel">Editar producto con id: {productToEdit.id}</h5>
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
                                defaultValue={product.name}                                 
                                onChange={(e) => setProduct({...product, name: e.target.value})}>
                            </input>
                        </div>
                        <div className="col-8">
                            <input 
                                id="description" 
                                name="description" 
                                type="text" 
                                defaultValue={product.description}   
                                onChange={(e) => setProduct({...product, description: e.target.value})}>
                            </input>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button onClick={submitEdit} type="button" className="btn btn-primary">Enviar</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default EditProduct;