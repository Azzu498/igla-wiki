"use client"; // this is a client component
import 'flowbite';
import React from 'react';
import EnchantingItemObject from "./../enchantingItemObject";
import Image from "next/image";
import Link from "next/link";

function ItemsEnchanting() {
    return (
        <div className='grid h-screen place-items-center w-full p-4 !pt-0 sm:mx-10 text-white text-center'>
            <h1 className='text-center text-5xl py-4'>Items Enchanting System</h1>
            <div className='text-center'>
                <p>Enchant your items and make them even stronger!</p>
            </div>
            <hr className="my-3 w-full h-0 border-b border-slate-800/50"/>
            <p className='text-2xl py-3'>All bonuses are cumulative!</p>
            <div className='my-5'>
                <EnchantingItemObject/>
            </div>

            <p className='text-base'>To enchant your items, you will need crystal fragments and gold:</p>

            <div className='w-fit scale-75 sm:scale-100'>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead
                            className="text-xs text-white uppercase bg-blue-800 hover:bg-blue-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Enchantment chance
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <p className='text-lg mx-2 '>
                                    Tier 1
                                </p>
                                <Image
                                    src='https://i.imgur.com/Jv5nlIT.png'
                                    alt='/'
                                    width='30'
                                    height='30'
                                    className='cursor-pointer '
                                />

                            </th>
                            <td className="px-6 py-4">
                                <p className='text-lg text-black'>95%</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className='text-base text-black'>18 Crystal Fragments</p>
                                <p className='text-base text-black'>4 000 000 Gold Coins</p>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <p className='text-lg mx-2 '>
                                    Tier 2
                                </p>
                                <Image
                                    src='https://i.imgur.com/SjHMZYX.png'
                                    alt='/'
                                    width='30'
                                    height='30'
                                    className='cursor-pointer '
                                />

                            </th>
                            <td className="px-6 py-4">
                                <p className='text-lg text-black'>65%</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className='text-base text-black'>26 Crystal Fragments</p>
                                <p className='text-base text-black'>8 000 000 Gold Coins</p>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <p className='text-lg mx-2 '>
                                    Tier 3
                                </p>
                                <Image
                                    src='https://i.imgur.com/2EQpL8N.png'
                                    alt='/'
                                    width='30'
                                    height='30'
                                    className='cursor-pointer '
                                />

                            </th>
                            <td className="px-6 py-4">
                                <p className='text-lg text-black'>45%</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className='text-base text-black'>34 Crystal Fragments</p>
                                <p className='text-base text-black'>12 000 000 Gold Coins</p>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <p className='text-lg mx-2 '>
                                    Tier 4
                                </p>
                                <Image
                                    src='https://i.imgur.com/Y2EgLpi.png'
                                    alt='/'
                                    width='30'
                                    height='30'
                                    className='cursor-pointer '
                                />

                            </th>
                            <td className="px-6 py-4">
                                <p className='text-lg text-black'>30%</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className='text-base text-black'>34 Crystal Fragments</p>
                                <p className='text-base text-black'>13 000 000 Gold Coins</p>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <p className='text-lg mx-2 '>
                                    Tier 5
                                </p>
                                <Image
                                    src='https://i.imgur.com/4yvdlD4.png'
                                    alt='/'
                                    width='30'
                                    height='30'
                                    className='cursor-pointer '
                                />

                            </th>
                            <td className="px-6 py-4">
                                <p className='text-lg text-black'>20%</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className='text-base text-black'>18 Crystal Fragments</p>
                                <p className='text-base text-black'>4 000 000 Gold Coins</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <p className='text-2xl my-5'>How to get Crystals?</p>
                <p className='text-xl my-5'>There are 3 ways to collect Crystal Fragments:</p>

                <p className='text-base my-5'>1. Buy them for igla tokens from npc Nishat on adventure island:</p>

                <div className='grid place-items-center'>
                    <Link href='https://i.imgur.com/95u3IF5.png' w-fit>
                        <Image
                            src='https://i.imgur.com/95u3IF5.png'
                            alt='/'
                            width='450'
                            height='419'
                            className='cursor-pointer '
                        />
                    </Link>
                </div>

                <p className='text-base my-5'>2. Collect by completing specific hunting tasks:</p>
                <p className='text-base my-2'>- Arch Hunter Ironhands task</p>
                <div className='grid place-items-center'>
                    <Image
                        src='https://i.imgur.com/T7Yf3KY.png'
                        alt='/'
                        width='55'
                        height='42'
                        className=''
                    />
                </div>
                <p className='text-base my-2'>- Adventurer Zahdin Amazons task</p>
                <div className='grid place-items-center'>
                    <Image
                        src='https://i.imgur.com/TWWDHXR.png'
                        alt='/'
                        width='55'
                        height='42'
                        className=''
                    />
                </div>

                <p className='text-base my-5'>3. Drop from specific monsters (the same as above tasks)</p>
                You can check their spawn here:
                <div className='my-8'>
                    <Link href='/custom-maps'>
                        <button type="button"
                                className="shadow-none text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Custom Maps
                        </button>
                    </Link>

                </div>


            </div>
        </div>

    );
}

export default ItemsEnchanting;