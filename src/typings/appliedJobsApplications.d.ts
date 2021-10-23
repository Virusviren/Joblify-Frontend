export interface IappliedJobsApplications {
  _id?: ID;
  candidateId?: ID;
  jobId?: ID;
  jobTitle?: string;
  jobCompanyName?: string;
  candidateProfilePic?: string;
  status: number;
  personalInfo?: PersonalInfo;
  education?: Education[];
  workExperience?: WorkExperience[];
  skills?: string[];
  email?: string;
  cv?: string;
  coverLetter?: string;
  infoVideo?: string;
  __v?: number;
  createdAt?: Date;
}

export interface ID {
  $oid?: string;
}

export interface Education {
  level?: string;
  universityName?: string;
  startingDate?: string;
  endingDate?: string;
  _id?: ID;
}

export interface PersonalInfo {
  name?: string;
  surname?: string;
  dateOfBirth?: any;
  citizenship?: string;
  address?: string;
  mobileNumber?: string;
}

export interface WorkExperience {
  companyName?: string;
  position?: string;
  startingDate?: string;
  endingDate?: string;
  description?: string;
  _id?: ID;
}
