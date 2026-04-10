'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardLayout = ({ children }) => {
    const pathname = usePathname()
    const dashboard = <>
        <li><Link href={'/dashboard'} className={pathname === '/dashboard' ? 'text-red-500' : ''}>Dashboard</Link></li>
        <li><Link href={'/dashboard/profile'} className={pathname === '/dashboard/profile' ? 'text-red-500' : ''}>Profile</Link></li>
        <li><Link href={'/dashboard/balance'} className={pathname === '/dashboard/balance' ? 'text-red-500' : ''}>Balance</Link></li>
    </>
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                {children}
                <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {dashboard}
                </ul>
            </div>
        </div>
    )
}

export default DashboardLayout
