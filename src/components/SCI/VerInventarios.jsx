import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sci.css';
const selectStyle = {
    width: '200px', // Ajusta el ancho según tus necesidades
  };
  
  const marginStyle = {
    marginRight: '50px', // Ajusta el margen según tus necesidades
  };
  const alignStyle = {
    textAlign: 'center', // Ajusta el margen según tus necesidades
  };
const VerInventarios = () => {
    return (
        <div className="container-fluid inventarios-container">
           <div className="filters d-flex flex-column">
               <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="d-flex">
                        <div className="filter-group d-flex align-items-center">
                            <button type='button' className='btn btn-primary btn-sm btn-rounded'>
                            <i className="fa fa-eye" style={{ marginRight: '8px' }}></i>
                            Revisar
                            </button>
                        </div>
                        <div className="filter-group d-flex align-items-center me-4">
                            <button type='button' className='btn btn-primary btn-sm btn-rounded'>
                            <i className="fa fa-upload" style={{ marginRight: '8px' }}></i>
                            Exportar
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="table-container mt-4">
                <table className="table custom-table">
                    <thead>
                        <tr style={alignStyle}>
                            <th>ID <span className="vertical-dots">⋮</span></th>
                            <th>Período<span className="vertical-dots">⋮</span></th>
                            <th>Descripción <span className="vertical-dots">⋮</span></th>
                            <th>Jefé área<span className="vertical-dots">⋮</span></th>
                            <th>Pendientes revisión <span className="vertical-dots">⋮</span></th>
                            <th>% Aprobado <span className="vertical-dots">⋮</span></th>
                           
                            
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
                            
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default VerInventarios;
