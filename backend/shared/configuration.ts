import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
	constructor(private configService?: ConfigService) { }
	getDatabaseConfig() {
		return {
			host: process.env.DATABASE_HOST || process.env.DB_URL,
			port: parseInt(process.env.DATABASE_PORT || process.env.DB_PORT, 10) || 5432,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			type: process.env.DB_TYPE || 'mysql',
			uri: process.env.DB_URI,
			database_name: process.env.DB_NAME
		}
	}
	getTypeOrmConfig(): any {
		return {
			host: process.env.DATABASE_HOST || process.env.DB_URL,
			port: parseInt(process.env.DATABASE_PORT || process.env.DB_PORT, 10) || 3306,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			type: process.env.DB_TYPE || 'mysql',
			database: process.env.DB_NAME
		}
	}
	getPort() {
		return parseInt(process.env.PORT, 10) || 3000
	}
	isProduction() {
		const isProduction = (process.env.NODE_ENV || 'development') === 'production' ? true : false
		return isProduction
	}
}
export default () => ({
	env: process.env.NODE_ENV || 'development',
	isProduction: (process.env.NODE_ENV || 'development') === 'production' ? true : false,
	port: parseInt(process.env.PORT, 10) || 3001,
	database: {
		host: process.env.DATABASE_HOST || process.env.DB_URL || 'host.docker.internal',
		port: parseInt(process.env.DATABASE_PORT || process.env.DB_PORT, 10) || 3306,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		type: process.env.DB_TYPE || 'mysql',
		uri: process.env.DB_URI,
		database_name: process.env.DB_NAME
	}
});