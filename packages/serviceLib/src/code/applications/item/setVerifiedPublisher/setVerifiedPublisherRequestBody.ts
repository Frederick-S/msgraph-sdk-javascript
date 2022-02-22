import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SetVerifiedPublisherRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _verifiedPublisherId?: string | undefined;
    /**
     * Instantiates a new setVerifiedPublisherRequestBody and sets the default values.
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
     * Gets the verifiedPublisherId property value. 
     * @returns a string
     */
    public get verifiedPublisherId() {
        return this._verifiedPublisherId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["verifiedPublisherId", (o, n) => { (o as unknown as SetVerifiedPublisherRequestBody).verifiedPublisherId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("verifiedPublisherId", this.verifiedPublisherId);
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
     * Sets the verifiedPublisherId property value. 
     * @param value Value to set for the verifiedPublisherId property.
     */
    public set verifiedPublisherId(value: string | undefined) {
        this._verifiedPublisherId = value;
    };
}
