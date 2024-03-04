/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReebokItemEntity } from '../models/ReebokItemEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReebokService {

    /**
     * @returns ReebokItemEntity 
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<ReebokItemEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/multistream/api/reebok',
        });
    }

}
