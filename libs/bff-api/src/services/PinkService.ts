/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SaleItemEntity } from '../models/SaleItemEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PinkService {

    /**
     * @returns SaleItemEntity 
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<SaleItemEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/multistream/api/pink',
        });
    }

}
