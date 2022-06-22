import { Injectable } from '@nestjs/common';
import { PdfService } from './pdf/pdf.service';

@Injectable()
export class AppService {
  constructor(private readonly pdfService: PdfService){}

  onApplicationBootstrap(){
    try {
      console.log('here');
      
      // const d = this.pdfService.generatePDFToFile('example','new-pdf.pdf',{
      //   locals: {
      //     name: 'Mahesh'
      //   }
      // });
      // d.subscribe(observer => {
      //   console.log({observer})
      // })
      // console.log({d})
    } catch (error) {
      console.log({error})
    }
    
  }
  getHello(): string {
    return 'Hello World!';
  }
}
