import SideBar from '@/Components/SideBar';
import Carousel from '@/Components/Carousel';
import { Timer, CreditCard, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <SideBar />
      <section className="flex flex-col gap-6 min-h-[calc(100dvh-150px)] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">

        <div className="bg-Tertiary rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 transition hover:shadow-lg">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Selamat Datang di <span className="text-primary">PUMELTO Marketplace</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Platform penjualan pudding modern — temukan dan pesan pudding favoritmu dari berbagai varian rasa dalam satu tempat. Proses cepat, rasa berkualitas, dan transaksi yang aman.
            </p>
            <Link
              to="/menu"
              className="mt-6 inline-block bg-primary hover:bg-primary-dark text-black px-6 py-2 rounded-lg transition"
            >
              Lihat Menu
            </Link>
          </div>
          <div className="hidden md:block w-1/2">
            <img src="/images/Pudding.jpg" alt="Pudding Illustration" className="w-56 object-cover rounded-md" />
          </div>
        </div>

        <Carousel />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition group">
            <div className="flex items-center gap-3 mb-3">
              <Star className="text-primary group-hover:scale-110 transition" />
              <h3 className="text-lg font-semibold text-gray-800">Pilihan Rasa Premium</h3>
            </div>
            <p className="text-sm text-gray-600">
              Dari matcha hingga taro — semuanya dibuat dari bahan segar & berkualitas.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition group">
            <div className="flex items-center gap-3 mb-3">
              <Timer className="text-yellow-500 group-hover:scale-110 transition" />
              <h3 className="text-lg font-semibold text-gray-800">Pengiriman Cepat</h3>
            </div>
            <p className="text-sm text-gray-600">
              Dikirim dalam 1x24 jam. Bisa juga ambil langsung ke outlet kami.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition group">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="text-green-600 group-hover:scale-110 transition" />
              <h3 className="text-lg font-semibold text-gray-800">Transaksi Aman & Mudah</h3>
            </div>
            <p className="text-sm text-gray-600">
              Pembayaran via transfer, e-wallet, atau COD saat ambil.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
