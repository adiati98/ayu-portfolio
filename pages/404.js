import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const PageNotFound = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [])

	return (
		<>
			<h1>Page Not Found</h1>
			<h2>You will be redirected back to Homepage.</h2>
			<h3>
				Or click <Link href='/'>here</Link> to get back to Homepage.
			</h3>
		</>
	)
}

export default PageNotFound
