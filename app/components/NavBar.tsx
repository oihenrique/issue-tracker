'use client';

import React from 'react';
import Link from 'next/link';
import classnames from 'classnames'
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const currentPath = usePathname();
    
    const links = [
        { label: 'Dashboard', href: '/'},
        { label: 'Issues', href: '/issues'}
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <ul className='flex space-x-6'>
            <Link href="/"><IoBugSharp /></Link>
            {links.map(link => 
                <Link 
                    key={link.href} 
                    className={classnames({
                        'text-zinc-900': link.href === currentPath,
                        'text-zinc-500': link.href !== currentPath,
                        'hover:text-zinc-800 transition-colors': true
                    })}
                    href={link.href}
                    >{link.label}</Link>)
            }
        </ul>
    </nav>
  )
}

export default NavBar