import React from "react";
import { MdDashboard } from "react-icons/md";
import { FiShoppingCart, FiDollarSign, FiTruck, FiHeadphones, FiUsers, FiTag, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <nav className="w-72 bg-white shadow-lg p-6 rounded-2xl m-4 hidden md:block">
      <img src="/logo.png" alt="Logo" className="h-16 mx-auto" style={{ paddingBottom: "14px" }} />
      
      <ul className="space-y-4">
        <li>
          <a href="/customer-service-dashboard" className="flex items-center p-3 rounded-lg bg-gray-200">
            <MdDashboard className="mr-3" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#manage-orders" className="flex items-center p-3 rounded-lg hover:bg-gray-200">
            <FiShoppingCart className="mr-3" /> Manage Orders
          </a>
        </li>
        <li>
          <a href="#payments" className="flex items-center p-3 rounded-lg hover:bg-gray-200">
            <FiDollarSign className="mr-3" /> Payments & Invoices
          </a>
        </li>
        <li>
          <a href="#shipments" className="flex items-center p-3 rounded-lg hover:bg-gray-200">
            <FiTruck className="mr-3" /> Shipment Tracking
          </a>
        </li>
        <li>
          <a href="#support" className="flex items-center p-3 rounded-lg hover:bg-gray-200">
            <FiHeadphones className="mr-3" /> Support Tickets
          </a>
        </li>
        <li>
          <a href="#customers" className="flex items-center p-3 rounded-lg hover:bg-gray-200">
            <FiUsers className="mr-3" /> Customer Management
          </a>
        </li>
        <li>
          <a href="#discounts" className="flex items-center p-3 rounded-lg hover:bg-gray-200">
            <FiTag className="mr-3" /> Discounts & Promotions
          </a>
        </li>
        <li>
          <a href="#settings" className="flex items-center p-3 rounded-lg hover:bg-gray-200">
            <FiSettings className="mr-3" /> Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
