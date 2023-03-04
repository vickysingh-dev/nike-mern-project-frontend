import React, { useState, useEffect } from "react";

import "./../item_css/ItemBar.css";

import { jsonRequest } from "../../utilities";

import { IoHeartOutline } from "react-icons/io5";
import { useRef } from "react";

import Loader from "../Loader";
import ModalAlert from "../modals/ModalAlert";

const ItemBar = ({ items }) => {
    const [loader, setLoader] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalProps, setModalProps] = useState({});

    const [product, setProduct] = useState({
        name: "",
        price: "",
        size: [],
        image: "",
        category: "",
        _id: "",
    });

    const itemSize = useRef(null);

    const setSize = (e) => {
        itemSize.current = e.target.textContent;
        e.target.parentNode.childNodes.forEach((element) => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    };

    const getItems = () => {
        const price = items.price.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR",
        });
        const category = items.category.toUpperCase();

        setProduct((prevProduct) => {
            return { ...prevProduct, _id: items._id };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, price: price };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, category: category };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, name: items.name };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, size: items.size };
        });
        setProduct((prevProduct) => {
            return { ...prevProduct, image: items.image };
        });
    };

    const addToBag = async () => {
        if (itemSize.current == null) {
            setModalProps({
                modalTitle: "Select A size First",
                modalFooter: "Select Size",
            });
            setModalOpen(true);
            return;
        }
        setLoader(true);
        // const res = await fetch("https://nike-sample.adaptable.app/addItem", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         item_id: product._id,
        //         size: itemSize.current,
        //     }),
        //     credentials: "include",
        // });
        // const data = await res.json();
        const { data, res } = await jsonRequest({
            path: "/addItem",
            method: "POST",
            credentials: "include",
        });
        if (res.status === 201) {
            setModalProps({
                modalTitle: "Item Already in Cart!",
                modalFooter: "Cancel",
            });
            setModalOpen(true);
        } else if (res.status === 200) {
            setModalProps({
                modalTitle: "Item Added to the Cart",
                modalFooter: "Shop More",
            });
            setModalOpen(true);
        } else if (res.status === 402) {
            setModalProps({
                modalTitle: "You are Not Signed In",
                modalBody: "You must Sign In to Buy",
                navigateTo: "/signin",
                modalFooter: "Sign In Now",
            });
            setModalOpen(true);
        } else {
            console.log(data);
            window.alert("Some error Occured while adding item to the cart");
        }
        setLoader(false);
    };

    useEffect(() => {
        getItems();
    }, [items]);

    return (
        <>
            <div className="itemBar">
                <div className="itemBar-parent">
                    <div className="itemBar-image">
                        <img src={product.image} />
                    </div>
                    <div className="itemBar-detail">
                        <h1>{product.name}</h1>
                        <h2>Category {product.category}</h2>
                        <h3>{product.price}</h3>
                        <h4>Select Size</h4>
                        <div className="itemBar-sizes">
                            {product.size.map(function (siz, index) {
                                return (
                                    <div key={index} onClick={setSize}>
                                        {siz}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="itemBar-addCart" onClick={addToBag}>
                            Add to Bag
                        </div>
                        <div className="itemBar-favorite">
                            Favourite <IoHeartOutline />
                        </div>
                    </div>
                </div>
            </div>
            {loader && <Loader />}
            {modalOpen && (
                <ModalAlert setOpenModal={setModalOpen} props={modalProps} />
            )}
        </>
    );
};

export default ItemBar;
