import {BookingWorkTimeSlot, DayOfWeek} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingWorkHours implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The day of the week represented by this instance. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday.  */
    private _day?: DayOfWeek | undefined;
    /** A list of start/end times during a day.  */
    private _timeSlots?: BookingWorkTimeSlot[] | undefined;
    /**
     * Instantiates a new bookingWorkHours and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the day property value. The day of the week represented by this instance. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday.
     * @returns a dayOfWeek
     */
    public get day() {
        return this._day;
    };
    /**
     * Gets the timeSlots property value. A list of start/end times during a day.
     * @returns a bookingWorkTimeSlot
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["day", (o, n) => { (o as unknown as BookingWorkHours).day = n.getEnumValue<DayOfWeek>(DayOfWeek); }],
            ["timeSlots", (o, n) => { (o as unknown as BookingWorkHours).timeSlots = n.getCollectionOfObjectValues<BookingWorkTimeSlot>(BookingWorkTimeSlot); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<DayOfWeek>("day", this.day);
        writer.writeCollectionOfObjectValues<BookingWorkTimeSlot>("timeSlots", this.timeSlots);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the day property value. The day of the week represented by this instance. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday.
     * @param value Value to set for the day property.
     */
    public set day(value: DayOfWeek | undefined) {
        this._day = value;
    };
    /**
     * Sets the timeSlots property value. A list of start/end times during a day.
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: BookingWorkTimeSlot[] | undefined) {
        this._timeSlots = value;
    };
}
