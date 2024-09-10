import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Conciliacion.css';

const Conciliacion = () => {
    return (
        <div className="container-fluid inventarios-container">
           <div className="filters d-flex flex-column">
                {/* Fila Original */}
                <div className="d-flex mb-4 flex-wrap">
                    <div className="filter-group d-flex align-items-center me-4 flex-fill">
                        <label className="me-3">Proceso</label>
                        <select className="form-control">
                        <option>Todos</option>
                        </select>
                    </div>
                    <div className="filter-group d-flex align-items-center me-4 flex-fill">
                        <label className="me-3">Desde</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="filter-group d-flex align-items-center me-4 flex-fill">
                        <label className="me-3">Hasta</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="filter-group d-flex align-items-center me-4 flex-fill">
                        <label className="me-3">Observaciones</label>
                        <textarea
                        className="form-control"
                        style={{ width: '100%' }}
                        />
                    </div>
                </div>

                {/* Nueva Fila */}
                <div className="d-flex flex-wrap">
                    <div className="filter-group d-flex align-items-center me-4 flex-fill">
                        <label className="me-3">Productos Excluidos</label>
                        <select className="form-control">
                        <option>Todos</option>
                        </select>
                    </div>
                    <div className="filter-group d-flex align-items-center flex-fill">
                        <label className="me-3">Validaciones</label>
                        <select className="form-control">
                        <option>Todos</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center ms-auto">
                            <button type="button" className="btn btn-primary ">
                            <i className="fas fa-plus" style={{ marginRight: '10px' }}></i>Nuevo
                            </button>
                    </div>
                </div>
            </div>
            <div className="pt-4 mb-4">
                <span className="d-block fs-3 custom-title">Inventarios</span>
            </div>
            <div className="table-container mt-4">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th> <input type="checkbox" /></th>
                            <th>Cancha <span className="vertical-dots">⋮</span></th>
                            <th>Fecha de inventario <span className="vertical-dots">⋮</span></th>
                            <th>Tipo <span className="vertical-dots">⋮</span></th>
                            <th>Detalle <span className="vertical-dots">⋮</span></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>57</td>
                            <td>dd-mm-aaaa dd-mm-aaaa</td>
                            <td>Advertencia</td>
                            <td>Error</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>51</td>
                            <td>dd-mm-aaaa dd-mm-aaaa</td>
                            <td>Advertencia</td>
                            <td>Error</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="pt-4 mb-4">
                <span className="d-block fs-3 custom-title">Detalle Inventarios</span>
            </div>
            <div className="table-container mt-4">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>Nro inventario</th>
                            <th>Cuadrilla <span className="vertical-dots">⋮</span></th>
                            <th>Contratista <span className="vertical-dots">⋮</span></th>
                            <th>Faena <span className="vertical-dots">⋮</span></th>
                            <th>EE-PP <span className="vertical-dots">⋮</span></th>
                            <th>EE-PP <span className="vertical-dots">⋮</span></th>
                            <th>Vol. MR <span className="vertical-dots">⋮</span></th>
                            <th>Vol. M3 <span className="vertical-dots">⋮</span></th>
                            <th>Observación <span className="vertical-dots">⋮</span></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
             

            <div className="action-container mt-4">
                <div className="left-section">
                    <span className="title-text">Conciliación</span>
                </div>
                <div className="right-section">
                    <button type="button" className="btn btn-primary">Informe de Conciliación</button>
                </div>
            </div>

            <div className="line-container">
                <hr className="green-line" />
            </div>


            <div className="pt-4 mb-4">
                <span className="d-block fs-3 custom-title">Inventarios Conciliación Sin Errores</span>
            </div>
            <div className="table-container mt-4">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th> <input type="checkbox" /></th>
                            <th>Cancha <span className="vertical-dots">⋮</span></th>
                            <th>Fecha de inventario <span className="vertical-dots">⋮</span></th>
                            <th>Tipo <span className="vertical-dots">⋮</span></th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>57</td>
                            <td>dd-mm-aaaa dd-mm-aaaa</td>
                            <td>Advertencia</td>
                            
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>51</td>
                            <td>dd-mm-aaaa dd-mm-aaaa</td>
                            <td>Advertencia</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="pt-4 mb-4">
                <span className="d-block fs-3 custom-title">Detalle Conciliación</span>
            </div>
            <div className="table-container mt-4">
            <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>Nro inventario</th>
                            <th>Cuadrilla <span className="vertical-dots">⋮</span></th>
                            <th>Contratista <span className="vertical-dots">⋮</span></th>
                            <th>Faena <span className="vertical-dots">⋮</span></th>
                            <th>EE-PP <span className="vertical-dots">⋮</span></th>
                            <th>EE-PP <span className="vertical-dots">⋮</span></th>
                            <th>Vol. MR <span className="vertical-dots">⋮</span></th>
                            <th>Vol. M3 <span className="vertical-dots">⋮</span></th>
                            <th>Observación <span className="vertical-dots">⋮</span></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Conciliacion;
