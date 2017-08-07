import {Component, OnInit} from '@angular/core';
import { SpService } from '../../sharepoint/sharepoint.service';

import { Company } from '../../entities/catalog.entities';

@Component({
    selector: 'catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
    public gridData: any;
    public editsettings: any;
    public toolbarsettings: any;
    public groupedColumns: Array<string>;
    public columnssettings: Array<Object>;

    constructor(private service: SpService) {
        this.editsettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            editMode: "dialog"
        };
        this.toolbarsettings = {
            showToolbar: true,
            toolbarItems: ['add', 'edit', 'delete', 'update', 'cancel', 'expandAll', 'collapseAll']
        };
        this.groupedColumns = [];
        this.columnssettings = [
            { field: 'ID', headerText: 'ID', isPrimaryKey: true },
            { field: 'Title', headerText: 'Наименование' },
            { field: 'ACBNSI', headerText: 'Код Контрагента в АСВ НСИ' },
            { field: 'ESUID', headerText: 'Код Контрагента ЕСУИД' }
        ];
    }

    ngOnInit() {
        this.service.getCustomersList()
            .then(gridData => {
                this.gridData = gridData;
            });
    }
}
