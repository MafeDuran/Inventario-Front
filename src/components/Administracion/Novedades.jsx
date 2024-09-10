import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Administracion.css';

const Novedades = () => {
    const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario
    const [formMode, setFormMode] = useState('add'); // Estado para el modo del formulario ('add' o 'edit')
    const [currentItem, setCurrentItem] = useState(null); // Estado para el ítem actual (para edición)
    const [newItem, setNewItem] = useState({
        name: '',
        type: 'Todos'
    });

    const [alert, setAlert] = useState({ show: false, type: '', message: '' }); // Estado para la alerta

    useEffect(() => {
        let timer;
        if (alert.show) {
            timer = setTimeout(() => {
                setAlert({ show: false, type: '', message: '' });
            }, 5000); // 5000 ms = 5 segundos
        }
        return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta o la alerta cambia
    }, [alert]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (newItem.name.trim() === '' || newItem.type === 'Todos') {
            setAlert({
                show: true,
                type: 'danger',
                message: 'Por favor, complete todos los campos.'
            });
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return; // No enviar si la validación falla

        if (formMode === 'add') {
            // Lógica para agregar nuevo ítem
            console.log('Nuevo ítem:', newItem);
            setAlert({
                show: true,
                type: 'success',
                message: 'Ítem agregado exitosamente.'
            });
        } else if (formMode === 'edit') {
            // Lógica para actualizar el ítem
            console.log('Ítem editado:', newItem);
            setAlert({
                show: true,
                type: 'success',
                message: 'Ítem actualizado exitosamente.'
            });
        }

        // Limpiar el formulario y mantener el formulario abierto
        setNewItem({ name: '', type: 'Todos' });
        // Si quieres que el formulario se mantenga abierto, no cambies el estado `showForm`
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setNewItem({
            name: item.glosa,
            type: item.tipo
        });
        setFormMode('edit');
        setShowForm(true); // Asegúrate de que el formulario esté abierto
    };

    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDelete = (item) => {
        setItemToDelete(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setItemToDelete(null);
    };

    const confirmDelete = () => {
        if (itemToDelete) {
            // Lógica para eliminar el ítem
            console.log('Ítem eliminado:', itemToDelete);
            setAlert({
                show: true,
                type: 'success',
                message: 'Ítem eliminado exitosamente.'
            });
            handleCloseModal(); // Cerrar el modal
        }
    };

    return (
        <div className="container-fluid inventarios-container">
            <div className="filters d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <button 
                        type='button' 
                        className='btn btn-primary btn-sm me-3'
                        onClick={() => {
                            setShowForm(!showForm);
                            if (!showForm) {
                                setFormMode('add');
                                setNewItem({ name: '', type: 'Todos' }); // Limpiar el formulario al abrir
                            }
                        }}
                    >
                        <i className="fas fa-plus me-2" style={{ marginRight: '10px' }}></i>
                        {formMode === 'add' ? 'Agregar Nuevo' : 'Cancelar Edición'}
                    </button>
                    {showForm && (
                        <div className="d-flex align-items-center">
                            <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row align-items-center">
                                <div className="filter-group d-flex align-items-center">
                                    <label htmlFor="name" className="form-label" style={{ marginLeft: '30px' }}>Novedad:</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        placeholder="Novedad"
                                        value={newItem.name}
                                        onChange={handleInputChange}
                                        className="form-control custom-form-control "
                                    />
                                </div>
                                <div className="filter-group d-flex align-items-center">
                                    <label htmlFor="type" className="form-label">Tipo:</label>
                                    <select 
                                        id="type"
                                        name="type"
                                        value={newItem.type}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    >
                                        <option value="Todos">Seleccione</option>
                                        <option value="Error">Error</option>
                                        <option value="Advertencia">Advertencia</option>
                                    </select>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-sm  "
                                    aria-label={formMode === 'add' ? 'Crear' : 'Actualizar'}
                                    style={{ marginRight: '5px' }}
                                >
                                    <i className={`fas fa-${formMode === 'add' ? 'check' : 'save'}`}></i>
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => {
                                        setShowForm(false); // Cerrar el formulario
                                        setFormMode('add'); // Restablecer el modo a agregar
                                    }}
                                    aria-label="Cerrar"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            {alert.show && (
                <div className={`alert-custom alert alert-${alert.type}`} role="alert">
                 <i className={`alert-icon fas fa-${alert.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
                 <div className="alert-divider"></div>
                 <div className="alert-message">{alert.message}</div>
                 <button className="alert-close" onClick={() => setAlert({ show: false, type: '', message: '' })}>
                     <i className="fas fa-times"></i>
                 </button>
               </div>
            )}

            <div className="table-container mt-4">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>Acciones <span className="vertical-dots">⋮</span></th>
                            <th>Código <span className="vertical-dots">⋮</span></th>
                            <th>Glosa <span className="vertical-dots">⋮</span></th>
                            <th>Error <span className="vertical-dots">⋮</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 
                                <button 
                                    className="btn btn-primary btn-sm-custom btn-edit me-2" 
                                    style={{ border: 'none', cursor: 'pointer', marginRight: '10px' }}
                                    aria-label="Editar"
                                    onClick={() => handleEdit({ codigo: '01', glosa: 'Novedades name', tipo: 'Error' })}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button 
                                    className="btn btn-danger btn-sm-custom btn-edit me-2" 
                                    style={{ border: 'none', cursor: 'pointer' }}
                                    aria-label="Eliminar"
                                    onClick={() => handleDelete({ codigo: '01', glosa: 'Novedades name', tipo: 'Error' })}
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                            <td>01</td>
                            <td>Novedades name</td>
                            <td>Advertencia</td>
                        </tr>
                        <tr>
                            <td> 
                                <button 
                                    className="btn btn-primary btn-sm-custom btn-edit me-2" 
                                    style={{ border: 'none', cursor: 'pointer', marginRight: '10px' }}
                                    aria-label="Editar"
                                    onClick={() => handleEdit({ codigo: '02', glosa: 'Novedades name', tipo: 'Advertencia' })}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button 
                                    className="btn btn-danger btn-sm-custom btn-edit me-2" 
                                    style={{ border: 'none', cursor: 'pointer' }}
                                    aria-label="Eliminar"
                                    onClick={() => handleDelete({ codigo: '02', glosa: 'Novedades name', tipo: 'Advertencia' })}
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                            <td>02</td>
                            <td>Novedades name</td>
                            <td>Advertencia</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal de Confirmación */}
            <div className={`modal custom-modal ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content modal-sm">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmar Eliminación</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>¿Estás seguro de que deseas eliminar este ítem?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={confirmDelete}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Novedades;
