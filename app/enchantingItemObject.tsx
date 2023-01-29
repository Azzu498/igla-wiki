"use client"; // this is a client component
import 'flowbite';
import Image from "next/image";



const enchantingItemObject = ({imgSource, redirectUrl, descriptionTitle, descriptionBody1, descriptionBody2}: any) => {
    return (
            <div id="accordion-open" data-accordion="open">
                <h2 id="accordion-open-heading-1" className='text-white'>
                        <button type="button"
                                className="items-center w-fit p-5 font-medium text-white border border-b-0 border-[#172B51] rounded-3xl focus:ring-[#172B51] bg-blue-900 hover:bg-blue-800 hover:text-white shadow-none"
                                data-accordion-target="#accordion-open-body-1" aria-expanded="false"
                                aria-controls="accordion-open-body-1">
                    <span className="flex items-center">
                        <Image
                            src='https://i.imgur.com/7hg7dbb.gif'
                            alt='/'
                            width='40'
                            height='40'
                            className='cursor-pointer '
                        />
                        <p className='text-lg text-white'>
                            Knight Weapons
                        </p>
                    <svg data-accordion-icon className="flex w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                    </span>
                            <div className='items-center w-full'>

                            </div>

                        </button>
                </h2>

                <div className='grid place-items-center w-full'>
                    <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
                        <div className="items-center w-fit my-2 font-light">

                            <div className="relative overflow-x-auto shadow-md rounded-2xl">
                                <table className="w-full text-sm text-left text-black dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Tier
                                        </th>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Enchant
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+1 attack</p>
                                            <p className='text-base'>+1 skills</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 text-base font-medium whitespace-nowrap ">
                                            2
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2 attack</p>
                                            <p className='text-base'>+2 skills</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap">
                                            3
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+4% life leech</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            4
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2% Critical Chance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            5
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+10% Critical Damage</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>


                <h2 id="accordion-open-heading-2" className='mt-1'>
                    <button type="button"
                            className="items-center w-fit p-5 font-medium text-white border border-b-3 border-[#172B51] rounded-3xl focus:ring-[#172B51] bg-blue-900 hover:bg-blue-800 hover:text-white shadow-none"
                            data-accordion-target="#accordion-open-body-2" aria-expanded="false"
                            aria-controls="accordion-open-body-2">
                    <span className="flex items-center">
                        <Image
                            src='https://i.imgur.com/Wsk7x6y.gif'
                            alt='/'
                            width='40'
                            height='40'
                            className='cursor-pointer '
                        />
                        <p className='text-lg text-white'>
                            Paladin Weapons
                        </p>
                    <svg data-accordion-icon className="flex w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                    </span>
                        <div className='items-center w-full'>

                        </div>

                    </button>
                </h2>


                <div className='grid place-items-center w-full'>
                    <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                        <div className="items-center w-fit my-2 font-light">

                            <div className="relative overflow-x-auto shadow-md rounded-2xl">
                                <table className="w-full text-sm text-left text-black dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Tier
                                        </th>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Enchant
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+1 magic level</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 text-base font-medium whitespace-nowrap ">
                                            2
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+3 distance fighting</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap">
                                            3
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+3% life leech</p>
                                            <p className='text-base'>+1% mana leech</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            4
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2% Critical Chance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            5
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+10% Critical Damage</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

                <h2 id="accordion-open-heading-3" className='mt-1'>
                    <button type="button"
                            className="items-center w-fit p-5 font-medium text-white border border-b-3 border-[#172B51] rounded-3xl focus:ring-[#172B51]  bg-blue-900 hover:bg-blue-800 hover:text-white shadow-none"
                            data-accordion-target="#accordion-open-body-3" aria-expanded="false"
                            aria-controls="accordion-open-body-3">
                    <span className="flex items-center">
                        <Image
                            src='https://i.imgur.com/JeRr0Ed.gif'
                            alt='/'
                            width='40'
                            height='40'
                            className='cursor-pointer '
                        />
                        <p className='text-lg text-white'>
                            Wands and Rods
                        </p>
                    <svg data-accordion-icon className="flex w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                    </span>
                        <div className='items-center w-full'>

                        </div>

                    </button>
                </h2>


                <div className='grid place-items-center w-full'>
                    <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
                        <div className="items-center w-fit my-2 font-light">

                            <div className="relative overflow-x-auto shadow-md rounded-2xl">
                                <table className="w-full text-sm text-left text-black dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Tier
                                        </th>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Enchant
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+1 magic level</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 text-base font-medium whitespace-nowrap ">
                                            2
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2 magic level</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap">
                                            3
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2% life leech</p>
                                            <p className='text-base'>+2% mana leech</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            4
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2% Critical Chance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            5
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+10% Critical Damage</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 id="accordion-open-heading-4" className='mt-1'>
                    <button type="button"
                            className="items-center w-fit p-5 font-medium text-white border border-b-3 border-[#172B51] rounded-3xl focus:ring-[#172B51]  bg-blue-900 hover:bg-blue-800 hover:text-white shadow-none"
                            data-accordion-target="#accordion-open-body-4" aria-expanded="false"
                            aria-controls="accordion-open-body-4">
                    <span className="flex items-center">
                        <Image
                            src='https://i.imgur.com/TrS16W4.gif'
                            alt='/'
                            width='40'
                            height='40'
                            className='cursor-pointer '
                        />
                        <p className='text-lg text-white'>
                            Helmets
                        </p>
                    <svg data-accordion-icon className="flex w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                    </span>
                        <div className='items-center w-full'>

                        </div>

                    </button>
                </h2>


                <div className='grid place-items-center w-full'>
                    <div id="accordion-open-body-4" className="hidden" aria-labelledby="accordion-open-heading-4">
                        <div className="items-center w-fit my-2 font-light">

                            <div className="relative overflow-x-auto shadow-md rounded-2xl">
                                <table className="w-full text-sm text-left text-black dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Tier
                                        </th>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Enchant
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+1% every elemental resistance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 text-base font-medium whitespace-nowrap ">
                                            2
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+1 magic level</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap">
                                            3
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2% mana leech</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            4
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+4% every elemental resistance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            5
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+1% mana leech</p>
                                            <p className='text-base'>+4% physical resistance</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 id="accordion-open-heading-5" className='mt-1'>
                    <button type="button"
                            className="items-center w-fit p-5 font-medium text-white border border-b-3 border-[#172B51] rounded-3xl focus:ring-[#172B51] bg-blue-900 hover:bg-blue-800 hover:text-white shadow-none"
                            data-accordion-target="#accordion-open-body-5" aria-expanded="false"
                            aria-controls="accordion-open-body-5">
                    <span className="flex items-center">
                        <Image
                            src='https://i.imgur.com/4eIHame.gif'
                            alt='/'
                            width='40'
                            height='40'
                            className='cursor-pointer '
                        />
                        <p className='text-lg text-white'>
                            Armors
                        </p>
                    <svg data-accordion-icon className="flex w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                    </span>
                        <div className='items-center w-full'>

                        </div>

                    </button>
                </h2>


                <div className='grid place-items-center w-full'>
                    <div id="accordion-open-body-5" className="hidden" aria-labelledby="accordion-open-heading-5">
                        <div className="items-center w-fit my-2 font-light">

                            <div className="relative overflow-x-auto shadow-md rounded-2xl">
                                <table className="w-full text-sm text-left text-black dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Tier
                                        </th>
                                        <th scope="col" className="text-base px-6 py-3">
                                            Enchant
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2% Physical Resistance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 text-base font-medium whitespace-nowrap ">
                                            2
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2% every elemental resistance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap">
                                            3
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+1% dodge chance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            4
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+2% dodge chance</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-base whitespace-nowrap ">
                                            5
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='text-base'>+4% dodge chance</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


    );
};
export default enchantingItemObject;