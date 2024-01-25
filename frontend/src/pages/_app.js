import "@/styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
    <Component {...pageProps} />
    </ChakraProvider>
    )
}
