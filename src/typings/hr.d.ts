export interface Ihrinfo {
  email?: string;
  password?: string;
  personalInfo?: PersonalInfo;
  workDetails?: WorkDetails;
  __v?: number;
  updatedAt?: UpdatedAt;
  jobsPosted?: string[];
  profilePhoto?: string;
  _id?: string;
}

export interface PersonalInfo {
  name: string;
  surname: string;
  mobileNumber: string;
}

export interface UpdatedAt {
  $date?: Date;
}

export interface WorkDetails {
  position?: string;
  companyName?: string;
}
