import { Module } from '@nestjs/common';
import { PDFModule } from '@t00nday/nestjs-pdf';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModule } from './pdf/pdf.module';
import { PdfService } from './pdf/pdf.service';

@Module({
  imports: [
    PdfModule,
    PDFModule.register({
      isGlobal: true,
      view: {
          root: './templates',
          engine: 'ejs'
      },
  })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PdfService
  ],
})
export class AppModule {}
