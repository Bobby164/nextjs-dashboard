"use client";

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/styles/navLink.module.css';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];



const NavLinks = () => {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {

                const LinkIcon = link.icon;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            styles.linkStyle,
                            {
                                [styles.activeLink]: pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className={styles.linkIcon} />
                        <p className={styles.para}>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
};

export default NavLinks;
