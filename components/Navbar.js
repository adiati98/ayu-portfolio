import Image from 'next/image'
import Link from 'next/link'
import styles from '~/styles/Navbar.module.scss'

const Navbar = () => {
	return (
		<header>
			<nav className={styles.navbar}>
				<Image
					src='/images/ayu_adiati_logo.png'
					height={55}
					width={55}
					alt='logo'
					className={styles.logo}
				/>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href='/' className={styles.navLink}>
							Home
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/about' className={styles.navLink}>
							About Me
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
