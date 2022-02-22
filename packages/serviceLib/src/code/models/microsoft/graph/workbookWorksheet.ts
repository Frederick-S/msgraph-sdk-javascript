import {Entity, WorkbookChart, WorkbookNamedItem, WorkbookPivotTable, WorkbookTable, WorkbookWorksheetProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookWorksheet extends Entity implements Parsable {
    /** Returns collection of charts that are part of the worksheet. Read-only.  */
    private _charts?: WorkbookChart[] | undefined;
    /** The display name of the worksheet.  */
    private _name?: string | undefined;
    /** Returns collection of names that are associated with the worksheet. Read-only.  */
    private _names?: WorkbookNamedItem[] | undefined;
    /** Collection of PivotTables that are part of the worksheet.  */
    private _pivotTables?: WorkbookPivotTable[] | undefined;
    /** The zero-based position of the worksheet within the workbook.  */
    private _position?: number | undefined;
    /** Returns sheet protection object for a worksheet. Read-only.  */
    private _protection?: WorkbookWorksheetProtection | undefined;
    /** Collection of tables that are part of the worksheet. Read-only.  */
    private _tables?: WorkbookTable[] | undefined;
    /** The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.  */
    private _visibility?: string | undefined;
    /**
     * Instantiates a new workbookWorksheet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the charts property value. Returns collection of charts that are part of the worksheet. Read-only.
     * @returns a workbookChart
     */
    public get charts() {
        return this._charts;
    };
    /**
     * Gets the name property value. The display name of the worksheet.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the names property value. Returns collection of names that are associated with the worksheet. Read-only.
     * @returns a workbookNamedItem
     */
    public get names() {
        return this._names;
    };
    /**
     * Gets the pivotTables property value. Collection of PivotTables that are part of the worksheet.
     * @returns a workbookPivotTable
     */
    public get pivotTables() {
        return this._pivotTables;
    };
    /**
     * Gets the position property value. The zero-based position of the worksheet within the workbook.
     * @returns a integer
     */
    public get position() {
        return this._position;
    };
    /**
     * Gets the protection property value. Returns sheet protection object for a worksheet. Read-only.
     * @returns a workbookWorksheetProtection
     */
    public get protection() {
        return this._protection;
    };
    /**
     * Gets the tables property value. Collection of tables that are part of the worksheet. Read-only.
     * @returns a workbookTable
     */
    public get tables() {
        return this._tables;
    };
    /**
     * Gets the visibility property value. The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
     * @returns a string
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["charts", (o, n) => { (o as unknown as WorkbookWorksheet).charts = n.getCollectionOfObjectValues<WorkbookChart>(WorkbookChart); }],
            ["name", (o, n) => { (o as unknown as WorkbookWorksheet).name = n.getStringValue(); }],
            ["names", (o, n) => { (o as unknown as WorkbookWorksheet).names = n.getCollectionOfObjectValues<WorkbookNamedItem>(WorkbookNamedItem); }],
            ["pivotTables", (o, n) => { (o as unknown as WorkbookWorksheet).pivotTables = n.getCollectionOfObjectValues<WorkbookPivotTable>(WorkbookPivotTable); }],
            ["position", (o, n) => { (o as unknown as WorkbookWorksheet).position = n.getNumberValue(); }],
            ["protection", (o, n) => { (o as unknown as WorkbookWorksheet).protection = n.getObjectValue<WorkbookWorksheetProtection>(WorkbookWorksheetProtection); }],
            ["tables", (o, n) => { (o as unknown as WorkbookWorksheet).tables = n.getCollectionOfObjectValues<WorkbookTable>(WorkbookTable); }],
            ["visibility", (o, n) => { (o as unknown as WorkbookWorksheet).visibility = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WorkbookChart>("charts", this.charts);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<WorkbookNamedItem>("names", this.names);
        writer.writeCollectionOfObjectValues<WorkbookPivotTable>("pivotTables", this.pivotTables);
        writer.writeNumberValue("position", this.position);
        writer.writeObjectValue<WorkbookWorksheetProtection>("protection", this.protection);
        writer.writeCollectionOfObjectValues<WorkbookTable>("tables", this.tables);
        writer.writeStringValue("visibility", this.visibility);
    };
    /**
     * Sets the charts property value. Returns collection of charts that are part of the worksheet. Read-only.
     * @param value Value to set for the charts property.
     */
    public set charts(value: WorkbookChart[] | undefined) {
        this._charts = value;
    };
    /**
     * Sets the name property value. The display name of the worksheet.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the names property value. Returns collection of names that are associated with the worksheet. Read-only.
     * @param value Value to set for the names property.
     */
    public set names(value: WorkbookNamedItem[] | undefined) {
        this._names = value;
    };
    /**
     * Sets the pivotTables property value. Collection of PivotTables that are part of the worksheet.
     * @param value Value to set for the pivotTables property.
     */
    public set pivotTables(value: WorkbookPivotTable[] | undefined) {
        this._pivotTables = value;
    };
    /**
     * Sets the position property value. The zero-based position of the worksheet within the workbook.
     * @param value Value to set for the position property.
     */
    public set position(value: number | undefined) {
        this._position = value;
    };
    /**
     * Sets the protection property value. Returns sheet protection object for a worksheet. Read-only.
     * @param value Value to set for the protection property.
     */
    public set protection(value: WorkbookWorksheetProtection | undefined) {
        this._protection = value;
    };
    /**
     * Sets the tables property value. Collection of tables that are part of the worksheet. Read-only.
     * @param value Value to set for the tables property.
     */
    public set tables(value: WorkbookTable[] | undefined) {
        this._tables = value;
    };
    /**
     * Sets the visibility property value. The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: string | undefined) {
        this._visibility = value;
    };
}
