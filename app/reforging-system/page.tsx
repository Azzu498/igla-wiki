import React from 'react';
import Link from "next/link";
import Image from "next/image";

function BossHunting() {
    return (
        <div className='grid h-screen place-items-center w-full p-4 !pt-0 sm:mx-10 text-white text-center'>
            <h1 className='text-center text-5xl py-4'>Reforging System</h1>
            <div className='text-center'>
                <p>Reforge your items into dust, to buy equipment you need. </p>
            </div>
            <hr className="my-3 w-full h-0 border-b border-slate-800/50"/>
            <p className='text-2xl py-3'></p>
            <p>Visit Adventurers' Guild by clicking on the Adventurers' Stone located in thais temple:</p>

            <div className='w-fit'>
                <Link href='https://i.imgur.com/nQIY4DC.jpg'>
                    <Image
                        src='https://i.imgur.com/nQIY4DC.jpg'
                        alt='/'
                        width='500'
                        height='150'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-2'>Go to +0 level and navigate to the teleport on the north west:</p>
            <div className='w-fit'>
                <Link href='https://i.imgur.com/Yt7i5ve.png' w-fit>
                    <Image
                        src='https://i.imgur.com/Yt7i5ve.png'
                        alt='/'
                        width='450'
                        height='419'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-2'>You will find multiple npc's resembling each item category:</p>
            <div className='w-fit'>
                <Link href='https://i.imgur.com/PqOxNYj.jpg' w-fit>
                    <Image
                        src='https://i.imgur.com/PqOxNYj.jpg'
                        alt='/'
                        width='500'
                        height='200'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-2'>You can sell your items for dust resmbling item category:</p>
            <div className='w-fit'>
                <Link href='https://i.imgur.com/ojhdlW5.png' w-fit>
                    <Image
                        src='https://i.imgur.com/ojhdlW5.png'
                        alt='/'
                        width='200'
                        height='200'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-2'>And then buy an item from the same category for higher price</p>
            <div className='w-fit '>
                <Link href='https://i.imgur.com/m8UHRlI.png' w-fit>
                    <Image
                        src='https://i.imgur.com/m8UHRlI.png'
                        alt='/'
                        width='200'
                        height='200'
                        className='cursor-pointer '
                    />
                </Link>
            </div>
            <p className='py-5'>This way you can equip your character faster without droping the actual item you need :-)</p>
</div>

    );
}

export default BossHunting;