import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '~/styles/container.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Ayu Adiati | Home</title>
				<meta name='description' content="Ayu Adiati's portfolio" />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main>
				<div className={styles.container}>
					<h1>Homepage</h1>
					<p className={styles.text}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
						atque dolorum in eaque voluptatem provident voluptate laudantium
						ullam quaerat minima adipisci sequi unde consequatur, natus
						necessitatibus qui dolore corrupti? Officia ipsum eum cupiditate
						nostrum necessitatibus, et placeat minus non at ullam error adipisci
						perferendis magni laudantium, eveniet commodi laborum, modi in
						laboriosam itaque aut quia temporibus. Temporibus ea aperiam vero
						unde ipsam libero saepe ullam provident laudantium? Veritatis, fuga.
						Cumque!
					</p>
					<Link href='/about' className={styles.text}>
						Go to About Me
					</Link>
				</div>
			</main>
		</>
	)
}
