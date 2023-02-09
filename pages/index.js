import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '~/styles/Home.module.css'
import Link from 'next/link'

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
				<h1>Homepage</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia atque dolorum in eaque voluptatem provident voluptate laudantium ullam quaerat minima adipisci sequi unde consequatur, natus necessitatibus qui dolore corrupti? Officia ipsum eum cupiditate nostrum necessitatibus, et placeat minus non at ullam error adipisci perferendis magni laudantium, eveniet commodi laborum, modi in laboriosam itaque aut quia temporibus. Temporibus ea aperiam vero unde ipsam libero saepe ullam provident laudantium? Veritatis, fuga. Cumque!</p>
				<Link href='/about'>Go to About Me</Link>
			</main>
		</>
	)
}
