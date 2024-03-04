/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NikeItemEntity } from '../models/NikeItemEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NikeService {

    /**
     * @returns NikeItemEntity 
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<NikeItemEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/multistream/api/nike',
        });
    }

}
