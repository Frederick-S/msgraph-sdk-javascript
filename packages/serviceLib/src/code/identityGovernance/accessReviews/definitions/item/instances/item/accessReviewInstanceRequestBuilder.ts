import {AccessReviewInstance} from '../../../../../../models/microsoft/graph/';
import {AcceptRecommendationsRequestBuilder} from './acceptRecommendations/';
import {ApplyDecisionsRequestBuilder} from './applyDecisions/';
import {BatchRecordDecisionsRequestBuilder} from './batchRecordDecisions/';
import {ContactedReviewersRequestBuilder} from './contactedReviewers/';
import {AccessReviewReviewerRequestBuilder} from './contactedReviewers/item/';
import {DecisionsRequestBuilder} from './decisions/';
import {AccessReviewInstanceDecisionItemRequestBuilder} from './decisions/item/';
import {ResetDecisionsRequestBuilder} from './resetDecisions/';
import {SendReminderRequestBuilder} from './sendReminder/';
import {StopRequestBuilder} from './stop/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}  */
export class AccessReviewInstanceRequestBuilder {
    public get acceptRecommendations(): AcceptRecommendationsRequestBuilder {
        return new AcceptRecommendationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyDecisions(): ApplyDecisionsRequestBuilder {
        return new ApplyDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get batchRecordDecisions(): BatchRecordDecisionsRequestBuilder {
        return new BatchRecordDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contactedReviewers(): ContactedReviewersRequestBuilder {
        return new ContactedReviewersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get decisions(): DecisionsRequestBuilder {
        return new DecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get resetDecisions(): ResetDecisionsRequestBuilder {
        return new ResetDecisionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sendReminder(): SendReminderRequestBuilder {
        return new SendReminderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get stop(): StopRequestBuilder {
        return new StopRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new AccessReviewInstanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition_id}/instances/{accessReviewInstance_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.accessReviews.definitions.item.instances.item.contactedReviewers.item collection
     * @param id Unique identifier of the item
     * @returns a accessReviewReviewerRequestBuilder
     */
    public contactedReviewersById(id: string) : AccessReviewReviewerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewReviewer_id"] = id
        return new AccessReviewReviewerRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AccessReviewInstance | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.accessReviews.definitions.item.instances.item.decisions.item collection
     * @param id Unique identifier of the item
     * @returns a accessReviewInstanceDecisionItemRequestBuilder
     */
    public decisionsById(id: string) : AccessReviewInstanceDecisionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewInstanceDecisionItem_id"] = id
        return new AccessReviewInstanceDecisionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewInstance
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewInstance | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<AccessReviewInstance>(requestInfo, AccessReviewInstance, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * If the accessReviewScheduleDefinition is a recurring access review, instances represent each recurrence. A review that does not recur will have exactly one instance. Instances also represent each unique resource under review in the accessReviewScheduleDefinition. If a review has multiple resources and multiple instances, each resource will have a unique instance for each recurrence.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: AccessReviewInstance | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
