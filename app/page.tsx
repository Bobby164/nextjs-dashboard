import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/styles/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {

    
    return (
        <main className={styles.mainPage}>

            <div className={styles.acmeLogoContainer}>
                <AcmeLogo />
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.textAndLinkContainer}>

                    <div className={styles.shape} />

                    <p className={`${styles['text-xl']} ${styles['text-gray-800']} ${styles['md:text-3xl']} ${styles['md:leading-normal']}`}>
                        <strong>Welcome to Acme.</strong> This is the example for the{' '}
                        <a href="https://nextjs.org/learn/" className={styles.linkColor}>
                        Next.js Learn Course
                        </a>
                        , brought to you by Vercel.
                    </p>

                    <Link
                        href="/login"
                        className={styles.componentLink}
                    >
                        <span>Log in</span> <ArrowRightIcon className={styles.spanLogIn} />
                    </Link>

                </div>

                <div className={styles.imageContainer}>
                    {/* Add Hero Images Here */}
                    <Image 
                        src={"/hero-desktop.png"}
                        width={1000}
                        height={760}
                        className='hidden md:block'
                        alt="Screenshots of the dashboard project showing desktop version"
                    />

                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Screenshot of the dashboard project showing mobile version"
                    />
                </div>
            </div>
        </main>
    );
}
