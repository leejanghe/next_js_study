import NavBar from "../components/NavBar"

function App({Component, pageProps}) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
            <h1>gdgd</h1>
        </div>
    )
}

export default App
