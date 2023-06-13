import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseConfig = configService.get('database');
        return {
          type: <DatabaseType>databaseConfig.type,
          host: databaseConfig.host,
          port: databaseConfig.port,
          username: databaseConfig.username,
          password: databaseConfig.password,
          database: databaseConfig.database,
          entities: [],
          synchronize: false,
          autoLoadEntities: true,
          logging: databaseConfig.logging,
          cli: {
            migrationsDir: __dirname + '/migration',
            entitiesDir: __dirname + '/entities',
          },
        };
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
