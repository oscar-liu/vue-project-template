/**
 * 以类的方式进行封装，类名的命名规则为变量作用类型+Constant，一眼看出来该类的用处和作用范围
 * API等相关URL请求常量配置
 */
class RequestConst {
	/**
	 * 根据process.env.NODE_ENV的值确定网关地址，可以保证两种环境下的切换，
	 */
	static REQUEST_URL = process.env.NODE_ENV == 'development' ? '我是开发环境下的配置' : '我是生产环境下的配置';

	/**
	 * 请求的路径
	 */
	static SAY_HELLO_PATH = '/mock/sayHello';
}
 
export default RequestConstant;