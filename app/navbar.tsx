"use client"; // this is a client component
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import NavLogo from '../public/logogif.gif';
import Image from 'next/image';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/all";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#0b0816');
    const [linkColor, setLinkColor] = useState('#ffffff');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className='flex bg-gray-800 rounded-3xl mx-5 my-10'>
            <div className='w-auto'>
                <div className='items-center justify-center w-52 mx-5'>
                    <Link href='/'>
                        <Image
                            src={NavLogo}
                            alt='/'
                            width='175'
                            height='175'
                            className='cursor-pointer '
                        />
                    </Link>
                </div>
            </div>

            <div className='relative hidden sm:block text-center flex items-center justify-center sm:w-full sm:text-center top-14'>
                <h1 className= 'text-5xl'>
                    WIKI
                </h1>
            </div>


            <div className='w-full sm:w-auto'>
                <div className='hidden sm:block items-center justify-center w-52 mx-5'>
                    <a href="https://iglaots.net/?view=news"
                       className="float-right relative top-14 right-10 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                            <span
                                className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span
                            className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                        <span
                            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Play Now!</span>
                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                    </a>
                </div>
                <div
                    style={{color: `${linkColor}`}}
                    onClick={handleNav}
                    className='relative float-right sm:hidden absolute right-5 top-14 h-16 w-16 cursor-pointer'
                >
                    <AiOutlineMenu size={40}/>
                </div>

                <div
                    className={
                        nav ? 'absolute z-10 sm:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                    }
                >
                    {/* Side Drawer Menu */}
                    <div
                        className={
                            nav
                                ? ' fixed left-0 top-0 w-[95%] h-screen bg-[#0b0816] p-10 ease-in duration-500'
                                : 'fixed left-[-120%] top-0 p-10 ease-in duration-500'
                        }
                    >
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <Link href='/'>
                                        <Image
                                            src={NavLogo}
                                            width='87'
                                            height='81'
                                            alt='/'
                                        />
                                </Link>
                                <div
                                    onClick={handleNav}
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                                >
                                    <AiOutlineClose/>
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>
                                    Explore our Wikipedia and learn about IglaOts!
                                </p>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href='/'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Home
                                    </li>
                                </Link>
                                <Link href='/boss-hunting'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Boss Hunting
                                    </li>
                                </Link>
                                <Link href='/#skills'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Rare Loot
                                    </li>
                                </Link>
                                <Link href='/#projects'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Items Enchanting System
                                    </li>
                                </Link>
                                <Link href='/resume'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Custom Maps
                                    </li>
                                </Link>
                                <Link href='/#contact'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Custom Boss Spawns
                                    </li>
                                </Link>
                                <Link href='/#contact'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Hunting Tasks
                                    </li>
                                </Link>
                                <Link href='/#contact'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Reforging System
                                    </li>
                                </Link>
                                <Link href='/#contact'>
                                    <li onClick={() => setNav(false)} className='flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors'>
                                        Custom Quests
                                    </li>
                                </Link>
                            </ul>
                            <div className='pt-10'>
                                <p className='uppercase tracking-widest text-[#5651e5]'>
                                    Let&#39;s Connect
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;