import moment from 'moment'
import React from 'react'
import productImage from '../assests/product.png'

function ProductCard({ data }) {
    return (
        <div className="subcard py-2 mx-3">
            <div className="d-flex justify-content-between">
                <img className="product-image p-1" src={data.image} alt="" />
                <div className=' p-1'>
                    <h5 className="prod_name">{data.product_name}</h5>
                    <h6 className="brand_name">{data.brand_name}</h6>
                    <p className="price"> $ <span>{data.price}</span> </p>
                </div>
            </div>
            <div className="d-flex justify-content-between px-2 align-items-center mt-1">
                <p className="product_location">{data.address.city}</p>
                <br />
                {data.address.city !== data.address.state ?
                    <p className="product_location">{data.address.state}</p> : null}
                <p className="product_date">Date : <span> {moment(data.time).format('DD:MM:YYYY')} </span></p>
            </div>
            <div className="description px-2">
                {data.discription}
            </div>
        </div>
    )
}

export default ProductCard
