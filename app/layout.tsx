import "../styles/globals.css"
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import DiscordWidget from "./discord";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='overflow: auto; height: auto;'>
      <Navbar/>
      <div className='flex justify-center text-gray-700'>

          <Sidebar/>
          {children}
          <DiscordWidget/>
      </div>

      </body>
    </html>
  )
}
