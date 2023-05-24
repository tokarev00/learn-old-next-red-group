import {FC, PropsWithChildren} from "react";
import Head from "next/head";
const getTitle = (title: string) : string => `${title} | RED Cars catalog`;

const Meta: FC<PropsWithChildren<IMeta>> = ({title, description, children}) => {
    return <>
        <Head>
            <title>{title}</title>
            {
                description
                ? <>
                    <meta name='description' content={description} />
                    <meta name='og:title' content={getTitle(title)} />
                  </>
                : <meta name='robots' content='noindex, nofollow' />
            }

        </Head>
        {children}
    </>;
}

export default Meta;