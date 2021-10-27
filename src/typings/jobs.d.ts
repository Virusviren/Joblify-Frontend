export interface IJobs {
  _id: ID;
  jobId: string;
  jobTitle?: string;
  details: Details;
  overview: string;
  requirements: string;
  experience: string;
  seniorityLevel: string;
  type: string;
  salary: string;
  hrId: string;
  applicationsReceived: any[];
  __v: V;
}

export interface V {
  $numberInt: string;
}

export interface ID {
  $oid: string;
}

export interface Details {
  companyInfo: CompanyInfo;
}

export interface CompanyInfo {
  logo: string;
  name: string;
  address: string;
}
