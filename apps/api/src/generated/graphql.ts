import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphQLISODateTime: any;
  GraphQLJSON: any;
};

export type AbstractFacilityCarrierConfiguration = {
  key: Scalars['String'];
};

export type Address = {
  additionalAddressInfo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  /** A two-digit country code as per ISO 3166-1 alpha-2 */
  country: Scalars['String'];
  /** Attributes that can be added to the address. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  houseNumber: Scalars['String'];
  phoneNumbers?: Maybe<Array<AddressPhoneNumber>>;
  postalCode: Scalars['String'];
  street: Scalars['String'];
};

export type AddressPhoneNumber = {
  __typename?: 'AddressPhoneNumber';
  /** Attributes that can be added to the phonenumber. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  /** Can be used to give a description for the number, like \"private\", \"business number\", etc. */
  label?: Maybe<Scalars['String']>;
  type?: Maybe<PhoneNumberType>;
  /** The number itself. We do not enforce any format (yet). */
  value: Scalars['String'];
};

export type AddressPhoneNumberInput = {
  /** Attributes that can be added to the phonenumber. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  /** Can be used to give a description for the number, like \"private\", \"business number\", etc. */
  label?: InputMaybe<Scalars['String']>;
  type: PhoneNumberType;
  /** The number itself. We do not enforce any format (yet). */
  value: Scalars['String'];
};

export type AngelCredentialsInput = {
  /** X-Auth-Token for callbacks from Angel */
  authToken?: InputMaybe<Scalars['String']>;
  /** Angel password */
  password?: InputMaybe<Scalars['String']>;
  /** Angel username */
  username?: InputMaybe<Scalars['String']>;
};

export type AngelFacilityCarrierConfiguration = AbstractFacilityCarrierConfiguration & {
  __typename?: 'AngelFacilityCarrierConfiguration';
  key: Scalars['String'];
  pickupLocationId?: Maybe<Scalars['String']>;
};

export type AngelFacilityCarrierConfigurationInput = {
  key: Scalars['String'];
  pickupLocationId?: InputMaybe<Scalars['String']>;
};

export type Article = {
  /** Attributes that can be added to the article. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  /** A web link to a picture of this article. Please make sure that no authentication is required to fetch the image! */
  imageUrl?: Maybe<Scalars['String']>;
  /** This is a reference to an article number */
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type ArticleAttributeItem = {
  __typename?: 'ArticleAttributeItem';
  /** This category is used by OCFF to customize implemented processes. Categorized attributes are used by various processes and tools throughout our platform. For a complete list of possible categories and the correct use of those please refer to the documentation. Default value: miscellaneous */
  category?: Maybe<ArticleAttributeItemCategory>;
  /** Providing the key %%subtitle%% here will cause the value to appear for example in the App directly under the title. With all other attributes also the key will be displayed in the clients. */
  key: Scalars['String'];
  /** This value gives the priority in the respective attribute category. The lower the value the higher is the priority, e.g. priority 1 is higher than priority 10. Attributes that have the highest priority might be selected for display in different articles of OCFF. Default Value is 1001. For details please contact the product owners. */
  priority?: Maybe<Scalars['Int']>;
  value: Scalars['String'];
};

export const enum ArticleAttributeItemCategory {
  Descriptive = 'Descriptive',
  Miscellaneous = 'Miscellaneous',
  PickingSequence = 'PickingSequence'
};

export type ArticleAttributeItemInput = {
  /** This category is used by OCFF to customize implemented processes. Categorized attributes are used by various processes and tools throughout our platform. For a complete list of possible categories and the correct use of those please refer to the documentation. Default value: miscellaneous */
  category?: InputMaybe<ArticleAttributeItemCategory>;
  /** Providing the key %%subtitle%% here will cause the value to appear for example in the App directly under the title. With all other attributes also the key will be displayed in the clients. */
  key: Scalars['String'];
  /** This value gives the priority in the respective attribute category. The lower the value the higher is the priority, e.g. priority 1 is higher than priority 10. Attributes that have the highest priority might be selected for display in different articles of OCFF. Default Value is 1001. For details please contact the product owners. */
  priority?: InputMaybe<Scalars['Int']>;
  value: Scalars['String'];
};

export const enum AttributeItemCategory {
  Descriptive = 'DESCRIPTIVE',
  Miscellaneous = 'MISCELLANEOUS',
  PickingSequence = 'PICKING_SEQUENCE'
};

export type BatchPickingConfiguration = VersionedResource & {
  __typename?: 'BatchPickingConfiguration';
  active: Scalars['Boolean'];
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  version: Scalars['Int'];
};

export type BatchPickingConfigurationInput = {
  active: Scalars['Boolean'];
  version: Scalars['Int'];
};

export type Carrier = VersionedResource & {
  __typename?: 'Carrier';
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  defaultParcelWeightInGram?: Maybe<Scalars['Int']>;
  deliveryType?: Maybe<CarrierDeliveryType>;
  id: Scalars['ID'];
  /** References the KEP. Currently allowed values are DHL, DPD and CUSTOM. */
  key: Scalars['String'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  lifecycle?: Maybe<CarrierLifecycle>;
  logoUrl?: Maybe<Scalars['String']>;
  /** This is the well known name for a supported CEP partner. Can be adapted to the clients needs. */
  name: Scalars['String'];
  status?: Maybe<CarrierStatus>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type CarrierConfiguration = VersionedResource & {
  __typename?: 'CarrierConfiguration';
  carrierRef: Scalars['String'];
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  returnLabel: Scalars['Boolean'];
  version: Scalars['Int'];
};

export type CarrierConfigurationInput = {
  carrierRef: Scalars['String'];
  returnLabel: Scalars['Boolean'];
  version: Scalars['Int'];
};

export type CarrierConnection = {
  __typename?: 'CarrierConnection';
  edges: Array<CarrierEdge>;
  pageInfo: PageInfo;
};

export type CarrierCreateInput = {
  defaultParcelWeightInGram?: InputMaybe<Scalars['Int']>;
  deliveryType?: InputMaybe<CarrierDeliveryType>;
  /** References the KEP. Currently allowed values are DHL, DPD and CUSTOM. */
  key: Scalars['String'];
  lifecycle?: InputMaybe<CarrierLifecycle>;
  logoUrl?: InputMaybe<Scalars['String']>;
  /** This is the well known name for a supported CEP partner. Can be adapted to the clients needs. */
  name: Scalars['String'];
  status?: InputMaybe<CarrierStatus>;
};

export const enum CarrierDeliveryType {
  Delivery = 'DELIVERY',
  Sameday = 'SAMEDAY'
};

export type CarrierEdge = {
  __typename?: 'CarrierEdge';
  cursor: Scalars['String'];
  node: Carrier;
};

export const enum CarrierLifecycle {
  Alpha = 'ALPHA',
  Beta = 'BETA',
  Ga = 'GA'
};

export const enum CarrierStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
};

export type CarrierUpdateInput = {
  defaultParcelWeightInGram?: InputMaybe<Scalars['Int']>;
  deliveryType?: InputMaybe<CarrierDeliveryType>;
  lifecycle?: InputMaybe<CarrierLifecycle>;
  logoUrl?: InputMaybe<Scalars['String']>;
  /** This is the well known name for a supported CEP partner. Can be adapted to the clients needs. */
  name?: InputMaybe<Scalars['String']>;
};

export const enum Channel {
  Collect = 'COLLECT',
  Shipping = 'SHIPPING'
};

export type ClickAndCollectDetails = {
  __typename?: 'ClickAndCollectDetails';
  /** Includes information about Click & Collect recipient */
  identifier?: Maybe<Scalars['String']>;
  /** Indicates if the order is already paid. */
  paid?: Maybe<Scalars['Boolean']>;
};

export type ClickAndCollectDetailsCreateInput = {
  /** Includes information about Click & Collect recipient */
  identifier?: InputMaybe<Scalars['String']>;
};

export type ClickAndCollectRerouteConfiguration = {
  __typename?: 'ClickAndCollectRerouteConfiguration';
  active: Scalars['Boolean'];
};

export type ClickAndCollectRerouteConfigurationInput = {
  active: Scalars['Boolean'];
};

export type ClosingDay = {
  __typename?: 'ClosingDay';
  date: Scalars['GraphQLISODateTime'];
  reason: Scalars['String'];
  recurrence: RecurrenceEnum;
};

export type ClosingDayInput = {
  date: Scalars['GraphQLISODateTime'];
  reason: Scalars['String'];
  recurrence: RecurrenceEnum;
};

export type Consumer = {
  __typename?: 'Consumer';
  addresses: Array<ConsumerAddress>;
  /** Attributes that can be added to the consumer. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  /** The email address of the consumer. */
  email?: Maybe<Scalars['String']>;
};

export type ConsumerAddress = Address & {
  __typename?: 'ConsumerAddress';
  additionalAddressInfo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  firstName?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  phoneNumbers?: Maybe<Array<AddressPhoneNumber>>;
  postalCode: Scalars['String'];
  salutation?: Maybe<Scalars['String']>;
  street: Scalars['String'];
};

export type ConsumerAddressInput = {
  additionalAddressInfo?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  companyName?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  firstName?: InputMaybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumbers?: InputMaybe<Array<AddressPhoneNumberInput>>;
  postalCode: Scalars['String'];
  salutation?: InputMaybe<Scalars['String']>;
  street: Scalars['String'];
};

export type Coordinates = {
  __typename?: 'Coordinates';
  /** Latitude value */
  lat: Scalars['Float'];
  /** Longitude value */
  lon: Scalars['Float'];
};

export type CoordinatesInput = {
  /** Latitude value */
  lat: Scalars['Float'];
  /** Longitude value */
  lon: Scalars['Float'];
};

export type CutoffTime = {
  __typename?: 'CutoffTime';
  hour: Scalars['Int'];
  minute: Scalars['Int'];
};

export type CutoffTimeConfiguration = VersionedResource & {
  __typename?: 'CutoffTimeConfiguration';
  clickAndCollect: CutoffTime;
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  shipFromStore: CutoffTime;
  version: Scalars['Int'];
};

export type CutoffTimeConfigurationUpdateInput = {
  clickAndCollect: CutoffTimeInput;
  shipFromStore: CutoffTimeInput;
  version: Scalars['Int'];
};

export type CutoffTimeInput = {
  hour: Scalars['Int'];
  minute: Scalars['Int'];
};

export type DhlCredentialsInput = {
  /** Internal API Key to communicate with the CEP Api */
  apiKey?: InputMaybe<Scalars['String']>;
  /** Abrechnungsnummer DHL Paket, displayed in the DHL Geschäftskundenportal under 'Vertragspositionen' */
  dhlAccountNumber?: InputMaybe<Scalars['String']>;
  /** Password you use to login to the DHL Geschäftskundenportal */
  dhlGKPassword?: InputMaybe<Scalars['String']>;
  /** Username (Benutzername) you use to login to the DHL Geschäftskundenportal */
  dhlGkUsername?: InputMaybe<Scalars['String']>;
};

export type DpdCredentialsInput = {
  /** Delis ID to create a DPD auth token */
  delisId?: InputMaybe<Scalars['String']>;
  /** Password to create a DPD auth token */
  password?: InputMaybe<Scalars['String']>;
};

export type DecisionLogRef = {
  __typename?: 'DecisionLogRef';
  /** The iteration through the finalizer process */
  finalizeRun?: Maybe<Scalars['Int']>;
  /** A reference to the finalizer decision log */
  url?: Maybe<Scalars['String']>;
};

export type DefaultPickingTimesConfiguration = VersionedResource & {
  __typename?: 'DefaultPickingTimesConfiguration';
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  pickingTimes: PickingTimes;
  version: Scalars['Int'];
};

export type DeliveryArea = {
  __typename?: 'DeliveryArea';
  country: Scalars['String'];
  postalCode: Scalars['String'];
};

export type DeliveryAreaInput = {
  country: Scalars['String'];
  postalCode: Scalars['String'];
};

export type DeliveryInformation = {
  __typename?: 'DeliveryInformation';
  channel?: Maybe<Channel>;
  details?: Maybe<DeliveryInformationDetails>;
  /** At which time the result is expected. */
  targetTime?: Maybe<Scalars['GraphQLISODateTime']>;
};

export type DeliveryInformationCreateInput = {
  channel?: InputMaybe<Channel>;
  details?: InputMaybe<DeliveryInformationDetailsCreateInput>;
  /** At which time the result is expected. */
  targetTime?: InputMaybe<Scalars['GraphQLISODateTime']>;
};

export type DeliveryInformationDetails = {
  __typename?: 'DeliveryInformationDetails';
  collect?: Maybe<ClickAndCollectDetails>;
  shipping?: Maybe<ShippingDetails>;
};

export type DeliveryInformationDetailsCreateInput = {
  collect?: InputMaybe<ClickAndCollectDetailsCreateInput>;
  shipping?: InputMaybe<ShippingDetailsCreateInput>;
};

export type DeliveryPreferences = {
  __typename?: 'DeliveryPreferences';
  collect?: Maybe<Array<PreselectedFacility>>;
  shipping?: Maybe<DeliveryPreferencesShipping>;
  /** References of facility that could supply contents of the order to another facility */
  supplyingFacilities?: Maybe<Array<Scalars['String']>>;
  /** At which time the result is expected. */
  targetTime?: Maybe<Scalars['GraphQLISODateTime']>;
};

export type DeliveryPreferencesShipping = {
  __typename?: 'DeliveryPreferencesShipping';
  preferredCarriers?: Maybe<Array<Scalars['String']>>;
  preselectedFacilities?: Maybe<Array<PreselectedFacility>>;
  serviceLevel?: Maybe<ServiceLevel>;
  /**
   * BEST_EFFORT: the parcel will reach the recipient as fast as possible without giving any guarantees. More types will be added in the future.
   * @deprecated No longer supported
   */
  serviceType?: Maybe<ServiceType>;
};

export type DhlFacilityCarrierConfiguration = AbstractFacilityCarrierConfiguration & {
  __typename?: 'DhlFacilityCarrierConfiguration';
  accountingNumberParcel?: Maybe<Scalars['String']>;
  accountingNumberParcelInternational?: Maybe<Scalars['String']>;
  accountingNumberReturn?: Maybe<Scalars['String']>;
  accountingNumberStandardNationalGoGreen?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  returnReceiverId?: Maybe<Scalars['String']>;
};

export type DhlFacilityCarrierConfigurationInput = {
  accountingNumberParcel?: InputMaybe<Scalars['String']>;
  accountingNumberParcelInternational?: InputMaybe<Scalars['String']>;
  accountingNumberReturn?: InputMaybe<Scalars['String']>;
  accountingNumberStandardNationalGoGreen?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  returnReceiverId?: InputMaybe<Scalars['String']>;
};

export const enum DocumentType {
  Pdf = 'PDF'
};

export type Editor = {
  __typename?: 'Editor';
  userId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type ExternalDocument = VersionedResource & {
  __typename?: 'ExternalDocument';
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  section: Section;
  type: DocumentType;
  version: Scalars['Int'];
};

export type ExternalDocumentInput = {
  file?: InputMaybe<NamedFileInput>;
  section: Section;
  type: DocumentType;
};

export type ExternalDocumentToUpdateInput = {
  file: NamedFileInput;
  version: Scalars['Int'];
};

export type FacilitiesConnection = {
  __typename?: 'FacilitiesConnection';
  edges: Array<FacilityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Facility = VersionedResource & {
  __typename?: 'Facility';
  address: FacilityAddress;
  carriers?: Maybe<Array<FacilityCarrier>>;
  closingDays?: Maybe<Array<ClosingDay>>;
  configs?: Maybe<Array<LinkedConfiguration>>;
  contact?: Maybe<FacilityContact>;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  fulfillmentProcessBuffer?: Maybe<Scalars['Int']>;
  /** The id of this facility. It is generated during creation automatically and suits as the primary identifier of the described entity. */
  id: Scalars['ID'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  locationType?: Maybe<FacilityLocationType>;
  name: Scalars['String'];
  pickingTimes?: Maybe<PickingTimes>;
  services?: Maybe<Array<FacilityService>>;
  status: FacilityStatus;
  /** The id of the facility in the tenants own system */
  tenantFacilityId?: Maybe<Scalars['String']>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type FacilityAddress = Address & {
  __typename?: 'FacilityAddress';
  additionalAddressInfo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  companyName: Scalars['String'];
  /** A two-digit country code as per ISO 3166-1 alpha-2 */
  country: Scalars['String'];
  /** Attributes that can be added to the address. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  emailAddresses?: Maybe<Array<FacilityEmailAddress>>;
  houseNumber: Scalars['String'];
  phoneNumbers?: Maybe<Array<AddressPhoneNumber>>;
  postalCode: Scalars['String'];
  resolvedCoordinates?: Maybe<Coordinates>;
  resolvedTimeZone?: Maybe<TimeZone>;
  street: Scalars['String'];
};

export type FacilityAddressCreateInput = {
  additionalAddressInfo?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  companyName: Scalars['String'];
  /** A two-digit country code as per ISO 3166-1 alpha-2 */
  country: Scalars['String'];
  /** Attributes that can be added to the address. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  emailAddresses?: InputMaybe<Array<FacilityEmailAddressInput>>;
  houseNumber: Scalars['String'];
  phoneNumbers?: InputMaybe<Array<AddressPhoneNumberInput>>;
  postalCode: Scalars['String'];
  street: Scalars['String'];
};

export type FacilityAddressInput = {
  additionalAddressInfo?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  companyName: Scalars['String'];
  /** A two-digit country code as per ISO 3166-1 alpha-2 */
  country: Scalars['String'];
  /** Attributes that can be added to the address. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  emailAddresses?: InputMaybe<Array<FacilityEmailAddressInput>>;
  houseNumber: Scalars['String'];
  phoneNumbers?: InputMaybe<Array<AddressPhoneNumberInput>>;
  postalCode: Scalars['String'];
  resolvedCoordinates?: InputMaybe<CoordinatesInput>;
  street: Scalars['String'];
};

export type FacilityCarrier = {
  __typename?: 'FacilityCarrier';
  /** ID that references the configured carrier. */
  carrierRef: Scalars['ID'];
  configuration?: Maybe<AbstractFacilityCarrierConfiguration>;
  cutoffTime?: Maybe<CutoffTime>;
  deliveryAreas?: Maybe<Array<Maybe<DeliveryArea>>>;
  deliveryType?: Maybe<CarrierDeliveryType>;
  facilityRef: Scalars['ID'];
  key: Scalars['String'];
  /** This is the well known name for a supported CEP partner. Can be adapted to the clients needs. */
  name?: Maybe<Scalars['String']>;
  status?: Maybe<CarrierStatus>;
};

export type FacilityContact = {
  __typename?: 'FacilityContact';
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  roleDescription?: Maybe<Scalars['String']>;
};

export type FacilityContactCreateInput = {
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  roleDescription?: InputMaybe<Scalars['String']>;
};

export type FacilityCreateInput = {
  address: FacilityAddressCreateInput;
  closingDays?: InputMaybe<Array<ClosingDayInput>>;
  contact?: InputMaybe<FacilityContactCreateInput>;
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  fulfillmentProcessBuffer?: InputMaybe<Scalars['Int']>;
  locationType?: InputMaybe<FacilityLocationType>;
  name: Scalars['String'];
  pickingTimes?: InputMaybe<PickingTimesInput>;
  services?: InputMaybe<Array<FacilityServiceCreateInput>>;
  status?: InputMaybe<FacilityStatus>;
  /** The id of the facility in the tenants own system */
  tenantFacilityId?: InputMaybe<Scalars['String']>;
};

export type FacilityEdge = {
  __typename?: 'FacilityEdge';
  cursor: Scalars['String'];
  node: Facility;
};

export type FacilityEmailAddress = {
  __typename?: 'FacilityEmailAddress';
  /** Human readable information who is the recipient for emails sent to this address. */
  recipient?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FacilityEmailAddressInput = {
  /** Human readable information who is the recipient for emails sent to this address. */
  recipient?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export const enum FacilityLocationType {
  Store = 'STORE',
  Warehouse = 'WAREHOUSE'
};

export const enum FacilityOrderBy {
  Created = 'CREATED',
  Name = 'NAME'
};

export type FacilityService = {
  __typename?: 'FacilityService';
  type?: Maybe<FacilityServiceType>;
};

export type FacilityServiceCreateInput = {
  type: FacilityServiceType;
};

export const enum FacilityServiceType {
  Pickup = 'PICKUP',
  ShipFromStore = 'SHIP_FROM_STORE'
};

export const enum FacilityStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE',
  Suspended = 'SUSPENDED'
};

export type FacilityUpdateInput = {
  address?: InputMaybe<FacilityAddressCreateInput>;
  closingDays?: InputMaybe<Array<ClosingDayInput>>;
  contact?: InputMaybe<FacilityContactCreateInput>;
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  fulfillmentProcessBuffer?: InputMaybe<Scalars['Int']>;
  locationType?: InputMaybe<FacilityLocationType>;
  name?: InputMaybe<Scalars['String']>;
  pickingTimes?: InputMaybe<PickingTimesInput>;
  services?: InputMaybe<Array<FacilityServiceCreateInput>>;
  status?: InputMaybe<FacilityStatus>;
  /** The id of the facility in the tenants own system */
  tenantFacilityId?: InputMaybe<Scalars['String']>;
};

export type Feature = VersionedResource & {
  __typename?: 'Feature';
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  name: Scalars['String'];
  status: FeatureStatus;
  version: Scalars['Int'];
};

export type FeatureInput = {
  name: Scalars['String'];
  status: FeatureStatus;
  version: Scalars['Int'];
};

export const enum FeatureStatus {
  Disabled = 'disabled',
  Enabled = 'enabled',
  Inactive = 'inactive'
};

export type FulfillmentProcessBufferConfiguration = VersionedResource & {
  __typename?: 'FulfillmentProcessBufferConfiguration';
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  minutes: Scalars['Int'];
  version: Scalars['Int'];
};

export type FulfillmentProcessBufferInput = {
  minutes: Scalars['Int'];
  version: Scalars['Int'];
};

export type GlsCredentialsInput = {
  /** GLS password */
  password?: InputMaybe<Scalars['String']>;
  /** GLS Track And Trace password */
  trackAndTracePassword?: InputMaybe<Scalars['String']>;
  /** GLS Track And Trace username */
  trackAndTraceUsername?: InputMaybe<Scalars['String']>;
  /** GLS username */
  username?: InputMaybe<Scalars['String']>;
};

export type GlsFacilityCarrierConfiguration = AbstractFacilityCarrierConfiguration & {
  __typename?: 'GlsFacilityCarrierConfiguration';
  contactId?: Maybe<Scalars['String']>;
  key: Scalars['String'];
};

export type GlsFacilityCarrierConfigurationInput = {
  contactId?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
};

export type HandoverJob = VersionedResource & {
  __typename?: 'HandoverJob';
  /** Indicates if gdpr related data was anonymized */
  anonymized?: Maybe<Scalars['Boolean']>;
  carrier?: Maybe<Carrier>;
  carrierRef?: Maybe<Scalars['String']>;
  channel: HandoverJobChannel;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  facilityRef: Scalars['String'];
  /** The id of this handoverjob. It is generated during creation automatically and suits as the primary identifier of the described entity. */
  id: Scalars['ID'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  loadUnitRefs?: Maybe<Array<Scalars['String']>>;
  orderDate?: Maybe<Scalars['GraphQLISODateTime']>;
  /** Indicates if the order is already paid */
  paid?: Maybe<Scalars['Boolean']>;
  parcel?: Maybe<Parcel>;
  parcelRef?: Maybe<Scalars['String']>;
  pickJob?: Maybe<PickJob>;
  pickJobRef?: Maybe<Scalars['String']>;
  shipment?: Maybe<Shipment>;
  shipmentRef?: Maybe<Scalars['String']>;
  status: HandoverJobStatus;
  /** At which time the result is expected. */
  targetTime?: Maybe<Scalars['GraphQLISODateTime']>;
  tenantOrderId?: Maybe<Scalars['String']>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type HandoverJobChangedEvent = {
  __typename?: 'HandoverJobChangedEvent';
  handoverJob?: Maybe<HandoverJob>;
  handoverJobId: Scalars['String'];
  type: HandoverJobChangedEventType;
};

export const enum HandoverJobChangedEventType {
  HandoverJobCreated = 'HANDOVER_JOB_CREATED',
  HandoverJobUpdated = 'HANDOVER_JOB_UPDATED'
};

export const enum HandoverJobChannel {
  Collect = 'COLLECT',
  Delivery = 'DELIVERY'
};

export type HandoverJobCreateInput = {
  carrierRef?: InputMaybe<Scalars['String']>;
  channel: HandoverJobChannel;
  /** Attributes that can be added to the handover job. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  /** The id of the facility reference. */
  facilityRef: Scalars['String'];
  /** Reference to array of load unit Refs */
  loadUnitRefs?: InputMaybe<Array<Scalars['String']>>;
  /** The date this order was created at the supplying system. */
  orderDate: Scalars['GraphQLISODateTime'];
  /** Indicates if the order is already paid */
  paid?: InputMaybe<Scalars['Boolean']>;
  /** The reference to the parcel. */
  parcelRef?: InputMaybe<Scalars['String']>;
  /** The reference to the pickjob for which the handoverjob is assigned to */
  pickJobRef?: InputMaybe<Scalars['String']>;
  /** The reference to the shipment belonging to the handoverjob */
  shipmentRef?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<HandoverJobStatus>;
  /** At which time the result is expected. */
  targetTime: Scalars['GraphQLISODateTime'];
  /** Field can be used as a reference number in foreign systems, for example as a reference to the source system's identifier for this order. */
  tenantOrderId: Scalars['String'];
};

export type HandoverJobEdge = {
  __typename?: 'HandoverJobEdge';
  cursor: Scalars['String'];
  node: HandoverJob;
};

export const enum HandoverJobOrderBy {
  StatusTargetTimeLastModifiedDate = 'STATUS_TARGET_TIME_LAST_MODIFIED_DATE'
};

export const enum HandoverJobStatus {
  Handedover = 'HANDEDOVER',
  Open = 'OPEN'
};

export type HandoverJobUpdateInput = {
  /** Attributes that can be added to the handover job. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
};

export type HandoverJobsConnection = {
  __typename?: 'HandoverJobsConnection';
  edges: Array<HandoverJobEdge>;
  pageInfo: PageInfo;
};

export type IconInput = {
  /** File content base64 encoded */
  content: Scalars['String'];
  /** File name with extension */
  name: Scalars['String'];
};

export type LinkedConfiguration = {
  __typename?: 'LinkedConfiguration';
  ref?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
};

export type Listing = VersionedResource & {
  __typename?: 'Listing';
  attributes?: Maybe<Array<ArticleAttributeItem>>;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  facilityId: Scalars['String'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  partialStocks?: Maybe<Array<PartialStock>>;
  price?: Maybe<Scalars['Int']>;
  status: ListingStatus;
  stockinformation?: Maybe<StockInformation>;
  /** This is a reference to an article Id */
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type ListingCreateInput = {
  attributes?: InputMaybe<Array<ArticleAttributeItemInput>>;
  facilityId: Scalars['String'];
  imageUrl?: InputMaybe<Scalars['String']>;
  partialStocks?: InputMaybe<Array<PartialStockInput>>;
  price?: InputMaybe<Scalars['Int']>;
  stockinformation?: InputMaybe<StockInformationInput>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type ListingEdge = {
  __typename?: 'ListingEdge';
  cursor: Scalars['String'];
  node: Listing;
};

export const enum ListingStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
};

export type ListingUpdateInput = {
  attributes?: InputMaybe<Array<ArticleAttributeItemInput>>;
  facilityId: Scalars['String'];
  imageUrl?: InputMaybe<Scalars['String']>;
  partialStocks?: InputMaybe<Array<PartialStockInput>>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<ListingStatus>;
  stockinformation?: InputMaybe<StockInformationInput>;
  tenantArticleId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type ListingsConnection = {
  __typename?: 'ListingsConnection';
  edges: Array<ListingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LoadUnit = VersionedResource & {
  __typename?: 'LoadUnit';
  codes?: Maybe<Array<Scalars['String']>>;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  description?: Maybe<Scalars['String']>;
  /** The id of the facility reference. The given ID has to be present in the system. But it is not updatable via PUT request */
  facilityRef: Scalars['String'];
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  loadUnitTypeRef: Scalars['String'];
  name: Scalars['String'];
  pickJobRefs: Array<Scalars['String']>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type LoadUnitCreateInput = {
  codes?: InputMaybe<Array<Scalars['String']>>;
  loadUnitTypeRef: Scalars['String'];
  pickJobRefs: Array<Scalars['String']>;
};

export type LoadUnitEdge = {
  __typename?: 'LoadUnitEdge';
  cursor: Scalars['String'];
  node: LoadUnit;
};

export type LoadUnitType = VersionedResource & {
  __typename?: 'LoadUnitType';
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  description?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  name: Scalars['String'];
  /** This value gives the priority in the respective loadUnitType. The lower the value the higher is the priority, e.g. priority 1 is higher than priority 10. The priority can be used to order loadUnityTypes. */
  priority?: Maybe<Scalars['Int']>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type LoadUnitTypeCreateInput = {
  descriptionLocalized?: InputMaybe<Scalars['GraphQLJSON']>;
  icon?: InputMaybe<IconInput>;
  nameLocalized: Scalars['GraphQLJSON'];
  priority?: InputMaybe<Scalars['Int']>;
};

export type LoadUnitTypeEdge = {
  __typename?: 'LoadUnitTypeEdge';
  cursor: Scalars['String'];
  node: LoadUnitType;
};

export type LoadUnitTypeUpdateInput = {
  descriptionLocalized?: InputMaybe<Scalars['GraphQLJSON']>;
  nameLocalized?: InputMaybe<Scalars['GraphQLJSON']>;
  priority?: InputMaybe<Scalars['Int']>;
};

export type LoadUnitTypesConnection = {
  __typename?: 'LoadUnitTypesConnection';
  edges: Array<LoadUnitTypeEdge>;
  pageInfo: PageInfo;
};

export type LoadUnitsConnection = {
  __typename?: 'LoadUnitsConnection';
  edges: Array<LoadUnitEdge>;
  pageInfo: PageInfo;
};

export type Location = {
  __typename?: 'Location';
  locationRef?: Maybe<Scalars['String']>;
  scannableCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LocationInput = {
  locationRef?: InputMaybe<Scalars['String']>;
  scannableCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MeasurementUnit = VersionedResource & {
  __typename?: 'MeasurementUnit';
  /** Translated abbreviation of the measurement unit */
  abbreviation?: Maybe<Scalars['String']>;
  abbreviationLocalized: Scalars['GraphQLJSON'];
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  id: Scalars['ID'];
  /** Descriptor for the measurement unit */
  key: Scalars['String'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  /** Translated name of the measurement unit */
  name?: Maybe<Scalars['String']>;
  nameLocalized: Scalars['GraphQLJSON'];
  /** Indicates that the given unit need to be measured. */
  requiresMeasurement?: Maybe<Scalars['Boolean']>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type MeasurementUnitInput = {
  abbreviationLocalized: Scalars['GraphQLJSON'];
  key: Scalars['String'];
  nameLocalized: Scalars['GraphQLJSON'];
  requiresMeasurement?: InputMaybe<Scalars['Boolean']>;
};

export type MeasurementUnitUpdateInput = {
  abbreviationLocalized?: InputMaybe<Scalars['GraphQLJSON']>;
  key: Scalars['String'];
  nameLocalized?: InputMaybe<Scalars['GraphQLJSON']>;
  requiresMeasurement?: InputMaybe<Scalars['Boolean']>;
};

export type MeasurementUnitsConnection = {
  __typename?: 'MeasurementUnitsConnection';
  edges: Array<MeasurementUnitsEdge>;
  pageInfo: PageInfo;
};

export type MeasurementUnitsEdge = {
  __typename?: 'MeasurementUnitsEdge';
  cursor: Scalars['String'];
  node: MeasurementUnit;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateCarrier: Carrier;
  activateFacilityCarrier: FacilityCarrier;
  assignFacility?: Maybe<RoutingPlan>;
  cancelOrder: Order;
  changeAngelCredentials: Carrier;
  changeDHLCredentials: Carrier;
  changeDPDCredentials: Carrier;
  changeGLSCredentials: Carrier;
  changeShipmentCarrier: Shipment;
  closePickJob: PickJob;
  createCarrier: Carrier;
  createFacility: Facility;
  createHandoverJob: HandoverJob;
  createListings: Array<Listing>;
  createLoadUnitType: LoadUnitType;
  createLoadUnits: Array<LoadUnit>;
  createMeasurementUnit: MeasurementUnit;
  createPackJob: PackJob;
  createParcel: Parcel;
  createPickJob: PickJob;
  createPickRun: PickRun;
  createProcessDocument: ExternalDocument;
  createReturnJob: ReturnJob;
  createShipment: Shipment;
  deactivateCarrier: Carrier;
  deactivateFacilityCarrier: FacilityCarrier;
  deleteFacility: Scalars['Boolean'];
  deleteGlobalSubstitutes: Scalars['Boolean'];
  deleteListing: Scalars['Boolean'];
  deleteLoadUnit: Scalars['Boolean'];
  deleteLoadUnits: Scalars['Boolean'];
  deleteMeasurementUnit: Scalars['Boolean'];
  deletePartialStocks: Scalars['Boolean'];
  deletePickJobLoadUnits: Scalars['Boolean'];
  finishPackJob: PackJob;
  finishPickRun: PickRun;
  handover: HandoverJob;
  openPickJob: PickJob;
  patchPartialStocks: Array<Maybe<PartialStock>>;
  rejectPickJob: PickJob;
  removePickJobFromPickRun: PickRun;
  reopenPackJob: PackJob;
  reopenParcel: Parcel;
  /** @deprecated Use mutation rejectPickJob instead. */
  requestRerouteForPickJob: Scalars['Boolean'];
  restowAnItem: RestowItem;
  restowPickJob: PickJob;
  retryRoutingPlan?: Maybe<RoutingPlan>;
  revertHandover: HandoverJob;
  setFeatureStatus: Feature;
  setPickJobInProgress: PickJob;
  startPackJob: PackJob;
  startPickRun: PickRun;
  takeOverPickJob: PickJob;
  updateAngelFacilityCarrierConfiguration: FacilityCarrier;
  updateCarrier: Carrier;
  updateCarrierConfiguration: CarrierConfiguration;
  updateCutoffTimeConfiguration: CutoffTimeConfiguration;
  updateDhlFacilityCarrierConfiguration: FacilityCarrier;
  updateFacility: Facility;
  updateFacilityCarrierCutoffTime: FacilityCarrier;
  updateFacilityCarrierDeliveryAreas: FacilityCarrier;
  updateFulfillmentProcessBufferConfiguration: FulfillmentProcessBufferConfiguration;
  updateGlsFacilityCarrierConfiguration: FacilityCarrier;
  updateHandoverJob: HandoverJob;
  updateListing?: Maybe<Listing>;
  updateLoadUnitType: LoadUnitType;
  updateLoadUnitTypeIcon: LoadUnitType;
  updateMeasurementUnit: MeasurementUnit;
  updatePartialStocks: Array<Maybe<PartialStock>>;
  updatePickJob: PickJob;
  updatePickLineItems: PickJob;
  updatePickRunLineItems: PickRun;
  updatePickingTimesConfiguration: DefaultPickingTimesConfiguration;
  updateProcessDocument: ExternalDocument;
  updateRerouteShortPickConfiguration: RerouteShortPickConfiguration;
  updateRerouteTimeTriggeredConfiguration: RerouteTimeTriggeredConfiguration;
  upsertBatchPickingConfiguration: BatchPickingConfiguration;
  upsertGlobalSubstitutes: Substitutes;
  upsertTakeOverPickJobConfiguration?: Maybe<TakeOverPickJobConfiguration>;
};


export type MutationActivateCarrierArgs = {
  carrierId: Scalars['String'];
  carrierVersion: Scalars['Int'];
};


export type MutationActivateFacilityCarrierArgs = {
  carrierRef: Scalars['String'];
  facilityId: Scalars['String'];
};


export type MutationAssignFacilityArgs = {
  facilityId: Scalars['String'];
  routingPlanId: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationCancelOrderArgs = {
  orderId: Scalars['String'];
};


export type MutationChangeAngelCredentialsArgs = {
  carrierId: Scalars['String'];
  carrierVersion: Scalars['Int'];
  credentials: AngelCredentialsInput;
};


export type MutationChangeDhlCredentialsArgs = {
  carrierId: Scalars['String'];
  carrierVersion: Scalars['Int'];
  credentials: DhlCredentialsInput;
};


export type MutationChangeDpdCredentialsArgs = {
  carrierId: Scalars['String'];
  carrierVersion: Scalars['Int'];
  credentials: DpdCredentialsInput;
};


export type MutationChangeGlsCredentialsArgs = {
  carrierId: Scalars['String'];
  carrierVersion: Scalars['Int'];
  credentials: GlsCredentialsInput;
};


export type MutationChangeShipmentCarrierArgs = {
  carrierRef: Scalars['String'];
  shipmentId: Scalars['String'];
};


export type MutationClosePickJobArgs = {
  pickJobId: Scalars['String'];
  pickJobVersion: Scalars['Int'];
};


export type MutationCreateCarrierArgs = {
  carrier?: InputMaybe<CarrierCreateInput>;
};


export type MutationCreateFacilityArgs = {
  facility: FacilityCreateInput;
};


export type MutationCreateHandoverJobArgs = {
  handoverJob: HandoverJobCreateInput;
};


export type MutationCreateListingsArgs = {
  listingsInput: Array<ListingCreateInput>;
};


export type MutationCreateLoadUnitTypeArgs = {
  loadUnitType: LoadUnitTypeCreateInput;
};


export type MutationCreateLoadUnitsArgs = {
  loadUnits: Array<LoadUnitCreateInput>;
};


export type MutationCreateMeasurementUnitArgs = {
  measurementUnitInput: MeasurementUnitInput;
};


export type MutationCreatePackJobArgs = {
  packJob: PackJobCreateInput;
};


export type MutationCreateParcelArgs = {
  parcel: ParcelCreateInput;
};


export type MutationCreatePickJobArgs = {
  pickJob: PickJobCreateInput;
};


export type MutationCreatePickRunArgs = {
  pickRun: PickRunCreateInput;
};


export type MutationCreateProcessDocumentArgs = {
  externalDocumentInput: ExternalDocumentInput;
  processId: Scalars['String'];
};


export type MutationCreateReturnJobArgs = {
  returnJob: ReturnJobInput;
};


export type MutationCreateShipmentArgs = {
  shipment: ShipmentCreateInput;
};


export type MutationDeactivateCarrierArgs = {
  carrierId: Scalars['String'];
  carrierVersion: Scalars['Int'];
};


export type MutationDeactivateFacilityCarrierArgs = {
  carrierRef: Scalars['String'];
  facilityId: Scalars['String'];
};


export type MutationDeleteFacilityArgs = {
  facilityId: Scalars['String'];
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteGlobalSubstitutesArgs = {
  tenantArticleId: Scalars['String'];
};


export type MutationDeleteListingArgs = {
  facilityId: Scalars['String'];
  tenantArticleId: Scalars['String'];
};


export type MutationDeleteLoadUnitArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLoadUnitsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationDeleteMeasurementUnitArgs = {
  id: Scalars['String'];
};


export type MutationDeletePartialStocksArgs = {
  facilityId: Scalars['String'];
  tenantArticleId: Scalars['String'];
};


export type MutationDeletePickJobLoadUnitsArgs = {
  pickJobRef: Scalars['String'];
};


export type MutationFinishPackJobArgs = {
  id: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationFinishPickRunArgs = {
  id: Scalars['String'];
  pickRunLineItems?: InputMaybe<Array<InputMaybe<PickRunLineItemUpdateInput>>>;
  version: Scalars['Int'];
};


export type MutationHandoverArgs = {
  handoverJobId: Scalars['String'];
  handoverJobVersion: Scalars['Int'];
};


export type MutationOpenPickJobArgs = {
  pickJobId: Scalars['String'];
  pickJobVersion: Scalars['Int'];
};


export type MutationPatchPartialStocksArgs = {
  facilityId: Scalars['String'];
  partialStocksUpdateInput: PartialStocksUpdateInput;
  tenantArticleId: Scalars['String'];
};


export type MutationRejectPickJobArgs = {
  pickJobId: Scalars['String'];
  pickJobVersion: Scalars['Int'];
};


export type MutationRemovePickJobFromPickRunArgs = {
  id: Scalars['String'];
  pickJobRef: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationReopenPackJobArgs = {
  id: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationReopenParcelArgs = {
  parcelId: Scalars['String'];
};


export type MutationRequestRerouteForPickJobArgs = {
  pickJobId: Scalars['String'];
};


export type MutationRestowAnItemArgs = {
  restowItemId: Scalars['String'];
  restowItemVersion: Scalars['Int'];
};


export type MutationRestowPickJobArgs = {
  pickJobId: Scalars['String'];
  pickJobVersion: Scalars['Int'];
};


export type MutationRetryRoutingPlanArgs = {
  routingPlanId: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationRevertHandoverArgs = {
  handoverJobId: Scalars['String'];
  handoverJobVersion: Scalars['Int'];
};


export type MutationSetFeatureStatusArgs = {
  feature: FeatureInput;
};


export type MutationSetPickJobInProgressArgs = {
  pickJobId: Scalars['String'];
  pickJobVersion: Scalars['Int'];
};


export type MutationStartPackJobArgs = {
  id: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationStartPickRunArgs = {
  id: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationTakeOverPickJobArgs = {
  pickJobId: Scalars['String'];
  pickJobVersion: Scalars['Int'];
};


export type MutationUpdateAngelFacilityCarrierConfigurationArgs = {
  carrierRef: Scalars['String'];
  configuration: AngelFacilityCarrierConfigurationInput;
  facilityId: Scalars['String'];
};


export type MutationUpdateCarrierArgs = {
  carrier?: InputMaybe<CarrierUpdateInput>;
  carrierId: Scalars['String'];
  carrierVersion: Scalars['Int'];
};


export type MutationUpdateCarrierConfigurationArgs = {
  input: CarrierConfigurationInput;
};


export type MutationUpdateCutoffTimeConfigurationArgs = {
  input: CutoffTimeConfigurationUpdateInput;
};


export type MutationUpdateDhlFacilityCarrierConfigurationArgs = {
  carrierRef: Scalars['String'];
  configuration: DhlFacilityCarrierConfigurationInput;
  facilityId: Scalars['String'];
};


export type MutationUpdateFacilityArgs = {
  facility: FacilityUpdateInput;
  facilityId: Scalars['String'];
  facilityVersion: Scalars['Int'];
};


export type MutationUpdateFacilityCarrierCutoffTimeArgs = {
  carrierRef: Scalars['String'];
  cutoffTime: CutoffTimeInput;
  facilityId: Scalars['String'];
};


export type MutationUpdateFacilityCarrierDeliveryAreasArgs = {
  carrierRef: Scalars['String'];
  deliveryAreas?: InputMaybe<Array<InputMaybe<DeliveryAreaInput>>>;
  facilityId: Scalars['String'];
};


export type MutationUpdateFulfillmentProcessBufferConfigurationArgs = {
  input: FulfillmentProcessBufferInput;
};


export type MutationUpdateGlsFacilityCarrierConfigurationArgs = {
  carrierRef: Scalars['String'];
  configuration: GlsFacilityCarrierConfigurationInput;
  facilityId: Scalars['String'];
};


export type MutationUpdateHandoverJobArgs = {
  handoverJobId: Scalars['String'];
  handoverJobUpdateInput: HandoverJobUpdateInput;
  handoverJobVersion: Scalars['Int'];
};


export type MutationUpdateListingArgs = {
  listingInput: ListingUpdateInput;
};


export type MutationUpdateLoadUnitTypeArgs = {
  loadUnitType: LoadUnitTypeUpdateInput;
  loadUnitTypeId: Scalars['String'];
  loadUnitTypeVersion: Scalars['Int'];
};


export type MutationUpdateLoadUnitTypeIconArgs = {
  icon: IconInput;
  loadUnitTypeId: Scalars['String'];
  loadUnitTypeVersion: Scalars['Int'];
};


export type MutationUpdateMeasurementUnitArgs = {
  id: Scalars['String'];
  measurementUnitUpdate?: InputMaybe<MeasurementUnitUpdateInput>;
  version: Scalars['Int'];
};


export type MutationUpdatePartialStocksArgs = {
  facilityId: Scalars['String'];
  partialStocksUpdateInput: PartialStocksUpdateInput;
  tenantArticleId: Scalars['String'];
};


export type MutationUpdatePickJobArgs = {
  pickJobId: Scalars['String'];
  pickJobUpdateInput: PickJobUpdateInput;
  pickJobVersion: Scalars['Int'];
};


export type MutationUpdatePickLineItemsArgs = {
  pickJobId: Scalars['String'];
  pickJobStatus?: InputMaybe<PickJobStatus>;
  pickJobVersion: Scalars['Int'];
  pickLineItems: Array<PickLineItemUpdateInput>;
};


export type MutationUpdatePickRunLineItemsArgs = {
  id: Scalars['String'];
  pickRunLineItems: Array<InputMaybe<PickRunLineItemUpdateInput>>;
  version: Scalars['Int'];
};


export type MutationUpdatePickingTimesConfigurationArgs = {
  updatePickingTimesInput: UpdatePickingTimesInput;
};


export type MutationUpdateProcessDocumentArgs = {
  documentId: Scalars['String'];
  externalDocumentToUpdateInput?: InputMaybe<ExternalDocumentToUpdateInput>;
  processId: Scalars['String'];
};


export type MutationUpdateRerouteShortPickConfigurationArgs = {
  configurationInput: RerouteShortPickConfigurationInput;
};


export type MutationUpdateRerouteTimeTriggeredConfigurationArgs = {
  configurationInput: RerouteTimeTriggeredConfigurationInput;
};


export type MutationUpsertBatchPickingConfigurationArgs = {
  batchPickingConfigurationInput: BatchPickingConfigurationInput;
};


export type MutationUpsertGlobalSubstitutesArgs = {
  substitutes: SubstitutesInput;
};


export type MutationUpsertTakeOverPickJobConfigurationArgs = {
  takeOverPickJobConfigurationInput: TakeOverPickJobConfigurationInput;
};

export type NamedFileInput = {
  content: Scalars['String'];
  name: Scalars['String'];
};

export type Notification = {
  type: NotificationType;
};

export const enum NotificationType {
  PickJobCreated = 'PICK_JOB_CREATED'
};

export type Order = VersionedResource & {
  __typename?: 'Order';
  /** Indicates if gdpr related data was anonymized */
  anonymized?: Maybe<Scalars['Boolean']>;
  consumer: Consumer;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  /** Attributes that can be added to the order. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  deliveryPreferences?: Maybe<DeliveryPreferences>;
  /** The id of this order. It is generated during creation automatically and suits as the primary identifier of the described entity. */
  id: Scalars['ID'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  /** The date this order was created at the supplying system. */
  orderDate: Scalars['GraphQLISODateTime'];
  orderLineItems: Array<OrderLineItem>;
  status: OrderStatus;
  /** Field can be used as a reference number in foreign systems, for example as a reference to the source system's identifier for this order. */
  tenantOrderId?: Maybe<Scalars['String']>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type OrderLineItem = {
  __typename?: 'OrderLineItem';
  article: OrderLineItemArticle;
  /** * Attributes that can be added to the orderline. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  /** * quantity of the specific article that has been ordered */
  quantity: Scalars['Int'];
  scannableCodes?: Maybe<Array<Scalars['String']>>;
  /** * price per piece of this line item */
  shopPrice?: Maybe<Scalars['Float']>;
};

export type OrderLineItemArticle = Article & {
  __typename?: 'OrderLineItemArticle';
  attributes?: Maybe<Array<ArticleAttributeItem>>;
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export const enum OrderStatus {
  Cancelled = 'CANCELLED',
  Locked = 'LOCKED',
  Open = 'OPEN'
};

export type PackJob = VersionedResource & {
  __typename?: 'PackJob';
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  editor?: Maybe<Editor>;
  /** The id of the facility reference. The given ID has to be present in the system. */
  facilityRef: Scalars['String'];
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  lineItems: Array<PackLineItem>;
  pickJob?: Maybe<PickJob>;
  pickJobRef?: Maybe<Scalars['String']>;
  processId: Scalars['String'];
  status: PackJobStatus;
  targetTime?: Maybe<Scalars['GraphQLISODateTime']>;
  version: Scalars['Int'];
};

export type PackJobChangedEvent = {
  __typename?: 'PackJobChangedEvent';
  packJob?: Maybe<PackJob>;
  packJobId: Scalars['String'];
  type: PackJobChangedEventType;
};

export const enum PackJobChangedEventType {
  PackJobCreated = 'PACK_JOB_CREATED',
  PackJobUpdated = 'PACK_JOB_UPDATED'
};

export type PackJobCreateInput = {
  facilityRef: Scalars['String'];
  lineItems: Array<PackLineItemCreateInput>;
  pickJobRef?: InputMaybe<Scalars['String']>;
  processId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PackJobStatus>;
};

export type PackJobEdge = {
  __typename?: 'PackJobEdge';
  cursor: Scalars['String'];
  node: PackJob;
};

export const enum PackJobOrderBy {
  StatusTargetTimeCreated = 'STATUS_TARGET_TIME_CREATED'
};

export const enum PackJobStatus {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
};

export type PackJobsConnection = {
  __typename?: 'PackJobsConnection';
  edges: Array<PackJobEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PackLineItem = {
  __typename?: 'PackLineItem';
  article: PackLineItemArticle;
  id: Scalars['ID'];
  measurementUnitKey?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
};

export type PackLineItemArticle = Article & {
  __typename?: 'PackLineItemArticle';
  attributes?: Maybe<Array<ArticleAttributeItem>>;
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type PackLineItemArticleCreateInput = {
  attributes?: InputMaybe<Array<ArticleAttributeItemInput>>;
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type PackLineItemCreateInput = {
  article: PackLineItemArticleCreateInput;
  id: Scalars['String'];
  measurementUnitKey?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Parcel = VersionedResource & {
  __typename?: 'Parcel';
  /** Indicates if gdpr related data was anonymized */
  anonymized?: Maybe<Scalars['Boolean']>;
  carrierRef: Scalars['String'];
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  dimensions?: Maybe<ParcelDimensions>;
  /** The id of this parcel. It is generated during creation automatically and suits as the primary identifier of the described entity. */
  id: Scalars['ID'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  loadUnitRefs: Array<Scalars['String']>;
  recipient: ConsumerAddress;
  result?: Maybe<ParcelResult>;
  sender: FacilityAddress;
  /** The id of this shipment this parcel has been created for. */
  shipmentRef: Scalars['String'];
  /** Indicates if gdpr related data was anonymized */
  status: ParcelStatus;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type ParcelCreateInput = {
  carrierRef?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<ParcelDimensionsInput>;
  loadUnitRefs?: InputMaybe<Array<Scalars['String']>>;
  recipient?: InputMaybe<ConsumerAddressInput>;
  sender?: InputMaybe<FacilityAddressInput>;
  /** The id of the shipment this parcel has been created for. */
  shipmentRef: Scalars['String'];
};

export type ParcelDimensions = {
  __typename?: 'ParcelDimensions';
  /** The height of the package (in cm) */
  height?: Maybe<Scalars['Float']>;
  /** The weight of the package (in g) */
  length?: Maybe<Scalars['Float']>;
  /** The weight of the package (in g) */
  weight?: Maybe<Scalars['Float']>;
  /** The width of the package */
  width?: Maybe<Scalars['Float']>;
};

export type ParcelDimensionsInput = {
  /** The height of the package (in cm) */
  height?: InputMaybe<Scalars['Float']>;
  /** The weight of the package (in g) */
  length?: InputMaybe<Scalars['Float']>;
  /** The weight of the package (in g) */
  weight?: InputMaybe<Scalars['Float']>;
  /** The width of the package */
  width?: InputMaybe<Scalars['Float']>;
};

export type ParcelResult = {
  __typename?: 'ParcelResult';
  carrierTrackingNumber?: Maybe<Scalars['String']>;
  /** The URL where you can download the label relative to the path of this resource */
  labelUrl?: Maybe<Scalars['String']>;
  proxyId?: Maybe<Scalars['String']>;
  /** The original return label id */
  returnLabelId?: Maybe<Scalars['String']>;
  /** The original return label URL */
  returnLabelUrl?: Maybe<Scalars['String']>;
  /** The original send label URL */
  sendLabelUrl?: Maybe<Scalars['String']>;
  /** Summary of the result of the request in a human readable form. */
  summary: Scalars['String'];
  trackingStatus?: Maybe<TrackingStatus>;
  /** The URL to tack this parcel */
  trackingUrl?: Maybe<Scalars['String']>;
};

export const enum ParcelStatus {
  Done = 'DONE',
  Failed = 'FAILED',
  Open = 'OPEN',
  Processing = 'PROCESSING'
};

export type PartialCarrierConfiguration = VersionedResource & {
  __typename?: 'PartialCarrierConfiguration';
  carrierRef?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  returnLabel: Scalars['Boolean'];
  version: Scalars['Int'];
};

export type PartialStock = {
  __typename?: 'PartialStock';
  location?: Maybe<Location>;
  scores?: Maybe<Array<Score>>;
  stockInformation: StockInformation;
  tenantPartialStockId: Scalars['String'];
};

export type PartialStockInput = {
  location?: InputMaybe<LocationInput>;
  scores?: InputMaybe<Array<InputMaybe<ScoreInput>>>;
  stockInformation: StockInformationInput;
  tenantPartialStockId: Scalars['String'];
};

export type PartialStocksUpdateInput = {
  partialStocks: Array<PartialStockInput>;
  /** The version of the listing to which we want to update the partial stocks */
  version: Scalars['Int'];
};

export type Period = {
  fromDate?: InputMaybe<Scalars['GraphQLISODateTime']>;
  toDate?: InputMaybe<Scalars['GraphQLISODateTime']>;
};

export const enum PhoneNumberType {
  Mobile = 'MOBILE',
  Phone = 'PHONE'
};

export type PickJob = VersionedResource & {
  __typename?: 'PickJob';
  /** Indicates if gdpr related data was anonymized */
  anonymized?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  /** Attributes that can be added to the pickjob. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  deliveryInformation?: Maybe<DeliveryInformation>;
  editor?: Maybe<Editor>;
  /** The id of the facility reference. The given ID has to be present in the system. */
  facilityRef: Scalars['String'];
  handoverJobs: Array<HandoverJob>;
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  loadUnits: Array<LoadUnit>;
  order?: Maybe<Order>;
  /** The date this order was created at the supplying system. */
  orderDate: Scalars['GraphQLISODateTime'];
  /** The id of the order reference. The given ID has to be present in the system. */
  orderRef?: Maybe<Scalars['String']>;
  pickLineItems: Array<PickLineItem>;
  /** Pick run id to which the pick job belongs */
  pickRunRef?: Maybe<Scalars['String']>;
  shipments: Array<Shipment>;
  /** A short identifier that helps assigning a pickJob to a customer. This is automatically created during creation. */
  shortId: Scalars['String'];
  status: PickJobStatus;
  /** Field can be used as a reference number in foreign systems, for example as a reference to the source system's identifier for this order. */
  tenantOrderId?: Maybe<Scalars['String']>;
  version: Scalars['Int'];
};


export type PickJobLoadUnitsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PickJobChangedEvent = {
  __typename?: 'PickJobChangedEvent';
  pickJob?: Maybe<PickJob>;
  pickJobId: Scalars['String'];
  type: PickJobChangedEventType;
};

export const enum PickJobChangedEventType {
  PickJobCreated = 'PICK_JOB_CREATED',
  PickJobDeleted = 'PICK_JOB_DELETED',
  PickJobUpdated = 'PICK_JOB_UPDATED'
};

export type PickJobCreateInput = {
  /** Attributes that can be added to the pickjob. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  deliveryInformation?: InputMaybe<DeliveryInformationCreateInput>;
  /** The id of the facility reference. The given ID has to be present in the system. */
  facilityRef: Scalars['String'];
  /** The date this order was created at the supplying system. */
  orderDate: Scalars['GraphQLISODateTime'];
  /** The id of the order reference. The given ID has to be present in the system. */
  orderRef?: InputMaybe<Scalars['String']>;
  pickLineItems: Array<PickLineItemCreateInput>;
  /** A short identifier that helps assigning a pickJob to a customer */
  shortId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PickJobStatus>;
  /** Field can be used as a reference number in foreign systems, for example as a reference to the source system's identifier for this order. */
  tenantOrderId?: InputMaybe<Scalars['String']>;
};

export type PickJobCreatedNotification = Notification & {
  __typename?: 'PickJobCreatedNotification';
  lineItemsCount: Scalars['Int'];
  targetTime: Scalars['GraphQLISODateTime'];
  type: NotificationType;
};

export type PickJobEdge = {
  __typename?: 'PickJobEdge';
  cursor: Scalars['String'];
  node: PickJob;
};

export const enum PickJobOrder {
  StatusHandoverStatusTargetTimeOrderDate = 'STATUS_HANDOVER_STATUS_TARGET_TIME_ORDER_DATE',
  StatusTargetTimeOrderDate = 'STATUS_TARGET_TIME_ORDER_DATE'
};

export const enum PickJobStatus {
  Closed = 'CLOSED',
  Expired = 'EXPIRED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN',
  Packable = 'PACKABLE',
  Picked = 'PICKED',
  Rejected = 'REJECTED',
  Rerouted = 'REROUTED',
  Rerouting = 'REROUTING',
  Restowed = 'RESTOWED'
};

export type PickJobUpdateInput = {
  /** Attributes that can be added to the pickJob. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
};

export type PickJobsConnection = {
  __typename?: 'PickJobsConnection';
  edges: Array<PickJobEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PickLineItem = {
  __typename?: 'PickLineItem';
  article: PickLineItemArticle;
  /** Attributes that can be added to the orderline. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  hasSubstitutes: Scalars['Boolean'];
  /** The id of this lineItem. It is generated during creation automatically and suits as the primary identifier of the described entity. */
  id: Scalars['String'];
  measurementUnit?: Maybe<MeasurementUnit>;
  measurementUnitKey?: Maybe<Scalars['String']>;
  /** The amount of articles that were picked for this pickline. */
  picked: Scalars['Int'];
  quantity: Scalars['Int'];
  scannableCodes?: Maybe<Array<Scalars['String']>>;
  status: PickLineItemStatus;
  substituteLineItems?: Maybe<Array<SubstituteLineItem>>;
};


export type PickLineItemMeasurementUnitArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PickLineItemArticle = Article & {
  __typename?: 'PickLineItemArticle';
  attributes?: Maybe<Array<ArticleAttributeItem>>;
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type PickLineItemArticleCreateInput = {
  attributes?: InputMaybe<Array<ArticleAttributeItemInput>>;
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type PickLineItemCreateInput = {
  article: PickLineItemArticleCreateInput;
  /** Attributes that can be added to the orderline. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  quantity: Scalars['Int'];
  scannableCodes?: InputMaybe<Array<Scalars['String']>>;
};

export const enum PickLineItemStatus {
  Closed = 'CLOSED',
  Inprogress = 'INPROGRESS',
  Open = 'OPEN'
};

export type PickLineItemUpdateInput = {
  /** The id of the line item to update. */
  id: Scalars['String'];
  /** The amount of articles that were picked for this pickline. */
  picked?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<PickLineItemStatus>;
  substituteLineItems?: InputMaybe<Array<SubstituteLineItemUpdateInput>>;
};

export type PickRun = VersionedResource & {
  __typename?: 'PickRun';
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  editor?: Maybe<Editor>;
  /** The id of the facility reference. The given ID has to be present in the system. */
  facilityRef: Scalars['String'];
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  pickJobRefs: Array<Scalars['String']>;
  pickLineItems: Array<PickLineItem>;
  status: PickRunStatus;
  version: Scalars['Int'];
};

export type PickRunCreateInput = {
  /** The id of the facility reference. The given ID has to be present in the system. */
  facilityRef: Scalars['String'];
  pickJobRefs: Array<Scalars['String']>;
  status?: InputMaybe<PickRunUpdateStatus>;
};

export type PickRunLineItemUpdateInput = {
  /** The id of the line item to update. */
  id: Scalars['String'];
  /** The amount of articles that were picked for this pickline. */
  picked?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<PickLineItemStatus>;
};

export const enum PickRunStatus {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
};

export const enum PickRunUpdateStatus {
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
};

export type PickingConfigurations = {
  __typename?: 'PickingConfigurations';
  batchPickingConfiguration?: Maybe<BatchPickingConfiguration>;
  takeOverPickJobConfiguration?: Maybe<TakeOverPickJobConfiguration>;
};

export type PickingTimes = {
  __typename?: 'PickingTimes';
  friday?: Maybe<Array<TimeRange>>;
  monday?: Maybe<Array<TimeRange>>;
  saturday?: Maybe<Array<TimeRange>>;
  sunday?: Maybe<Array<TimeRange>>;
  thursday?: Maybe<Array<TimeRange>>;
  tuesday?: Maybe<Array<TimeRange>>;
  wednesday?: Maybe<Array<TimeRange>>;
};

export type PickingTimesInput = {
  friday?: InputMaybe<Array<TimeRangeInput>>;
  monday?: InputMaybe<Array<TimeRangeInput>>;
  saturday?: InputMaybe<Array<TimeRangeInput>>;
  sunday?: InputMaybe<Array<TimeRangeInput>>;
  thursday?: InputMaybe<Array<TimeRangeInput>>;
  tuesday?: InputMaybe<Array<TimeRangeInput>>;
  wednesday?: InputMaybe<Array<TimeRangeInput>>;
};

export type PreselectedFacility = {
  __typename?: 'PreselectedFacility';
  facilityRef: Scalars['String'];
};

export type Process = VersionedResource & {
  __typename?: 'Process';
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  documents?: Maybe<Array<Maybe<ExternalDocument>>>;
  flatRefs?: Maybe<Array<Scalars['String']>>;
  gdprCleanupDate: Scalars['GraphQLISODateTime'];
  handoverJobRefs?: Maybe<Array<Scalars['String']>>;
  handoverStatus?: Maybe<ProcessStatus>;
  id: Scalars['ID'];
  isAnonymized?: Maybe<Scalars['Boolean']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  order?: Maybe<Order>;
  orderRef?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<ProcessStatus>;
  pickJobRefs?: Maybe<Array<Scalars['String']>>;
  pickJobStatus?: Maybe<ProcessStatus>;
  pickJobs?: Maybe<Array<PickJob>>;
  returnRefs?: Maybe<Array<Scalars['String']>>;
  returnStatus?: Maybe<ProcessStatus>;
  routingPlanRefs?: Maybe<Array<Scalars['String']>>;
  routingPlanStatus?: Maybe<ProcessStatus>;
  routingPlans?: Maybe<Array<RoutingPlan>>;
  shipmentRefs?: Maybe<Array<Scalars['String']>>;
  shipmentStatus?: Maybe<ProcessStatus>;
  shipments?: Maybe<Array<Shipment>>;
  status?: Maybe<ProcessStatus>;
  tenantOrderId?: Maybe<Scalars['String']>;
  version: Scalars['Int'];
};

export type ProcessEdge = {
  __typename?: 'ProcessEdge';
  cursor: Scalars['String'];
  node: Process;
};

export type ProcessInput = {
  handoverJobRef?: InputMaybe<Scalars['String']>;
  orderRef?: InputMaybe<Scalars['String']>;
  pickJobRef?: InputMaybe<Scalars['String']>;
  returnRef?: InputMaybe<Scalars['String']>;
  shipmentRef?: InputMaybe<Scalars['String']>;
  tenantOrderId?: InputMaybe<Scalars['String']>;
};

export const enum ProcessStatus {
  Canceled = 'CANCELED',
  Created = 'CREATED',
  Finished = 'FINISHED',
  Incomplete = 'INCOMPLETE',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Stuck = 'STUCK'
};

export type ProcessesConnection = {
  __typename?: 'ProcessesConnection';
  edges: Array<ProcessEdge>;
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  carrier: Carrier;
  carrierConfiguration: CarrierConfiguration;
  carriers: CarrierConnection;
  cutoffTimeConfiguration: CutoffTimeConfiguration;
  facilities: FacilitiesConnection;
  facility: Facility;
  facilityHandoverJobs: HandoverJobsConnection;
  facilityListings?: Maybe<ListingsConnection>;
  facilityPackJobs: PackJobsConnection;
  facilityPickJobs: PickJobsConnection;
  facilityRestowItems: RestowItemsConnection;
  facilityShipments: ShipmentsConnection;
  feature: Feature;
  features: Array<Maybe<Feature>>;
  fulfillmentProcessBufferConfiguration: FulfillmentProcessBufferConfiguration;
  globalSubstitutes: Substitutes;
  handoverJob: HandoverJob;
  listingByTenantArticleId?: Maybe<Listing>;
  loadUnit: LoadUnit;
  loadUnitType: LoadUnitType;
  loadUnitTypes: LoadUnitTypesConnection;
  loadUnits: LoadUnitsConnection;
  measurementUnit: MeasurementUnit;
  measurementUnitByKey: MeasurementUnit;
  measurementUnits: MeasurementUnitsConnection;
  packJob: PackJob;
  partialStocks: Array<Maybe<PartialStock>>;
  pickJob: PickJob;
  pickRun: PickRun;
  pickingConfigurations: PickingConfigurations;
  pickingTimesConfiguration: DefaultPickingTimesConfiguration;
  process?: Maybe<Process>;
  processes: ProcessesConnection;
  rerouteShortPickConfiguration: RerouteShortPickConfiguration;
  rerouteTimeTriggeredConfiguration: RerouteTimeTriggeredConfiguration;
  restowItem?: Maybe<RestowItem>;
  routingPlans: RoutingPlansConnection;
  scopedCapabilities: Array<ScopedCapability>;
  shipment: Shipment;
  substitutes: Substitutes;
};


export type QueryCarrierArgs = {
  id: Scalars['String'];
};


export type QueryCarrierConfigurationArgs = {
  carrierId: Scalars['String'];
};


export type QueryCarriersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryFacilitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locationType?: InputMaybe<FacilityLocationType>;
  orderBy?: InputMaybe<FacilityOrderBy>;
  serviceType?: InputMaybe<FacilityServiceType>;
  status?: InputMaybe<Array<FacilityStatus>>;
};


export type QueryFacilityArgs = {
  id: Scalars['String'];
};


export type QueryFacilityHandoverJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<HandoverJobChannel>;
  facilityRef: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HandoverJobOrderBy>;
};


export type QueryFacilityListingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  facilityId: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<ListingStatus>;
};


export type QueryFacilityPackJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  facilityRef: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PackJobOrderBy>;
};


export type QueryFacilityPickJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  anonymized?: InputMaybe<Scalars['Boolean']>;
  articleTitle?: InputMaybe<Scalars['String']>;
  consumerName?: InputMaybe<Scalars['String']>;
  facilityRef: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PickJobOrder>;
  orderRef?: InputMaybe<Scalars['String']>;
  shortId?: InputMaybe<Scalars['String']>;
  shortPicked?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Array<PickJobStatus>>;
  targetTime?: InputMaybe<Period>;
  tenantOrderId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryFacilityRestowItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  facilityId: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  restowed?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFacilityShipmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  facilityRef: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ShipmentOrderBy>;
};


export type QueryFeatureArgs = {
  featureName: Scalars['String'];
};


export type QueryGlobalSubstitutesArgs = {
  tenantArticleId: Scalars['String'];
};


export type QueryHandoverJobArgs = {
  id: Scalars['String'];
};


export type QueryListingByTenantArticleIdArgs = {
  facilityId: Scalars['String'];
  tenantArticleId: Scalars['String'];
};


export type QueryLoadUnitArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryLoadUnitTypeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryLoadUnitTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryLoadUnitsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  pickJobRef?: InputMaybe<Scalars['String']>;
};


export type QueryMeasurementUnitArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryMeasurementUnitByKeyArgs = {
  key: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryMeasurementUnitsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryPackJobArgs = {
  id: Scalars['String'];
};


export type QueryPartialStocksArgs = {
  facilityId: Scalars['String'];
  tenantArticleId: Scalars['String'];
};


export type QueryPickJobArgs = {
  id: Scalars['String'];
};


export type QueryPickRunArgs = {
  id: Scalars['String'];
};


export type QueryProcessArgs = {
  id?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<ProcessInput>;
};


export type QueryProcessesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  multipleStatus?: InputMaybe<Array<ProcessStatus>>;
  status?: InputMaybe<ProcessStatus>;
  tenantOrderId?: InputMaybe<Scalars['String']>;
};


export type QueryRestowItemArgs = {
  id: Scalars['String'];
};


export type QueryRoutingPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderRef: Scalars['String'];
};


export type QueryScopedCapabilitiesArgs = {
  capabilities?: InputMaybe<Array<Scalars['String']>>;
  facilityId?: InputMaybe<Scalars['String']>;
};


export type QueryShipmentArgs = {
  id: Scalars['String'];
};


export type QuerySubstitutesArgs = {
  tenantArticleId: Scalars['String'];
};

export const enum RecurrenceEnum {
  Nonrecurring = 'NONRECURRING',
  Yearly = 'YEARLY'
};

export type RerouteConfiguration = {
  __typename?: 'RerouteConfiguration';
  active: Scalars['Boolean'];
  /** The amount of minutes after which an automated reroute is executed */
  rerouteAfterMinutes: Scalars['Int'];
  /** Only pickjobs within the target time window are considered for reroute. */
  rerouteTargetTimeHours: Scalars['Int'];
};

export type RerouteConfigurationInput = {
  active: Scalars['Boolean'];
  /** The amount of minutes after which an automated reroute is executed */
  rerouteAfterMinutes: Scalars['Int'];
  /** Only pickjobs within the target time window are considered for reroute. */
  rerouteTargetTimeHours: Scalars['Int'];
};

export const enum RerouteReason {
  Manual = 'MANUAL',
  Shortpick = 'SHORTPICK',
  Timetriggered = 'TIMETRIGGERED'
};

export type RerouteShortPickConfiguration = VersionedResource & {
  __typename?: 'RerouteShortPickConfiguration';
  /** Does not consider facilities which previously owned the pickjob during routing. */
  blacklistAssignedFacilities?: Maybe<Scalars['Boolean']>;
  clickAndCollectReroute: ClickAndCollectRerouteConfiguration;
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  /** The amount of minutes after which an automated restow is executed */
  restowAfterMinutes?: Maybe<Scalars['Int']>;
  shipFromStoreReroute: ShipFromStoreRerouteConfiguration;
  version: Scalars['Int'];
};

export type RerouteShortPickConfigurationInput = {
  /** Does not consider facilities which previously owned the pickjob during routing. */
  blacklistAssignedFacilities?: InputMaybe<Scalars['Boolean']>;
  clickAndCollectReroute: ClickAndCollectRerouteConfigurationInput;
  /** The amount of minutes after which an automated restow is executed */
  restowAfterMinutes?: InputMaybe<Scalars['Int']>;
  shipFromStoreReroute: ShipFromStoreRerouteConfigurationInput;
  version: Scalars['Int'];
};

export type RerouteTimeTriggeredConfiguration = VersionedResource & {
  __typename?: 'RerouteTimeTriggeredConfiguration';
  clickAndCollectReroute: RerouteConfiguration;
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  shipFromStoreDeliveryReroute: RerouteConfiguration;
  shipFromStoreSamedayReroute: RerouteConfiguration;
  version: Scalars['Int'];
};

export type RerouteTimeTriggeredConfigurationInput = {
  clickAndCollectReroute: RerouteConfigurationInput;
  shipFromStoreDeliveryReroute: RerouteConfigurationInput;
  shipFromStoreSamedayReroute: RerouteConfigurationInput;
  version: Scalars['Int'];
};

export type ResowItemChangedEvent = {
  __typename?: 'ResowItemChangedEvent';
  restowItem?: Maybe<RestowItem>;
  restowItemRef: Scalars['String'];
  type: ResowItemChangedEventType;
};

export const enum ResowItemChangedEventType {
  RestowItemCreated = 'RESTOW_ITEM_CREATED',
  RestowItemRestowed = 'RESTOW_ITEM_RESTOWED',
  RestowItemUpdated = 'RESTOW_ITEM_UPDATED'
};

export type RestowItem = VersionedResource & {
  __typename?: 'RestowItem';
  article: RestowItemArticle;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  /** The id of the facility reference. The given ID has to be present in the system. */
  facilityRef: Scalars['String'];
  id: Scalars['ID'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  /** Identifier for items unit of measurement. */
  measurementUnitKey?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  /** Indicates if the restowItem has been restowed */
  restowed: Scalars['Boolean'];
  scannableCodes?: Maybe<Array<Scalars['String']>>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type RestowItemArticle = Article & {
  __typename?: 'RestowItemArticle';
  attributes?: Maybe<Array<ArticleAttributeItem>>;
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type RestowItemEdge = {
  __typename?: 'RestowItemEdge';
  cursor: Scalars['String'];
  node: RestowItem;
};

export type RestowItemsConnection = {
  __typename?: 'RestowItemsConnection';
  edges: Array<RestowItemEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReturnItemArticle = Article & {
  __typename?: 'ReturnItemArticle';
  attributes?: Maybe<Array<ArticleAttributeItem>>;
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type ReturnItemArticleInput = {
  attributes?: InputMaybe<Array<ArticleAttributeItemInput>>;
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type ReturnJob = VersionedResource & {
  __typename?: 'ReturnJob';
  /** Indicates if gdpr related data was anonymized */
  anonymized?: Maybe<Scalars['Boolean']>;
  carrierTrackingNumber?: Maybe<Scalars['String']>;
  consumerAddress?: Maybe<ConsumerAddress>;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  facilityAddress?: Maybe<FacilityAddress>;
  /** The id of this returnJob. It is generated during creation automatically and suits as the primary identifier of the described entity. */
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  orderRef?: Maybe<Scalars['String']>;
  /** Id of the global process related to this entity. For example used for starting the GDPR process and others. */
  processId?: Maybe<Scalars['String']>;
  returnLines: Array<ReturnLine>;
  status?: Maybe<ReturnJobStatus>;
  tenantOrderId?: Maybe<Scalars['String']>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type ReturnJobInput = {
  carrierTrackingNumber?: InputMaybe<Scalars['String']>;
  consumerAddress?: InputMaybe<ConsumerAddressInput>;
  facilityAddress?: InputMaybe<FacilityAddressInput>;
  orderRef?: InputMaybe<Scalars['String']>;
  processId?: InputMaybe<Scalars['String']>;
  returnLines: Array<ReturnLineInput>;
  status?: InputMaybe<ReturnJobStatus>;
  tenantOrderId?: InputMaybe<Scalars['String']>;
};

export const enum ReturnJobStatus {
  Claimed = 'CLAIMED',
  Closed = 'CLOSED',
  Initial = 'INITIAL',
  InProgress = 'IN_PROGRESS'
};

export type ReturnLine = {
  __typename?: 'ReturnLine';
  article: ReturnItemArticle;
  delivered: Scalars['Int'];
  id: Scalars['ID'];
  pickJobRefs: Array<Scalars['String']>;
  returned: Returned;
  scannableCodes: Array<Scalars['String']>;
  status: ReturnLineStatus;
};

export type ReturnLineInput = {
  article: ReturnItemArticleInput;
  delivered: Scalars['Int'];
  id: Scalars['ID'];
  pickJobRefs: Array<Scalars['String']>;
  returned: ReturnedInput;
  scannableCodes: Array<Scalars['String']>;
  status: ReturnLineStatus;
};

export const enum ReturnLineStatus {
  Accepted = 'ACCEPTED',
  Advised = 'ADVISED',
  Declined = 'DECLINED',
  Initial = 'INITIAL'
};

export type Returned = {
  __typename?: 'Returned';
  reason?: Maybe<Scalars['String']>;
  returnedAmount: Scalars['Int'];
};

export type ReturnedInput = {
  reason?: InputMaybe<Scalars['String']>;
  returnedAmount: Scalars['Int'];
};

export type RoutingPlan = VersionedResource & {
  __typename?: 'RoutingPlan';
  /** Indicates if gdpr related data was anonymized */
  anonymized?: Maybe<Scalars['Boolean']>;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  /** Indicates if gdpr related data was anonymized */
  decisionLogs?: Maybe<Array<DecisionLogRef>>;
  facilityBlackList?: Maybe<Array<Scalars['String']>>;
  /** The id of the facility reference. The given ID has to be present in the system. */
  facilityRef?: Maybe<Scalars['String']>;
  /** The iteration through the finalizer process */
  finalizeRun: Scalars['Int'];
  /** The date of the first routing attempt. */
  firstRoutingAttempt?: Maybe<Scalars['GraphQLISODateTime']>;
  /** The id of this routingPlan. It is generated during creation automatically and suits as the primary identifier of the described entity. */
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  /** The date this order was created at the supplying system. */
  orderDate: Scalars['GraphQLISODateTime'];
  orderLineItems?: Maybe<Array<RoutingPlanLineItem>>;
  /** The id of the order that lead to the creation of this pickjob. Can be empty / not present when the pickjob was created without having an order. */
  orderRef: Scalars['String'];
  parentRoutingPlanRef?: Maybe<Scalars['String']>;
  /** The id of the pickjob that has been created from the routing plan. */
  pickJobRef?: Maybe<Scalars['String']>;
  priority: Scalars['Int'];
  /** Id of the global process related to this entity. For example used for starting the GDPR process and others. */
  processId?: Maybe<Scalars['String']>;
  reRouteReason?: Maybe<RerouteReason>;
  /** The id of the facility the order was rerouted from. */
  reRoutedFacilityRef?: Maybe<Scalars['String']>;
  /** The id of the original pickjob that was rerouted. */
  reRoutedPickJobRef?: Maybe<Scalars['String']>;
  /** The iteration through the routing process */
  routingRun: Scalars['Int'];
  /** The rule type of a decision log entry */
  runType?: Maybe<RunTypeEnum>;
  /** The number of order splits that happened before this routingplan was created */
  splitCount?: Maybe<Scalars['Int']>;
  status: RoutingPlanStatus;
  targetAddress?: Maybe<TargetAddress>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type RoutingPlanEdge = {
  __typename?: 'RoutingPlanEdge';
  cursor: Scalars['String'];
  node: RoutingPlan;
};

export type RoutingPlanLineItem = {
  __typename?: 'RoutingPlanLineItem';
  article: OrderLineItemArticle;
  /** * Attributes that can be added to the orderline. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  id: Scalars['ID'];
  picked?: Maybe<Scalars['Int']>;
  /** * quantity of the specific article that has been ordered */
  quantity: Scalars['Int'];
  scannableCodes?: Maybe<Array<Scalars['String']>>;
  /** * price per piece of this line item */
  shopPrice?: Maybe<Scalars['Float']>;
};

export const enum RoutingPlanStatus {
  Failed = 'FAILED',
  FailedReroute = 'FAILED_REROUTE',
  Initial = 'INITIAL',
  ManualPlanned = 'MANUAL_PLANNED',
  NotRoutable = 'NOT_ROUTABLE',
  Planned = 'PLANNED',
  Prioritized = 'PRIORITIZED',
  Proposed = 'PROPOSED',
  RedundantReroute = 'REDUNDANT_REROUTE',
  Retryable = 'RETRYABLE',
  Routed = 'ROUTED',
  Routing = 'ROUTING'
};

export type RoutingPlansConnection = {
  __typename?: 'RoutingPlansConnection';
  edges: Array<RoutingPlanEdge>;
  pageInfo: PageInfo;
};

export const enum RunTypeEnum {
  Default = 'DEFAULT',
  Reroute = 'REROUTE'
};

export type ScopedCapability = VersionedResource & {
  __typename?: 'ScopedCapability';
  configurations?: Maybe<Array<SupportedConfig>>;
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  currentUserPermissions?: Maybe<Array<Scalars['String']>>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  name: Scalars['String'];
  status: ScopedCapabilityStatus;
  version: Scalars['Int'];
};

export const enum ScopedCapabilityStatus {
  Disabled = 'disabled',
  Enabled = 'enabled',
  Inactive = 'inactive'
};

export type Score = {
  __typename?: 'Score';
  scoreName: ScoreName;
  scoreType: ScoreType;
  scoreValue: Scalars['Int'];
};

export type ScoreInput = {
  scoreName: ScoreName;
  scoreType: ScoreType;
  scoreValue: Scalars['Int'];
};

export const enum ScoreName {
  RunningSequence = 'RUNNING_SEQUENCE',
  Zone = 'ZONE'
};

export const enum ScoreType {
  Rating = 'RATING',
  Sequence = 'SEQUENCE'
};

export const enum Section {
  Packing = 'PACKING'
};

export const enum ServiceLevel {
  Delivery = 'DELIVERY',
  Sameday = 'SAMEDAY'
};

export const enum ServiceType {
  BestEffort = 'BEST_EFFORT'
};

export type ShipFromStoreRerouteConfiguration = {
  __typename?: 'ShipFromStoreRerouteConfiguration';
  active: Scalars['Boolean'];
  /** Allows reroute to be triggered manually via api. */
  allowManualReroute?: Maybe<Scalars['Boolean']>;
  facilityWideRerouteOnShortPick?: Maybe<Scalars['Boolean']>;
  /** Only pickJobs where the targetTime in not larger than now plus this number are rerouted */
  rerouteTargetTime?: Maybe<Scalars['Int']>;
};

export type ShipFromStoreRerouteConfigurationInput = {
  active: Scalars['Boolean'];
  /** Allows reroute to be triggered manually via api. */
  allowManualReroute?: InputMaybe<Scalars['Boolean']>;
  facilityWideRerouteOnShortPick?: InputMaybe<Scalars['Boolean']>;
  /** Only pickJobs where the targetTime in not larger than now plus this number are rerouted */
  rerouteTargetTime?: InputMaybe<Scalars['Int']>;
};

export type Shipment = VersionedResource & {
  __typename?: 'Shipment';
  anonymized?: Maybe<Scalars['Boolean']>;
  carrier?: Maybe<Carrier>;
  /** The reference to the carrier for which the shipment is assigned to */
  carrierRef?: Maybe<Scalars['String']>;
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  /** Attributes that can be added to the shipment. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  /** The id of the facility reference. */
  facilityRef: Scalars['String'];
  handoverJobs: Array<HandoverJob>;
  hasActiveCarrier?: Maybe<Scalars['Boolean']>;
  /** The id of this Shipment. It is generated during creation automatically and suits as the primary identifier of the described entity. */
  id: Scalars['ID'];
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  parcels?: Maybe<Array<Parcel>>;
  pickJob?: Maybe<PickJob>;
  /** The reference to the pick job for which the shipment is assigned to */
  pickJobRef?: Maybe<Scalars['String']>;
  /** The short identifier of the shipment. */
  shortId?: Maybe<Scalars['String']>;
  sourceAddress?: Maybe<FacilityAddress>;
  /** Every newly created shipment is in state INITIAL. When the parcel labels should be requested the state changes to REQUEST and as soon as all parcel labels are successfully requested the state changes to CONFIRMED. The state COMPLETED is set in the end or the process */
  status: ShipmentStatus;
  targetAddress?: Maybe<ConsumerAddress>;
  targetTime: Scalars['GraphQLISODateTime'];
  /** Field can be used as a reference number in foreign systems, for example as a reference to the source system's identifier for this order. */
  tenantOrderId: Scalars['String'];
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};

export type ShipmentChangedEvent = {
  __typename?: 'ShipmentChangedEvent';
  shipment?: Maybe<Shipment>;
  shipmentId: Scalars['String'];
  type: ShipmentChangedEventType;
};

export const enum ShipmentChangedEventType {
  ShipmentCreated = 'SHIPMENT_CREATED',
  ShipmentUpdated = 'SHIPMENT_UPDATED'
};

export type ShipmentCreateInput = {
  carrierRef?: InputMaybe<Scalars['String']>;
  /** Attributes that can be added to the shipment. These attributes cannot be used within fulfillment processes, but it could be useful to have the informations carried here. */
  customAttributes?: InputMaybe<Scalars['GraphQLJSON']>;
  facilityRef: Scalars['String'];
  /** The date this order was created at the supplying system. */
  orderDate: Scalars['GraphQLISODateTime'];
  pickJobRef?: InputMaybe<Scalars['String']>;
  sourceAddress: FacilityAddressInput;
  targetAddress: ConsumerAddressInput;
  targetTime: Scalars['String'];
  /** Field can be used as a reference number in foreign systems, for example as a reference to the source system's identifier for this order. */
  tenantOrderId: Scalars['String'];
};

export type ShipmentEdge = {
  __typename?: 'ShipmentEdge';
  cursor: Scalars['String'];
  node: Shipment;
};

export const enum ShipmentOrderBy {
  StatusTargetTimeOrderDate = 'STATUS_TARGET_TIME_ORDER_DATE'
};

export const enum ShipmentStatus {
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Initial = 'INITIAL',
  Request = 'REQUEST',
  Retryable = 'RETRYABLE'
};

export type ShipmentsConnection = {
  __typename?: 'ShipmentsConnection';
  edges: Array<ShipmentEdge>;
  pageInfo: PageInfo;
};

export type ShippingDetails = {
  __typename?: 'ShippingDetails';
  /** Key name of the carrier that handles pickjob request. */
  carrierKey?: Maybe<Scalars['String']>;
  recipientaddress?: Maybe<ConsumerAddress>;
};

export type ShippingDetailsCreateInput = {
  /** Key name of the carrier that handles pickjob request. */
  carrierKey?: InputMaybe<Scalars['String']>;
  recipientaddress?: InputMaybe<ConsumerAddressInput>;
};

export type StockInformation = {
  __typename?: 'StockInformation';
  /** The amount of articles that currently open prickjobs need to be fulfilled. */
  reserved?: Maybe<Scalars['Int']>;
  /** This the amount of the given article that is in stock for the given facility */
  stock: Scalars['Int'];
};

export type StockInformationInput = {
  /** The amount of articles that currently open prickjobs need to be fulfilled. */
  reserved?: InputMaybe<Scalars['Int']>;
  /** This the amount of the given article that is in stock for the given facility */
  stock: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  changedFacilityHandoverJobs: HandoverJobChangedEvent;
  changedFacilityPackJobs: PackJobChangedEvent;
  changedFacilityPickJobs: PickJobChangedEvent;
  changedFacilityRestowItems: ResowItemChangedEvent;
  changedFacilityShipments: ShipmentChangedEvent;
  createdFacilityHandoverJobs: HandoverJob;
  createdFacilityPickJobs: PickJob;
  createdFacilityRestowItems: RestowItem;
  createdFacilityShipments: Shipment;
  deletedFacilityPickJobs: Scalars['String'];
  notifications: Notification;
  restowedRestowItem: RestowItem;
  updatedFacilityHandoverJobs: HandoverJob;
  updatedFacilityPickJobs: PickJob;
  updatedFacilityShipments: Shipment;
  updatedPickJob: PickJob;
  updatedShipment: Shipment;
  updatedShipmentParcels: Parcel;
};


export type SubscriptionChangedFacilityHandoverJobsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionChangedFacilityPackJobsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionChangedFacilityPickJobsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionChangedFacilityRestowItemsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionChangedFacilityShipmentsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionCreatedFacilityHandoverJobsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionCreatedFacilityPickJobsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionCreatedFacilityRestowItemsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionCreatedFacilityShipmentsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionDeletedFacilityPickJobsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionNotificationsArgs = {
  facilityId: Scalars['String'];
};


export type SubscriptionRestowedRestowItemArgs = {
  restowItemRef: Scalars['String'];
};


export type SubscriptionUpdatedFacilityHandoverJobsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionUpdatedFacilityPickJobsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionUpdatedFacilityShipmentsArgs = {
  facilityRef: Scalars['String'];
};


export type SubscriptionUpdatedPickJobArgs = {
  pickJobRef: Scalars['String'];
};


export type SubscriptionUpdatedShipmentArgs = {
  shipmentRef: Scalars['String'];
};


export type SubscriptionUpdatedShipmentParcelsArgs = {
  shipmentRef: Scalars['String'];
};

export type Substitute = {
  __typename?: 'Substitute';
  attributes?: Maybe<Array<SubstituteAttributeItem>>;
  imageUrl?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  scannableCodes?: Maybe<Array<Scalars['String']>>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type SubstituteAttributeItem = {
  __typename?: 'SubstituteAttributeItem';
  category?: Maybe<AttributeItemCategory>;
  key: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  value: Scalars['String'];
};

export type SubstituteAttributeItemInput = {
  category?: InputMaybe<AttributeItemCategory>;
  key: Scalars['String'];
  priority?: InputMaybe<Scalars['Int']>;
  value: Scalars['String'];
};

export type SubstituteInput = {
  attributes?: InputMaybe<Array<SubstituteAttributeItemInput>>;
  imageUrl?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  scannableCodes?: InputMaybe<Array<Scalars['String']>>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type SubstituteLineItem = {
  __typename?: 'SubstituteLineItem';
  article: SubstituteLineItemArticle;
  /** This field allows you to rank substitutes against each other. The lowest number is the most preferrable substitute. */
  priority?: Maybe<Scalars['Int']>;
  /** quantity of the specific article that has been picked to substitute the ordered line item */
  quantity: Scalars['Int'];
  scannableCodes?: Maybe<Array<Scalars['String']>>;
};

export type SubstituteLineItemArticle = Article & {
  __typename?: 'SubstituteLineItemArticle';
  attributes?: Maybe<Array<ArticleAttributeItem>>;
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  tenantArticleId: Scalars['String'];
  title: Scalars['String'];
};

export type SubstituteLineItemUpdateInput = {
  quantity: Scalars['Int'];
  tenantArticleId: Scalars['String'];
};

export type Substitutes = VersionedResource & {
  __typename?: 'Substitutes';
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  substitutes: Array<Substitute>;
  tenantArticleId: Scalars['String'];
  version: Scalars['Int'];
};

export type SubstitutesInput = {
  substitutes: Array<SubstituteInput>;
  tenantArticleId: Scalars['String'];
  version: Scalars['Int'];
};

export type SubstitutionConfiguration = VersionedResource & {
  __typename?: 'SubstitutionConfiguration';
  active: Scalars['Boolean'];
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  version: Scalars['Int'];
};

export type SupportedConfig = BatchPickingConfiguration | PartialCarrierConfiguration | RerouteShortPickConfiguration | SubstitutionConfiguration | TakeOverPickJobConfiguration;

export type TakeOverPickJobConfiguration = VersionedResource & {
  __typename?: 'TakeOverPickJobConfiguration';
  active: Scalars['Boolean'];
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  version: Scalars['Int'];
};

export type TakeOverPickJobConfigurationInput = {
  active: Scalars['Boolean'];
  version: Scalars['Int'];
};

export type TargetAddress = Address & {
  __typename?: 'TargetAddress';
  additionalAddressInfo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  customAttributes?: Maybe<Scalars['GraphQLJSON']>;
  facilityRef?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  phoneNumbers?: Maybe<Array<AddressPhoneNumber>>;
  postalCode: Scalars['String'];
  salutation?: Maybe<Scalars['String']>;
  street: Scalars['String'];
};

export type TimeRange = {
  __typename?: 'TimeRange';
  end: TimeStamp;
  start: TimeStamp;
};

export type TimeRangeInput = {
  end: TimeStampInput;
  start: TimeStampInput;
};

export type TimeStamp = {
  __typename?: 'TimeStamp';
  hour: Scalars['Int'];
  minute: Scalars['Int'];
};

export type TimeStampInput = {
  hour: Scalars['Int'];
  minute: Scalars['Int'];
};

export type TimeZone = {
  __typename?: 'TimeZone';
  /** Offset in seconds to standard time. */
  offsetInSeconds: Scalars['Int'];
  /** Official id of the timezone */
  timeZoneId: Scalars['String'];
  /** Descriptive name of the timezone */
  timeZoneName: Scalars['String'];
};

export const enum TrackingStatus {
  AwaitsPickupByReceiver = 'AWAITS_PICKUP_BY_RECEIVER',
  Canceled = 'CANCELED',
  Delayed = 'DELAYED',
  Delivered = 'DELIVERED',
  Destroyed = 'DESTROYED',
  Exception = 'EXCEPTION',
  Notification = 'NOTIFICATION',
  NotDelivered = 'NOT_DELIVERED',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  PickedUp = 'PICKED_UP',
  Registered = 'REGISTERED',
  Transit = 'TRANSIT',
  Unknown = 'UNKNOWN'
};

export type UpdatePickingTimesInput = {
  pickingTimes: PickingTimesInput;
  version: Scalars['Int'];
};

export type VersionedResource = {
  /** The date this entity was created at the platform. This value is generated by the service. */
  created?: Maybe<Scalars['GraphQLISODateTime']>;
  /** The date this entity was modified last. This value is generated by the service. */
  lastModified?: Maybe<Scalars['GraphQLISODateTime']>;
  /** The version of the document to be used in optimistic locking mechanisms. */
  version: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AbstractFacilityCarrierConfiguration: ResolversTypes['AngelFacilityCarrierConfiguration'] | ResolversTypes['DhlFacilityCarrierConfiguration'] | ResolversTypes['GlsFacilityCarrierConfiguration'];
  Address: ResolversTypes['ConsumerAddress'] | ResolversTypes['FacilityAddress'] | ResolversTypes['TargetAddress'];
  AddressPhoneNumber: ResolverTypeWrapper<AddressPhoneNumber>;
  AddressPhoneNumberInput: AddressPhoneNumberInput;
  AngelCredentialsInput: AngelCredentialsInput;
  AngelFacilityCarrierConfiguration: ResolverTypeWrapper<AngelFacilityCarrierConfiguration>;
  AngelFacilityCarrierConfigurationInput: AngelFacilityCarrierConfigurationInput;
  Article: ResolversTypes['OrderLineItemArticle'] | ResolversTypes['PackLineItemArticle'] | ResolversTypes['PickLineItemArticle'] | ResolversTypes['RestowItemArticle'] | ResolversTypes['ReturnItemArticle'] | ResolversTypes['SubstituteLineItemArticle'];
  ArticleAttributeItem: ResolverTypeWrapper<ArticleAttributeItem>;
  ArticleAttributeItemCategory: ArticleAttributeItemCategory;
  ArticleAttributeItemInput: ArticleAttributeItemInput;
  AttributeItemCategory: AttributeItemCategory;
  BatchPickingConfiguration: ResolverTypeWrapper<BatchPickingConfiguration>;
  BatchPickingConfigurationInput: BatchPickingConfigurationInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Carrier: ResolverTypeWrapper<Carrier>;
  CarrierConfiguration: ResolverTypeWrapper<CarrierConfiguration>;
  CarrierConfigurationInput: CarrierConfigurationInput;
  CarrierConnection: ResolverTypeWrapper<CarrierConnection>;
  CarrierCreateInput: CarrierCreateInput;
  CarrierDeliveryType: CarrierDeliveryType;
  CarrierEdge: ResolverTypeWrapper<CarrierEdge>;
  CarrierLifecycle: CarrierLifecycle;
  CarrierStatus: CarrierStatus;
  CarrierUpdateInput: CarrierUpdateInput;
  Channel: Channel;
  ClickAndCollectDetails: ResolverTypeWrapper<ClickAndCollectDetails>;
  ClickAndCollectDetailsCreateInput: ClickAndCollectDetailsCreateInput;
  ClickAndCollectRerouteConfiguration: ResolverTypeWrapper<ClickAndCollectRerouteConfiguration>;
  ClickAndCollectRerouteConfigurationInput: ClickAndCollectRerouteConfigurationInput;
  ClosingDay: ResolverTypeWrapper<ClosingDay>;
  ClosingDayInput: ClosingDayInput;
  Consumer: ResolverTypeWrapper<Consumer>;
  ConsumerAddress: ResolverTypeWrapper<ConsumerAddress>;
  ConsumerAddressInput: ConsumerAddressInput;
  Coordinates: ResolverTypeWrapper<Coordinates>;
  CoordinatesInput: CoordinatesInput;
  CutoffTime: ResolverTypeWrapper<CutoffTime>;
  CutoffTimeConfiguration: ResolverTypeWrapper<CutoffTimeConfiguration>;
  CutoffTimeConfigurationUpdateInput: CutoffTimeConfigurationUpdateInput;
  CutoffTimeInput: CutoffTimeInput;
  DHLCredentialsInput: DhlCredentialsInput;
  DPDCredentialsInput: DpdCredentialsInput;
  DecisionLogRef: ResolverTypeWrapper<DecisionLogRef>;
  DefaultPickingTimesConfiguration: ResolverTypeWrapper<DefaultPickingTimesConfiguration>;
  DeliveryArea: ResolverTypeWrapper<DeliveryArea>;
  DeliveryAreaInput: DeliveryAreaInput;
  DeliveryInformation: ResolverTypeWrapper<DeliveryInformation>;
  DeliveryInformationCreateInput: DeliveryInformationCreateInput;
  DeliveryInformationDetails: ResolverTypeWrapper<DeliveryInformationDetails>;
  DeliveryInformationDetailsCreateInput: DeliveryInformationDetailsCreateInput;
  DeliveryPreferences: ResolverTypeWrapper<DeliveryPreferences>;
  DeliveryPreferencesShipping: ResolverTypeWrapper<DeliveryPreferencesShipping>;
  DhlFacilityCarrierConfiguration: ResolverTypeWrapper<DhlFacilityCarrierConfiguration>;
  DhlFacilityCarrierConfigurationInput: DhlFacilityCarrierConfigurationInput;
  DocumentType: DocumentType;
  Editor: ResolverTypeWrapper<Editor>;
  ExternalDocument: ResolverTypeWrapper<ExternalDocument>;
  ExternalDocumentInput: ExternalDocumentInput;
  ExternalDocumentToUpdateInput: ExternalDocumentToUpdateInput;
  FacilitiesConnection: ResolverTypeWrapper<FacilitiesConnection>;
  Facility: ResolverTypeWrapper<Facility>;
  FacilityAddress: ResolverTypeWrapper<FacilityAddress>;
  FacilityAddressCreateInput: FacilityAddressCreateInput;
  FacilityAddressInput: FacilityAddressInput;
  FacilityCarrier: ResolverTypeWrapper<FacilityCarrier>;
  FacilityContact: ResolverTypeWrapper<FacilityContact>;
  FacilityContactCreateInput: FacilityContactCreateInput;
  FacilityCreateInput: FacilityCreateInput;
  FacilityEdge: ResolverTypeWrapper<FacilityEdge>;
  FacilityEmailAddress: ResolverTypeWrapper<FacilityEmailAddress>;
  FacilityEmailAddressInput: FacilityEmailAddressInput;
  FacilityLocationType: FacilityLocationType;
  FacilityOrderBy: FacilityOrderBy;
  FacilityService: ResolverTypeWrapper<FacilityService>;
  FacilityServiceCreateInput: FacilityServiceCreateInput;
  FacilityServiceType: FacilityServiceType;
  FacilityStatus: FacilityStatus;
  FacilityUpdateInput: FacilityUpdateInput;
  Feature: ResolverTypeWrapper<Feature>;
  FeatureInput: FeatureInput;
  FeatureStatus: FeatureStatus;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FulfillmentProcessBufferConfiguration: ResolverTypeWrapper<FulfillmentProcessBufferConfiguration>;
  FulfillmentProcessBufferInput: FulfillmentProcessBufferInput;
  GLSCredentialsInput: GlsCredentialsInput;
  GlsFacilityCarrierConfiguration: ResolverTypeWrapper<GlsFacilityCarrierConfiguration>;
  GlsFacilityCarrierConfigurationInput: GlsFacilityCarrierConfigurationInput;
  GraphQLISODateTime: ResolverTypeWrapper<Scalars['GraphQLISODateTime']>;
  GraphQLJSON: ResolverTypeWrapper<Scalars['GraphQLJSON']>;
  HandoverJob: ResolverTypeWrapper<HandoverJob>;
  HandoverJobChangedEvent: ResolverTypeWrapper<HandoverJobChangedEvent>;
  HandoverJobChangedEventType: HandoverJobChangedEventType;
  HandoverJobChannel: HandoverJobChannel;
  HandoverJobCreateInput: HandoverJobCreateInput;
  HandoverJobEdge: ResolverTypeWrapper<HandoverJobEdge>;
  HandoverJobOrderBy: HandoverJobOrderBy;
  HandoverJobStatus: HandoverJobStatus;
  HandoverJobUpdateInput: HandoverJobUpdateInput;
  HandoverJobsConnection: ResolverTypeWrapper<HandoverJobsConnection>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IconInput: IconInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LinkedConfiguration: ResolverTypeWrapper<LinkedConfiguration>;
  Listing: ResolverTypeWrapper<Listing>;
  ListingCreateInput: ListingCreateInput;
  ListingEdge: ResolverTypeWrapper<ListingEdge>;
  ListingStatus: ListingStatus;
  ListingUpdateInput: ListingUpdateInput;
  ListingsConnection: ResolverTypeWrapper<ListingsConnection>;
  LoadUnit: ResolverTypeWrapper<LoadUnit>;
  LoadUnitCreateInput: LoadUnitCreateInput;
  LoadUnitEdge: ResolverTypeWrapper<LoadUnitEdge>;
  LoadUnitType: ResolverTypeWrapper<LoadUnitType>;
  LoadUnitTypeCreateInput: LoadUnitTypeCreateInput;
  LoadUnitTypeEdge: ResolverTypeWrapper<LoadUnitTypeEdge>;
  LoadUnitTypeUpdateInput: LoadUnitTypeUpdateInput;
  LoadUnitTypesConnection: ResolverTypeWrapper<LoadUnitTypesConnection>;
  LoadUnitsConnection: ResolverTypeWrapper<LoadUnitsConnection>;
  Location: ResolverTypeWrapper<Location>;
  LocationInput: LocationInput;
  MeasurementUnit: ResolverTypeWrapper<MeasurementUnit>;
  MeasurementUnitInput: MeasurementUnitInput;
  MeasurementUnitUpdateInput: MeasurementUnitUpdateInput;
  MeasurementUnitsConnection: ResolverTypeWrapper<MeasurementUnitsConnection>;
  MeasurementUnitsEdge: ResolverTypeWrapper<MeasurementUnitsEdge>;
  Mutation: ResolverTypeWrapper<{}>;
  NamedFileInput: NamedFileInput;
  Notification: ResolversTypes['PickJobCreatedNotification'];
  NotificationType: NotificationType;
  Order: ResolverTypeWrapper<Order>;
  OrderLineItem: ResolverTypeWrapper<OrderLineItem>;
  OrderLineItemArticle: ResolverTypeWrapper<OrderLineItemArticle>;
  OrderStatus: OrderStatus;
  PackJob: ResolverTypeWrapper<PackJob>;
  PackJobChangedEvent: ResolverTypeWrapper<PackJobChangedEvent>;
  PackJobChangedEventType: PackJobChangedEventType;
  PackJobCreateInput: PackJobCreateInput;
  PackJobEdge: ResolverTypeWrapper<PackJobEdge>;
  PackJobOrderBy: PackJobOrderBy;
  PackJobStatus: PackJobStatus;
  PackJobsConnection: ResolverTypeWrapper<PackJobsConnection>;
  PackLineItem: ResolverTypeWrapper<PackLineItem>;
  PackLineItemArticle: ResolverTypeWrapper<PackLineItemArticle>;
  PackLineItemArticleCreateInput: PackLineItemArticleCreateInput;
  PackLineItemCreateInput: PackLineItemCreateInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Parcel: ResolverTypeWrapper<Parcel>;
  ParcelCreateInput: ParcelCreateInput;
  ParcelDimensions: ResolverTypeWrapper<ParcelDimensions>;
  ParcelDimensionsInput: ParcelDimensionsInput;
  ParcelResult: ResolverTypeWrapper<ParcelResult>;
  ParcelStatus: ParcelStatus;
  PartialCarrierConfiguration: ResolverTypeWrapper<PartialCarrierConfiguration>;
  PartialStock: ResolverTypeWrapper<PartialStock>;
  PartialStockInput: PartialStockInput;
  PartialStocksUpdateInput: PartialStocksUpdateInput;
  Period: Period;
  PhoneNumberType: PhoneNumberType;
  PickJob: ResolverTypeWrapper<PickJob>;
  PickJobChangedEvent: ResolverTypeWrapper<PickJobChangedEvent>;
  PickJobChangedEventType: PickJobChangedEventType;
  PickJobCreateInput: PickJobCreateInput;
  PickJobCreatedNotification: ResolverTypeWrapper<PickJobCreatedNotification>;
  PickJobEdge: ResolverTypeWrapper<PickJobEdge>;
  PickJobOrder: PickJobOrder;
  PickJobStatus: PickJobStatus;
  PickJobUpdateInput: PickJobUpdateInput;
  PickJobsConnection: ResolverTypeWrapper<PickJobsConnection>;
  PickLineItem: ResolverTypeWrapper<PickLineItem>;
  PickLineItemArticle: ResolverTypeWrapper<PickLineItemArticle>;
  PickLineItemArticleCreateInput: PickLineItemArticleCreateInput;
  PickLineItemCreateInput: PickLineItemCreateInput;
  PickLineItemStatus: PickLineItemStatus;
  PickLineItemUpdateInput: PickLineItemUpdateInput;
  PickRun: ResolverTypeWrapper<PickRun>;
  PickRunCreateInput: PickRunCreateInput;
  PickRunLineItemUpdateInput: PickRunLineItemUpdateInput;
  PickRunStatus: PickRunStatus;
  PickRunUpdateStatus: PickRunUpdateStatus;
  PickingConfigurations: ResolverTypeWrapper<PickingConfigurations>;
  PickingTimes: ResolverTypeWrapper<PickingTimes>;
  PickingTimesInput: PickingTimesInput;
  PreselectedFacility: ResolverTypeWrapper<PreselectedFacility>;
  Process: ResolverTypeWrapper<Process>;
  ProcessEdge: ResolverTypeWrapper<ProcessEdge>;
  ProcessInput: ProcessInput;
  ProcessStatus: ProcessStatus;
  ProcessesConnection: ResolverTypeWrapper<ProcessesConnection>;
  Query: ResolverTypeWrapper<{}>;
  RecurrenceEnum: RecurrenceEnum;
  RerouteConfiguration: ResolverTypeWrapper<RerouteConfiguration>;
  RerouteConfigurationInput: RerouteConfigurationInput;
  RerouteReason: RerouteReason;
  RerouteShortPickConfiguration: ResolverTypeWrapper<RerouteShortPickConfiguration>;
  RerouteShortPickConfigurationInput: RerouteShortPickConfigurationInput;
  RerouteTimeTriggeredConfiguration: ResolverTypeWrapper<RerouteTimeTriggeredConfiguration>;
  RerouteTimeTriggeredConfigurationInput: RerouteTimeTriggeredConfigurationInput;
  ResowItemChangedEvent: ResolverTypeWrapper<ResowItemChangedEvent>;
  ResowItemChangedEventType: ResowItemChangedEventType;
  RestowItem: ResolverTypeWrapper<RestowItem>;
  RestowItemArticle: ResolverTypeWrapper<RestowItemArticle>;
  RestowItemEdge: ResolverTypeWrapper<RestowItemEdge>;
  RestowItemsConnection: ResolverTypeWrapper<RestowItemsConnection>;
  ReturnItemArticle: ResolverTypeWrapper<ReturnItemArticle>;
  ReturnItemArticleInput: ReturnItemArticleInput;
  ReturnJob: ResolverTypeWrapper<ReturnJob>;
  ReturnJobInput: ReturnJobInput;
  ReturnJobStatus: ReturnJobStatus;
  ReturnLine: ResolverTypeWrapper<ReturnLine>;
  ReturnLineInput: ReturnLineInput;
  ReturnLineStatus: ReturnLineStatus;
  Returned: ResolverTypeWrapper<Returned>;
  ReturnedInput: ReturnedInput;
  RoutingPlan: ResolverTypeWrapper<RoutingPlan>;
  RoutingPlanEdge: ResolverTypeWrapper<RoutingPlanEdge>;
  RoutingPlanLineItem: ResolverTypeWrapper<RoutingPlanLineItem>;
  RoutingPlanStatus: RoutingPlanStatus;
  RoutingPlansConnection: ResolverTypeWrapper<RoutingPlansConnection>;
  RunTypeEnum: RunTypeEnum;
  ScopedCapability: ResolverTypeWrapper<Omit<ScopedCapability, 'configurations'> & { configurations?: Maybe<Array<ResolversTypes['SupportedConfig']>> }>;
  ScopedCapabilityStatus: ScopedCapabilityStatus;
  Score: ResolverTypeWrapper<Score>;
  ScoreInput: ScoreInput;
  ScoreName: ScoreName;
  ScoreType: ScoreType;
  Section: Section;
  ServiceLevel: ServiceLevel;
  ServiceType: ServiceType;
  ShipFromStoreRerouteConfiguration: ResolverTypeWrapper<ShipFromStoreRerouteConfiguration>;
  ShipFromStoreRerouteConfigurationInput: ShipFromStoreRerouteConfigurationInput;
  Shipment: ResolverTypeWrapper<Shipment>;
  ShipmentChangedEvent: ResolverTypeWrapper<ShipmentChangedEvent>;
  ShipmentChangedEventType: ShipmentChangedEventType;
  ShipmentCreateInput: ShipmentCreateInput;
  ShipmentEdge: ResolverTypeWrapper<ShipmentEdge>;
  ShipmentOrderBy: ShipmentOrderBy;
  ShipmentStatus: ShipmentStatus;
  ShipmentsConnection: ResolverTypeWrapper<ShipmentsConnection>;
  ShippingDetails: ResolverTypeWrapper<ShippingDetails>;
  ShippingDetailsCreateInput: ShippingDetailsCreateInput;
  StockInformation: ResolverTypeWrapper<StockInformation>;
  StockInformationInput: StockInformationInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Substitute: ResolverTypeWrapper<Substitute>;
  SubstituteAttributeItem: ResolverTypeWrapper<SubstituteAttributeItem>;
  SubstituteAttributeItemInput: SubstituteAttributeItemInput;
  SubstituteInput: SubstituteInput;
  SubstituteLineItem: ResolverTypeWrapper<SubstituteLineItem>;
  SubstituteLineItemArticle: ResolverTypeWrapper<SubstituteLineItemArticle>;
  SubstituteLineItemUpdateInput: SubstituteLineItemUpdateInput;
  Substitutes: ResolverTypeWrapper<Substitutes>;
  SubstitutesInput: SubstitutesInput;
  SubstitutionConfiguration: ResolverTypeWrapper<SubstitutionConfiguration>;
  SupportedConfig: ResolversTypes['BatchPickingConfiguration'] | ResolversTypes['PartialCarrierConfiguration'] | ResolversTypes['RerouteShortPickConfiguration'] | ResolversTypes['SubstitutionConfiguration'] | ResolversTypes['TakeOverPickJobConfiguration'];
  TakeOverPickJobConfiguration: ResolverTypeWrapper<TakeOverPickJobConfiguration>;
  TakeOverPickJobConfigurationInput: TakeOverPickJobConfigurationInput;
  TargetAddress: ResolverTypeWrapper<TargetAddress>;
  TimeRange: ResolverTypeWrapper<TimeRange>;
  TimeRangeInput: TimeRangeInput;
  TimeStamp: ResolverTypeWrapper<TimeStamp>;
  TimeStampInput: TimeStampInput;
  TimeZone: ResolverTypeWrapper<TimeZone>;
  TrackingStatus: TrackingStatus;
  UpdatePickingTimesInput: UpdatePickingTimesInput;
  VersionedResource: ResolversTypes['BatchPickingConfiguration'] | ResolversTypes['Carrier'] | ResolversTypes['CarrierConfiguration'] | ResolversTypes['CutoffTimeConfiguration'] | ResolversTypes['DefaultPickingTimesConfiguration'] | ResolversTypes['ExternalDocument'] | ResolversTypes['Facility'] | ResolversTypes['Feature'] | ResolversTypes['FulfillmentProcessBufferConfiguration'] | ResolversTypes['HandoverJob'] | ResolversTypes['Listing'] | ResolversTypes['LoadUnit'] | ResolversTypes['LoadUnitType'] | ResolversTypes['MeasurementUnit'] | ResolversTypes['Order'] | ResolversTypes['PackJob'] | ResolversTypes['Parcel'] | ResolversTypes['PartialCarrierConfiguration'] | ResolversTypes['PickJob'] | ResolversTypes['PickRun'] | ResolversTypes['Process'] | ResolversTypes['RerouteShortPickConfiguration'] | ResolversTypes['RerouteTimeTriggeredConfiguration'] | ResolversTypes['RestowItem'] | ResolversTypes['ReturnJob'] | ResolversTypes['RoutingPlan'] | ResolversTypes['ScopedCapability'] | ResolversTypes['Shipment'] | ResolversTypes['Substitutes'] | ResolversTypes['SubstitutionConfiguration'] | ResolversTypes['TakeOverPickJobConfiguration'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AbstractFacilityCarrierConfiguration: ResolversParentTypes['AngelFacilityCarrierConfiguration'] | ResolversParentTypes['DhlFacilityCarrierConfiguration'] | ResolversParentTypes['GlsFacilityCarrierConfiguration'];
  Address: ResolversParentTypes['ConsumerAddress'] | ResolversParentTypes['FacilityAddress'] | ResolversParentTypes['TargetAddress'];
  AddressPhoneNumber: AddressPhoneNumber;
  AddressPhoneNumberInput: AddressPhoneNumberInput;
  AngelCredentialsInput: AngelCredentialsInput;
  AngelFacilityCarrierConfiguration: AngelFacilityCarrierConfiguration;
  AngelFacilityCarrierConfigurationInput: AngelFacilityCarrierConfigurationInput;
  Article: ResolversParentTypes['OrderLineItemArticle'] | ResolversParentTypes['PackLineItemArticle'] | ResolversParentTypes['PickLineItemArticle'] | ResolversParentTypes['RestowItemArticle'] | ResolversParentTypes['ReturnItemArticle'] | ResolversParentTypes['SubstituteLineItemArticle'];
  ArticleAttributeItem: ArticleAttributeItem;
  ArticleAttributeItemInput: ArticleAttributeItemInput;
  BatchPickingConfiguration: BatchPickingConfiguration;
  BatchPickingConfigurationInput: BatchPickingConfigurationInput;
  Boolean: Scalars['Boolean'];
  Carrier: Carrier;
  CarrierConfiguration: CarrierConfiguration;
  CarrierConfigurationInput: CarrierConfigurationInput;
  CarrierConnection: CarrierConnection;
  CarrierCreateInput: CarrierCreateInput;
  CarrierEdge: CarrierEdge;
  CarrierUpdateInput: CarrierUpdateInput;
  ClickAndCollectDetails: ClickAndCollectDetails;
  ClickAndCollectDetailsCreateInput: ClickAndCollectDetailsCreateInput;
  ClickAndCollectRerouteConfiguration: ClickAndCollectRerouteConfiguration;
  ClickAndCollectRerouteConfigurationInput: ClickAndCollectRerouteConfigurationInput;
  ClosingDay: ClosingDay;
  ClosingDayInput: ClosingDayInput;
  Consumer: Consumer;
  ConsumerAddress: ConsumerAddress;
  ConsumerAddressInput: ConsumerAddressInput;
  Coordinates: Coordinates;
  CoordinatesInput: CoordinatesInput;
  CutoffTime: CutoffTime;
  CutoffTimeConfiguration: CutoffTimeConfiguration;
  CutoffTimeConfigurationUpdateInput: CutoffTimeConfigurationUpdateInput;
  CutoffTimeInput: CutoffTimeInput;
  DHLCredentialsInput: DhlCredentialsInput;
  DPDCredentialsInput: DpdCredentialsInput;
  DecisionLogRef: DecisionLogRef;
  DefaultPickingTimesConfiguration: DefaultPickingTimesConfiguration;
  DeliveryArea: DeliveryArea;
  DeliveryAreaInput: DeliveryAreaInput;
  DeliveryInformation: DeliveryInformation;
  DeliveryInformationCreateInput: DeliveryInformationCreateInput;
  DeliveryInformationDetails: DeliveryInformationDetails;
  DeliveryInformationDetailsCreateInput: DeliveryInformationDetailsCreateInput;
  DeliveryPreferences: DeliveryPreferences;
  DeliveryPreferencesShipping: DeliveryPreferencesShipping;
  DhlFacilityCarrierConfiguration: DhlFacilityCarrierConfiguration;
  DhlFacilityCarrierConfigurationInput: DhlFacilityCarrierConfigurationInput;
  Editor: Editor;
  ExternalDocument: ExternalDocument;
  ExternalDocumentInput: ExternalDocumentInput;
  ExternalDocumentToUpdateInput: ExternalDocumentToUpdateInput;
  FacilitiesConnection: FacilitiesConnection;
  Facility: Facility;
  FacilityAddress: FacilityAddress;
  FacilityAddressCreateInput: FacilityAddressCreateInput;
  FacilityAddressInput: FacilityAddressInput;
  FacilityCarrier: FacilityCarrier;
  FacilityContact: FacilityContact;
  FacilityContactCreateInput: FacilityContactCreateInput;
  FacilityCreateInput: FacilityCreateInput;
  FacilityEdge: FacilityEdge;
  FacilityEmailAddress: FacilityEmailAddress;
  FacilityEmailAddressInput: FacilityEmailAddressInput;
  FacilityService: FacilityService;
  FacilityServiceCreateInput: FacilityServiceCreateInput;
  FacilityUpdateInput: FacilityUpdateInput;
  Feature: Feature;
  FeatureInput: FeatureInput;
  Float: Scalars['Float'];
  FulfillmentProcessBufferConfiguration: FulfillmentProcessBufferConfiguration;
  FulfillmentProcessBufferInput: FulfillmentProcessBufferInput;
  GLSCredentialsInput: GlsCredentialsInput;
  GlsFacilityCarrierConfiguration: GlsFacilityCarrierConfiguration;
  GlsFacilityCarrierConfigurationInput: GlsFacilityCarrierConfigurationInput;
  GraphQLISODateTime: Scalars['GraphQLISODateTime'];
  GraphQLJSON: Scalars['GraphQLJSON'];
  HandoverJob: HandoverJob;
  HandoverJobChangedEvent: HandoverJobChangedEvent;
  HandoverJobCreateInput: HandoverJobCreateInput;
  HandoverJobEdge: HandoverJobEdge;
  HandoverJobUpdateInput: HandoverJobUpdateInput;
  HandoverJobsConnection: HandoverJobsConnection;
  ID: Scalars['ID'];
  IconInput: IconInput;
  Int: Scalars['Int'];
  LinkedConfiguration: LinkedConfiguration;
  Listing: Listing;
  ListingCreateInput: ListingCreateInput;
  ListingEdge: ListingEdge;
  ListingUpdateInput: ListingUpdateInput;
  ListingsConnection: ListingsConnection;
  LoadUnit: LoadUnit;
  LoadUnitCreateInput: LoadUnitCreateInput;
  LoadUnitEdge: LoadUnitEdge;
  LoadUnitType: LoadUnitType;
  LoadUnitTypeCreateInput: LoadUnitTypeCreateInput;
  LoadUnitTypeEdge: LoadUnitTypeEdge;
  LoadUnitTypeUpdateInput: LoadUnitTypeUpdateInput;
  LoadUnitTypesConnection: LoadUnitTypesConnection;
  LoadUnitsConnection: LoadUnitsConnection;
  Location: Location;
  LocationInput: LocationInput;
  MeasurementUnit: MeasurementUnit;
  MeasurementUnitInput: MeasurementUnitInput;
  MeasurementUnitUpdateInput: MeasurementUnitUpdateInput;
  MeasurementUnitsConnection: MeasurementUnitsConnection;
  MeasurementUnitsEdge: MeasurementUnitsEdge;
  Mutation: {};
  NamedFileInput: NamedFileInput;
  Notification: ResolversParentTypes['PickJobCreatedNotification'];
  Order: Order;
  OrderLineItem: OrderLineItem;
  OrderLineItemArticle: OrderLineItemArticle;
  PackJob: PackJob;
  PackJobChangedEvent: PackJobChangedEvent;
  PackJobCreateInput: PackJobCreateInput;
  PackJobEdge: PackJobEdge;
  PackJobsConnection: PackJobsConnection;
  PackLineItem: PackLineItem;
  PackLineItemArticle: PackLineItemArticle;
  PackLineItemArticleCreateInput: PackLineItemArticleCreateInput;
  PackLineItemCreateInput: PackLineItemCreateInput;
  PageInfo: PageInfo;
  Parcel: Parcel;
  ParcelCreateInput: ParcelCreateInput;
  ParcelDimensions: ParcelDimensions;
  ParcelDimensionsInput: ParcelDimensionsInput;
  ParcelResult: ParcelResult;
  PartialCarrierConfiguration: PartialCarrierConfiguration;
  PartialStock: PartialStock;
  PartialStockInput: PartialStockInput;
  PartialStocksUpdateInput: PartialStocksUpdateInput;
  Period: Period;
  PickJob: PickJob;
  PickJobChangedEvent: PickJobChangedEvent;
  PickJobCreateInput: PickJobCreateInput;
  PickJobCreatedNotification: PickJobCreatedNotification;
  PickJobEdge: PickJobEdge;
  PickJobUpdateInput: PickJobUpdateInput;
  PickJobsConnection: PickJobsConnection;
  PickLineItem: PickLineItem;
  PickLineItemArticle: PickLineItemArticle;
  PickLineItemArticleCreateInput: PickLineItemArticleCreateInput;
  PickLineItemCreateInput: PickLineItemCreateInput;
  PickLineItemUpdateInput: PickLineItemUpdateInput;
  PickRun: PickRun;
  PickRunCreateInput: PickRunCreateInput;
  PickRunLineItemUpdateInput: PickRunLineItemUpdateInput;
  PickingConfigurations: PickingConfigurations;
  PickingTimes: PickingTimes;
  PickingTimesInput: PickingTimesInput;
  PreselectedFacility: PreselectedFacility;
  Process: Process;
  ProcessEdge: ProcessEdge;
  ProcessInput: ProcessInput;
  ProcessesConnection: ProcessesConnection;
  Query: {};
  RerouteConfiguration: RerouteConfiguration;
  RerouteConfigurationInput: RerouteConfigurationInput;
  RerouteShortPickConfiguration: RerouteShortPickConfiguration;
  RerouteShortPickConfigurationInput: RerouteShortPickConfigurationInput;
  RerouteTimeTriggeredConfiguration: RerouteTimeTriggeredConfiguration;
  RerouteTimeTriggeredConfigurationInput: RerouteTimeTriggeredConfigurationInput;
  ResowItemChangedEvent: ResowItemChangedEvent;
  RestowItem: RestowItem;
  RestowItemArticle: RestowItemArticle;
  RestowItemEdge: RestowItemEdge;
  RestowItemsConnection: RestowItemsConnection;
  ReturnItemArticle: ReturnItemArticle;
  ReturnItemArticleInput: ReturnItemArticleInput;
  ReturnJob: ReturnJob;
  ReturnJobInput: ReturnJobInput;
  ReturnLine: ReturnLine;
  ReturnLineInput: ReturnLineInput;
  Returned: Returned;
  ReturnedInput: ReturnedInput;
  RoutingPlan: RoutingPlan;
  RoutingPlanEdge: RoutingPlanEdge;
  RoutingPlanLineItem: RoutingPlanLineItem;
  RoutingPlansConnection: RoutingPlansConnection;
  ScopedCapability: Omit<ScopedCapability, 'configurations'> & { configurations?: Maybe<Array<ResolversParentTypes['SupportedConfig']>> };
  Score: Score;
  ScoreInput: ScoreInput;
  ShipFromStoreRerouteConfiguration: ShipFromStoreRerouteConfiguration;
  ShipFromStoreRerouteConfigurationInput: ShipFromStoreRerouteConfigurationInput;
  Shipment: Shipment;
  ShipmentChangedEvent: ShipmentChangedEvent;
  ShipmentCreateInput: ShipmentCreateInput;
  ShipmentEdge: ShipmentEdge;
  ShipmentsConnection: ShipmentsConnection;
  ShippingDetails: ShippingDetails;
  ShippingDetailsCreateInput: ShippingDetailsCreateInput;
  StockInformation: StockInformation;
  StockInformationInput: StockInformationInput;
  String: Scalars['String'];
  Subscription: {};
  Substitute: Substitute;
  SubstituteAttributeItem: SubstituteAttributeItem;
  SubstituteAttributeItemInput: SubstituteAttributeItemInput;
  SubstituteInput: SubstituteInput;
  SubstituteLineItem: SubstituteLineItem;
  SubstituteLineItemArticle: SubstituteLineItemArticle;
  SubstituteLineItemUpdateInput: SubstituteLineItemUpdateInput;
  Substitutes: Substitutes;
  SubstitutesInput: SubstitutesInput;
  SubstitutionConfiguration: SubstitutionConfiguration;
  SupportedConfig: ResolversParentTypes['BatchPickingConfiguration'] | ResolversParentTypes['PartialCarrierConfiguration'] | ResolversParentTypes['RerouteShortPickConfiguration'] | ResolversParentTypes['SubstitutionConfiguration'] | ResolversParentTypes['TakeOverPickJobConfiguration'];
  TakeOverPickJobConfiguration: TakeOverPickJobConfiguration;
  TakeOverPickJobConfigurationInput: TakeOverPickJobConfigurationInput;
  TargetAddress: TargetAddress;
  TimeRange: TimeRange;
  TimeRangeInput: TimeRangeInput;
  TimeStamp: TimeStamp;
  TimeStampInput: TimeStampInput;
  TimeZone: TimeZone;
  UpdatePickingTimesInput: UpdatePickingTimesInput;
  VersionedResource: ResolversParentTypes['BatchPickingConfiguration'] | ResolversParentTypes['Carrier'] | ResolversParentTypes['CarrierConfiguration'] | ResolversParentTypes['CutoffTimeConfiguration'] | ResolversParentTypes['DefaultPickingTimesConfiguration'] | ResolversParentTypes['ExternalDocument'] | ResolversParentTypes['Facility'] | ResolversParentTypes['Feature'] | ResolversParentTypes['FulfillmentProcessBufferConfiguration'] | ResolversParentTypes['HandoverJob'] | ResolversParentTypes['Listing'] | ResolversParentTypes['LoadUnit'] | ResolversParentTypes['LoadUnitType'] | ResolversParentTypes['MeasurementUnit'] | ResolversParentTypes['Order'] | ResolversParentTypes['PackJob'] | ResolversParentTypes['Parcel'] | ResolversParentTypes['PartialCarrierConfiguration'] | ResolversParentTypes['PickJob'] | ResolversParentTypes['PickRun'] | ResolversParentTypes['Process'] | ResolversParentTypes['RerouteShortPickConfiguration'] | ResolversParentTypes['RerouteTimeTriggeredConfiguration'] | ResolversParentTypes['RestowItem'] | ResolversParentTypes['ReturnJob'] | ResolversParentTypes['RoutingPlan'] | ResolversParentTypes['ScopedCapability'] | ResolversParentTypes['Shipment'] | ResolversParentTypes['Substitutes'] | ResolversParentTypes['SubstitutionConfiguration'] | ResolversParentTypes['TakeOverPickJobConfiguration'];
};

export type AbstractFacilityCarrierConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbstractFacilityCarrierConfiguration'] = ResolversParentTypes['AbstractFacilityCarrierConfiguration']> = {
  __resolveType: TypeResolveFn<'AngelFacilityCarrierConfiguration' | 'DhlFacilityCarrierConfiguration' | 'GlsFacilityCarrierConfiguration', ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  __resolveType: TypeResolveFn<'ConsumerAddress' | 'FacilityAddress' | 'TargetAddress', ParentType, ContextType>;
  additionalAddressInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  houseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumbers?: Resolver<Maybe<Array<ResolversTypes['AddressPhoneNumber']>>, ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AddressPhoneNumberResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressPhoneNumber'] = ResolversParentTypes['AddressPhoneNumber']> = {
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PhoneNumberType']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AngelFacilityCarrierConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AngelFacilityCarrierConfiguration'] = ResolversParentTypes['AngelFacilityCarrierConfiguration']> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickupLocationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  __resolveType: TypeResolveFn<'OrderLineItemArticle' | 'PackLineItemArticle' | 'PickLineItemArticle' | 'RestowItemArticle' | 'ReturnItemArticle' | 'SubstituteLineItemArticle', ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ArticleAttributeItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleAttributeItem'] = ResolversParentTypes['ArticleAttributeItem']> = {
  category?: Resolver<Maybe<ResolversTypes['ArticleAttributeItemCategory']>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BatchPickingConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPickingConfiguration'] = ResolversParentTypes['BatchPickingConfiguration']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarrierResolvers<ContextType = any, ParentType extends ResolversParentTypes['Carrier'] = ResolversParentTypes['Carrier']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  defaultParcelWeightInGram?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deliveryType?: Resolver<Maybe<ResolversTypes['CarrierDeliveryType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lifecycle?: Resolver<Maybe<ResolversTypes['CarrierLifecycle']>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['CarrierStatus']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarrierConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CarrierConfiguration'] = ResolversParentTypes['CarrierConfiguration']> = {
  carrierRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  returnLabel?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarrierConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CarrierConnection'] = ResolversParentTypes['CarrierConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CarrierEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarrierEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CarrierEdge'] = ResolversParentTypes['CarrierEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClickAndCollectDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClickAndCollectDetails'] = ResolversParentTypes['ClickAndCollectDetails']> = {
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClickAndCollectRerouteConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClickAndCollectRerouteConfiguration'] = ResolversParentTypes['ClickAndCollectRerouteConfiguration']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClosingDayResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClosingDay'] = ResolversParentTypes['ClosingDay']> = {
  date?: Resolver<ResolversTypes['GraphQLISODateTime'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<ResolversTypes['RecurrenceEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConsumerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Consumer'] = ResolversParentTypes['Consumer']> = {
  addresses?: Resolver<Array<ResolversTypes['ConsumerAddress']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConsumerAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConsumerAddress'] = ResolversParentTypes['ConsumerAddress']> = {
  additionalAddressInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  houseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumbers?: Resolver<Maybe<Array<ResolversTypes['AddressPhoneNumber']>>, ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salutation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoordinatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coordinates'] = ResolversParentTypes['Coordinates']> = {
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CutoffTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CutoffTime'] = ResolversParentTypes['CutoffTime']> = {
  hour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CutoffTimeConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CutoffTimeConfiguration'] = ResolversParentTypes['CutoffTimeConfiguration']> = {
  clickAndCollect?: Resolver<ResolversTypes['CutoffTime'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  shipFromStore?: Resolver<ResolversTypes['CutoffTime'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecisionLogRefResolvers<ContextType = any, ParentType extends ResolversParentTypes['DecisionLogRef'] = ResolversParentTypes['DecisionLogRef']> = {
  finalizeRun?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DefaultPickingTimesConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DefaultPickingTimesConfiguration'] = ResolversParentTypes['DefaultPickingTimesConfiguration']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  pickingTimes?: Resolver<ResolversTypes['PickingTimes'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryAreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryArea'] = ResolversParentTypes['DeliveryArea']> = {
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryInformation'] = ResolversParentTypes['DeliveryInformation']> = {
  channel?: Resolver<Maybe<ResolversTypes['Channel']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['DeliveryInformationDetails']>, ParentType, ContextType>;
  targetTime?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryInformationDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryInformationDetails'] = ResolversParentTypes['DeliveryInformationDetails']> = {
  collect?: Resolver<Maybe<ResolversTypes['ClickAndCollectDetails']>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<ResolversTypes['ShippingDetails']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryPreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryPreferences'] = ResolversParentTypes['DeliveryPreferences']> = {
  collect?: Resolver<Maybe<Array<ResolversTypes['PreselectedFacility']>>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<ResolversTypes['DeliveryPreferencesShipping']>, ParentType, ContextType>;
  supplyingFacilities?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  targetTime?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryPreferencesShippingResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryPreferencesShipping'] = ResolversParentTypes['DeliveryPreferencesShipping']> = {
  preferredCarriers?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  preselectedFacilities?: Resolver<Maybe<Array<ResolversTypes['PreselectedFacility']>>, ParentType, ContextType>;
  serviceLevel?: Resolver<Maybe<ResolversTypes['ServiceLevel']>, ParentType, ContextType>;
  serviceType?: Resolver<Maybe<ResolversTypes['ServiceType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DhlFacilityCarrierConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DhlFacilityCarrierConfiguration'] = ResolversParentTypes['DhlFacilityCarrierConfiguration']> = {
  accountingNumberParcel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountingNumberParcelInternational?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountingNumberReturn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountingNumberStandardNationalGoGreen?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  returnReceiverId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Editor'] = ResolversParentTypes['Editor']> = {
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalDocument'] = ResolversParentTypes['ExternalDocument']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  section?: Resolver<ResolversTypes['Section'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['DocumentType'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilitiesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacilitiesConnection'] = ResolversParentTypes['FacilitiesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FacilityEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Facility'] = ResolversParentTypes['Facility']> = {
  address?: Resolver<ResolversTypes['FacilityAddress'], ParentType, ContextType>;
  carriers?: Resolver<Maybe<Array<ResolversTypes['FacilityCarrier']>>, ParentType, ContextType>;
  closingDays?: Resolver<Maybe<Array<ResolversTypes['ClosingDay']>>, ParentType, ContextType>;
  configs?: Resolver<Maybe<Array<ResolversTypes['LinkedConfiguration']>>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['FacilityContact']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  fulfillmentProcessBuffer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  locationType?: Resolver<Maybe<ResolversTypes['FacilityLocationType']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickingTimes?: Resolver<Maybe<ResolversTypes['PickingTimes']>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<ResolversTypes['FacilityService']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['FacilityStatus'], ParentType, ContextType>;
  tenantFacilityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacilityAddress'] = ResolversParentTypes['FacilityAddress']> = {
  additionalAddressInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  emailAddresses?: Resolver<Maybe<Array<ResolversTypes['FacilityEmailAddress']>>, ParentType, ContextType>;
  houseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumbers?: Resolver<Maybe<Array<ResolversTypes['AddressPhoneNumber']>>, ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resolvedCoordinates?: Resolver<Maybe<ResolversTypes['Coordinates']>, ParentType, ContextType>;
  resolvedTimeZone?: Resolver<Maybe<ResolversTypes['TimeZone']>, ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityCarrierResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacilityCarrier'] = ResolversParentTypes['FacilityCarrier']> = {
  carrierRef?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  configuration?: Resolver<Maybe<ResolversTypes['AbstractFacilityCarrierConfiguration']>, ParentType, ContextType>;
  cutoffTime?: Resolver<Maybe<ResolversTypes['CutoffTime']>, ParentType, ContextType>;
  deliveryAreas?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeliveryArea']>>>, ParentType, ContextType>;
  deliveryType?: Resolver<Maybe<ResolversTypes['CarrierDeliveryType']>, ParentType, ContextType>;
  facilityRef?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['CarrierStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacilityContact'] = ResolversParentTypes['FacilityContact']> = {
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacilityEdge'] = ResolversParentTypes['FacilityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Facility'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityEmailAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacilityEmailAddress'] = ResolversParentTypes['FacilityEmailAddress']> = {
  recipient?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacilityService'] = ResolversParentTypes['FacilityService']> = {
  type?: Resolver<Maybe<ResolversTypes['FacilityServiceType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['FeatureStatus'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FulfillmentProcessBufferConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['FulfillmentProcessBufferConfiguration'] = ResolversParentTypes['FulfillmentProcessBufferConfiguration']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  minutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlsFacilityCarrierConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlsFacilityCarrierConfiguration'] = ResolversParentTypes['GlsFacilityCarrierConfiguration']> = {
  contactId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQlisoDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GraphQLISODateTime'], any> {
  name: 'GraphQLISODateTime';
}

export interface GraphQljsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GraphQLJSON'], any> {
  name: 'GraphQLJSON';
}

export type HandoverJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['HandoverJob'] = ResolversParentTypes['HandoverJob']> = {
  anonymized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  carrier?: Resolver<Maybe<ResolversTypes['Carrier']>, ParentType, ContextType>;
  carrierRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['HandoverJobChannel'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  facilityRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  loadUnitRefs?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType>;
  parcelRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickJob?: Resolver<Maybe<ResolversTypes['PickJob']>, ParentType, ContextType>;
  pickJobRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipment?: Resolver<Maybe<ResolversTypes['Shipment']>, ParentType, ContextType>;
  shipmentRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['HandoverJobStatus'], ParentType, ContextType>;
  targetTime?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  tenantOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HandoverJobChangedEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['HandoverJobChangedEvent'] = ResolversParentTypes['HandoverJobChangedEvent']> = {
  handoverJob?: Resolver<Maybe<ResolversTypes['HandoverJob']>, ParentType, ContextType>;
  handoverJobId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['HandoverJobChangedEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HandoverJobEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HandoverJobEdge'] = ResolversParentTypes['HandoverJobEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['HandoverJob'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HandoverJobsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['HandoverJobsConnection'] = ResolversParentTypes['HandoverJobsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['HandoverJobEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkedConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedConfiguration'] = ResolversParentTypes['LinkedConfiguration']> = {
  ref?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Listing'] = ResolversParentTypes['Listing']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['ArticleAttributeItem']>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  facilityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  partialStocks?: Resolver<Maybe<Array<ResolversTypes['PartialStock']>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ListingStatus'], ParentType, ContextType>;
  stockinformation?: Resolver<Maybe<ResolversTypes['StockInformation']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListingEdge'] = ResolversParentTypes['ListingEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Listing'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListingsConnection'] = ResolversParentTypes['ListingsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ListingEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoadUnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoadUnit'] = ResolversParentTypes['LoadUnit']> = {
  codes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facilityRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  loadUnitTypeRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickJobRefs?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoadUnitEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoadUnitEdge'] = ResolversParentTypes['LoadUnitEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['LoadUnit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoadUnitTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoadUnitType'] = ResolversParentTypes['LoadUnitType']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoadUnitTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoadUnitTypeEdge'] = ResolversParentTypes['LoadUnitTypeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['LoadUnitType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoadUnitTypesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoadUnitTypesConnection'] = ResolversParentTypes['LoadUnitTypesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LoadUnitTypeEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoadUnitsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoadUnitsConnection'] = ResolversParentTypes['LoadUnitsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LoadUnitEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  locationRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scannableCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeasurementUnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['MeasurementUnit'] = ResolversParentTypes['MeasurementUnit']> = {
  abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  abbreviationLocalized?: Resolver<ResolversTypes['GraphQLJSON'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameLocalized?: Resolver<ResolversTypes['GraphQLJSON'], ParentType, ContextType>;
  requiresMeasurement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeasurementUnitsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MeasurementUnitsConnection'] = ResolversParentTypes['MeasurementUnitsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MeasurementUnitsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeasurementUnitsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MeasurementUnitsEdge'] = ResolversParentTypes['MeasurementUnitsEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MeasurementUnit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  activateCarrier?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, RequireFields<MutationActivateCarrierArgs, 'carrierId' | 'carrierVersion'>>;
  activateFacilityCarrier?: Resolver<ResolversTypes['FacilityCarrier'], ParentType, ContextType, RequireFields<MutationActivateFacilityCarrierArgs, 'carrierRef' | 'facilityId'>>;
  assignFacility?: Resolver<Maybe<ResolversTypes['RoutingPlan']>, ParentType, ContextType, RequireFields<MutationAssignFacilityArgs, 'facilityId' | 'routingPlanId' | 'version'>>;
  cancelOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCancelOrderArgs, 'orderId'>>;
  changeAngelCredentials?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, RequireFields<MutationChangeAngelCredentialsArgs, 'carrierId' | 'carrierVersion' | 'credentials'>>;
  changeDHLCredentials?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, RequireFields<MutationChangeDhlCredentialsArgs, 'carrierId' | 'carrierVersion' | 'credentials'>>;
  changeDPDCredentials?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, RequireFields<MutationChangeDpdCredentialsArgs, 'carrierId' | 'carrierVersion' | 'credentials'>>;
  changeGLSCredentials?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, RequireFields<MutationChangeGlsCredentialsArgs, 'carrierId' | 'carrierVersion' | 'credentials'>>;
  changeShipmentCarrier?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationChangeShipmentCarrierArgs, 'carrierRef' | 'shipmentId'>>;
  closePickJob?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationClosePickJobArgs, 'pickJobId' | 'pickJobVersion'>>;
  createCarrier?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, Partial<MutationCreateCarrierArgs>>;
  createFacility?: Resolver<ResolversTypes['Facility'], ParentType, ContextType, RequireFields<MutationCreateFacilityArgs, 'facility'>>;
  createHandoverJob?: Resolver<ResolversTypes['HandoverJob'], ParentType, ContextType, RequireFields<MutationCreateHandoverJobArgs, 'handoverJob'>>;
  createListings?: Resolver<Array<ResolversTypes['Listing']>, ParentType, ContextType, RequireFields<MutationCreateListingsArgs, 'listingsInput'>>;
  createLoadUnitType?: Resolver<ResolversTypes['LoadUnitType'], ParentType, ContextType, RequireFields<MutationCreateLoadUnitTypeArgs, 'loadUnitType'>>;
  createLoadUnits?: Resolver<Array<ResolversTypes['LoadUnit']>, ParentType, ContextType, RequireFields<MutationCreateLoadUnitsArgs, 'loadUnits'>>;
  createMeasurementUnit?: Resolver<ResolversTypes['MeasurementUnit'], ParentType, ContextType, RequireFields<MutationCreateMeasurementUnitArgs, 'measurementUnitInput'>>;
  createPackJob?: Resolver<ResolversTypes['PackJob'], ParentType, ContextType, RequireFields<MutationCreatePackJobArgs, 'packJob'>>;
  createParcel?: Resolver<ResolversTypes['Parcel'], ParentType, ContextType, RequireFields<MutationCreateParcelArgs, 'parcel'>>;
  createPickJob?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationCreatePickJobArgs, 'pickJob'>>;
  createPickRun?: Resolver<ResolversTypes['PickRun'], ParentType, ContextType, RequireFields<MutationCreatePickRunArgs, 'pickRun'>>;
  createProcessDocument?: Resolver<ResolversTypes['ExternalDocument'], ParentType, ContextType, RequireFields<MutationCreateProcessDocumentArgs, 'externalDocumentInput' | 'processId'>>;
  createReturnJob?: Resolver<ResolversTypes['ReturnJob'], ParentType, ContextType, RequireFields<MutationCreateReturnJobArgs, 'returnJob'>>;
  createShipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationCreateShipmentArgs, 'shipment'>>;
  deactivateCarrier?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, RequireFields<MutationDeactivateCarrierArgs, 'carrierId' | 'carrierVersion'>>;
  deactivateFacilityCarrier?: Resolver<ResolversTypes['FacilityCarrier'], ParentType, ContextType, RequireFields<MutationDeactivateFacilityCarrierArgs, 'carrierRef' | 'facilityId'>>;
  deleteFacility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteFacilityArgs, 'facilityId'>>;
  deleteGlobalSubstitutes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteGlobalSubstitutesArgs, 'tenantArticleId'>>;
  deleteListing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteListingArgs, 'facilityId' | 'tenantArticleId'>>;
  deleteLoadUnit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteLoadUnitArgs, 'id'>>;
  deleteLoadUnits?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteLoadUnitsArgs, 'ids'>>;
  deleteMeasurementUnit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteMeasurementUnitArgs, 'id'>>;
  deletePartialStocks?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePartialStocksArgs, 'facilityId' | 'tenantArticleId'>>;
  deletePickJobLoadUnits?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePickJobLoadUnitsArgs, 'pickJobRef'>>;
  finishPackJob?: Resolver<ResolversTypes['PackJob'], ParentType, ContextType, RequireFields<MutationFinishPackJobArgs, 'id' | 'version'>>;
  finishPickRun?: Resolver<ResolversTypes['PickRun'], ParentType, ContextType, RequireFields<MutationFinishPickRunArgs, 'id' | 'version'>>;
  handover?: Resolver<ResolversTypes['HandoverJob'], ParentType, ContextType, RequireFields<MutationHandoverArgs, 'handoverJobId' | 'handoverJobVersion'>>;
  openPickJob?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationOpenPickJobArgs, 'pickJobId' | 'pickJobVersion'>>;
  patchPartialStocks?: Resolver<Array<Maybe<ResolversTypes['PartialStock']>>, ParentType, ContextType, RequireFields<MutationPatchPartialStocksArgs, 'facilityId' | 'partialStocksUpdateInput' | 'tenantArticleId'>>;
  rejectPickJob?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationRejectPickJobArgs, 'pickJobId' | 'pickJobVersion'>>;
  removePickJobFromPickRun?: Resolver<ResolversTypes['PickRun'], ParentType, ContextType, RequireFields<MutationRemovePickJobFromPickRunArgs, 'id' | 'pickJobRef' | 'version'>>;
  reopenPackJob?: Resolver<ResolversTypes['PackJob'], ParentType, ContextType, RequireFields<MutationReopenPackJobArgs, 'id' | 'version'>>;
  reopenParcel?: Resolver<ResolversTypes['Parcel'], ParentType, ContextType, RequireFields<MutationReopenParcelArgs, 'parcelId'>>;
  requestRerouteForPickJob?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRequestRerouteForPickJobArgs, 'pickJobId'>>;
  restowAnItem?: Resolver<ResolversTypes['RestowItem'], ParentType, ContextType, RequireFields<MutationRestowAnItemArgs, 'restowItemId' | 'restowItemVersion'>>;
  restowPickJob?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationRestowPickJobArgs, 'pickJobId' | 'pickJobVersion'>>;
  retryRoutingPlan?: Resolver<Maybe<ResolversTypes['RoutingPlan']>, ParentType, ContextType, RequireFields<MutationRetryRoutingPlanArgs, 'routingPlanId' | 'version'>>;
  revertHandover?: Resolver<ResolversTypes['HandoverJob'], ParentType, ContextType, RequireFields<MutationRevertHandoverArgs, 'handoverJobId' | 'handoverJobVersion'>>;
  setFeatureStatus?: Resolver<ResolversTypes['Feature'], ParentType, ContextType, RequireFields<MutationSetFeatureStatusArgs, 'feature'>>;
  setPickJobInProgress?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationSetPickJobInProgressArgs, 'pickJobId' | 'pickJobVersion'>>;
  startPackJob?: Resolver<ResolversTypes['PackJob'], ParentType, ContextType, RequireFields<MutationStartPackJobArgs, 'id' | 'version'>>;
  startPickRun?: Resolver<ResolversTypes['PickRun'], ParentType, ContextType, RequireFields<MutationStartPickRunArgs, 'id' | 'version'>>;
  takeOverPickJob?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationTakeOverPickJobArgs, 'pickJobId' | 'pickJobVersion'>>;
  updateAngelFacilityCarrierConfiguration?: Resolver<ResolversTypes['FacilityCarrier'], ParentType, ContextType, RequireFields<MutationUpdateAngelFacilityCarrierConfigurationArgs, 'carrierRef' | 'configuration' | 'facilityId'>>;
  updateCarrier?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, RequireFields<MutationUpdateCarrierArgs, 'carrierId' | 'carrierVersion'>>;
  updateCarrierConfiguration?: Resolver<ResolversTypes['CarrierConfiguration'], ParentType, ContextType, RequireFields<MutationUpdateCarrierConfigurationArgs, 'input'>>;
  updateCutoffTimeConfiguration?: Resolver<ResolversTypes['CutoffTimeConfiguration'], ParentType, ContextType, RequireFields<MutationUpdateCutoffTimeConfigurationArgs, 'input'>>;
  updateDhlFacilityCarrierConfiguration?: Resolver<ResolversTypes['FacilityCarrier'], ParentType, ContextType, RequireFields<MutationUpdateDhlFacilityCarrierConfigurationArgs, 'carrierRef' | 'configuration' | 'facilityId'>>;
  updateFacility?: Resolver<ResolversTypes['Facility'], ParentType, ContextType, RequireFields<MutationUpdateFacilityArgs, 'facility' | 'facilityId' | 'facilityVersion'>>;
  updateFacilityCarrierCutoffTime?: Resolver<ResolversTypes['FacilityCarrier'], ParentType, ContextType, RequireFields<MutationUpdateFacilityCarrierCutoffTimeArgs, 'carrierRef' | 'cutoffTime' | 'facilityId'>>;
  updateFacilityCarrierDeliveryAreas?: Resolver<ResolversTypes['FacilityCarrier'], ParentType, ContextType, RequireFields<MutationUpdateFacilityCarrierDeliveryAreasArgs, 'carrierRef' | 'facilityId'>>;
  updateFulfillmentProcessBufferConfiguration?: Resolver<ResolversTypes['FulfillmentProcessBufferConfiguration'], ParentType, ContextType, RequireFields<MutationUpdateFulfillmentProcessBufferConfigurationArgs, 'input'>>;
  updateGlsFacilityCarrierConfiguration?: Resolver<ResolversTypes['FacilityCarrier'], ParentType, ContextType, RequireFields<MutationUpdateGlsFacilityCarrierConfigurationArgs, 'carrierRef' | 'configuration' | 'facilityId'>>;
  updateHandoverJob?: Resolver<ResolversTypes['HandoverJob'], ParentType, ContextType, RequireFields<MutationUpdateHandoverJobArgs, 'handoverJobId' | 'handoverJobUpdateInput' | 'handoverJobVersion'>>;
  updateListing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType, RequireFields<MutationUpdateListingArgs, 'listingInput'>>;
  updateLoadUnitType?: Resolver<ResolversTypes['LoadUnitType'], ParentType, ContextType, RequireFields<MutationUpdateLoadUnitTypeArgs, 'loadUnitType' | 'loadUnitTypeId' | 'loadUnitTypeVersion'>>;
  updateLoadUnitTypeIcon?: Resolver<ResolversTypes['LoadUnitType'], ParentType, ContextType, RequireFields<MutationUpdateLoadUnitTypeIconArgs, 'icon' | 'loadUnitTypeId' | 'loadUnitTypeVersion'>>;
  updateMeasurementUnit?: Resolver<ResolversTypes['MeasurementUnit'], ParentType, ContextType, RequireFields<MutationUpdateMeasurementUnitArgs, 'id' | 'version'>>;
  updatePartialStocks?: Resolver<Array<Maybe<ResolversTypes['PartialStock']>>, ParentType, ContextType, RequireFields<MutationUpdatePartialStocksArgs, 'facilityId' | 'partialStocksUpdateInput' | 'tenantArticleId'>>;
  updatePickJob?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationUpdatePickJobArgs, 'pickJobId' | 'pickJobUpdateInput' | 'pickJobVersion'>>;
  updatePickLineItems?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<MutationUpdatePickLineItemsArgs, 'pickJobId' | 'pickJobVersion' | 'pickLineItems'>>;
  updatePickRunLineItems?: Resolver<ResolversTypes['PickRun'], ParentType, ContextType, RequireFields<MutationUpdatePickRunLineItemsArgs, 'id' | 'pickRunLineItems' | 'version'>>;
  updatePickingTimesConfiguration?: Resolver<ResolversTypes['DefaultPickingTimesConfiguration'], ParentType, ContextType, RequireFields<MutationUpdatePickingTimesConfigurationArgs, 'updatePickingTimesInput'>>;
  updateProcessDocument?: Resolver<ResolversTypes['ExternalDocument'], ParentType, ContextType, RequireFields<MutationUpdateProcessDocumentArgs, 'documentId' | 'processId'>>;
  updateRerouteShortPickConfiguration?: Resolver<ResolversTypes['RerouteShortPickConfiguration'], ParentType, ContextType, RequireFields<MutationUpdateRerouteShortPickConfigurationArgs, 'configurationInput'>>;
  updateRerouteTimeTriggeredConfiguration?: Resolver<ResolversTypes['RerouteTimeTriggeredConfiguration'], ParentType, ContextType, RequireFields<MutationUpdateRerouteTimeTriggeredConfigurationArgs, 'configurationInput'>>;
  upsertBatchPickingConfiguration?: Resolver<ResolversTypes['BatchPickingConfiguration'], ParentType, ContextType, RequireFields<MutationUpsertBatchPickingConfigurationArgs, 'batchPickingConfigurationInput'>>;
  upsertGlobalSubstitutes?: Resolver<ResolversTypes['Substitutes'], ParentType, ContextType, RequireFields<MutationUpsertGlobalSubstitutesArgs, 'substitutes'>>;
  upsertTakeOverPickJobConfiguration?: Resolver<Maybe<ResolversTypes['TakeOverPickJobConfiguration']>, ParentType, ContextType, RequireFields<MutationUpsertTakeOverPickJobConfigurationArgs, 'takeOverPickJobConfigurationInput'>>;
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  __resolveType: TypeResolveFn<'PickJobCreatedNotification', ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NotificationType'], ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  anonymized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  consumer?: Resolver<ResolversTypes['Consumer'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  deliveryPreferences?: Resolver<Maybe<ResolversTypes['DeliveryPreferences']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['GraphQLISODateTime'], ParentType, ContextType>;
  orderLineItems?: Resolver<Array<ResolversTypes['OrderLineItem']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  tenantOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderLineItem'] = ResolversParentTypes['OrderLineItem']> = {
  article?: Resolver<ResolversTypes['OrderLineItemArticle'], ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scannableCodes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  shopPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderLineItemArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderLineItemArticle'] = ResolversParentTypes['OrderLineItemArticle']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['ArticleAttributeItem']>>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PackJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['PackJob'] = ResolversParentTypes['PackJob']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  editor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType>;
  facilityRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lineItems?: Resolver<Array<ResolversTypes['PackLineItem']>, ParentType, ContextType>;
  pickJob?: Resolver<Maybe<ResolversTypes['PickJob']>, ParentType, ContextType>;
  pickJobRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PackJobStatus'], ParentType, ContextType>;
  targetTime?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PackJobChangedEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['PackJobChangedEvent'] = ResolversParentTypes['PackJobChangedEvent']> = {
  packJob?: Resolver<Maybe<ResolversTypes['PackJob']>, ParentType, ContextType>;
  packJobId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PackJobChangedEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PackJobEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PackJobEdge'] = ResolversParentTypes['PackJobEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PackJob'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PackJobsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PackJobsConnection'] = ResolversParentTypes['PackJobsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PackJobEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PackLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PackLineItem'] = ResolversParentTypes['PackLineItem']> = {
  article?: Resolver<ResolversTypes['PackLineItemArticle'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  measurementUnitKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PackLineItemArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PackLineItemArticle'] = ResolversParentTypes['PackLineItemArticle']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['ArticleAttributeItem']>>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParcelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Parcel'] = ResolversParentTypes['Parcel']> = {
  anonymized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  carrierRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['ParcelDimensions']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  loadUnitRefs?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['ConsumerAddress'], ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['ParcelResult']>, ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['FacilityAddress'], ParentType, ContextType>;
  shipmentRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ParcelStatus'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParcelDimensionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelDimensions'] = ResolversParentTypes['ParcelDimensions']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParcelResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelResult'] = ResolversParentTypes['ParcelResult']> = {
  carrierTrackingNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proxyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  returnLabelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  returnLabelUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sendLabelUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackingStatus?: Resolver<Maybe<ResolversTypes['TrackingStatus']>, ParentType, ContextType>;
  trackingUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartialCarrierConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartialCarrierConfiguration'] = ResolversParentTypes['PartialCarrierConfiguration']> = {
  carrierRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  returnLabel?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartialStockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartialStock'] = ResolversParentTypes['PartialStock']> = {
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  scores?: Resolver<Maybe<Array<ResolversTypes['Score']>>, ParentType, ContextType>;
  stockInformation?: Resolver<ResolversTypes['StockInformation'], ParentType, ContextType>;
  tenantPartialStockId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickJob'] = ResolversParentTypes['PickJob']> = {
  anonymized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  deliveryInformation?: Resolver<Maybe<ResolversTypes['DeliveryInformation']>, ParentType, ContextType>;
  editor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType>;
  facilityRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handoverJobs?: Resolver<Array<ResolversTypes['HandoverJob']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  loadUnits?: Resolver<Array<ResolversTypes['LoadUnit']>, ParentType, ContextType, Partial<PickJobLoadUnitsArgs>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['GraphQLISODateTime'], ParentType, ContextType>;
  orderRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickLineItems?: Resolver<Array<ResolversTypes['PickLineItem']>, ParentType, ContextType>;
  pickRunRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipments?: Resolver<Array<ResolversTypes['Shipment']>, ParentType, ContextType>;
  shortId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PickJobStatus'], ParentType, ContextType>;
  tenantOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickJobChangedEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickJobChangedEvent'] = ResolversParentTypes['PickJobChangedEvent']> = {
  pickJob?: Resolver<Maybe<ResolversTypes['PickJob']>, ParentType, ContextType>;
  pickJobId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PickJobChangedEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickJobCreatedNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickJobCreatedNotification'] = ResolversParentTypes['PickJobCreatedNotification']> = {
  lineItemsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetTime?: Resolver<ResolversTypes['GraphQLISODateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NotificationType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickJobEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickJobEdge'] = ResolversParentTypes['PickJobEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickJobsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickJobsConnection'] = ResolversParentTypes['PickJobsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PickJobEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickLineItem'] = ResolversParentTypes['PickLineItem']> = {
  article?: Resolver<ResolversTypes['PickLineItemArticle'], ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  hasSubstitutes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  measurementUnit?: Resolver<Maybe<ResolversTypes['MeasurementUnit']>, ParentType, ContextType, Partial<PickLineItemMeasurementUnitArgs>>;
  measurementUnitKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picked?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scannableCodes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PickLineItemStatus'], ParentType, ContextType>;
  substituteLineItems?: Resolver<Maybe<Array<ResolversTypes['SubstituteLineItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickLineItemArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickLineItemArticle'] = ResolversParentTypes['PickLineItemArticle']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['ArticleAttributeItem']>>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickRunResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickRun'] = ResolversParentTypes['PickRun']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  editor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType>;
  facilityRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  pickJobRefs?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  pickLineItems?: Resolver<Array<ResolversTypes['PickLineItem']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PickRunStatus'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickingConfigurationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickingConfigurations'] = ResolversParentTypes['PickingConfigurations']> = {
  batchPickingConfiguration?: Resolver<Maybe<ResolversTypes['BatchPickingConfiguration']>, ParentType, ContextType>;
  takeOverPickJobConfiguration?: Resolver<Maybe<ResolversTypes['TakeOverPickJobConfiguration']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickingTimesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickingTimes'] = ResolversParentTypes['PickingTimes']> = {
  friday?: Resolver<Maybe<Array<ResolversTypes['TimeRange']>>, ParentType, ContextType>;
  monday?: Resolver<Maybe<Array<ResolversTypes['TimeRange']>>, ParentType, ContextType>;
  saturday?: Resolver<Maybe<Array<ResolversTypes['TimeRange']>>, ParentType, ContextType>;
  sunday?: Resolver<Maybe<Array<ResolversTypes['TimeRange']>>, ParentType, ContextType>;
  thursday?: Resolver<Maybe<Array<ResolversTypes['TimeRange']>>, ParentType, ContextType>;
  tuesday?: Resolver<Maybe<Array<ResolversTypes['TimeRange']>>, ParentType, ContextType>;
  wednesday?: Resolver<Maybe<Array<ResolversTypes['TimeRange']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreselectedFacilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['PreselectedFacility'] = ResolversParentTypes['PreselectedFacility']> = {
  facilityRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['Process'] = ResolversParentTypes['Process']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  documents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExternalDocument']>>>, ParentType, ContextType>;
  flatRefs?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  gdprCleanupDate?: Resolver<ResolversTypes['GraphQLISODateTime'], ParentType, ContextType>;
  handoverJobRefs?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  handoverStatus?: Resolver<Maybe<ResolversTypes['ProcessStatus']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAnonymized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  orderRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['ProcessStatus']>, ParentType, ContextType>;
  pickJobRefs?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  pickJobStatus?: Resolver<Maybe<ResolversTypes['ProcessStatus']>, ParentType, ContextType>;
  pickJobs?: Resolver<Maybe<Array<ResolversTypes['PickJob']>>, ParentType, ContextType>;
  returnRefs?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  returnStatus?: Resolver<Maybe<ResolversTypes['ProcessStatus']>, ParentType, ContextType>;
  routingPlanRefs?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  routingPlanStatus?: Resolver<Maybe<ResolversTypes['ProcessStatus']>, ParentType, ContextType>;
  routingPlans?: Resolver<Maybe<Array<ResolversTypes['RoutingPlan']>>, ParentType, ContextType>;
  shipmentRefs?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  shipmentStatus?: Resolver<Maybe<ResolversTypes['ProcessStatus']>, ParentType, ContextType>;
  shipments?: Resolver<Maybe<Array<ResolversTypes['Shipment']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ProcessStatus']>, ParentType, ContextType>;
  tenantOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProcessEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessEdge'] = ResolversParentTypes['ProcessEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Process'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProcessesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessesConnection'] = ResolversParentTypes['ProcessesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProcessEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  carrier?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType, RequireFields<QueryCarrierArgs, 'id'>>;
  carrierConfiguration?: Resolver<ResolversTypes['CarrierConfiguration'], ParentType, ContextType, RequireFields<QueryCarrierConfigurationArgs, 'carrierId'>>;
  carriers?: Resolver<ResolversTypes['CarrierConnection'], ParentType, ContextType, Partial<QueryCarriersArgs>>;
  cutoffTimeConfiguration?: Resolver<ResolversTypes['CutoffTimeConfiguration'], ParentType, ContextType>;
  facilities?: Resolver<ResolversTypes['FacilitiesConnection'], ParentType, ContextType, Partial<QueryFacilitiesArgs>>;
  facility?: Resolver<ResolversTypes['Facility'], ParentType, ContextType, RequireFields<QueryFacilityArgs, 'id'>>;
  facilityHandoverJobs?: Resolver<ResolversTypes['HandoverJobsConnection'], ParentType, ContextType, RequireFields<QueryFacilityHandoverJobsArgs, 'facilityRef'>>;
  facilityListings?: Resolver<Maybe<ResolversTypes['ListingsConnection']>, ParentType, ContextType, RequireFields<QueryFacilityListingsArgs, 'facilityId'>>;
  facilityPackJobs?: Resolver<ResolversTypes['PackJobsConnection'], ParentType, ContextType, RequireFields<QueryFacilityPackJobsArgs, 'facilityRef'>>;
  facilityPickJobs?: Resolver<ResolversTypes['PickJobsConnection'], ParentType, ContextType, RequireFields<QueryFacilityPickJobsArgs, 'facilityRef'>>;
  facilityRestowItems?: Resolver<ResolversTypes['RestowItemsConnection'], ParentType, ContextType, RequireFields<QueryFacilityRestowItemsArgs, 'facilityId'>>;
  facilityShipments?: Resolver<ResolversTypes['ShipmentsConnection'], ParentType, ContextType, RequireFields<QueryFacilityShipmentsArgs, 'facilityRef'>>;
  feature?: Resolver<ResolversTypes['Feature'], ParentType, ContextType, RequireFields<QueryFeatureArgs, 'featureName'>>;
  features?: Resolver<Array<Maybe<ResolversTypes['Feature']>>, ParentType, ContextType>;
  fulfillmentProcessBufferConfiguration?: Resolver<ResolversTypes['FulfillmentProcessBufferConfiguration'], ParentType, ContextType>;
  globalSubstitutes?: Resolver<ResolversTypes['Substitutes'], ParentType, ContextType, RequireFields<QueryGlobalSubstitutesArgs, 'tenantArticleId'>>;
  handoverJob?: Resolver<ResolversTypes['HandoverJob'], ParentType, ContextType, RequireFields<QueryHandoverJobArgs, 'id'>>;
  listingByTenantArticleId?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType, RequireFields<QueryListingByTenantArticleIdArgs, 'facilityId' | 'tenantArticleId'>>;
  loadUnit?: Resolver<ResolversTypes['LoadUnit'], ParentType, ContextType, RequireFields<QueryLoadUnitArgs, 'id'>>;
  loadUnitType?: Resolver<ResolversTypes['LoadUnitType'], ParentType, ContextType, RequireFields<QueryLoadUnitTypeArgs, 'id'>>;
  loadUnitTypes?: Resolver<ResolversTypes['LoadUnitTypesConnection'], ParentType, ContextType, Partial<QueryLoadUnitTypesArgs>>;
  loadUnits?: Resolver<ResolversTypes['LoadUnitsConnection'], ParentType, ContextType, Partial<QueryLoadUnitsArgs>>;
  measurementUnit?: Resolver<ResolversTypes['MeasurementUnit'], ParentType, ContextType, RequireFields<QueryMeasurementUnitArgs, 'id'>>;
  measurementUnitByKey?: Resolver<ResolversTypes['MeasurementUnit'], ParentType, ContextType, RequireFields<QueryMeasurementUnitByKeyArgs, 'key'>>;
  measurementUnits?: Resolver<ResolversTypes['MeasurementUnitsConnection'], ParentType, ContextType, Partial<QueryMeasurementUnitsArgs>>;
  packJob?: Resolver<ResolversTypes['PackJob'], ParentType, ContextType, RequireFields<QueryPackJobArgs, 'id'>>;
  partialStocks?: Resolver<Array<Maybe<ResolversTypes['PartialStock']>>, ParentType, ContextType, RequireFields<QueryPartialStocksArgs, 'facilityId' | 'tenantArticleId'>>;
  pickJob?: Resolver<ResolversTypes['PickJob'], ParentType, ContextType, RequireFields<QueryPickJobArgs, 'id'>>;
  pickRun?: Resolver<ResolversTypes['PickRun'], ParentType, ContextType, RequireFields<QueryPickRunArgs, 'id'>>;
  pickingConfigurations?: Resolver<ResolversTypes['PickingConfigurations'], ParentType, ContextType>;
  pickingTimesConfiguration?: Resolver<ResolversTypes['DefaultPickingTimesConfiguration'], ParentType, ContextType>;
  process?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType, Partial<QueryProcessArgs>>;
  processes?: Resolver<ResolversTypes['ProcessesConnection'], ParentType, ContextType, Partial<QueryProcessesArgs>>;
  rerouteShortPickConfiguration?: Resolver<ResolversTypes['RerouteShortPickConfiguration'], ParentType, ContextType>;
  rerouteTimeTriggeredConfiguration?: Resolver<ResolversTypes['RerouteTimeTriggeredConfiguration'], ParentType, ContextType>;
  restowItem?: Resolver<Maybe<ResolversTypes['RestowItem']>, ParentType, ContextType, RequireFields<QueryRestowItemArgs, 'id'>>;
  routingPlans?: Resolver<ResolversTypes['RoutingPlansConnection'], ParentType, ContextType, RequireFields<QueryRoutingPlansArgs, 'orderRef'>>;
  scopedCapabilities?: Resolver<Array<ResolversTypes['ScopedCapability']>, ParentType, ContextType, Partial<QueryScopedCapabilitiesArgs>>;
  shipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<QueryShipmentArgs, 'id'>>;
  substitutes?: Resolver<ResolversTypes['Substitutes'], ParentType, ContextType, RequireFields<QuerySubstitutesArgs, 'tenantArticleId'>>;
};

export type RerouteConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RerouteConfiguration'] = ResolversParentTypes['RerouteConfiguration']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rerouteAfterMinutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rerouteTargetTimeHours?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RerouteShortPickConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RerouteShortPickConfiguration'] = ResolversParentTypes['RerouteShortPickConfiguration']> = {
  blacklistAssignedFacilities?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clickAndCollectReroute?: Resolver<ResolversTypes['ClickAndCollectRerouteConfiguration'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  restowAfterMinutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shipFromStoreReroute?: Resolver<ResolversTypes['ShipFromStoreRerouteConfiguration'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RerouteTimeTriggeredConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RerouteTimeTriggeredConfiguration'] = ResolversParentTypes['RerouteTimeTriggeredConfiguration']> = {
  clickAndCollectReroute?: Resolver<ResolversTypes['RerouteConfiguration'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  shipFromStoreDeliveryReroute?: Resolver<ResolversTypes['RerouteConfiguration'], ParentType, ContextType>;
  shipFromStoreSamedayReroute?: Resolver<ResolversTypes['RerouteConfiguration'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResowItemChangedEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResowItemChangedEvent'] = ResolversParentTypes['ResowItemChangedEvent']> = {
  restowItem?: Resolver<Maybe<ResolversTypes['RestowItem']>, ParentType, ContextType>;
  restowItemRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ResowItemChangedEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestowItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestowItem'] = ResolversParentTypes['RestowItem']> = {
  article?: Resolver<ResolversTypes['RestowItemArticle'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  facilityRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  measurementUnitKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  restowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  scannableCodes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestowItemArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestowItemArticle'] = ResolversParentTypes['RestowItemArticle']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['ArticleAttributeItem']>>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestowItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestowItemEdge'] = ResolversParentTypes['RestowItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RestowItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestowItemsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestowItemsConnection'] = ResolversParentTypes['RestowItemsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RestowItemEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnItemArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnItemArticle'] = ResolversParentTypes['ReturnItemArticle']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['ArticleAttributeItem']>>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnJob'] = ResolversParentTypes['ReturnJob']> = {
  anonymized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  carrierTrackingNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  consumerAddress?: Resolver<Maybe<ResolversTypes['ConsumerAddress']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  facilityAddress?: Resolver<Maybe<ResolversTypes['FacilityAddress']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  orderRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  returnLines?: Resolver<Array<ResolversTypes['ReturnLine']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ReturnJobStatus']>, ParentType, ContextType>;
  tenantOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReturnLine'] = ResolversParentTypes['ReturnLine']> = {
  article?: Resolver<ResolversTypes['ReturnItemArticle'], ParentType, ContextType>;
  delivered?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pickJobRefs?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  returned?: Resolver<ResolversTypes['Returned'], ParentType, ContextType>;
  scannableCodes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ReturnLineStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReturnedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Returned'] = ResolversParentTypes['Returned']> = {
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  returnedAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoutingPlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoutingPlan'] = ResolversParentTypes['RoutingPlan']> = {
  anonymized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  decisionLogs?: Resolver<Maybe<Array<ResolversTypes['DecisionLogRef']>>, ParentType, ContextType>;
  facilityBlackList?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  facilityRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finalizeRun?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstRoutingAttempt?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['GraphQLISODateTime'], ParentType, ContextType>;
  orderLineItems?: Resolver<Maybe<Array<ResolversTypes['RoutingPlanLineItem']>>, ParentType, ContextType>;
  orderRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentRoutingPlanRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickJobRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  processId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reRouteReason?: Resolver<Maybe<ResolversTypes['RerouteReason']>, ParentType, ContextType>;
  reRoutedFacilityRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reRoutedPickJobRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  routingRun?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runType?: Resolver<Maybe<ResolversTypes['RunTypeEnum']>, ParentType, ContextType>;
  splitCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['RoutingPlanStatus'], ParentType, ContextType>;
  targetAddress?: Resolver<Maybe<ResolversTypes['TargetAddress']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoutingPlanEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoutingPlanEdge'] = ResolversParentTypes['RoutingPlanEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RoutingPlan'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoutingPlanLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoutingPlanLineItem'] = ResolversParentTypes['RoutingPlanLineItem']> = {
  article?: Resolver<ResolversTypes['OrderLineItemArticle'], ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  picked?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scannableCodes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  shopPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoutingPlansConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoutingPlansConnection'] = ResolversParentTypes['RoutingPlansConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RoutingPlanEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScopedCapabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScopedCapability'] = ResolversParentTypes['ScopedCapability']> = {
  configurations?: Resolver<Maybe<Array<ResolversTypes['SupportedConfig']>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  currentUserPermissions?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ScopedCapabilityStatus'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Score'] = ResolversParentTypes['Score']> = {
  scoreName?: Resolver<ResolversTypes['ScoreName'], ParentType, ContextType>;
  scoreType?: Resolver<ResolversTypes['ScoreType'], ParentType, ContextType>;
  scoreValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipFromStoreRerouteConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipFromStoreRerouteConfiguration'] = ResolversParentTypes['ShipFromStoreRerouteConfiguration']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  allowManualReroute?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  facilityWideRerouteOnShortPick?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rerouteTargetTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shipment'] = ResolversParentTypes['Shipment']> = {
  anonymized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  carrier?: Resolver<Maybe<ResolversTypes['Carrier']>, ParentType, ContextType>;
  carrierRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  facilityRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handoverJobs?: Resolver<Array<ResolversTypes['HandoverJob']>, ParentType, ContextType>;
  hasActiveCarrier?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['Parcel']>>, ParentType, ContextType>;
  pickJob?: Resolver<Maybe<ResolversTypes['PickJob']>, ParentType, ContextType>;
  pickJobRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceAddress?: Resolver<Maybe<ResolversTypes['FacilityAddress']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ShipmentStatus'], ParentType, ContextType>;
  targetAddress?: Resolver<Maybe<ResolversTypes['ConsumerAddress']>, ParentType, ContextType>;
  targetTime?: Resolver<ResolversTypes['GraphQLISODateTime'], ParentType, ContextType>;
  tenantOrderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentChangedEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipmentChangedEvent'] = ResolversParentTypes['ShipmentChangedEvent']> = {
  shipment?: Resolver<Maybe<ResolversTypes['Shipment']>, ParentType, ContextType>;
  shipmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ShipmentChangedEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipmentEdge'] = ResolversParentTypes['ShipmentEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipmentsConnection'] = ResolversParentTypes['ShipmentsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ShipmentEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingDetails'] = ResolversParentTypes['ShippingDetails']> = {
  carrierKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipientaddress?: Resolver<Maybe<ResolversTypes['ConsumerAddress']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StockInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['StockInformation'] = ResolversParentTypes['StockInformation']> = {
  reserved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  changedFacilityHandoverJobs?: SubscriptionResolver<ResolversTypes['HandoverJobChangedEvent'], "changedFacilityHandoverJobs", ParentType, ContextType, RequireFields<SubscriptionChangedFacilityHandoverJobsArgs, 'facilityRef'>>;
  changedFacilityPackJobs?: SubscriptionResolver<ResolversTypes['PackJobChangedEvent'], "changedFacilityPackJobs", ParentType, ContextType, RequireFields<SubscriptionChangedFacilityPackJobsArgs, 'facilityRef'>>;
  changedFacilityPickJobs?: SubscriptionResolver<ResolversTypes['PickJobChangedEvent'], "changedFacilityPickJobs", ParentType, ContextType, RequireFields<SubscriptionChangedFacilityPickJobsArgs, 'facilityRef'>>;
  changedFacilityRestowItems?: SubscriptionResolver<ResolversTypes['ResowItemChangedEvent'], "changedFacilityRestowItems", ParentType, ContextType, RequireFields<SubscriptionChangedFacilityRestowItemsArgs, 'facilityRef'>>;
  changedFacilityShipments?: SubscriptionResolver<ResolversTypes['ShipmentChangedEvent'], "changedFacilityShipments", ParentType, ContextType, RequireFields<SubscriptionChangedFacilityShipmentsArgs, 'facilityRef'>>;
  createdFacilityHandoverJobs?: SubscriptionResolver<ResolversTypes['HandoverJob'], "createdFacilityHandoverJobs", ParentType, ContextType, RequireFields<SubscriptionCreatedFacilityHandoverJobsArgs, 'facilityRef'>>;
  createdFacilityPickJobs?: SubscriptionResolver<ResolversTypes['PickJob'], "createdFacilityPickJobs", ParentType, ContextType, RequireFields<SubscriptionCreatedFacilityPickJobsArgs, 'facilityRef'>>;
  createdFacilityRestowItems?: SubscriptionResolver<ResolversTypes['RestowItem'], "createdFacilityRestowItems", ParentType, ContextType, RequireFields<SubscriptionCreatedFacilityRestowItemsArgs, 'facilityRef'>>;
  createdFacilityShipments?: SubscriptionResolver<ResolversTypes['Shipment'], "createdFacilityShipments", ParentType, ContextType, RequireFields<SubscriptionCreatedFacilityShipmentsArgs, 'facilityRef'>>;
  deletedFacilityPickJobs?: SubscriptionResolver<ResolversTypes['String'], "deletedFacilityPickJobs", ParentType, ContextType, RequireFields<SubscriptionDeletedFacilityPickJobsArgs, 'facilityRef'>>;
  notifications?: SubscriptionResolver<ResolversTypes['Notification'], "notifications", ParentType, ContextType, RequireFields<SubscriptionNotificationsArgs, 'facilityId'>>;
  restowedRestowItem?: SubscriptionResolver<ResolversTypes['RestowItem'], "restowedRestowItem", ParentType, ContextType, RequireFields<SubscriptionRestowedRestowItemArgs, 'restowItemRef'>>;
  updatedFacilityHandoverJobs?: SubscriptionResolver<ResolversTypes['HandoverJob'], "updatedFacilityHandoverJobs", ParentType, ContextType, RequireFields<SubscriptionUpdatedFacilityHandoverJobsArgs, 'facilityRef'>>;
  updatedFacilityPickJobs?: SubscriptionResolver<ResolversTypes['PickJob'], "updatedFacilityPickJobs", ParentType, ContextType, RequireFields<SubscriptionUpdatedFacilityPickJobsArgs, 'facilityRef'>>;
  updatedFacilityShipments?: SubscriptionResolver<ResolversTypes['Shipment'], "updatedFacilityShipments", ParentType, ContextType, RequireFields<SubscriptionUpdatedFacilityShipmentsArgs, 'facilityRef'>>;
  updatedPickJob?: SubscriptionResolver<ResolversTypes['PickJob'], "updatedPickJob", ParentType, ContextType, RequireFields<SubscriptionUpdatedPickJobArgs, 'pickJobRef'>>;
  updatedShipment?: SubscriptionResolver<ResolversTypes['Shipment'], "updatedShipment", ParentType, ContextType, RequireFields<SubscriptionUpdatedShipmentArgs, 'shipmentRef'>>;
  updatedShipmentParcels?: SubscriptionResolver<ResolversTypes['Parcel'], "updatedShipmentParcels", ParentType, ContextType, RequireFields<SubscriptionUpdatedShipmentParcelsArgs, 'shipmentRef'>>;
};

export type SubstituteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Substitute'] = ResolversParentTypes['Substitute']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['SubstituteAttributeItem']>>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  scannableCodes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstituteAttributeItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubstituteAttributeItem'] = ResolversParentTypes['SubstituteAttributeItem']> = {
  category?: Resolver<Maybe<ResolversTypes['AttributeItemCategory']>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstituteLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubstituteLineItem'] = ResolversParentTypes['SubstituteLineItem']> = {
  article?: Resolver<ResolversTypes['SubstituteLineItemArticle'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scannableCodes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstituteLineItemArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubstituteLineItemArticle'] = ResolversParentTypes['SubstituteLineItemArticle']> = {
  attributes?: Resolver<Maybe<Array<ResolversTypes['ArticleAttributeItem']>>, ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstitutesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Substitutes'] = ResolversParentTypes['Substitutes']> = {
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  substitutes?: Resolver<Array<ResolversTypes['Substitute']>, ParentType, ContextType>;
  tenantArticleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubstitutionConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubstitutionConfiguration'] = ResolversParentTypes['SubstitutionConfiguration']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupportedConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupportedConfig'] = ResolversParentTypes['SupportedConfig']> = {
  __resolveType: TypeResolveFn<'BatchPickingConfiguration' | 'PartialCarrierConfiguration' | 'RerouteShortPickConfiguration' | 'SubstitutionConfiguration' | 'TakeOverPickJobConfiguration', ParentType, ContextType>;
};

export type TakeOverPickJobConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['TakeOverPickJobConfiguration'] = ResolversParentTypes['TakeOverPickJobConfiguration']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TargetAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['TargetAddress'] = ResolversParentTypes['TargetAddress']> = {
  additionalAddressInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customAttributes?: Resolver<Maybe<ResolversTypes['GraphQLJSON']>, ParentType, ContextType>;
  facilityRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  houseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumbers?: Resolver<Maybe<Array<ResolversTypes['AddressPhoneNumber']>>, ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salutation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimeRangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeRange'] = ResolversParentTypes['TimeRange']> = {
  end?: Resolver<ResolversTypes['TimeStamp'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['TimeStamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimeStampResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeStamp'] = ResolversParentTypes['TimeStamp']> = {
  hour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimeZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeZone'] = ResolversParentTypes['TimeZone']> = {
  offsetInSeconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeZoneId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeZoneName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionedResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['VersionedResource'] = ResolversParentTypes['VersionedResource']> = {
  __resolveType: TypeResolveFn<'BatchPickingConfiguration' | 'Carrier' | 'CarrierConfiguration' | 'CutoffTimeConfiguration' | 'DefaultPickingTimesConfiguration' | 'ExternalDocument' | 'Facility' | 'Feature' | 'FulfillmentProcessBufferConfiguration' | 'HandoverJob' | 'Listing' | 'LoadUnit' | 'LoadUnitType' | 'MeasurementUnit' | 'Order' | 'PackJob' | 'Parcel' | 'PartialCarrierConfiguration' | 'PickJob' | 'PickRun' | 'Process' | 'RerouteShortPickConfiguration' | 'RerouteTimeTriggeredConfiguration' | 'RestowItem' | 'ReturnJob' | 'RoutingPlan' | 'ScopedCapability' | 'Shipment' | 'Substitutes' | 'SubstitutionConfiguration' | 'TakeOverPickJobConfiguration', ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['GraphQLISODateTime']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AbstractFacilityCarrierConfiguration?: AbstractFacilityCarrierConfigurationResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  AddressPhoneNumber?: AddressPhoneNumberResolvers<ContextType>;
  AngelFacilityCarrierConfiguration?: AngelFacilityCarrierConfigurationResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleAttributeItem?: ArticleAttributeItemResolvers<ContextType>;
  BatchPickingConfiguration?: BatchPickingConfigurationResolvers<ContextType>;
  Carrier?: CarrierResolvers<ContextType>;
  CarrierConfiguration?: CarrierConfigurationResolvers<ContextType>;
  CarrierConnection?: CarrierConnectionResolvers<ContextType>;
  CarrierEdge?: CarrierEdgeResolvers<ContextType>;
  ClickAndCollectDetails?: ClickAndCollectDetailsResolvers<ContextType>;
  ClickAndCollectRerouteConfiguration?: ClickAndCollectRerouteConfigurationResolvers<ContextType>;
  ClosingDay?: ClosingDayResolvers<ContextType>;
  Consumer?: ConsumerResolvers<ContextType>;
  ConsumerAddress?: ConsumerAddressResolvers<ContextType>;
  Coordinates?: CoordinatesResolvers<ContextType>;
  CutoffTime?: CutoffTimeResolvers<ContextType>;
  CutoffTimeConfiguration?: CutoffTimeConfigurationResolvers<ContextType>;
  DecisionLogRef?: DecisionLogRefResolvers<ContextType>;
  DefaultPickingTimesConfiguration?: DefaultPickingTimesConfigurationResolvers<ContextType>;
  DeliveryArea?: DeliveryAreaResolvers<ContextType>;
  DeliveryInformation?: DeliveryInformationResolvers<ContextType>;
  DeliveryInformationDetails?: DeliveryInformationDetailsResolvers<ContextType>;
  DeliveryPreferences?: DeliveryPreferencesResolvers<ContextType>;
  DeliveryPreferencesShipping?: DeliveryPreferencesShippingResolvers<ContextType>;
  DhlFacilityCarrierConfiguration?: DhlFacilityCarrierConfigurationResolvers<ContextType>;
  Editor?: EditorResolvers<ContextType>;
  ExternalDocument?: ExternalDocumentResolvers<ContextType>;
  FacilitiesConnection?: FacilitiesConnectionResolvers<ContextType>;
  Facility?: FacilityResolvers<ContextType>;
  FacilityAddress?: FacilityAddressResolvers<ContextType>;
  FacilityCarrier?: FacilityCarrierResolvers<ContextType>;
  FacilityContact?: FacilityContactResolvers<ContextType>;
  FacilityEdge?: FacilityEdgeResolvers<ContextType>;
  FacilityEmailAddress?: FacilityEmailAddressResolvers<ContextType>;
  FacilityService?: FacilityServiceResolvers<ContextType>;
  Feature?: FeatureResolvers<ContextType>;
  FulfillmentProcessBufferConfiguration?: FulfillmentProcessBufferConfigurationResolvers<ContextType>;
  GlsFacilityCarrierConfiguration?: GlsFacilityCarrierConfigurationResolvers<ContextType>;
  GraphQLISODateTime?: GraphQLScalarType;
  GraphQLJSON?: GraphQLScalarType;
  HandoverJob?: HandoverJobResolvers<ContextType>;
  HandoverJobChangedEvent?: HandoverJobChangedEventResolvers<ContextType>;
  HandoverJobEdge?: HandoverJobEdgeResolvers<ContextType>;
  HandoverJobsConnection?: HandoverJobsConnectionResolvers<ContextType>;
  LinkedConfiguration?: LinkedConfigurationResolvers<ContextType>;
  Listing?: ListingResolvers<ContextType>;
  ListingEdge?: ListingEdgeResolvers<ContextType>;
  ListingsConnection?: ListingsConnectionResolvers<ContextType>;
  LoadUnit?: LoadUnitResolvers<ContextType>;
  LoadUnitEdge?: LoadUnitEdgeResolvers<ContextType>;
  LoadUnitType?: LoadUnitTypeResolvers<ContextType>;
  LoadUnitTypeEdge?: LoadUnitTypeEdgeResolvers<ContextType>;
  LoadUnitTypesConnection?: LoadUnitTypesConnectionResolvers<ContextType>;
  LoadUnitsConnection?: LoadUnitsConnectionResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  MeasurementUnit?: MeasurementUnitResolvers<ContextType>;
  MeasurementUnitsConnection?: MeasurementUnitsConnectionResolvers<ContextType>;
  MeasurementUnitsEdge?: MeasurementUnitsEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderLineItem?: OrderLineItemResolvers<ContextType>;
  OrderLineItemArticle?: OrderLineItemArticleResolvers<ContextType>;
  PackJob?: PackJobResolvers<ContextType>;
  PackJobChangedEvent?: PackJobChangedEventResolvers<ContextType>;
  PackJobEdge?: PackJobEdgeResolvers<ContextType>;
  PackJobsConnection?: PackJobsConnectionResolvers<ContextType>;
  PackLineItem?: PackLineItemResolvers<ContextType>;
  PackLineItemArticle?: PackLineItemArticleResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Parcel?: ParcelResolvers<ContextType>;
  ParcelDimensions?: ParcelDimensionsResolvers<ContextType>;
  ParcelResult?: ParcelResultResolvers<ContextType>;
  PartialCarrierConfiguration?: PartialCarrierConfigurationResolvers<ContextType>;
  PartialStock?: PartialStockResolvers<ContextType>;
  PickJob?: PickJobResolvers<ContextType>;
  PickJobChangedEvent?: PickJobChangedEventResolvers<ContextType>;
  PickJobCreatedNotification?: PickJobCreatedNotificationResolvers<ContextType>;
  PickJobEdge?: PickJobEdgeResolvers<ContextType>;
  PickJobsConnection?: PickJobsConnectionResolvers<ContextType>;
  PickLineItem?: PickLineItemResolvers<ContextType>;
  PickLineItemArticle?: PickLineItemArticleResolvers<ContextType>;
  PickRun?: PickRunResolvers<ContextType>;
  PickingConfigurations?: PickingConfigurationsResolvers<ContextType>;
  PickingTimes?: PickingTimesResolvers<ContextType>;
  PreselectedFacility?: PreselectedFacilityResolvers<ContextType>;
  Process?: ProcessResolvers<ContextType>;
  ProcessEdge?: ProcessEdgeResolvers<ContextType>;
  ProcessesConnection?: ProcessesConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RerouteConfiguration?: RerouteConfigurationResolvers<ContextType>;
  RerouteShortPickConfiguration?: RerouteShortPickConfigurationResolvers<ContextType>;
  RerouteTimeTriggeredConfiguration?: RerouteTimeTriggeredConfigurationResolvers<ContextType>;
  ResowItemChangedEvent?: ResowItemChangedEventResolvers<ContextType>;
  RestowItem?: RestowItemResolvers<ContextType>;
  RestowItemArticle?: RestowItemArticleResolvers<ContextType>;
  RestowItemEdge?: RestowItemEdgeResolvers<ContextType>;
  RestowItemsConnection?: RestowItemsConnectionResolvers<ContextType>;
  ReturnItemArticle?: ReturnItemArticleResolvers<ContextType>;
  ReturnJob?: ReturnJobResolvers<ContextType>;
  ReturnLine?: ReturnLineResolvers<ContextType>;
  Returned?: ReturnedResolvers<ContextType>;
  RoutingPlan?: RoutingPlanResolvers<ContextType>;
  RoutingPlanEdge?: RoutingPlanEdgeResolvers<ContextType>;
  RoutingPlanLineItem?: RoutingPlanLineItemResolvers<ContextType>;
  RoutingPlansConnection?: RoutingPlansConnectionResolvers<ContextType>;
  ScopedCapability?: ScopedCapabilityResolvers<ContextType>;
  Score?: ScoreResolvers<ContextType>;
  ShipFromStoreRerouteConfiguration?: ShipFromStoreRerouteConfigurationResolvers<ContextType>;
  Shipment?: ShipmentResolvers<ContextType>;
  ShipmentChangedEvent?: ShipmentChangedEventResolvers<ContextType>;
  ShipmentEdge?: ShipmentEdgeResolvers<ContextType>;
  ShipmentsConnection?: ShipmentsConnectionResolvers<ContextType>;
  ShippingDetails?: ShippingDetailsResolvers<ContextType>;
  StockInformation?: StockInformationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Substitute?: SubstituteResolvers<ContextType>;
  SubstituteAttributeItem?: SubstituteAttributeItemResolvers<ContextType>;
  SubstituteLineItem?: SubstituteLineItemResolvers<ContextType>;
  SubstituteLineItemArticle?: SubstituteLineItemArticleResolvers<ContextType>;
  Substitutes?: SubstitutesResolvers<ContextType>;
  SubstitutionConfiguration?: SubstitutionConfigurationResolvers<ContextType>;
  SupportedConfig?: SupportedConfigResolvers<ContextType>;
  TakeOverPickJobConfiguration?: TakeOverPickJobConfigurationResolvers<ContextType>;
  TargetAddress?: TargetAddressResolvers<ContextType>;
  TimeRange?: TimeRangeResolvers<ContextType>;
  TimeStamp?: TimeStampResolvers<ContextType>;
  TimeZone?: TimeZoneResolvers<ContextType>;
  VersionedResource?: VersionedResourceResolvers<ContextType>;
};

