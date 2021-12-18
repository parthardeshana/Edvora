import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Homepage from './Components/Homepage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const [selectedProduct, setSelectedProduct] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")

  useEffect(() => {
    axios.get("https://assessment-edvora.herokuapp.com/").then((e) => {
      return setData(e.data)
    })
  }, [])

  const sproduct_Callback = (val) => {
    setSelectedProduct(val)
  }
  const sCity_Callback = (val) => {
    setSelectedCity(val)
  }
  const sState_Callback = (val) => {
    setSelectedState(val)
  }

  const testFun = (val) => {
    setFilteredData(val)
  }

  return (
    <div className="container">
      <div className="mt-5">
        <div className="row">
          <div className="col-md-2">
            <Sidebar data={data} filteredData={filteredData} selected={
              {
                product: selectedProduct && selectedProduct,
                city: selectedCity && selectedCity,
                state: selectedState && selectedState,
              }
            }
              sProduct={sproduct_Callback} sState={sState_Callback} sCity={sCity_Callback} />
          </div>
          <div className="col-md-10 ps-5">
            <Homepage data={data} filterTest={testFun} selected={
              {
                product: selectedProduct && selectedProduct,
                city: selectedCity && selectedCity,
                state: selectedState && selectedState,
              }
            } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
