// Compoenents
import { useEffect, useState } from 'react'
import Layout from '../../comps/Layout/Layout'

// Styles
import styles from './Country.module.css'

const getCountry = async id => {
	const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
	const country = await res.json()
	return country
}

const Country = ({ country }) => {
	const [borders, setBorders] = useState([])
	const getBorders = async () => {
		const borders = await Promise.all(country.borders.map(getCountry))
		setBorders(borders)
	}
	useEffect(() => {
		getBorders()
	}, [])

	return (
		<Layout title={country.name}>
			<div className={styles.overview_container}>
				<div className={styles.overview_left}>
					<div className={styles.overviewPanel}>
						<img src={country.flag} alt={country.name} width='100%' loading='lazy' />
						<h1 className={styles.overviewName}>{country.name}</h1>
						<div className={styles.overviewRegion}>{country.region}</div>
						<div className={styles.overviewNumbers}>
							<div className={styles.overviewPopulation}>
								<div className={styles.overviewValue}>{country.population}</div>
								<div className={styles.overviewLabel}>Population</div>
							</div>

							<div className={styles.overviewArea}>
								<div className={styles.overviewValue}>{country.area}</div>
								<div className={styles.overviewLabel}>Area</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.overview_right}>
					<div className={styles.detail_panel}>
						<h4 className={styles.detail_heading}>Details</h4>
						<div className={styles.detail_row}>
							<div className={styles.detail_label}>Capital</div>
							<div>{country.capital}</div>
						</div>
						<div className={styles.detail_row}>
							<div className={styles.detail_label}>Subregion</div>
							<div className={styles.detail_value}>{country.subregion}</div>
						</div>
						<div className={styles.detail_row}>
							<div className={styles.detail_label}>Languages</div>
							<div className={styles.detail_value}>{country.languages.map(lang => lang.name).join(', ')}</div>
						</div>
						<div className={styles.detail_row}>
							<div className={styles.detail_label}>Currencies</div>
							<div className={styles.detail_value}>{country.currencies.map(cur => cur.name).join(', ')}</div>
						</div>
						<div className={styles.detail_row}>
							<div className={styles.detail_label}>Native name</div>
							<div className={styles.detail_value}>{country.nativeName}</div>
						</div>
						<div className={styles.detail_row}>
							<div className={styles.detail_label}>Gini</div>
							<div className={styles.detail_value}>{country.gini || 0}%</div>
						</div>
						<div className={styles.borders_panel}>
							<div className={styles.border_panel_label}>Neighbouring Countries</div>
							<div className={styles.borders_wrapper}>
								{borders.map(({ name, flag }) => (
									<div className={styles.border_country} key={name}>
										<img src={flag} alt={name} width='100%' loading='lazy' />
										<div className={styles.border_country_name}>{name}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const countries = await (await fetch('https://restcountries.eu/rest/v2/all')).json()

	const paths = countries.map(country => ({ params: { id: country.alpha3Code } }))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	const country = await getCountry(params.id)
	return {
		props: {
			country
		}
	}
}

export default Country
