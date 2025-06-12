import SideBar from '@/Components/SideBar'
import { AddSquare, Edit, Trash } from 'iconsax-react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteConfirmModal from '@/Components/DeleteConfirmModal'

const History = () => {
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState(null);
    const [error, setError] = useState(null)
    const [filter, setFilter] = useState('')
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 15,
        total: 0,
        from: 0,
        to: 0
    })

    // Fetch transactions from API
    const fetchTransactions = async (filterType = '', page = 1) => {
        try {
            setLoading(true)
            setError(null)

            const params = {
                page: page,
                per_page: 15
            }

            if (filterType) {
                params.filter = filterType
            }

            const response = await axios.get('/api/transactions', {
                params,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Accept': 'application/json'
                }
            })

            if (response.data.success) {
                setTransactions(response.data.data)
                setPagination(response.data.pagination)
            }
        } catch (err) {
            console.error('Error fetching transactions:', err)
            setError('Failed to load transaction history')

            // If unauthorized, redirect to login
            if (err.response?.status === 401) {
                window.location.href = '/login'
            }
        } finally {
            setLoading(false)
        }
    }

    // Handle edit (you can implement this based on your needs)
    const handleEdit = (id) => {
        // Navigate to edit page or open modal
        console.log('Edit transaction:', id)
        // Example: window.location.href = `/transactions/edit/${id}`
    }

    // Delete transaction
    const handleDelete = async () => {
        try {
            await axios.delete(`/api/transactions/${selectedDeleteId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Accept': 'application/json'
                }
            });

            setShowDeleteModal(false);
            fetchTransactions(filter, pagination.current_page);
        } catch (err) {
            console.error('Error deleting transaction:', err);
            alert('Gagal menghapus transaksi');
        }
    };

    const confirmDelete = (id) => {
        setSelectedDeleteId(id);
        setShowDeleteModal(true);
    };


    // Handle filter button click
    const handleFilterClick = (filterType) => {
        setFilter(filterType)
        fetchTransactions(filterType, 1)
    }

    // Handle pagination
    const handlePageChange = (page) => {
        fetchTransactions(filter, page)
    }

    // Load data on component mount
    useEffect(() => {
        fetchTransactions()
    }, [])

    // Format currency
    const formatCurrency = (amount) => {
        return `Rp.${amount?.toLocaleString('id-ID') || 0}`
    }

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID')
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

    if (error) {
        return (
            <>
                <SideBar />
                <section className='flex flex-col min-h-[calc(100dvh-150px)] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]'>
                    <div className='flex justify-center items-center h-64'>
                        <div className='text-lg text-red-500'>{error}</div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            <SideBar />
            <section className='flex flex-col min-h-[calc(100dvh-150px)] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]'>
                <h1 className='text-2xl font-bold'>Transaction History</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => handleFilterClick('1_year')}
                            className={`p-2 mt-2 rounded-lg ${filter === '1_year' ? 'bg-blue-500 text-white' : 'bg-Secondary'}`}
                        >
                            1 Year
                        </button>
                        <button
                            onClick={() => handleFilterClick('1_month')}
                            className={`p-2 mt-2 rounded-lg ${filter === '1_month' ? 'bg-blue-500 text-white' : 'bg-Secondary'}`}
                        >
                            1 Month
                        </button>
                        <button
                            onClick={() => handleFilterClick('1_day')}
                            className={`p-2 mt-2 rounded-lg ${filter === '1_day' ? 'bg-blue-500 text-white' : 'bg-Secondary'}`}
                        >
                            1 Day
                        </button>
                        <button
                            onClick={() => handleFilterClick('24_hours')}
                            className={`p-2 mt-2 rounded-lg ${filter === '24_hours' ? 'bg-blue-500 text-white' : 'bg-Secondary'}`}
                        >
                            24 Hours
                        </button>
                        <button
                            onClick={() => handleFilterClick('')}
                            className={`p-2 mt-2 rounded-lg ${filter === '' ? 'bg-blue-500 text-white' : 'bg-Secondary'}`}
                        >
                            All
                        </button>
                    </div>
                    <h1 className='text-2xl font-bold'>Transaction History</h1>
                </div>
                <div className='relative bg-Tertiary mt-5 h-[calc(100dvh-150px)] rounded-lg p-3'>
                    <div className='absolute left-0 right-0 top-0 bg-Secondary p-5 rounded-t-xl'>List View</div>
                    <div className="rounded-xl my-[74px] max-sm:overflow-x-scroll overflow-hidden border-y-2 border-[#00000011]">
                        <table className="w-full">
                            <thead className="border-b-2 border-[#00000011] h-10 bg-Secondary">
                                <tr className="text-body">
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">No</th>
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">Customer</th>
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">Date</th>
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">Pickup Date</th>
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">Products</th>
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">Total Price</th>
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">Payment</th>
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">Status</th>
                                    <th className="p-3 text-base font-semibold tracking-wide text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-container">
                                {transactions.length === 0 ? (
                                    <tr>
                                        <td colSpan="9" className="p-8 text-center text-gray-500">
                                            No transactions found
                                        </td>
                                    </tr>
                                ) : (
                                    transactions.map((transaction, index) => (
                                        <tr key={transaction.id} className='odd:bg-Primary border-x-2 border-[#00000011]'>
                                            <td className="p-3.5 text-sm text-left">
                                                {((pagination.current_page - 1) * pagination.per_page) + index + 1}
                                            </td>
                                            <td className="p-3.5 text-sm text-left">{transaction.user?.name || 'N/A'}</td>
                                            <td className="p-3.5 text-sm text-left">{transaction.formatted_date || formatDate(transaction.date)}</td>
                                            <td className="p-3.5 text-sm text-left">{transaction.formatted_pickup_date || formatDate(transaction.pickup_date)}</td>
                                            <td className="p-3.5 text-sm text-left max-w-xs">
                                                <div className="truncate" title={transaction.products_summary}>
                                                    {transaction.products_summary || 'No products'}
                                                </div>
                                            </td>
                                            <td className="p-3.5 text-sm text-left">{transaction.formatted_price || formatCurrency(transaction.total_price)}</td>
                                            <td className="p-3.5 text-sm text-left">{transaction.payment_method}</td>
                                            <td className="p-3.5 text-sm text-left">
                                                <span className={`px-2 py-1 rounded text-xs ${transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                    transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        transaction.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {transaction.status}
                                                </span>
                                            </td>
                                            <td className="p-3.5 text-sm text-left">
                                                <div className='flex gap-2'>
                                                    <button
                                                        onClick={() => confirmDelete(transaction.id)}
                                                        className='p-1 rounded-xl hover:bg-Secondary hover:text-red-500'
                                                        title="Delete Transaction"
                                                    >
                                                        <Trash size={24} variant='Bold' />
                                                    </button>
                                                    <button
                                                        onClick={() => handleEdit(transaction.id)}
                                                        className='p-1 rounded-xl hover:bg-Secondary hover:text-yellow-500'
                                                        title="Edit Transaction"
                                                    >
                                                        <Edit size={24} variant='Bold' />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className='absolute left-0 right-0 bottom-0 bg-Secondary flex justify-between items-center p-5 rounded-b-xl'>
                        <div>
                            Showing {pagination.from || 0} to {pagination.to || 0} of {pagination.total || 0} entries
                        </div>
                        <div className='flex gap-2'>
                            <button
                                onClick={() => handlePageChange(pagination.current_page - 1)}
                                disabled={pagination.current_page <= 1}
                                className='px-3 py-1 bg-Primary rounded disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                Previous
                            </button>
                            <span className='px-3 py-1'>
                                Page {pagination.current_page} of {pagination.last_page}
                            </span>
                            <button
                                onClick={() => handlePageChange(pagination.current_page + 1)}
                                disabled={pagination.current_page >= pagination.last_page}
                                className='px-3 py-1 bg-Primary rounded disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <DeleteConfirmModal
                show={showDeleteModal}
                itemName="transaksi"
                onConfirm={handleDelete}
                onCancel={() => setShowDeleteModal(false)}
            />
        </>
    )
}

export default History