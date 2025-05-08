import SideBar from '@/Components/SideBar'
import { AddSquare, Edit, Trash } from 'iconsax-react'
import React from 'react'

const History = () => {
    const students = [{
        id: 1,
        name: "Rifandi Yusuf",
        class: "XI",
        major: "PPLG",
        status: <span className="bg-[#05FF00] bg-opacity-15 p-1 px-2 rounded-md font-semibold text-green-500">Hadir</span>
      },
      {
        id: 2,
        name: "Rifandi Yusuf",
        class: "XI",
        major: "PPLG",
        status: <span className="bg-[#b2e908] bg-opacity-15 p-1 px-2 rounded-md font-semibold text-[#b2e908]">Sakit</span>
      },
      {
        id: 3,
        name: "Rifandi Yusuf",
        class: "XI",
        major: "PPLG",
        status: <span className="bg-yellow-400 bg-opacity-15 p-1 px-2 rounded-md font-semibold text-yellow-500">Izin</span>
      },
      {
        id: 4,
        name: "Rifandi Yusuf",
        class: "XI",
        major: "PPLG",
        status: <span className="bg-red-400 bg-opacity-15 p-1 px-2 rounded-md font-semibold text-red-500">Alfa</span>
      }
    ]
    
  return (
    <>
        <SideBar/>
        <section className='flex flex-col min-h-[800px] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]'>
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
            <div className='bg-Tertiary mt-5 h-screen rounded-lg p-3'>
                <div className="rounded-xl max-sm:overflow-x-scroll">
                    <table className="w-full">
                        <thead className="border-b-2 border-[#00000011] h-10 ">``
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
                            <tr key={students}>
                                <td className="p-3.5 text-sm text-left">{students.id}</td>
                                <td className="p-3.5 text-sm text-left">{students.name}</td>
                                <td className="p-3.5 text-sm text-left">{students.class}</td>
                                <td className="p-3.5 text-sm text-left">{students.major}</td>
                                <td className="p-3.5 text-sm text-left">{students.status}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default History