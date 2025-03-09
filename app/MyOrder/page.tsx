"use client";

import React, { useEffect} from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";

export default function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (

    <>
    <Navbar></Navbar> 
    <h1>my orders</h1></>
  );
}