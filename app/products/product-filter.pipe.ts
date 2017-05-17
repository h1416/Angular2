import { PipeTransform } from "@angular/core";
import { IProduct } from "./product";

export class ProductFilterPipe implements PipeTransform{
    transform(value: IProduct[], filterBy: string): IProduct[] {
        throw new Error("Method not implemented.");
    }
}