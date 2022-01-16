import { useRouter } from "next/router"

function detail() {

    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h4>{router.query.title || "Loading..."}</h4>
        </div>
    )
}

export default detail
