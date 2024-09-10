import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Administracion.css';

const ProductosExcluidos = () => {
    return (
        <div className="container-fluid inventarios-container">
            <div className="filters d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div className="filter-group d-flex align-items-center me-3">
                        <label className="me-3">Productos</label>
                        <select className="form-control">
                            <option>Todos</option>
                        </select>
                    </div>
                    <div className="filter-group d-flex align-items-center me-3">
                        <button type='button' className='btn btn-primary btn-sm'>
                        <i className="fas fa-plus" style={{ marginRight: '10px' }}></i>Agregar
                        </button>
                    </div>
                   {/* <div className="filter-group d-flex align-items-center me-3">
                        <button type='button' className='btn btn-danger'>
                           Eliminar
                        </button>
                    </div>*/}
                    
                </div>
                
            </div>

            <div className="table-container mt-4">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>Acciones <span className="vertical-dots">⋮</span></th>
                            <th>Código <span className="vertical-dots">⋮</span></th>
                            <th>Nombre del Producto <span className="vertical-dots">⋮</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 
                           {/* <button 
                                className="btn btn-danger" 
                                style={{ border: 'none', cursor: 'pointer', marginRight: '10px' }}
                                aria-label="Eliminar"
                            >
                                 <i className="fas fa-edit"></i>
                            </button> */}
                            <button 
                                className="btn btn-danger btn-sm-custom btn-edit me-2" 
                                style={{ border: 'none', cursor: 'pointer', marginRight: '10px' }}
                                aria-label="Eliminar"
                            >
                                <i className="fas fa-trash-alt"></i> {/* Icono de editar en Font Awesome 5 */}
                            </button>
                            </td>
                            <td>Todos</td>
                            <td>Producto name</td>
                        </tr>
                        <tr>
                            <td> 
                           {/* <button 
                                className="btn btn-danger" 
                                style={{ border: 'none', cursor: 'pointer', marginRight: '10px' }}
                                aria-label="Eliminar"
                            >
                                 <i className="fas fa-edit"></i>
                            </button> */}
                           <button 
                                className="btn btn-danger btn-sm-custom btn-edit me-2" 
                                style={{ border: 'none', cursor: 'pointer', marginRight: '10px' }}
                                aria-label="Eliminar"
                            >
                                <i className="fas fa-trash-alt"></i> {/* Icono de editar en Font Awesome 5 */}
                            </button>
                            </td>
                            <td>Todos</td>
                            <td>Producto name</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductosExcluidos;
