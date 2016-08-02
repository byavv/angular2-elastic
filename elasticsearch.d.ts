/**
 * THIS IS NOT OFFICIAL, SEE: https://github.com/elastic/elasticsearch-js/issues/59
 */
declare module "elasticsearch" {

    interface Callback {
        (err: Error, response: any, status: number): any;
    }

    interface getParams {
        index: string;
        type?: string;
        id: any;
    }

    interface Indices {
        open(params, callback: Callback): void;
        close(params, callback: Callback): void;
        create(params, callback: Callback): void;
        delete(params, callback: Callback): void;
        existsType(params, callback: Callback): void;
        putMapping(params, callback: Callback): void;
        putSettings(params, callback: Callback): void;
    }

    interface Cluster {
        health(param, callback: Callback): void;
    }

    interface ClientInterface {
        delete(params: {
            index: string;
            type: string;
            id: any;
        }, callback: Callback);

        create(params: any, callback?: Callback);

        deleteByQuery(params: {
            index: string;
            type?: string;
            body: Object;
        }, callback: Callback);

        exists(params: {
            index: string;
            type: string;
            id: string;
        }, callback: (err: Error, exists: boolean) => any): void;

        get(params: getParams, callback: Callback): void;

        getSource(params: getParams, callback: Callback): void;

        indices: Indices;
        cluster: Cluster;

        index(params: {
            index: string;
            type: string;
            body: Object;
        }, callback: Callback): void;

        percolate(params: {
            index: string;
            body: Object;
        }, callback: Callback): void;

        ping(params, callback?: Callback): Promise<any>;

        search(params: any, callback?: Callback): Promise<any>;

    }

    interface ClientStaticInterface {
        new (m: any): ClientInterface;
        (options?): ClientInterface;
    }

    export var Client: ClientStaticInterface;
}