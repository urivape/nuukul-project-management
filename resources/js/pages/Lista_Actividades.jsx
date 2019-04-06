import React, { Component } from 'react';
import SideBar from '../components/SideBar.jsx';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from "react-day-picker/moment";
import moment from "moment";
import 'react-day-picker/lib/style.css';

export default class Lista_Actividades extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description: "",
            start_date: "",
            end_date: "",
            tasks: [],
            estatusInicial: {
                idEstatus: 0,
                titulo: 'Pendiente',
                clase: 'info'
            },
            nuevaActividad: {
                idTarea: 'NuukulApp-',
                fechaCreacion: '2019-03-12',
                titulo: '',
                descripcion: ''
            },
            misActividades: [
                {
                    idTarea: 'NuukulApp-01',
                    fechaCreacion: '2019-03-12',
                    estatus: {
                        idEstatus: 3,
                        titulo: 'Terminada',
                        clase: 'success'
                    },
                    titulo: 'Crear Lista de tareas dinámica',
                    descripcion: 'Definir estructura de una lista de tareas con los siguientes campos:<br/><ul><li>IDTarea</li><li>Fecha de Creación</li><li>Estatus</li><li>Titulo</li><li>Descripción</li></ul>'
                },
                {
                    idTarea: 'NuukulApp-02',
                    fechaCreacion: '2019-03-12',
                    titulo: 'Obtener tareas de MySQL',
                    descripcion: 'Hacer modulo para obtener tareas de X usuario desde la base de datos MySQL definida en el archivo ENV.'
                }
            ]
        };

        this.onChange = this.onChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getTasks = this.getTasks.bind(this);
    }

    componentWillMount() {
        this.getTasks();
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleDayChange(selectedDay, modifiers, dayPickerInput) {
        this.setState({
            [dayPickerInput.props.name]: formatDate(selectedDay, "YYYY-MM-DD")
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .post('/tasks', {
                name: this.state.name,
                description: this.state.description,
                start_date: this.state.start_date,
                end_date: this.state.end_date
            })
            .then(response => {
                this.setState({name: ""});
                this.getTasks();
            });
    }
    
    renderTasks() {
        console.log(this.state.tasks);
        return 
            this.state.tasks.map(task => (
                <div key={task.id} className="media">
                    <div className="media-body">
                        <p>
                            {task.name}{' '}
                            <button
                                onClick={() => this.handleDelete(task.id)}
                                className="btn btn-sm btn-warning float-right"
                            >
                                Delete
                            </button>
                        </p>
                    </div>
               </div>
            ));
    }

    // get all tasks from backend
    getTasks() {
        axios.get('/tasks').then((
            response // console.log(response.data.tasks)
        ) =>
            this.setState({
                tasks: [...response.data.tasks]
            })
        );
    }

    // handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({ tasks: updatedTasks });
        // make delete request to the backend
        axios.delete(`/tasks/${id}`);
    }    

    OverlayComponent({ children, ...props }) {
        return (
        <div {...props}>
            <p>My custom things</p>
            {/* include the calendar */}
            { children }
            <p>Some content below the calendar</p>
        </div>
        );
    }
    

    MyDayPickerInput() {
        return <DayPickerInput overlayComponent={this.OverlayComponent} />;
    }

    render() {
        return(
            <>
                <div className="default-sidebar"><SideBar /></div>
                <div className="content-inner">
                    <div className="container-fluid">
                        {/* Begin Page Header*/}
                        <div className="row">
                            <div className="page-header">
	                            <div className="d-flex align-items-center">
	                                <h2 className="page-header-title">Mis Actividades</h2>
	                                <div>
			                            <ul className="breadcrumb">
			                                <li className="breadcrumb-item"><a href="db-default.html"><i className="ti ti-home"></i></a></li>
			                                <li className="breadcrumb-item active">Mis Actividades</li>
			                            </ul>
	                                </div>
	                            </div>
                            </div>
                        </div>
                        {/* End Page Header */}
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="widget has-shadow">
                                    <div className="widget-header d-flex align-items-center">
                                        <h2>Tasks</h2>
                                        <div className="widget-options">
                                            <button type="button" className="btn btn-default" data-toggle="modal" onClick={this.getTasks}>
                                                <i className="la la-refresh"></i> Refresh
                                            </button>
                                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-centered">
                                                <i className="la la-plus"></i> Add
                                            </button>
                                        </div>
                                    </div>
                                    <div className="widget-body">
                                        {
                                            this.state.tasks.map(task => (
                                                <div key={task.id} className="media">
                                                    <div className="media-body">
                                                        <p>
                                                            {task.name}{' '}
                                                            <button
                                                                onClick={() => this.handleDelete(task.id)}
                                                                className="btn btn-sm btn-warning float-right"
                                                            >
                                                                Delete
                                                            </button>
                                                        </p>
                                                    </div>
                                               </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="modal-centered" className="modal fade" aria-hidden="true" style={{ display: "none" }}>
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                    <form id="fNewEditTask" className="needs-validation" noValidate onSubmit={this.handleSubmit}>
                                        <div className="modal-header">
                                            <h4 className="modal-title">Add new Task</h4>
                                            <button type="button" className="close" data-dismiss="modal">
                                                <span aria-hidden="true">×</span>
                                                <span className="sr-only">close</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                                <div className="form-group row mb-3">
                                                    <div className="col-xl-6">
                                                        <div className="col-xl-12 mb-3">
                                                            <label className="form-control-label">Name</label>
                                                            <input type="text" className="form-control" placeholder="Enter the task name" name="name" required value={ this.state.name } onChange={this.onChange} />
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <label className="form-control-label">Description</label>
                                                            <textarea className="form-control" rows="6" placeholder="Type your message here ..." name="description" required value={ this.state.description } onChange={this.onChange}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <DayPickerInput classNames={{
                                                            container: "col-xl-12 mb-3 DayPickerInput",
                                                            overlayWrapper: "DayPickerInput-OverlayWrapper",
                                                            overlay: "DayPickerInput-Overlay"
                                                        }}
                                                        name="start_date"
                                                        format="YYYY-MM-DD"
                                                        formatDate={formatDate}
                                                        parseDate={parseDate}
                                                        onDayChange={this.handleDayChange}
                                                        selectedDay={this.state.start_date}
                                                        placeholder="Select date" component={props => 
                                                            <>
                                                                <label className="form-control-label">Start Date</label>
                                                                <div className="input-group">
                                                                    <span className="input-group-addon addon-secondary">
                                                                        <i className="la la-calendar"></i>
                                                                    </span>
                                                                    <input className="form-control" name="start_date" required {...props} />
                                                                </div>
                                                            </>
                                                        } />
                                                        <DayPickerInput classNames={{
                                                            container: "col-xl-12 mb-3 DayPickerInput",
                                                            overlayWrapper: "DayPickerInput-OverlayWrapper",
                                                            overlay: "DayPickerInput-Overlay"
                                                        }}
                                                        name="end_date"
                                                        format="YYYY-MM-DD"
                                                        formatDate={formatDate}
                                                        parseDate={parseDate}
                                                        onDayChange={this.handleDayChange}
                                                        selectedDay={this.state.end_date}
                                                        placeholder="Select date" component={props => 
                                                            <>
                                                                <label className="form-control-label">End Date</label>
                                                                <div className="input-group">
                                                                    <span className="input-group-addon addon-secondary">
                                                                        <i className="la la-calendar"></i>
                                                                    </span>
                                                                    <input className="form-control" name="end_date" required {...props} />
                                                                </div>
                                                            </>
                                                        } />
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-shadow" data-dismiss="modal"><i className="la la-close"></i>Close</button>
                                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}><i className="la la-save"></i>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}