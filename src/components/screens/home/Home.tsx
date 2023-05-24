import {FC} from 'react';
import styles from "./home.module.css";
import Layout from "../../layout/Layout";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], variable: '--mon' });

const Home: FC = () => {

    return <Layout title='Home Page'>
        <h1 className={montserrat.variable}>Home Page</h1>
    </Layout>
}
export default Home;