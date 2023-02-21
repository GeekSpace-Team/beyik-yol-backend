import { ConstantTypes } from "@prisma/client";
export declare class CreateConstantDto {
    name_tm: string;
    name_ru: string;
    content_tm: string;
    content_ru: string;
    type: ConstantTypes;
}
