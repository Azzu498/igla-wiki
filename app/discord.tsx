
const DiscordWidget = () => {
    return (
        <div className='hidden lg:block z-50 w-270 h-full mx-5 '>
            <aside aria-label="Sidebar">
                <div className=" overflow-y-auto rounded-2xl bg-gray-100 flex flex-col h-fit relative ">
                    <iframe src="https://discord.com/widget?id=963817961292959745&theme=dark" width="270" height="500"
                            frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>

            </aside>
        </div>
    );
};
export default DiscordWidget;
