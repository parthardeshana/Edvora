import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Homepage(props) {
    const { data, selected } = props;
    const [filteredData, setFilteredData] = useState(data)
    let arr = [];

    useEffect(() => {
        if (selected && selected.product !== '') {
            if (selected.product && selected.state && selected.city) {
                arr = data && data.filter(e => e.product_name === selected.product && e.address.city === selected.city && e.address.state === selected.state);
            } else if (selected.product && selected.state) {
                arr = data && data.filter(e => e.product_name === selected.product && e.address.state === selected.state);
            } else if (selected.product) {
                arr = data && data.filter(e => e.product_name === selected.product);
            }
            setFilteredData(arr);
        }
    }, [data, selected])

    useEffect(() => {
        if (selected && selected.product === '') {
            setFilteredData(data);
        }
    }, [data])

    return (
        <div>
            <div className=" ms-2">
                <h4 className="edvora_title mb-3">
                    Edvora
                </h4>
                <h5 className="product_text my-4">
                    Products
                </h5>
            </div>
            <div>
                <h4 className="productName_title ms-2">
                    Product Name
                </h4>
                <hr className="my-2 ms-2" style={{ height: "2px", width: "94%" }} />
                <div className="mycard d-flex align-items-center">
                    {filteredData && filteredData.map(e => <ProductCard data={e} />
                    )}
                </div>
            </div>
            <p className="my-4 gray_text">
                Assesment By Parth Ardeshana
            </p>
        </div>
    )
}
export default Homepage
