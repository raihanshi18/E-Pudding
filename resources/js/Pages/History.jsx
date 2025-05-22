import SideBar from '@/Components/SideBar'
import { AddSquare, Edit, Trash } from 'iconsax-react'
import React from 'react'

const History = () => {
    const students = [{
        id: 1,
        name: "Rifandi Yusuf",
        qty: 10,
        product: "Pudding Caramel",
        price: "Rp.10.0000",
      },
      {
        id: 2,
        name: "Rifandi Yusuf",
        qty: 10,
        product: "Pudding Caramel",
        price: "Rp.10.0000",
      },
      {
        id: 3,
        name: "Rifandi Yusuf",
        qty: 10,
        product: "Pudding Caramel",
        price: "Rp.10.0000",
      },
      {
        id: 4,
        name: "Rifandi Yusuf",
        qty: 10,
        product: "Pudding Caramel",
        price: "Rp.10.0000",
      }
    ]
    
  return (
    <>
        <SideBar/>
        <section className='flex flex-col min-h-[calc(100dvh-150px)] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]'>
            <h1 className='text-2xl font-bold'>Transaction History</h1>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <button className='p-2 mt-2 bg-Secondary rounded-lg'>1 years</button>
                    <button className='p-2 mt-2 bg-Secondary rounded-lg'>1 Mounts</button>
                    <button className='p-2 mt-2 bg-Secondary rounded-lg'>1 Days</button>
                    <button className='p-2 mt-2 bg-Secondary rounded-lg'>24 hours</button>
                </div>
                <h1 className='text-2xl font-bold'>Select Date</h1>
            </div>
            <div className='relative bg-Tertiary mt-5 h-[calc(100dvh-150px)] rounded-lg p-3'>
              <div className='absolute left-0 right-0 top-0 bg-Secondary p-5 rounded-t-xl'>List View</div>
                <div className="rounded-xl my-[74px] max-sm:overflow-x-scroll overflow-hidden border-y-2 border-[#00000011]">
                    <table className="w-full">
                        <thead className="border-b-2 border-[#00000011] h-10 bg-Secondary">
                            <tr className="text-body">
                                <th className="p-3 text-base font-semibold tracking-wide text-left">No</th>
                                <th className="p-3 text-base font-semibold tracking-wide text-left">Name</th>
                                <th className="p-3 text-base font-semibold tracking-wide text-left">Qty</th>
                                <th className="p-3 text-base font-semibold tracking-wide text-left">Product</th>
                                <th className="p-3 text-base font-semibold tracking-wide text-left">Price</th>
                                <th className="p-3 text-base font-semibold tracking-wide text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-container">
                            {students.map((students) => (
                            <tr key={students} className='odd:bg-Primary border-x-2 border-[#00000011]'>
                                <td className="p-3.5 text-sm text-left">{students.id}</td>
                                <td className="p-3.5 text-sm text-left">{students.name}</td>
                                <td className="p-3.5 text-sm text-left">{students.qty}</td>
                                <td className="p-3.5 text-sm text-left">{students.product}</td>
                                <td className="p-3.5 text-sm text-left">{students.price}</td>
                                <td className="p-3.5 text-sm text-left">
                                  <div className='flex gap-2'>
                                    <button className='p-1 rounded-xl hover:bg-Secondary hover:text-red-500'><Trash size={24} variant='Bold'/></button>
                                    <button className='p-1 rounded-xl hover:bg-Secondary hover:text-yellow-500'><Edit size={24} variant='Bold'/></button>
                                  </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              <div className='absolute left-0 right-0 bottom-0 bg-Secondary flex p-5 rounded-b-xl'>Showing Of 1000</div>
            </div>
        </section>
    </>
  )
}

export default History