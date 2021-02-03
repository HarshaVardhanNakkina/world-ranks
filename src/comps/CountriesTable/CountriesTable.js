import { useState } from 'react'

import Link from 'next/link'

import { MdArrowDownward, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

// Styles
import styles from './CountriesTable.module.css'

function Country({ country }) {
	return (
		<Link href={`/country/${country.alpha3Code}`}>
			<div className={styles.row}>
				<div className={styles.flag}>
					<img src={country.flag} alt={country.name} />
				</div>
				<div className={styles.name}>{country.name}</div>
				<div className={styles.population}>{country.population}</div>
				<div className={styles.area}>{country.area}</div>
				<div className={styles.gini}>{country.gini}%</div>
			</div>
		</Link>
	)
}

function ArrowIcon({ direction = 'asc' }) {
	if (direction === 'dsc') {
		return (
			<div className={styles.heading_arrow}>
				<MdKeyboardArrowDown color='inherit' />
			</div>
		)
	} else {
		return (
			<div className={styles.heading_arrow}>
				<MdKeyboardArrowUp color='inherit' />
			</div>
		)
	}
}

function orderBy(countries, key, dir = 'asc') {
	const Direction = {
		asc: 1,
		dsc: -1
	}
	return countries.slice().sort((a, b) => {
		if (typeof a[key] === 'number')
			return parseFloat(a[key]) > parseFloat(b[key]) ? Direction[dir] * 1 : Direction[dir] * -1
		else if (typeof a[key] === 'string') return Direction[dir] * a[key].localeCompare(b[key])
	})
}

export default function CountriesTable({ countries }) {
	const [direction, setDirection] = useState('asc')
	const [value, setValue] = useState('name')

	const switchDirection = () => {
		setDirection(direction === 'asc' ? 'dsc' : 'asc')
	}

	const setDirectionAndValue = value => {
		switchDirection()
		setValue(value)
	}

	const orderedCountries = orderBy(countries, value, direction)
	return (
		<div>
			<div className={styles.heading}>
				<div className={styles.heading_flag}></div>
				<button className={styles.heading_name} onClick={() => setDirectionAndValue('name')}>
					<div>Name</div>
					{value === 'name' ? <ArrowIcon direction={direction} /> : null}
				</button>
				<button className={styles.heading_population} onClick={() => setDirectionAndValue('population')}>
					Population
					{value === 'population' ? (
						<div className={styles.heading_arrow}>
							<ArrowIcon direction={direction} />
						</div>
					) : null}
				</button>
				<button className={styles.heading_area} onClick={() => setDirectionAndValue('area')}>
					<div>
						Area(Km<sup style={{ fontSize: '12px' }}>2</sup>)
					</div>
					{value === 'area' ? (
						<div className={styles.heading_arrow}>
							<ArrowIcon direction={direction} />
						</div>
					) : null}
				</button>
				<button className={styles.heading_gini} onClick={() => setDirectionAndValue('gini')}>
					Gini
					{value === 'gini' ? (
						<div className={styles.heading_arrow}>
							<ArrowIcon direction={direction} />
						</div>
					) : null}
				</button>
			</div>
			{orderedCountries.map(country => (
				<Country country={country} key={country.alpha3Code} />
			))}
		</div>
	)
}
