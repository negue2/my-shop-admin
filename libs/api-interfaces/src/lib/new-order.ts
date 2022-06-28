export interface NewOrderDto {
  consumer:             NewOrderConsumerDto;
  deliveryPreferences?: NewOrderDeliveryPreferencesDto;
  orderDate:            Date;
  orderLineItems:       NewOrderLineItem[];
  status:               string;
  tenantOrderId:        string;
}

export interface NewOrderConsumerDto {
  addresses:        NewOrderAddressDto[];
  email:            string;
}

export interface NewOrderAddressDto {
  additionalAddressInfo: string;
  city:                  string;
  country:               string;
  houseNumber:           string;
  phoneNumbers:          NewOrderPhoneNumberDto[];
  postalCode:            string;
  street:                string;
  companyName:           string;
  firstName:             string;
  lastName:              string;
  salutation:            string;
}


export interface NewOrderPhoneNumberDto {
  label:            string;
  type:             string;
  value:            string;
}

export interface NewOrderDeliveryPreferencesDto {
  collect:             NewOrderCollectDto[];
  shipping:            NewOrderShippingDto;
  supplyingFacilities: string[];
  targetTime:          Date;
}

export interface NewOrderCollectDto {
  facilityRef:         string;
  paid:                boolean;
  supplyingFacilities: string[];
}

export interface NewOrderShippingDto {
  preferredCarriers:     string[];
  preselectedFacilities: NewOrderPreselectedFacilityDto[];
  serviceLevel:          string;
  servicetype:           string;
}

export interface NewOrderPreselectedFacilityDto {
  facilityRef: string;
}

export interface NewOrderLineItem {
  article:            NewOrderArticleDto;
  measurementUnitKey: string;
  quantity:           number;
  scannableCodes:     string[];
  shopPrice:          number;
}

export interface NewOrderArticleDto {
  imageUrl:         string;
  tenantArticleId:  string;
  title:            string;
  attributes:       AttributeDto[];
}

export interface AttributeDto {
  category: string;
  key:      string;
  priority: number;
  value:    string;
}
