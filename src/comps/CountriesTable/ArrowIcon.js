import React from 'react'

import { MdArrowDownward, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

// STYLES
import styles from './CountriesTable.module.css'

const ArrowIcon = ({ direction = 'asc' }) => {
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

export default ArrowIcon
