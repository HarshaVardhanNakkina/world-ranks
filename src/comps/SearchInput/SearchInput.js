import { MdSearch } from 'react-icons/md'

import styles from './SearchInput.module.css'

export default function SearchInput({ ...rest }) {
	return (
		<div className={styles.wrapper}>
			<MdSearch color='inherit' />
			<input type='text' className={styles.input} {...rest} />
		</div>
	)
}
