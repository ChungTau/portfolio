export enum JobType{
    FULLTIME = "Full-time",
    PARTTIME = "Part-time",
    INTERN = "Internship",
    FREELANCE = "Freelance"

}

export interface ExperienceType{
    position: string;
    company: string;
    period: string;
    type: JobType;
}