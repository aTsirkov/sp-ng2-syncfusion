import { Directive, ElementRef, ViewContainerRef, TemplateRef, Injector } from '@angular/core';
import { EJTemplateDirective } from 'ej-angular2/src/ej/template';
import { GridComponent } from 'ej-angular2';


@Directive({
    selector: `[e-gdtemplate]`
})
    
export class EJ_Grid_DetailTemplate extends EJTemplateDirective {
    public parent: GridComponent;
    constructor(protected el: ElementRef, protected viewContainerRef: ViewContainerRef,
        protected templateRef: TemplateRef<any>, protected injector: Injector) {
            super(el, viewContainerRef, templateRef);
            this.parent = injector.get<GridComponent>(GridComponent);
    }
    ngOnInit() {
        var template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        var templID = ej.getGuid('angulartmplstr');
        var tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        ej.createObject('detailsTemplate', $($(tempEle).append(template.rootNodes)).html(), this.parent);
        this.parent.model.detailsTemplate = $($(tempEle).append(template.rootNodes)).html();
        ej.createObject('_templateRef', this.templateRef, this.parent);
        ej.createObject('_viewRef', this.viewContainerRef, this.parent);
        let old = ej.template['text/x-template'];
        var p = this.parent;
        
        ej.template['text/x-template'] = function (self, selector, data, index, prop) {
            return old(self, selector, data, index, prop || p);
        };
        ej.template.render = ej.template['text/x-template'];

        $(tempEle).remove();
    }
}