import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../Loader";

const Checkout = () => {
    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);

    const fetchData = async () => {
        setLoader(true);
        const res = await fetch("http://localhost:8000/checkout", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();
        if (res.status === 200) {
            console.log(data);
            navigate("/", { replace: true });
        } else {
            console.log(data);
            navigate(-1, { replace: true });
        }
        setLoader(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <>{loader && <Loader />}</>;
};

export default Checkout;
