import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { SpService } from '../../sharepoint/sharepoint.service';

import { Company } from '../../entities/catalog.entities';
import { EJComponents } from 'ej-angular2'

@Component({
  selector: 'rtk-list',
  templateUrl: './rtk-list.component.html',
  styleUrls: ['./rtk-list.component.css'],
})
export class RTKListComponent implements OnInit{
    public gridData: any;
    public rtc: any;
    public customers: any;

    public editsettings: any;
    public template: any;
    public toolbarsettings: any;
    public groupedColumns: Array<string>;
    public columnssettings: Array<Object>;
    @ViewChild('grid') Grid: EJComponents<any, any>;

    constructor(private service: SpService) {
        this.template = "#test";
        this.editsettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            editMode: ej.Grid.EditMode.DialogTemplate,
            dialogEditorTemplateID: "#formtemplate" 
        };
        this.toolbarsettings = {
            showToolbar: true,
            toolbarItems: ['add', 'edit', 'delete', 'update', 'cancel', 'expandAll', 'collapseAll']
        };
        this.groupedColumns = [];
    }


    ngOnInit() {
        this.service.getComputedTechnologicalMap()
            .then(gridData => {
                this.gridData = gridData;
                /*this.columnssettings = [
                    { field: 'ID', headerText: 'ID', isPrimaryKey: true, width: 50, textAlign: 'center' },
                    { field: 'Title', headerText: 'Наименование', width: 300, textAlign: 'left' },
                    { field: 'ServiceCatalogId', headerText: 'Услуга', width: 200, textAlign: 'left' },
                    { field: 'RegionalTechnicalCenterId', headerText: 'РТЦ - владелец договора', width: 200, textAlign: 'left' },
                    {
                        field: 'CompanyCustomerId',
                        headerText: 'Заказчик',
                        // editType: "dropdownedit",
                        foreignKeyField: "ID",
                        foreignKeyValue: "Title",
                        dataSource: this.customers,
                        // editParams: { fields: { text: "Title", value: "ID" } },
                        // editTemplate: { create: "create", read: "read", write: "write" },
                        width: 200,
                        textAlign: 'left'
                    },
                    { field: 'Agreement', headerText: 'Код договора', width: 200, textAlign: 'left' },
                    { field: 'OperationAmount', headerText: 'Сумма по операциям', width: 200, textAlign: 'left' },
                    { field: 'MaterialAmount', headerText: 'Сумма по материалам', width: 200, textAlign: 'left' },
                    { field: 'SubcontractingAmount', headerText: 'Сумма по субподряду', width: 200, textAlign: 'left' },
                    { field: 'ActiveAmount', headerText: 'Сумма по активам', width: 200, textAlign: 'left' },
                    { field: 'TotalAmount', headerText: 'Сумма по РТК', width: 200, textAlign: 'left' },
                    { field: 'Status', headerText: 'Статус', width: 200, textAlign: 'left' },
                    { field: 'Unified', headerText: 'Унифицированна', width: 20, textAlign: 'left' },
                ];*/
            });
        this.service.getRegionalTechnicalCenters()
            .then(gridData => {
                this.rtc = gridData;
            });
        this.service.getCustomersList()
            .then(gridData => {
                this.customers = gridData;
            });
    }

    onActionComplete(e: any) {
        let c = 0;
    }
}
