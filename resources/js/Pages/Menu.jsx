import SideBar from "@/Components/SideBar";
import axios from "axios";
import { useEffect, useState } from "react";
import ToastModal from "@/Components/ToastModal";

const Menu = () => {
    const [menus, setMenus] = useState([])
    const [loading, setLoading] = useState(true)
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastMode, setToastMode] = useState("success");

    const IMAGE_BASE_URL = "/storage/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/pudding", {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Accept': 'application/json'
                    }
                });
                setMenus(res.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Gagal Memuat data:", error);
                setToastMessage("Gagal memuat data.");
                setToastMode("error");
                setShowToast(true);
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const addToCart = (item) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const alreadyInCart = cart.find((c) => c.id === item.id);
        if (alreadyInCart) {
            setToastMessage("Produk sudah ada di cart.");
            setToastMode("warning");
            setShowToast(true);
            return;
        }

        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        setToastMessage(`${item.name} ditambahkan ke cart!`);
        setToastMode("success");
        setShowToast(true);
    }

    if (loading) {
        return (
            <>
                <SideBar />
                <section className='flex flex-col min-h-[calc(100dvh-150px)] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]'>
                    <div className='flex justify-center items-center h-64'>
                        <div className='text-lg'>Loading...</div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            <SideBar />
            <section className="flex flex-col min-h-[800px] ml-[300px] mr-[20px] my-6 max-sm:m-0 max-sm:mb-[80px]">
                <div className="h-screen grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {menus.map((item) => (
                        <div key={item.id} className="bg-Tertiary border rounded-lg p-4 shadow">
                            <img
                                src={`${IMAGE_BASE_URL}${item.image}`}
                                alt={item.name}
                                className="w-full h-40 object-cover rounded mb-2"
                            />
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-sm text-gray-500 capitalize">Rasa: {item.flavor}</p>
                            <p className="text-sm">Stok: {item.stock}</p>
                            <p className="font-bold mt-1">Rp {item.price.toLocaleString()}</p>
                            <button
                                onClick={() => addToCart(item)}
                                className="mt-2 w-full bg-Secondary text-black py-1 rounded"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <ToastModal show={showToast} message={toastMessage} mode={toastMode} />
        </>
    );
};

export default Menu;