import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Informes.css';
const selectStyle = {
    width: '200px', // Ajusta el ancho según tus necesidades
  };
  
  const marginStyle = {
    marginRight: '50px', // Ajusta el margen según tus necesidades
  };
  const alignStyle = {
    textAlign: 'center', // Ajusta el margen según tus necesidades
  };
const InfoAjustes = () => {
    return (
        <div className="container-fluid inventarios-container">
           <div className="filters d-flex flex-column">
               <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex">
                        <div className="filter-group d-flex align-items-center" style={marginStyle}>
                            <label className="me-3">Período</label>
                            <select className="form-control" style={selectStyle}>
                            <option>Todos</option>
                            </select>
                        </div>
                        <div className="filter-group d-flex align-items-center" style={marginStyle}>
                            <label className="me-3">Proceso</label>
                            <select className="form-control" style={selectStyle}>
                            <option>Todos</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="filter-group d-flex align-items-center me-4">
                            <button type='button' className='btn btn-primary btn-sm btn-rounded'>
                            <i className="fas fa-file-excel" style={{ marginRight: '8px' }}></i>
                            Descargar Excel
                            </button>
                        </div>
                        <div className="filter-group d-flex align-items-center">
                            <button type='button' className='btn btn-primary btn-sm btn-rounded'>
                            <i className="fa fa-eye" style={{ marginRight: '8px' }}></i>
                            Consultar
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="table-container mt-4">
                <table className="table custom-table">
                    <thead>
                        <tr style={alignStyle}>
                            <th>Proceso <span className="vertical-dots">⋮</span></th>
                            <th>Cancha <span className="vertical-dots">⋮</span></th>
                            <th>Fecha <span className="vertical-dots">⋮</span></th>
                            <th>Tipo<span className="vertical-dots">⋮</span></th>
                            <th>Contratista <span className="vertical-dots">⋮</span></th>
                            <th>EE-PP <span className="vertical-dots">⋮</span></th>
                            <th>Ajuste Original <span className="vertical-dots">⋮</span></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>--</td>
                            <td>--</td>
                            <td>-</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default InfoAjustes;
