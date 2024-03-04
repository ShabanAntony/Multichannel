/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SwatchEntity } from './SwatchEntity';

export type SaleItemEntity = {
    masterStyleId: string;
    name: string;
    family?: string;
    price: string;
    salePrice: string;
    parsedPrice: number;
    parsedDiscount: number;
    discount: number;
    isNew: boolean;
    regDate: string;
    url: string;
    productImages: Array<string>;
    swatches: Array<SwatchEntity>;
};
