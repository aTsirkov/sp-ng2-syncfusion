import { Component, OnInit } from '@angular/core';
import { SpService } from '../../sharepoint/sharepoint.service';

import { Company } from '../../entities/catalog.entities';

@Component({
    selector: 'rtk-objects',
    templateUrl: './rtk-objects.component.html',
    styleUrls: ['./rtk-objects.component.css']
})
export class RtkObjectsComponent implements OnInit{
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
            { field: 'ID', headerText: 'ID', isPrimaryKey: true, width: 50, textAlign: 'center' },
            { field: 'Title', headerText: 'Наименование', width: 300, textAlign: 'left'},
            { field: 'ComputedTechnologicalMapId', headerText: 'РТК', width: 200, textAlign: 'left' },
            { field: 'ServiceObjectKindId', headerText: 'Вид объекта обслуживания', width: 200, textAlign: 'left' }
        ];
    }

    ngOnInit() {
        this.service.getRtkObjectsList()
            .then(gridData => {
                this.gridData = gridData;
            });
    }

}