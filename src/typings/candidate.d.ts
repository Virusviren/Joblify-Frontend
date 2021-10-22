export interface Icandidateinfo {
  personalInfo?: PersonalInfo;
  _id?: string;
  email?: string;
  skills?: any[];
  education?: any[];
  workExperience?: any[];
  appliedJobs?: any[];
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  cv?: string;
  coverLetter?: string;
  infoVideo?: string;
  profilePhoto?: string;
}

export interface PersonalInfo {
  name?: string;
  surname?: string;
}
