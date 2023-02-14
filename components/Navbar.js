import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	return (
		<header>
			<nav>
				<Image
					src='/images/ayu_adiati_logo.png'
					height={45}
					width={45}
					alt='logo'
				/>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/about'>About Me</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
