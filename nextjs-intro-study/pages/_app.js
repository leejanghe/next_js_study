import LayOut from "../components/LayOut"
import '../styles/globals.css'

function App({Component, pageProps}) {
    return (
        
            <LayOut>
            <Component {...pageProps} />
            </LayOut>
        
    )
}

export default App
