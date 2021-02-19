import Head from 'next/head'
import Link from 'next/link'

// Components
import Logo from './Logo'

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
				link={[
					{
						rel: 'icon',
						herf: '/favicon.ico'
					}
				]}
				meta={[{ property: 'og:title', content: title }]}
			/>
			<header className={styles.header}>
				<Link href='/'>
					<div className={styles.logo}>
						<Logo />
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
