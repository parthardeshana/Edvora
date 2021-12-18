import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';


function Sidebar(props) {
    const { data } = props;
    let products = [], states = [], city = [];

    function unique(arr, property) {
        return arr && arr.sort(function (objA, objB) { return objA[property] > objB[property]; })
            .map(function (obj) { return obj[property]; })
            .map(function (val, i, self) {
                return (self.indexOf(val) === i) ? arr[i] : undefined;
            })
            .filter(function (val) { return val !== undefined; });
    }

    //products filters and logic 
    let productDuplicateRemove = unique(data, "product_name");
    productDuplicateRemove && productDuplicateRemove.forEach(e => products.push({ value: e.product_name, label: e.product_name, }))

    //States filters and logic 
    let filteredStatesOfProduct = data && data.filter(e => e.product_name === props.selected.product);
    filteredStatesOfProduct && filteredStatesOfProduct.forEach(e => states.push({ value: e.address.state, label: e.address.state }))
    let StateDuplicateRemove = unique(states, "value");

    //Cities filters and logic 
    filteredStatesOfProduct && filteredStatesOfProduct.forEach(e => city.push({ value: e.address.city, label: e.address.city, }))

    let CityDuplicateRemove = unique(city, "value");

    const [selectedProduct, setselectedProduct] = useState(null);
    const [selectedState, setselectedState] = useState(null);
    const [selectedCity, setselectedCity] = useState(null);

    const productHandleChange = (e) => {
        setselectedProduct(e)
        props.sProduct(e.value)
        props.sState(null)
        props.sCity(null)
    }
    const stateHandleChange = (e) => {
        setselectedState(e)
        props.sState(e.value)
        props.sCity(null)
        setselectedCity(null)
    }
    const cityHandleChange = (e) => {
        setselectedCity(e)
        props.sCity(e.value)
    }

    return (
        <div className="sidebar_section ">
            <p className="filter_text pt-4 w-75 mx-auto">Filters</p>
            <hr className="w-75 mx-auto" />
            <Select
                className="selection mx-auto my-2 text-dark"
                value={selectedProduct}
                onChange={productHandleChange}
                options={products && products}
            />
            <Select
                className="selection mx-auto my-2 text-dark"
                value={selectedState}
                onChange={stateHandleChange}
                options={StateDuplicateRemove && StateDuplicateRemove}
            />
            <Select
                className="selection mx-auto my-2 text-dark"
                value={selectedCity}
                onChange={cityHandleChange}
                options={CityDuplicateRemove && CityDuplicateRemove}
            />
            <div>
            </div>
        </div>
    )
}

export default Sidebar