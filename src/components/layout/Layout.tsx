import {FC, PropsWithChildren} from "react";
import Header from '../layout/header/Header'
import Meta from "../seo/Meta";
import Footer from "./Footer";
import dynamic, {noSSR} from "next/dynamic";
const DynamicFooter = dynamic(() => import('./Footer'), {
    ssr: false
});
const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        <Meta title={title} description={description} >
            <Header/>
            {children}
            <DynamicFooter />
        </Meta>)
}
export default Layout;