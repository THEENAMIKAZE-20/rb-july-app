import axiosService from "../api/axiosService";

//saveResumeAPI-called by component userInput when finished button clicked
export const saveResumeAPI=async(resumeDetails)=>{
    return await axiosService('POST','/resumes',resumeDetails)
}

//viewResumeAPI-called by view component when resume added/retrieve with resume id
export const viewResumeAPI=async(resumeId)=>{
    return await axiosService ('GET',`/resumes/${resumeId}`,{})
}

//getAllResumeAPI- called by allresumes component when resume added
export const getAllResumesAPI=async()=>{
    return await axiosService('GET',`/resumes/`,{})
}

//deleteResumeAPI-called by allResumes component when delete button clicked
export const deleteResumesAPI=async(resumeId)=>{
    return await axiosService('DELETE',`/resumes/${resumeId}`,{})
}

//downloadResumeAPI-called by component view when download button clicked
export const downloadResumeAPI=async(resumeDetails)=>{
    return await axiosService('POST','/downloads',resumeDetails)
}

//getAlldownloadResumesAPI-called by component alldownloads when component loading
export const getAlldownloadResumesAPI=async()=>{
    return await axiosService('GET','/downloads',{})
}

//updateResumeAPI-called by component edit when update button clicked
export const updateResumeAPI=async(resumeId,resumeDetails)=>{
    return await axiosService('PUT',`/resumes/${resumeId}`,resumeDetails)
}