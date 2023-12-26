import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Box, ThemeProvider } from '@mui/material'
import { theme } from '@/theme/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { MainLayout } from '@/components/mainLayout/mainLayout'
import Image from 'next/image'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'PYX Anime',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <head>
         <script defer data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="chrystalesia" data-description="Support me on Buy me a coffee!" data-message="Buat beli kopi di FM!" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
         </head>
         <body className={inter.className} style={{backgroundColor:'#F5FBFF'}}>
               <ThemeProvider theme={theme}>
               <AppRouterCacheProvider>
                  <MainLayout>
                     <Box display={"flex"} mt={2} mx={10} py={2} justifyContent={'space-between'} alignItems={'center'}>
                        <Image src={'/logo.png'} alt='logo' width={90} height={50}></Image>

                        <Box display={'flex'}>
                           <Link href={"#"}><Image src={'/images/discord.png'} alt='logo' width={25} height={25} className='mr-3'></Image></Link>
                           <Link href={"#"}><Image src={'/images/linkedin.png'} alt='logo' width={25} height={25}></Image></Link>
                        </Box>
                     </Box>
                     {children}
                  </MainLayout>
               </AppRouterCacheProvider>
               </ThemeProvider>
            </body>
      </html>
   )
}
