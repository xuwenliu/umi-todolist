import styles from './index.css';
import { Button } from 'antd';
import Link from 'umi/link';
import router from 'umi/router';

export default function (props) {
	let goTodoList = () => {
		// 其他路由跳转方法 https://umijs.org/zh/api/#umi-router
		router.push({
			pathname: '/todolist'
		});
	}

	return (
		<div className={styles.normal}>
			<Button size="small" onClick={goTodoList}>router.push</Button>
			<Link style={{ margin: '0 10px' }} to="/todolist">Link</Link>
			<div className={styles.welcome} />
			<ul className={styles.list}>
				<li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
				<li>
					<a href="https://umijs.org/guide/getting-started.html">
						Getting Started
          		</a>
				</li>
			</ul>
		</div>
	);
}
