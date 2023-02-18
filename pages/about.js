import Head from 'next/head'
import Link from 'next/link'
import styles from '~/styles/container.module.scss'

const About = () => {
	return (
		<>
			<Head>
				<title>Ayu Adiati | About Me</title>
				<meta name='description' content='About Ayu Adiati' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main>
				<div className={styles.container}>
					<h1>About Me</h1>
					<p className={styles.text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod esse
						accusantium, quae itaque vero facere sed nihil reprehenderit autem
						illum. Voluptate doloribus vitae nesciunt rem commodi cupiditate
						quasi placeat illum modi neque in, quisquam obcaecati quibusdam
						mollitia debitis, magnam ipsum repudiandae expedita voluptates
						numquam consectetur? Ducimus a perspiciatis incidunt eveniet.
					</p>
					<p className={styles.text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
						totam fugit, asperiores doloribus vel ipsa incidunt facere harum
						voluptates, assumenda suscipit molestias. Impedit, maxime similique!
						Voluptatem eaque ipsam beatae! Nobis deleniti cum natus possimus
						facilis?
					</p>
					<Link href='/' className={`${styles.text} ${styles.textLink}`}>
						Go back to Homepage
					</Link>
					<Link href='/blog' className={`${styles.text} ${styles.textLink}`}>
						Go to Blog
					</Link>
				</div>
			</main>
		</>
	)
}

export default About
