import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Conciliacion.css';

const EliminarProcesos = () => {
    return (
        <div className="container-fluid inventarios-container">
           <div className="filters d-flex flex-column">
                {/* Fila Original */}
                <div className="d-flex mb-4 flex-wrap">
                    <div className="filter-group  d-flex align-items-center me-4 flex-fill">
                        <label className="me-3">Período</label>
                        <select className="form-control">
                            <option>Todos</option>
                        </select>
                    </div>
                    <div className="filter-group d-flex align-items-center me-4 flex-fill">
                        <label className="me-3">Proceso</label>
                        <select className="form-control">
                            <option>Todos</option>
                        </select>
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
                <div className="d-flex mb-4 flex-wrap">
                    <div className="filter-group d-flex align-items-center me-4">
                        <label className="date-label-2">Fecha Inicio</label>
                        <input type='date' className='form-control form-margen '/>
                    </div>
                    <div className="filter-group d-flex align-items-center">
                        <label className="date-label-2">Fecha Fin</label>
                        <input type='date' className='form-control form-margen '/>
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
                            <th>Novedad <span className="vertical-dots">⋮</span></th>
                            <th>Fecha Novedad <span className="vertical-dots">⋮</span></th>
                            <th>Usuario Novedad <span className="vertical-dots">⋮</span></th>
                            
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
            <button type="button" className="btn btn-primary">Eliminar Seleccionados</button>
            </div>
            


        </div>
    );
};

export default EliminarProcesos;
