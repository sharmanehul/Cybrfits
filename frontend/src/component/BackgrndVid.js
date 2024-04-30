import React, { useEffect } from "react";
import videoBg from "../images/videoBg.mp4";
import "./BackgrndVid.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";
import MetaData from "./layout/MetaData.js";
import { clearErrors, getProduct } from "../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import Loader from "./layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const BackgrndVid = () => {

    const alert=useAlert()
    const dispatch = useDispatch();
    const { loading,error,products } = useSelector(state=>state.products)

    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    },[dispatch,error,alert]);

    const scrollToContainer = () => {
        const container = document.getElementById("container");
        container.scrollIntoView({ behavior: "smooth" });
    };

    /*useEffect(() => {
        if (error) {
            // Display error using alert()
            alert(error.message);
        }
    }, [error]);*/

    return (
        <>
        {loading ? (
            <Loader />
        ) : (
            <div className="main">
            <MetaData title="ECOMMERCE"/>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1>Apparel & Clothing</h1>
                <p>Intuitively Curated With Love</p>

                {/* Call scrollToContainer function on button click */}
                <button onClick={scrollToContainer}>
                    Scroll <CgMouse />
                </button>
            </div>

            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
                
                {products && products.map((product)=> 
                    <Product product={product}/>
                )}

            </div>
        </div>
        )}
        </>
    );
}

export default BackgrndVid;