import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import InstagramPost from "../../../../components/InstaPosts/InstagramPost";

import './OrderPage.css'

import {SP25ShirtFront, SP25ShirtBack, SP25HoodieFront, SP25HoodieBack,
DTJShirtFront, DTJShirtBack, DTJCrewFront, DTJCrewBack, DTJSweats} 
from '../Apparel.js';

const apparelData = {
    'fall25shirt' : {
        name: 'Fall 2025 Shirt',
        price: 15.00,
        imgFront: null,
        imgBack: null
    },
    'fall25hoodie' : {
        name: 'Fall 2025 Hoodie',
        price: 22.00,
        imgFront: null,
        imgBack: null
    },
    'fall25both' : {
        name: 'Fall 2025 Shirt & Hoodie',
        price: 30.00,
        imgFront: null,
        imgBack: null
    },
    'sp25shirt' : {
        name: 'Spring 2025 Shirt',
        price: 15.00,
        imgFront: SP25ShirtFront,
        imgBack: SP25ShirtBack
    },
    'sp25hoodie' : {
        name: 'Spring 2025 Hoodie',
        price: 22.00,
        imgFront: SP25HoodieFront,
        imgBack: SP25HoodieBack
    },
       'dtjshirt' : {
        name: 'DTJ Shirt',
        price: 15.00,
        imgFront: DTJShirtFront,
        imgBack: DTJShirtBack
    },
       'dtjcrew' : {
        name: 'DTJ Crewneck',
        price: 22.00,
        imgFront: DTJCrewFront,
        imgBack: DTJCrewBack
    },
       'dtjsweats' : {
        name: 'DTJ Sweatpants',
        price: 35.00,
        imgFront: DTJSweats,
        imgBack: DTJSweats
    }
};

const getApparelData = id => {
    return apparelData[id] || null;
};

const OrderPage = () => {
    
    const [searchParams] = useSearchParams();

    const apparelId = searchParams.get('apparel');

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (apparelId) {
            setLoading(true);

            const details = getApparelData(apparelId);
            setProduct(details);
            setLoading(false);
        }
        else {
            setProduct(null);
            setLoading(false);
        }

    }, [apparelId]);

    if (loading) {
        return <div className='order-page-main'>Loading...</div>;
    }

    if (!product) {
        return <div className='order-page-main'>Item not found</div>;
    }

    if (apparelId === 'fall25shirt' || apparelId === 'fall25hoodie' || apparelId === 'fall25both') {
        return(
            <>
                <div className='order-page-main'>
                    <div className='product-name-and-image'>
                        <h2>{product.name} | ${product.price}</h2>
                        <figure className="event-figure">
                            <InstagramPost url="https://www.instagram.com/p/DRQ3FxNDVSh/?igsh=emFjaWJnMTY5ams3" />
                            <figcaption className="event-caption">Fall 2025 Collection</figcaption>
                        </figure>
                    </div>
                    <div className='gap'></div>
                    <div className='sizing-and-order'>
                        Sizing and Payment Option Buttons on right side of page.
                        Still need to fix sizing and design.
                    </div>
                </div>
            </>
        );
    }

    return(
        <>
            <div className='order-page-main'>
                <div className='product-name-and-image'>
                    <h2>{product.name} | ${product.price}</h2>
                    <img src={product.imgFront} alt={product.name} className='product-image'/>
                </div>
                <div className='gap'>

                </div>
                <div className='sizing-and-order'>
                    Sizing and Payment Option Buttons on right side of page.
                    Still need to fix sizing and design.
                </div>
            </div>
        </>
    );
};

export default OrderPage;