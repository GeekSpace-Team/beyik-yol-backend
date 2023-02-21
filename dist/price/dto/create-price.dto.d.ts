import { ConstantPriceType } from "@prisma/client";
export declare class CreatePriceDto {
    title: string;
    value: number;
    type: ConstantPriceType;
}
