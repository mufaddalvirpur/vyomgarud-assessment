import '../styles/globals.css'
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0c0f]">{children}</body>
    </html>
  )
}