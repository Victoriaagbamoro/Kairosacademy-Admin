import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div className="product-status mg-b-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-status-wrap">
                            <h4>Products List</h4>
                            <div className="add-product">
                                <Link to="/product-edit">Add Product</Link>
                            </div>
                            <table>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Title</th>
                                    <th>Status</th>
                                    <th>Purchases</th>
                                    <th>Product sales</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Setting</th>
                                </tr>
                                <tr>
                                    <td><img src="img/new-product/5-small.jpg" alt="" /></td>
                                    <td>Product Title 1</td>
                                    <td>
                                        <button className="pd-setting">Active</button>
                                    </td>
                                    <td>50</td>
                                    <td>$750</td>
                                    <td>Out Of Stock</td>
                                    <td>$15</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="img/new-product/6-small.jpg" alt="" /></td>
                                    <td>Product Title 2</td>
                                    <td>
                                        <button className="ps-setting">Paused</button>
                                    </td>
                                    <td>60</td>
                                    <td>$1020</td>
                                    <td>In Stock</td>
                                    <td>$17</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="img/new-product/7-small.jpg" alt="" /></td>
                                    <td>Product Title 3</td>
                                    <td>
                                        <button className="ds-setting">Disabled</button>
                                    </td>
                                    <td>70</td>
                                    <td>$1050</td>
                                    <td>Low Stock</td>
                                    <td>$15</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="img/new-product/5-small.jpg" alt="" /></td>
                                    <td>Product Title 4</td>
                                    <td>
                                        <button className="pd-setting">Active</button>
                                    </td>
                                    <td>120</td>
                                    <td>$1440</td>
                                    <td>In Stock</td>
                                    <td>$12</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="img/new-product/6-small.jpg" alt="" /></td>
                                    <td>Product Title 5</td>
                                    <td>
                                        <button className="pd-setting">Active</button>
                                    </td>
                                    <td>30</td>
                                    <td>$540</td>
                                    <td>Out Of Stock</td>
                                    <td>$18</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="img/new-product/7-small.jpg" alt="" /></td>
                                    <td>Product Title 6</td>
                                    <td>
                                        <button className="ps-setting">Paused</button>
                                    </td>
                                    <td>400</td>
                                    <td>$4000</td>
                                    <td>In Stock</td>
                                    <td>$10</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                            </table>
                            <div className="custom-pagination">
                                <ul className="pagination">
                                    <li className="page-item"><Link className="page-link" to="/product-list#">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/product-list#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/product-list#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/product-list#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/product-list#">Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
