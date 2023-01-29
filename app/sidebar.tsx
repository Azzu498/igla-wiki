import Link from "next/link";


const SideBar = () => {
    return (
        <div className='hidden md:block z-50 w-270 h-full mx-5 '>
            <aside aria-label="Sidebar">
                <div className="text-white px-3 py-4 overflow-y-auto rounded-2xl flex flex-col h-fit relative ">
                    <ul className="space-y-2">
                        <li>
                            <Link className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                     stroke="currentColor" aria-hidden="true" height="22"
                                     className="text-[#95B4F0] shrink-0 grow-0">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                                <p className="leading-none truncate">Home</p></Link>
                        </li>
                        <li>
                            <hr className="my-3 w-full h-0 border-b border-slate-800/50" />
                        </li>
                        <li>
                            <a className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/boss-hunting">
                                <p className="leading-none truncate">Boss Hunting</p></a>
                        </li>
                        <li>
                            <a className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/app/">
                                <p className="leading-none truncate">Rare Loot</p></a>
                        </li>
                        <li>
                            <a className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/enchanting-system">

                                <p className="leading-none truncate">Items Enchanting System</p></a>
                        </li>
                        <li>
                            <a className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/app/">

                                <p className="leading-none truncate">Custom Maps</p></a>
                        </li>
                        <li>
                            <a className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/app/">

                                <p className="leading-none truncate">Custom Boss Spawns</p></a>
                        </li>
                        <li>
                            <a className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/app/">

                                <p className="leading-none truncate">Hunting Tasks</p></a>
                        </li>
                        <li>
                            <a className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/reforging-system">

                                <p className="leading-none truncate">Reforging System</p></a>
                        </li>
                        <li>
                            <a className="flex ease-out justify-start border border-transparent items-center overflow-hidden text-base group p-3 rounded-lg w-full gap-4 hover:bg-[#172B51]/50 transition-colors"
                               href="/app/">

                                <p className="leading-none truncate">Custom Quests</p></a>
                        </li>
                    </ul>
                </div>

            </aside>
        </div>
    );
};
export default SideBar;
