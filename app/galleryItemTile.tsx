import Image from 'next/image';
import Link from 'next/link';

const GalleryItemTile = ({imgSource, redirectUrl, descriptionTitle, descriptionBody1, descriptionBody2}: any) => {
    return (
        <div className="relative z-0 flex h-full rounded-2xl items-center justify-center ">
            <div className="group h-72 w-72  relative z-0">
                <div
                    className="relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="relative inset-0 h-72 w-72 md:h-70 md:w-70 z-0">
                        <Link href={redirectUrl}>
                            <Image
                                src={imgSource}
                                alt={redirectUrl}
                                className='cursor-pointer rounded-2xl object-fill'
                            />
                        </Link>
                    </div>
                    <div
                        className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="font-bold">{descriptionTitle}</h1>
                            <p className="text-base">{descriptionBody1}</p>
                            <p className="text-base">{descriptionBody2}</p>
                            <a href={redirectUrl}
                               className="mt-2 rounded-md bg-[#172B51] py-1 px-2 text-xl hover:bg-[#217F8E]">Read
                                More

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GalleryItemTile;