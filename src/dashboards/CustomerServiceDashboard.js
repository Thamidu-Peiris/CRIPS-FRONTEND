import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import axios from "axios";
import { FiHome, FiShoppingCart, FiDollarSign, FiTruck, FiHeadphones, FiUsers, FiTag, FiSettings, FiUser, FiLock, FiLogOut } from "react-icons/fi";
import { MdNotificationsNone, MdDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const CustomerServiceDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const [stats, setStats] = useState({
    totalOrders: 250,
    newOrders: 65,
    pendingPayments: 10,
    completedOrders: 126,
    pendingOrders: 40,
    activeOrders: 85,
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders/all");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  // ✅ Bar Chart Data (Orders Over Time)
  const barChartData = {
    labels: ["Feb-01", "Feb-02", "Feb-03", "Feb-04", "Feb-05", "Feb-06"],
    datasets: [
      {
        label: "Orders",
        data: [5, 10, 3, 12, 8, 18],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // ✅ Bar Chart Options
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
      title: {
        display: true,
        text: "Orders Over Time",
        font: { size: 16 },
        padding: { top: 10, bottom: 20 },
      },
    },
    scales: {
      x: {
        type: "category",
        ticks: { padding: 10 },
        grid: { display: false },
      },
      y: { beginAtZero: true },
    },
  };

  // ✅ Pie Chart Data (Pending vs. Active Orders)
  const pieChartData = {
    labels: ["Pending Orders", "Active Orders"],
    datasets: [
      {
        data: [stats.pendingOrders, stats.activeOrders],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF4D6D", "#2F86D6"],
      },
    ],
  };

  // ✅ Pie Chart Options
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Order Status Distribution",
        font: { size: 16 },
        padding: { top: 10, bottom: 20 },
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-72 bg-white shadow-lg p-6 rounded-2xl m-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">CSM Panel</h2>
        <ul className="space-y-4">
          <li>
            <a href="#home" className="flex items-center p-3 rounded-lg bg-gray-200">
              <FiHome className="mr-3" /> Home
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

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-2xl relative">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, CS Manager</h1>
          <div className="flex items-center space-x-4">
            <MdNotificationsNone className="text-gray-800 text-2xl" />
            {/* Profile Icon with Dropdown */}
            <div className="relative">
              <button onClick={() => setShowMenu(!showMenu)} className="flex items-center space-x-2">
                <FaUserCircle className="text-gray-800 text-2xl" />
                <span className="text-gray-800 font-semibold">Manager</span>
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                  <ul className="py-2">
                    <li>
                      <a href="#dashboard" className="flex items-center px-4 py-2 hover:bg-gray-200">
                        <MdDashboard className="mr-2" /> Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#profile" className="flex items-center px-4 py-2 hover:bg-gray-200">
                        <FiUser className="mr-2" /> Update Profile
                      </a>
                    </li>
                    <li>
                      <a href="#change-password" className="flex items-center px-4 py-2 hover:bg-gray-200">
                        <FiLock className="mr-2" /> Change Password
                      </a>
                    </li>
                    <li>
                      <button className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 w-full text-left">
                        <FiLogOut className="mr-2" /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            { title: "Total Orders", value: stats.totalOrders },
            { title: "New Orders", value: stats.newOrders },
            { title: "Pending Payments", value: stats.pendingPayments },
            { title: "Completed Orders", value: stats.completedOrders },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-3xl font-bold text-blue-600">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>

        {/* ✅ Latest Orders Table */}
        <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
          <h3 className="text-lg font-semibold mb-4">Latest Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3 px-4 border border-gray-300">Order</th>
                  <th className="py-3 px-4 border border-gray-300">Status</th>
                  <th className="py-3 px-4 border border-gray-300">Payment</th>
                  <th className="py-3 px-4 border border-gray-300">Date</th>
                  <th className="py-3 px-4 border border-gray-300">Options</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map((order) => (
                  <tr key={order.orderId} className="text-center border-b border-gray-300">
                    <td className="py-3 px-4">{order.orderId}</td>
                    <td className="py-3 px-4">{order.status}</td>
                    <td className="py-3 px-4">{order.paymentStatus}</td>
                    <td className="py-3 px-4">{new Date(order.date).toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerServiceDashboard;