import React, { useEffect, useState } from 'react'
import axios from "axios";
import Footer from '../components/footer';
import Body from '../components/body';
import Header from '../components/header';
import Link from 'next/link'

export default function Home() {
    //Get Data
    /*
    const getData = () => {
        const config = {
            headers: { Authorization: `Bearer ${document.cookie}` }
        };
        fetch('http://localhost:3001/api/v1/category', config)
            .then((res) => res.json())
            .then((res) => {
                fetchCateory(res)
                console.log(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    */

    return (

        <div>
            <div className="relative">
                <Header />
            </div>
            <Body />
            {/* About CEO */}
            {/* EndAbout CEO */}

            <Footer />
        </div>
    );
}