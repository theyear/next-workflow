import { FC } from "react";
import Head from "next/head";

export type MetaProps = {
    title?: string;
};

const defaultProps: Partial<MetaProps> = {
    title: "@wangcch",
};

const Meta: FC<MetaProps> = (props) => {
    const { title } = props;

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
    );
};

Meta.defaultProps = defaultProps;

export default Meta;
