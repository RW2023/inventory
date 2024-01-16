import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title:'Inventory Tracker',
  description: 'Family inventory Management System', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='business'>
      <body>
        {children}
        </body>
    </html>
  )
}
