import { Injectable } from '@nestjs/common';
import { PDFOptions, PDFService } from '@t00nday/nestjs-pdf';

@Injectable()
export class PdfService {
    constructor(private readonly pdfService: PDFService){}

    generatePDFToFile(
        template: string,
        filename: string,
        options?: PDFOptions,
    ) {
        return this.pdfService.toFile(template, filename, options); // returns Observable<FileInfo>;
    }

    generatePDFToStream(template: string, options?: PDFOptions) {
        return this.pdfService.toStream(template, options); // returns Observable<Readable>;
    }

    generatePDFToBuffer(template: string, options?: PDFOptions) {
        return this.pdfService.toBuffer(template, options); // returns Observable<Buffer>;
    }
}
