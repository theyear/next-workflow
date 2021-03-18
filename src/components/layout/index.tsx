import { FC } from "react";

import styles from "@/styles/Layout.module.css";

const Layout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>{children}</div>
        </div>
    );
};

export default Layout;
