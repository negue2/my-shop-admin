export interface FacilityDto {
    id:           string;
    name:         string;
    version:      number;
    status:       string;
    created:      Date;
    lastModified: Date;
    city:         string;
    country:      string;
    houseNumber:  string;
    street:       string;
    phoneNumbers: PhoneNumber[];
    postalCode:   string;
}

export interface PhoneNumber {
    value: string;
    type:  string;
    label: string;
}
