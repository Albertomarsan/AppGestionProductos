import { useState } from "react";
import AddProduct from "./crud-products/AddProduct";
import { EditProduct } from "./crud-products/EditProduct";
import RemoveProduct from "./crud-products/RemoveProduct";


export const AppGestionProductos = () => {

    const [productList, setProductList] = useState([{id: 0, name: 'prueba', description: 'prueba de producto'}]);

    const onAddNewProduct = (newProduct) => {
        let newId = Math.max(...productList.map(o => o.id)) +1;
        setProductList([...productList, {id: newId, ...newProduct}]);
    }

    const onRemoveProduct = (productId) => {
        setProductList(productList.filter(pr => pr.id != productId));
    }

    const onUpdateProduct = (product) => {
        const newList = productList.map((item) => {
            if (item.id === product.id) {
              return product;
            }
      
            return item;
        });
      
        setProductList(newList);
    }

    return(
        <>
            <h3>Gestión de productos</h3><br></br>
            <AddProduct onNewProduct={(value) => onAddNewProduct(value)} />
            <table className="table">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                {
                    productList.map((product, i) => ( 
                    <tr key={i}>
                        <td>{<>
                            <EditProduct productToEdit={product} onEditProduct={(value) => onUpdateProduct(value)}/>
                            <RemoveProduct productId={product.id} onDeleteProduct={(value) => onRemoveProduct(value)} />
                            </>}</td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                    </tr>))
                }
                </tbody>
            </table>
        </>
        


    )
}

export default AppGestionProductos;