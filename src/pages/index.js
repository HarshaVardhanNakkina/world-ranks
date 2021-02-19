import { useState } from 'react'

// Components
import Layout from '../comps/Layout/Layout'
import SearchInput from '../comps/SearchInput/SearchInput'
import CountriesTable from '../comps/CountriesTable/CountriesTable'

// Styles
import styles from '../styles/Home.module.css'

export default function Home({ countries }) {
	const [keyword, setKeyword] = useState('')
	const filteredCountries = countries.filter(
		country =>
			country.name.toLowerCase().includes(keyword) ||
			country.region.toLowerCase().includes(keyword) ||
			country.subregion.toLowerCase().includes(keyword)
	)

	const onInputChange = e => {
		setKeyword(e.target.value.toLowerCase())
	}
	return (
		<Layout>
			<div className={styles.input_container}>
				<div className={styles.count}>Found {countries.length} countries</div>
				<div className={styles.search_input}>
					<SearchInput
						placeholder='Filter by Name, Region, or SubRegion'
						onChange={onInputChange}
						aria-label='Filter by Name, Region, or SubRegion'
					/>
				</div>
			</div>
			<CountriesTable countries={filteredCountries} />
		</Layout>
	)
}

export const getStaticProps = async () => {
	const res = await fetch('https://restcountries.eu/rest/v2/all')
	const countries = await res.json()

	return {
		props: {
			countries: countries.map(country => {
				if (!country.area) country.area = 0
				if (!country.gini) country.gini = 0

				return country
			})
		}
	}
}
