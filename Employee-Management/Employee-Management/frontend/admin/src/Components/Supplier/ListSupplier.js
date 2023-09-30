import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { del, post } from './request'

class ListSupplier extends Component {
    state = {
        suppliers: [],
        createSupplierReq: {}
    }

    async componentDidMount() {
        const suppliers = await post('supplier/search', {})

        this.setState({ suppliers })
    }

    async delete(id) {
        console.log('log clicked', id)
        const deletedSupplier = await del(`supplier/${id}`)

        const suppliers = this.state.suppliers.filter(supplier => supplier._id !== deletedSupplier._id)

        this.setState({ suppliers })
    }

    async search(email) {
        const suppliers = await post('supplier/search', { email })

        this.setState({ suppliers })
    }

    render() {
        const { suppliers } = this.state

        return (
            <div className="container mt-5">
                <div className="row mt-3">
                    <div className="col-3">
                        <Link className="btn btn-success" to="/add">
                            Add Supplier
                        </Link>
                    </div>

                    <div className="col-8 offset-1">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Search email"
                            onChange={event => this.search(event.target.value)}
                        />
                    </div>
                </div>

                <table className="table mt-5">
                    <thead>
                    <tr className="bg-success">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Product</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !!suppliers &&
                        suppliers.map((supplier, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.address}</td>
                                    <td>{supplier.category}</td>
                                    <td>{supplier.phone}</td>
                                    <td>{supplier.email}</td>
                                    <Link to={`/view/${supplier._id}`}>
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    </Link>
                                    <Link to={`/edit/${supplier._id}`}>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Link>
                                    <span onClick={this.delete.bind(this, supplier._id)}>
                                        <i className="fa fa-ban delete-icon" aria-hidden="true"></i>
                                    </span>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListSupplier