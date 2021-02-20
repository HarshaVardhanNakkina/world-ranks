import LazyLoad from 'react-lazyload'
import Link from 'next/link'

// STYLES
import styles from './CountriesTable.module.css'

const Country = ({ country }) => {
	return (
		<Link href={`/country/${country.alpha3Code}`}>
			<div className={styles.row}>
				<div className={styles.flag}>
					<LazyLoad height='auto' resize once>
						<img src={country.flag} alt={country.name} width='100%' height='100%' loading='lazy' />
					</LazyLoad>
				</div>
				<div className={styles.name}>{country.name}</div>
				<div className={styles.population}>{country.population}</div>
				<div className={styles.area}>{country.area}</div>
				<div className={styles.gini}>{country.gini}%</div>
			</div>
		</Link>
	)
}

export default Country
