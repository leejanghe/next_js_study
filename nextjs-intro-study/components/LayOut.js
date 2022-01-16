import NavBar from './NavBar'

function LayOut({children}) {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}

export default LayOut
