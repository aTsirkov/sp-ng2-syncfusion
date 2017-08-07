import { Injectable, OnDestroy } from '@angular/core';

import pnp from 'sp-pnp-js';
import { ODataRaw } from 'sp-pnp-js';
import { Company } from '../entities/catalog.entities';

@Injectable()
export class SpService {
    constructor() {
        pnp.setup({
            headers: {
                'Accept': 'application/json;odata=verbose'
            }
        });
    }

    public getCustomersList(params: any = {}) {

        return pnp.sp.web.lists.getByTitle('Заказчики').items.get(ODataRaw)
            .then(data => {
                return data.d.results;
            });
    }

    public getRegionalTechnicalCenters(params: any = {}) {

        return pnp.sp.web.lists.getByTitle('Региональные технические центры').items.get(ODataRaw)
            .then(data => {
                return data.d.results;
            });
    }

    public getRtkObjectsList(params: any = {}) {

        return pnp.sp.web.lists.getByTitle('Объекты РТК').items.get(ODataRaw)
            .then(data => {
                return data.d.results;
            });
    }

    public getComputedTechnologicalMap(params: any = {}) {

        return pnp.sp.web.lists.getByTitle('Экземпляры РТК').items.get(ODataRaw)
            .then(data => {
                return data.d.results;
            });
    }

}