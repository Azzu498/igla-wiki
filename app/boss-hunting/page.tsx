import React from 'react';
import Link from "next/link";
import Image from "next/image";

function BossHunting() {
    return (
        <div className='grid h-screen place-items-center w-full p-4 !pt-0 sm:mx-10 text-white text-center'>
            <h1 className='text-center text-5xl py-4'>Boss Hunting System</h1>
            <div className='text-center'>
                <p>Earn points for each boss kill. Exchange points for prize matching each category.</p>
            </div>
            <hr className="my-3 w-full h-0 border-b border-slate-800/50"/>
            <p className='text-2xl py-3'>You don't have to start any task, the points are collected automatically!</p>
            <p>Visit Soulhunter Azdarion located near Thais ship:</p>

            <div className='w-fit'>
                <Link href='https://i.imgur.com/ZO25Lig.png'>
                    <Image
                        src='https://i.imgur.com/ZO25Lig.png'
                        alt='/'
                        width='500'
                        height='150'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-2'>Here:</p>
            <div className='w-fit'>
                <Link href='https://i.imgur.com/6acPcVt.png' w-fit>
                    <Image
                        src='https://i.imgur.com/6acPcVt.png'
                        alt='/'
                        width='450'
                        height='419'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-2'>You can click on the soul collector to check your progress:</p>
            <div className='w-fit'>
                <Link href='https://i.imgur.com/DvDFGpO.png' w-fit>
                    <Image
                        src='https://i.imgur.com/DvDFGpO.png'
                        alt='/'
                        width='500'
                        height='200'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <div className='py-2'>
                <p>You can also buy your personal soul collector to see progress whenever you like!</p>
                <p>Type:</p>
                <p>"Hi"</p>
                <p>"Soul collector"</p>
                <p>"Yes"</p>
            </div>
            <div className='w-fit'>
                <Link href='https://i.imgur.com/AJ4xfpR.png' w-fit>
                    <Image
                        src='https://i.imgur.com/AJ4xfpR.png'
                        alt='/'
                        width='250'
                        height='200'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-2'>After earning enouhg points, you can collect your reward by talking to npc</p>
            <div className='w-fit'>
                <Link href='https://i.imgur.com/wINxgDI.png' w-fit>
                    <Image
                        src='https://i.imgur.com/wINxgDI.png'
                        alt='/'
                        width='550'
                        height='200'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-2'>You will get random reward from selected category</p>
</div>

    );
}

export default BossHunting;