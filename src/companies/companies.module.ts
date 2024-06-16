import { Module } from '@nestjs/common';
import { CompaniesService } from './use-cases/companies.service';
import { CompaniesController } from './companies.controller';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
