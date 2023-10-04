import './globals.css'

export const metadata = {
  title: 'appa',
  description: 'appa the music app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
