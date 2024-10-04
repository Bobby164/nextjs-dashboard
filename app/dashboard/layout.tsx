
import SideNav from "@/app/ui/dashboard/sidenav";
import styles from "@/app/styles/dashboard.module.css";

export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <div className={styles.layoutContainer}/*"flex h-screen flex-col md:flex-row md:overflow-hidden"*/>
            <div className={styles.sideNavContainer}/*"w-full flex-none md:w-64"*/>
                <SideNav />
            </div>

            <div className={styles.childrenContainer}/*"flex-grow p-6 md:overflow-y-auto md:p-12"*/>{children}</div>
        </div>
    )
}