import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <Box>
        <Head>
            <title>Rental Residence</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {children}
            </main>
        </Box>
        <footer>
            <Footer>
                
            </Footer>
        </footer>
    </Box>
  )
}

export default Layout;