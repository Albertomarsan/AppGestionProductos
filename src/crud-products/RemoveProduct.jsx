import { useState } from "react";

export const RemoveProduct = ({productId, onDeleteProduct}) => {
    const modalNameId = 'modalDelete' + productId;

    const submitDelete = () => {
        onDeleteProduct(productId);
    }

    return(
        <>
            <button type="button" className="btn btn-sm btn-danger" data-toggle="modal" data-target={"#" + modalNameId}>Borrar</button>

            <div className="modal fade" id={modalNameId} tabIndex="-1" aria-labelledby="modalEditLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalEditLabel">Eliminar producto con id: {productId}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ¿Seguro que deseas borrar el producto con id: {productId}? Esta acción será irreversible.
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button onClick={submitDelete} type="button" className="btn btn-danger" data-dismiss="modal">Eliminar</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default RemoveProduct;