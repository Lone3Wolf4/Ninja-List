import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Oooooops...</h1>
            <h2>That page does not exist</h2>
            <p>Go to the <Link href={"/"}><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;