import React from 'react'

const AdminPortal = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-200 via-violet-200 to-cyan-300 px-4">
  <div className="m-6 p-6 rounded-xl shadow-2xl shadow-slate-800 bg-white/20 backdrop-blur-lg border border-white/30 max-w-2xl text-center">
    <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 via-violet-600 to-cyan-500 mb-4">
      WELCOME TO ADMIN PORTAL
    </h1>
    <p className="text-gray-800 text-lg font-semibold">
      Manage charts, users, and analytics with full control and real-time feedback. Your gateway to insight starts here.
    </p>

    <div className="grid justify-evenly grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
      <div className="p-4 bg-gradient-to-tr from-pink-300 via-violet-400 to-cyan-400 text-white rounded-lg shadow-lg">
        <h2 className="text-xl text-slate-800 font-extrabold">Manage Charts</h2>
        <p className="text-sm text-slate-800 font-bold mt-2">View, delete, and create dynamic 2D/3D visualizations.</p>
      </div>
      <div className="p-4 bg-gradient-to-tr from-pink-300 via-violet-400 to-cyan-400 text-white rounded-lg shadow-lg">
        <h2 className="text-slate-800 text-xl font-extrabold">Users</h2>
        <p className="text-sm text-slate-800 font-bold mt-2">Monitor user activity and access control with ease.</p>
      </div>
      <div className="p-4 bg-gradient-to-tr from-pink-300 via-violet-400 to-cyan-400 text-white rounded-lg shadow-lg">
        <h2 className="text-xl text-slate-800 font-extrabold">Analytics</h2>
        <p className="text-sm text-slate-800 font-bold mt-2">Track different chart types.</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default AdminPortal