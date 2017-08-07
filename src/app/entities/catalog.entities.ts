export interface ServiceСatalog {
    Title: string,
    Modified: Date,
    Created: Date,
    ServiceNameList: ServiceNameList,     // Подстановка из номенклатура услуг
    Status: StatusEnum,
    ServiceObjectKind: ServiceObjectKind,   //Виды объектов обслуживания
    MainItSystem: string,
    BoundariesServices: BoundariesServicesEnum,
    Type: TypeEnum,
    FunctionalAreas: FunctionalAreasEnum,
    ProductAreas: ProductAreasEnum,
    ServiceObjectKindOwnerCompany: string,
    ServiceObjectKindOwnerBranch: string,
    ServiceObjectKindOwner: string, //Пользователь или группа
    ServiceObjectKindOwnerNote: string,
    CompanyCustomer: Company,    // Заказчики 
    CompanyConsumer: Company,    // Заказчики 
    FieldDescription: string,
    ContractorName: string,
    ContractorACBNSI: string,
    ContractorESUID: string,
    ContractorBranch: string,
    CustomerServiceManager: string,//Пользователь или группа
    CustomerResponsiblePerson: string,//Пользователь или группа
    EOL: string,//Пользователь или группа
    ROL: string,//Пользователь или группа
    Agreement: string,
    AgreementApplication: string,
    AgreementSpecification: string,
    AdditionalAgreement: string,
    Renewal: boolean,
    Comment: string,
    PacketName: string,
    ServiceLayerName: string,
    AgreementType: string,
    Description: string,
    RegionalTechnicalCenter: RegionalTechnicalCenter,    //Региональные технические центры
    Author: string,//Пользователь или группа
    Editor: string//Пользователь или группа
}

export interface ServiceNameList {
    Title: string,
    Modified: Date,
    Created: Date,
    FullName: string,
    Author: string,//Пользователь или группа
    Editor: string//Пользователь или группа
}

export interface ServiceObjectKind {
    Title: string,
    Modified: Date,
    Created: Date,
    FullName: string,
    Author: string,//Пользователь или группа
    Editor: string//Пользователь или группа
}

export interface Company {
    ID: string;
    Title: string,
    Modified: Date,
    Created: Date,
    ACBNSI: string,
    ESUID: string,
    Author: string,//Пользователь или группа
    Editor: string//Пользователь или группа
}

export interface RegionalTechnicalCenter {
    Title: string,
    Modified: Date,
    Created: Date,
    Code: string,  //?
    ServiceManager: string//Пользователь или группа
    Director: string//Пользователь или группа
    CodeNSI: string,
    Author: string,//Пользователь или группа
    Editor: string//Пользователь или группа
}

export enum StatusEnum {
    'Проект',
    'Активна',
    'Архив'
}

export enum BoundariesServicesEnum {
    'Корпоративная',
    'Локальная'
}

export enum TypeEnum {
    'Услуга',
    'Управление услугами ИТ',
    'Дополнительные работы',
    'Регулярная услуга',
    'Разовая работа',
    'Изменение'
}

export enum FunctionalAreasEnum {
    'Другое',
    'Сервисы ИТ',
    'Сервисы связи'
}

export enum ProductAreasEnum {
    'Базовые сервисы',
    'Бизнес-приложения. 1С',
    'Бизнес-приложения.LIMS',
    'Бизнес-приложения.MES',
    'Бизнес-приложения.Oracle',
    'Бизнес-приложения.SAP',
    'Бизнес-приложения.АСУ ТОиР',
    'Бизнес-приложения.БОСС - Кадровик',
    'Бизнес-приложения.КИС ЕСМ',
    'Бизнес-приложения.Прочие',
    'Другое',
    'Инженерные системы',
    'Инфраструктура',
    'Контроль качества',
    'Мобильные и портальные решения',
    'Производственные системы',
    'Прочее ИТ',
    'Связь',
    'Управление услугами'
}