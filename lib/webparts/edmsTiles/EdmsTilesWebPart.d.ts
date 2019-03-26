import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IEdmsTilesWebPartProps {
    description: string;
}
export default class EdmsTilesWebPart extends BaseClientSideWebPart<IEdmsTilesWebPartProps> {
    render(): void;
    FetchItems(): Promise<void>;
    AddNewTile(): void;
    UpdateItem(): void;
    DeleteItem(): void;
    Validation(): boolean;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
