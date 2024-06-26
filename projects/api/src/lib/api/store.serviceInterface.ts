/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.7
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { Order } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface DeleteOrderRequestParams {
    orderId: number;
}

export interface GetOrderByIdRequestParams {
    orderId: number;
}

export interface PlaceOrderRequestParams {
    body: Order;
}


export interface StoreServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
* @param requestParameters
     */
    deleteOrder(requestParameters: DeleteOrderRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
*/
    getInventory(extraHttpRequestParams?: any): Observable<{ [key: string]: number; }>;

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 10. Other values will generated exceptions
* @param requestParameters
     */
    getOrderById(requestParameters: GetOrderByIdRequestParams, extraHttpRequestParams?: any): Observable<Order>;

    /**
     * Place an order for a pet
     * 
* @param requestParameters
     */
    placeOrder(requestParameters: PlaceOrderRequestParams, extraHttpRequestParams?: any): Observable<Order>;

}
