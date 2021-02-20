import Head from 'next/head'
import Link from 'next/link'

// Styles
import styles from './Layout.module.css'
import { MdBrightnessHigh, MdBrightnessMedium } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

export default function Layout({ children, title = 'World Ranks' }) {
	const [theme, setTheme] = useState('light')
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light')
		setTheme(localStorage.getItem('theme') || 'light')
	}, [])
	const switchTheme = () => {
		const temp = theme === 'dark' ? 'light' : 'dark'
		setTheme(temp)
		localStorage.setItem('theme', temp)
		document.documentElement.setAttribute('data-theme', temp)
	}
	return (
		<div className={styles.container}>
			<Helmet
				title={title}
				meta={[
					{ property: 'og:title', content: title },
					{ property: 'Keywords', content: 'World Ranks, Reactjs' }
				]}
			/>
			<Head>
				<link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
				<link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
				<link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
				<link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
				<link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
				<link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
				<link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
				<link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
				<link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='shortcut icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
				<meta name='description' content='World Ranks application built with Reactjs' />
				<meta name='theme-color' content='#ffffff' />
				<meta name='twitter:card' content='World Ranks application built with Reactjs' />
				<meta name='twitter:url' content='https://world-ranks-beryl.vercel.app/' />
				<meta name='twitter:title' content='World Ranks' />
				<meta name='twitter:description' content='World Ranks application built with Reactjs' />
				<meta name='twitter:image' content='https://world-ranks-beryl.vercel.app/android-icon-192x192.png' />
				<meta name='twitter:creator' content='@Ganeshh___' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='World Ranks' />
				<meta property='og:description' content='World Ranks application built with Reactjs' />
				<meta property='og:site_name' content='World Ranks' />
				<meta property='og:url' content='https://world-ranks-beryl.vercel.app/' />
				<meta property='og:image' content='https://world-ranks-beryl.vercel.app/apple-icon.png' />
			</Head>
			<header className={styles.header}>
				<Link href='/'>
					<div className={styles.logo}>
						<img src='/logo.svg' alt='World Ranks Logo' width='175' height='24' />
					</div>
				</Link>
				<button className={styles.theme_switcher} onClick={switchTheme} aria-label='Theme Switcher'>
					{theme === 'dark' ? <MdBrightnessHigh /> : <MdBrightnessMedium />}
				</button>
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>HarshaVardhaNakkina @ devchallenges.io</footer>
		</div>
	)
}
