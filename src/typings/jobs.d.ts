export interface IJobs {
  _id: string;
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
  createdAt: string;
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

export interface PostJob {
  title?: string;
  overview?: string;
  requirements?: string;
  experience?: string;
  seniorityLevel?: string;
  type?: string;
  salary?: string;
}
