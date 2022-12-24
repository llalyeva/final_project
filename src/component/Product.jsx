import React, { useState, useEffect } from "react";


const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let isMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (isMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                isMounted = false;
            }

        }
        getProducts();
       
    },[])

   const organize = (str) => {
     let updated = data.filter((a)=> a.category === str)
     setFilter(updated);
   }



    const ShowProduct = () => {
        return (
            <>
                <div className="buttons">
                    <button className="btn btn-outline-dark me-2 mb-2" onClick = {()=> setFilter(data)} >All</button>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick = {()=> organize("men's clothing")}> Men`s clothing </button>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick = {()=> organize("women's clothing")}> Women`s clothing</button>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick = {()=> organize("jewelery")}> Jewelery</button>
                    <button className="btn btn-outline-dark me-2 mb-2" onClick = {()=> organize("electronics")}> Electronics </button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} className="card-img-top" alt="img" height="270px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                                            <p className="card-text lead fw-bold"> ${product.price}</p>
                                            <a href="#" className="btn btn-outline-dark">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </>
        );

    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest goods</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? (<p> ... Loading </p>) : <ShowProduct />}
                </div>
            </div>

        </div>
    )
}

export default Product;