export interface PickJobDto {
  routingPlanRef:      string;
  facilityRef:         string;
  orderRef:            string;
  orderDate:           Date;
  tenantOrderId:       string;
  status:              string;
  pickLineItems:       PickJobLineItemDto[];
  deliveryinformation: PickJobDeliveryinformationDto;
  processId:           string;
  shortId:             string;
  id:                  string;
  version:             number;
  created:             Date;
  lastModified:        Date;
}

export interface PickJobDeliveryinformationDto {
  targetTime: Date;
  channel:    string;
  details:    PickJobDetailsDto;
}

export interface PickJobDetailsDto {
  shipping: PickJobShippingDto;
}

export interface PickJobShippingDto {
  recipientaddress: PickJobRecipientaddressDto;
  identifier:       string;
  carrierKey:       null;
  serviceLevel:     string;
}

export interface PickJobRecipientaddressDto {
  additionalAddressInfo: string;
  city:                  string;
  country:               string;
  houseNumber:           string;
  phoneNumbers:          PickJobPhoneNumberDto[];
  postalCode:            string;
  street:                string;
  companyName:           string;
  firstName:             string;
  lastName:              string;
  salutation:            string;
}

export interface PickJobPhoneNumberDto {
  label:            string;
  type:             string;
  value:            string;
}

export interface PickJobLineItemDto {
  quantity:         number;
  status:           string;
  scannableCodes:   string[];
  article:          PickJobArticleDto;
  picked:           number;
  id:               string;
}

export interface PickJobArticleDto {
  tenantArticleId: string;
  title:           string;
  imageUrl:        string;
  attributes:      any[];
}
