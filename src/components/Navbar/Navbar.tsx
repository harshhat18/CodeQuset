import Link from 'next/link';
import React from 'react';
import config from '../../../tailwind.config';
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true }));
	};
    
    return <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href='/' className='flex items-center justify-center h-20'>
            <img src='/logo.png' alt='logo' className='h-full' />
        </Link>
        <div  className='flex items-center'>
            <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium 
            hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange'
            onClick={handleClick}

            >Sign in</button>

        </div>

    </div>
}
export default Navbar;
