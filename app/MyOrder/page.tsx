"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import { Bus } from 'lucide-react';

interface Order {
  name: string;
  OrderID: number;
  price: string;
  logoUrl: string;
}

export default function MyOrder() {
  const [ongoingOrders, setOngoingOrders] = useState<Order[] | null>(null);
  const [dispatchedOrders, setDispatchedOrders] = useState<Order[] | null>(null);

  const orderLogoUrl = "/OrderLogo.png"; // One place for the logo URL

  useEffect(() => {
    document.title = "My Order";

    // Mock data for ongoing and dispatched orders with a shared logo URL
    const orderData: Omit<Order, "logoUrl">[] = [
      {
        name: "MR. Remand Daramasena",
        OrderID: 600,
        price: "RS.38,400",
      },
      {
        name: "MR. Remand Daramasena",
        OrderID: 601,
        price: "RS.38,400",
      },
    ];

    const ongoingOrdersData = orderData.map(order => ({
      ...order,
      logoUrl: orderLogoUrl,
    }));

    setOngoingOrders(ongoingOrdersData);
    setDispatchedOrders([]); // or set this similarly if you have dispatched data
  }, []);

  const renderOrders = (orders: Order[]) => {
    if (orders.length === 0) {
      return <p>No orders available.</p>;
    }

    return (
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.OrderID} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
            {/* Order Logo on the Left Side */}
            <img
              src={order.logoUrl}
              alt="Order Logo"
              className="w-16 h-16 object-contain" // Adjust size as needed
            />
            {/* Order Details on the Right Side */}
            <div>
              <h3 className="font-semibold text-lg">{order.name}</h3>
              <p>Status: Ongoing</p>
              <p>Price: {order.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>My Order</title>
      </Head>

      {/* Setting the background image */}
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
        {/* Navbar */}
        <Navbar />
        <h1 className="font-bold text-3xl mt-24 mb-10 ml-16">MY ORDER</h1>

        {/* New Box on Top */}
        <div className="mx-16 mb-8 flex ">
          <div className="bg-gray-300 p-4 rounded-lg shadow-lg w-full">
            <h2 className="text-lg mt-5 font-bold mb-4 flex items-center gap-2">
              <Bus size={30} />Bus
            </h2>
          </div>
        </div>

        {/* Flex container for the order boxes */}
        <div className="flex gap-8 mx-16 mb-16 flex-wrap">
          <div className="flex-1 bg-gray-200 p-8 rounded-lg shadow-lg overflow-y-auto max-h-80">
            <h2 className="text-xl font-semibold mb-5">Ongoing Orders</h2>
            {ongoingOrders === null ? (
              <p>Loading...</p>
            ) : (
              renderOrders(ongoingOrders)
            )}
          </div>

          <div className="flex-1 bg-gray-200 p-8 rounded-lg shadow-lg overflow-y-auto max-h-80">
            <h2 className="text-xl font-semibold mb-5">Dispatched Orders</h2>
            {dispatchedOrders === null ? (
              <p>Loading...</p>
            ) : (
              renderOrders(dispatchedOrders)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
