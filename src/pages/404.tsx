import {NextPage} from "next";
import Image from "next/image";
import Layout from "../components/layout/Layout";
const NotFound: NextPage = () => {
    return <Layout>
        <div className="image-container">
            <Image src='/404.png' alt='404 Error' width={700} height={400}/>
        </div>
    </Layout>;
}
export default NotFound;