import { Injectable } from '@nestjs/common';
import { PdfService } from './pdf/pdf.service';

@Injectable()
export class AppService {
  constructor(private readonly pdfService: PdfService){}

  onApplicationBootstrap(){
    try {
      this.pdfService.generatePDFToStream('example',{
        locals: {
          name: 'Mahesh'
        }
      }).subscribe(value =>  {
        console.log({value});
        //code for s3 upload
//         const params = {
//           Key: 'foo.pdf',
//           Body: stream,
//           Bucket: 'Bucket Name',
//           ContentType: 'application/pdf',
//       };
// s3.upload(params, (err, res) => {
//           if (err) {
//               console.log(err, 'err');
//           }
//           console.log(res, 'res');
//       });
      });
    } catch (error) {
      console.log({error})
    }
    
  }
  getHello(): string {
    return 'Hello World!';
  }
}
