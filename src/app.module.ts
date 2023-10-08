/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { StudentSchema } from './schema/student.schema';
import { OrderSchema } from './schema/order.schema';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://beyondnxt:cuberex99@cluster0.fu5reg0.mongodb.net/',
      { dbName: 'nestdb' },
    ),
    MongooseModule.forFeature([
      { name: 'student', schema: StudentSchema },
      { name: 'order', schema: OrderSchema },
    ]),
    AuthModule,
  ],
  controllers: [AppController, StudentController, OrderController],
  providers: [AppService, StudentService, OrderService],
})
export class AppModule {}
