import { NextPage } from 'next';
import {useRouter} from "next/router";
const CarPage: NextPage = () => {
    const {asPath, pathname} = useRouter();
    return <div>Car Page id</div>
}
export default CarPage;