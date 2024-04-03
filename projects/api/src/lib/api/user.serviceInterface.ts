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

import { User } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface CreateUserRequestParams {
    body: User;
}

export interface CreateUsersWithArrayInputRequestParams {
    body: Array<User>;
}

export interface CreateUsersWithListInputRequestParams {
    body: Array<User>;
}

export interface DeleteUserRequestParams {
    username: string;
}

export interface GetUserByNameRequestParams {
    username: string;
}

export interface LoginUserRequestParams {
    username: string;
    password: string;
}

export interface UpdateUserRequestParams {
    username: string;
    body: User;
}


export interface UserServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Create user
     * This can only be done by the logged in user.
* @param requestParameters
     */
    createUser(requestParameters: CreateUserRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Creates list of users with given input array
     * 
* @param requestParameters
     */
    createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Creates list of users with given input array
     * 
* @param requestParameters
     */
    createUsersWithListInput(requestParameters: CreateUsersWithListInputRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Delete user
     * This can only be done by the logged in user.
* @param requestParameters
     */
    deleteUser(requestParameters: DeleteUserRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Get user by user name
     * 
* @param requestParameters
     */
    getUserByName(requestParameters: GetUserByNameRequestParams, extraHttpRequestParams?: any): Observable<User>;

    /**
     * Logs user into the system
     * 
* @param requestParameters
     */
    loginUser(requestParameters: LoginUserRequestParams, extraHttpRequestParams?: any): Observable<string>;

    /**
     * Logs out current logged in user session
     * 
*/
    logoutUser(extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Updated user
     * This can only be done by the logged in user.
* @param requestParameters
     */
    updateUser(requestParameters: UpdateUserRequestParams, extraHttpRequestParams?: any): Observable<{}>;

}