import { Helmet } from 'react-helmet'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Helmet
				htmlAttributes={{ lang: 'en' }}
				title='World Ranks'
				meta={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1'
					},
					{ property: 'og:title', content: 'World Ranks' }
				]}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
