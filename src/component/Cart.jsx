import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import addCart from "../redux/actions";
import delCart from "../redux/actions/deleteaction";

let temp;
let sum = 0;

const Cart = () => {

    const a = useSelector((state) => state.handleCart);

    const [product, getProduct] = useState([]);
    const [empty, notEmpty] = useState(true);
    const [dontDel, del] = useState(false);
    const [but, showBut] = useState(false);

    const dispatch = useDispatch();

    const plus = (product) => {
        dispatch(addCart(product));
    }

    const minus = (product, b) => {
        if (b == 1) {
            del(true);
            temp = product;
        }
        if (b !== 1) dispatch(delCart(product));
    }

    const remove = (product) => {
        dispatch(delCart(product));
    }
    const getaway = () => {
        del(true);
    }

    useEffect(() => {
        getProduct(a);

        if (a.length == 0)
         {
            notEmpty(true);
            showBut(false);
        }
        else
         { 
         product.forEach((x)=> sum += x.qty*x.price);
         console.log(sum);
        notEmpty(false);
        showBut(true); }
    })

    const ShowProduct = () => {
        return (
            <>
                {dontDel ? (
                    <div className="lalacard">
                        <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Do you want to delete item?</h4>
                            <button  class="btn btn-outline-dark me-5" onClick={() =>{
                                dispatch(delCart(temp));
                                del(false);
                                
                            }}> YES </button>
                            <button  class="btn btn-dark " onClick={()=>del(false)}> NO </button>
                        </div>
                    </div>
                    </div>) : (<></>)}
                {
                    product.map((x) => {
                        return (
                            <div className="style1">
                                <div className="card mb-3" >
                                    <div className="row g-0" >
                                        <div className="col-md-4" >
                                            <img src={x.image} height="200px" width="180px" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{x.title}</h5>
                                                <p className="lead fw-bold">
                                                    {x.qty} X ${x.price} = ${x.qty * x.price}
                                                </p>
                                                <button className="btn btn-dark me-4">
                                                    <i className="fa fa-minus" onClick={(e) => minus(x, x.qty)}></i>
                                                </button>
                                                <button className="btn btn-dark ">
                                                    <i className="fa fa-plus" onClick={() => plus(x)}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </>)
    }

    return (
        <>
            {empty ? (<h1 className="my-5"> Your cart is empty</h1>) : <ShowProduct />}
            {/* {but ? (
                    <div className="lalacard">
                        <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4"> Your order </h4>
                            <p>{sum}</p>
                            <button  class="btn btn-outline-dark me-5"> oformit zakaz </button>
                           
                        </div>
                    </div>
                    </div>) : (<></>)} */}
        </>
    )


}
export default Cart;
