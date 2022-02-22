import {PolicyRoot} from '../models/microsoft/graph/';
import {ActivityBasedTimeoutPoliciesRequestBuilder} from './activityBasedTimeoutPolicies/';
import {ActivityBasedTimeoutPolicyRequestBuilder} from './activityBasedTimeoutPolicies/item/';
import {AdminConsentRequestPolicyRequestBuilder} from './adminConsentRequestPolicy/';
import {AuthenticationFlowsPolicyRequestBuilder} from './authenticationFlowsPolicy/';
import {AuthenticationMethodsPolicyRequestBuilder} from './authenticationMethodsPolicy/';
import {AuthorizationPolicyRequestBuilder} from './authorizationPolicy/';
import {ClaimsMappingPoliciesRequestBuilder} from './claimsMappingPolicies/';
import {ClaimsMappingPolicyRequestBuilder} from './claimsMappingPolicies/item/';
import {ConditionalAccessPoliciesRequestBuilder} from './conditionalAccessPolicies/';
import {ConditionalAccessPolicyRequestBuilder} from './conditionalAccessPolicies/item/';
import {FeatureRolloutPoliciesRequestBuilder} from './featureRolloutPolicies/';
import {FeatureRolloutPolicyRequestBuilder} from './featureRolloutPolicies/item/';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/';
import {HomeRealmDiscoveryPolicyRequestBuilder} from './homeRealmDiscoveryPolicies/item/';
import {IdentitySecurityDefaultsEnforcementPolicyRequestBuilder} from './identitySecurityDefaultsEnforcementPolicy/';
import {PermissionGrantPoliciesRequestBuilder} from './permissionGrantPolicies/';
import {PermissionGrantPolicyRequestBuilder} from './permissionGrantPolicies/item/';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/';
import {TokenIssuancePolicyRequestBuilder} from './tokenIssuancePolicies/item/';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/';
import {TokenLifetimePolicyRequestBuilder} from './tokenLifetimePolicies/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /policies  */
export class PoliciesRequestBuilder {
    public get activityBasedTimeoutPolicies(): ActivityBasedTimeoutPoliciesRequestBuilder {
        return new ActivityBasedTimeoutPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get adminConsentRequestPolicy(): AdminConsentRequestPolicyRequestBuilder {
        return new AdminConsentRequestPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get authenticationFlowsPolicy(): AuthenticationFlowsPolicyRequestBuilder {
        return new AuthenticationFlowsPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder {
        return new AuthenticationMethodsPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get authorizationPolicy(): AuthorizationPolicyRequestBuilder {
        return new AuthorizationPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get claimsMappingPolicies(): ClaimsMappingPoliciesRequestBuilder {
        return new ClaimsMappingPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get conditionalAccessPolicies(): ConditionalAccessPoliciesRequestBuilder {
        return new ConditionalAccessPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get featureRolloutPolicies(): FeatureRolloutPoliciesRequestBuilder {
        return new FeatureRolloutPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identitySecurityDefaultsEnforcementPolicy(): IdentitySecurityDefaultsEnforcementPolicyRequestBuilder {
        return new IdentitySecurityDefaultsEnforcementPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get permissionGrantPolicies(): PermissionGrantPoliciesRequestBuilder {
        return new PermissionGrantPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.policies.activityBasedTimeoutPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a activityBasedTimeoutPolicyRequestBuilder
     */
    public activityBasedTimeoutPoliciesById(id: string) : ActivityBasedTimeoutPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["activityBasedTimeoutPolicy_id"] = id
        return new ActivityBasedTimeoutPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.claimsMappingPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a claimsMappingPolicyRequestBuilder
     */
    public claimsMappingPoliciesById(id: string) : ClaimsMappingPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["claimsMappingPolicy_id"] = id
        return new ClaimsMappingPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.conditionalAccessPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a conditionalAccessPolicyRequestBuilder
     */
    public conditionalAccessPoliciesById(id: string) : ConditionalAccessPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conditionalAccessPolicy_id"] = id
        return new ConditionalAccessPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get policies
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
     * Update policies
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: PolicyRoot | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Gets an item from the MicrosoftGraph.policies.featureRolloutPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a featureRolloutPolicyRequestBuilder
     */
    public featureRolloutPoliciesById(id: string) : FeatureRolloutPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["featureRolloutPolicy_id"] = id
        return new FeatureRolloutPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get policies
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PolicyRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PolicyRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<PolicyRoot>(requestInfo, PolicyRoot, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.homeRealmDiscoveryPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a homeRealmDiscoveryPolicyRequestBuilder
     */
    public homeRealmDiscoveryPoliciesById(id: string) : HomeRealmDiscoveryPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["homeRealmDiscoveryPolicy_id"] = id
        return new HomeRealmDiscoveryPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update policies
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: PolicyRoot | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.permissionGrantPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a permissionGrantPolicyRequestBuilder
     */
    public permissionGrantPoliciesById(id: string) : PermissionGrantPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantPolicy_id"] = id
        return new PermissionGrantPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.tokenIssuancePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a tokenIssuancePolicyRequestBuilder
     */
    public tokenIssuancePoliciesById(id: string) : TokenIssuancePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenIssuancePolicy_id"] = id
        return new TokenIssuancePolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.tokenLifetimePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a tokenLifetimePolicyRequestBuilder
     */
    public tokenLifetimePoliciesById(id: string) : TokenLifetimePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenLifetimePolicy_id"] = id
        return new TokenLifetimePolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
