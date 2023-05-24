import {FC, PropsWithChildren} from "react";
import Header from '../layout/header/Header'
import Meta from "../seo/Meta";
const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        <Meta title={title} description={description} >
            <Header/>
            {children}
        </Meta>)
}
export default Layout;