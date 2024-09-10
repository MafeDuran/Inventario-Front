import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Usuarios.css';

const Usuarios = () => {
    const [showFormModal, setShowFormModal] = useState(false); // Estado para mostrar/ocultar el modal
    const [formMode, setFormMode] = useState('add'); // Estado para el modo del formulario ('add' o 'edit')
    const [currentItem, setCurrentItem] = useState(null); // Estado para el ítem actual (para edición)
    const [newItem, setNewItem] = useState({
        rut: '',
        nombre: '',
        username: '',
        rol: '',
        activo: 'Si'
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
        if (
            newItem.rut.trim() === '' ||
            newItem.nombre.trim() === '' ||
            newItem.username.trim() === '' ||
            newItem.rol.trim() === ''
        ) {
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
                message: 'Usuario agregado exitosamente.'
            });
        } else if (formMode === 'edit') {
            // Lógica para actualizar el ítem
            console.log('Ítem editado:', newItem);
            setAlert({
                show: true,
                type: 'success',
                message: 'Usuario actualizado exitosamente.'
            });
        }

        // Limpiar el formulario
        setNewItem({ rut: '', nombre: '', username: '', rol: '', activo: 'Si' });
        setShowFormModal(false); // Cerrar el modal
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setNewItem({
            rut: item.rut,
            nombre: item.nombre,
            username: item.username,
            rol: item.rol,
            activo: item.activo
        });
        setFormMode('edit');
        setShowFormModal(true); // Mostrar el modal para edición
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
                message: 'Usuario eliminado exitosamente.'
            });
            handleCloseModal(); // Cerrar el modal
        }
    };

    return (
        <div className="container-fluid usuarios-container">
            <div className="filters d-flex justify-content-between align-items-center">
                <button 
                    type='button' 
                    className='btn btn-primary btn-sm'
                    onClick={() => {
                        setShowFormModal(true);
                        setFormMode('add');
                        setNewItem({ rut: '', nombre: '', username: '', rol: '', activo: 'Si' }); // Limpiar el formulario al abrir
                    }}
                >
                    <i className="fas fa-plus me-2"></i>
                    Agregar Nuevo
                </button>
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
                            <th>Acciones</th>
                            <th>RUT</th>
                            <th>Nombre</th>
                            <th>Username</th>
                            <th>Rol</th>
                            <th>Activo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button 
                                    className="btn btn-primary btn-sm-custom btn-edit me-2" 
                                    style={{ marginRight: '7px' }}
                                    onClick={() => handleEdit({ rut: '11.111.111-1', nombre: 'Juan Guerrero', username: 'jua0102', rol: 'Administrador', activo: 'Si' })}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button 
                                    className="btn btn-danger btn-sm-custom btn-edit me-2" 
                                    onClick={() => handleDelete({ rut: '11.111.111-1', nombre: 'Juan Guerrero', username: 'jua0102', rol: 'Administrador', activo: 'Si' })}
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                            <td>11.111.111-1</td>
                            <td>Juan Guerrero</td>
                            <td>jua0102</td>
                            <td>Administrador</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>
                                <button 
                                    className="btn btn-primary btn-sm-custom btn-edit me-2" 
                                    style={{ marginRight: '7px' }}
                                    onClick={() => handleEdit({ rut: '11.111.111-2', nombre: 'Javier Romero', username: 'jav0102', rol: 'Consultor', activo: 'No' })}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button 
                                    className="btn btn-danger btn-sm-custom btn-edit me-2" 
                                    onClick={() => handleDelete({ rut: '11.111.111-2', nombre: 'Javier Romero', username: 'jav0102', rol: 'Consultor', activo: 'No' })}
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                            <td>11.111.111-2</td>
                            <td>Javier Romero</td>
                            <td>jav0102</td>
                            <td>Consultor</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal para agregar/editar usuario */}
            <div className={`modal fade ${showFormModal ? 'show' : ''}`} style={{ display: showFormModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{formMode === 'add' ? 'Agregar Nuevo Usuario' : 'Editar Usuario'}</h5>
                            <button type="button" className="close" onClick={() => setShowFormModal(false)}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="rut">RUT:</label>
                                    <input 
                                        type="text" 
                                        id="rut"
                                        name="rut"
                                        value={newItem.rut}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        disabled={formMode === 'edit'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre:</label>
                                    <input 
                                        type="text" 
                                        id="nombre"
                                        name="nombre"
                                        value={newItem.nombre}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input 
                                        type="text" 
                                        id="username"
                                        name="username"
                                        value={newItem.username}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rol">Rol:</label>
                                    <select
                                        id="rol"
                                        name="rol"
                                        value={newItem.rol}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    >
                                        <option value="">Seleccione un rol</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Consultor">Consultor</option>
                                        <option value="Viewer">Viewer</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="activo">Activo:</label>
                                    <select 
                                        id="activo" 
                                        name="activo" 
                                        value={newItem.activo} 
                                        onChange={handleInputChange}
                                        className="form-control"
                                    >
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        {formMode === 'add' ? 'Agregar' : 'Actualizar'}
                                    </button>
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowFormModal(false)}>
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de confirmación para eliminar usuario */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmar Eliminación</h5>
                            <button type="button" className="close" onClick={handleCloseModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>¿Está seguro que desea eliminar al usuario {itemToDelete?.nombre}?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={confirmDelete}>Eliminar</button>
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usuarios;
