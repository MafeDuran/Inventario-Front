import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Inventarios.css';

const MantencionCartolas = () => {
    return (
        <div className="container-fluid inventarios-container">
            <div className="filters d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div className="filter-group d-flex align-items-center me-3">
                        <label className="me-3">Cancha</label>
                        <select className="form-control">
                            <option>Todos</option>
                        </select>
                    </div>
                    <div className="filter-group d-flex align-items-center me-3">
                        <label className="me-2">Geocerca</label>
                        <select className="form-control">
                            <option>Todos</option>
                        </select>
                    </div>
                    <div className="filter-group d-flex align-items-center me-3">
                        <label className="me-2">Desde</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="filter-group d-flex align-items-center me-3">
                        <label className="me-2">Hasta</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="filter-group d-flex align-items-center me-3">
                        <label className="me-2">Enviados</label>
                        <select className="form-control">
                            <option>Todos</option>
                        </select>
                    </div>
                </div>
                <div className="filter-group d-flex align-items-center">
                    <button type='button' className='btn btn-primary btn-sm'>
                        Filtrar para enviar
                    </button>
                </div>
            </div>

            <div className="table-container mt-4">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>Cancha <span className="vertical-dots">⋮</span></th>
                            <th>Geocerca <span className="vertical-dots">⋮</span></th>
                            <th>Fecha de inventario <span className="vertical-dots">⋮</span></th>
                            <th>Enviados <span className="vertical-dots">⋮</span></th>
                            <th>Inventario Bodega <span className="vertical-dots">⋮</span></th>
                            <th>Fecha Hora de Envío <span className="vertical-dots">⋮</span></th>
                            <th>Total <span className="vertical-dots">⋮</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Todos</td>
                            <td>Todos</td>
                            <td>dd-mm-aaaa dd-mm-aaaa</td>
                            <td>Todos</td>
                            <td>001524</td>
                            <td>dd-mm-aaaa 00:00:00</td>
                            <td>001524</td>
                        </tr>
                        <tr>
                            <td>Todos</td>
                            <td>Todos</td>
                            <td>dd-mm-aaaa dd-mm-aaaa</td>
                            <td>Todos</td>
                            <td>001524</td>
                            <td>dd-mm-aaaa 00:00:00</td>
                            <td>001524</td>
                        </tr>
                        <tr>
                            <td>Todos</td>
                            <td>Todos</td>
                            <td>dd-mm-aaaa dd-mm-aaaa</td>
                            <td>Todos</td>
                            <td>001524</td>
                            <td>dd-mm-aaaa 00:00:00</td>
                            <td>001524</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MantencionCartolas;
