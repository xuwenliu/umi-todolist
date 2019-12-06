
// ref: https://umijs.org/config/

//导入自定义路由配置
const routes = require('./src/routes');

export default {
	treeShaking: true,
	routes,
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: true,
			dva: true,
			dynamicImport: false,
			title: 'umi-todolist',
			dll: false,

			routes: {
				exclude: [
					/models\//,
					/services\//,
					/model\.(t|j)sx?$/,
					/service\.(t|j)sx?$/,
					/components\//,
				],
			},
		}],
	],
}
