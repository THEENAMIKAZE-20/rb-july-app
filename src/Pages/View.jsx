import React, { useEffect, useRef, useState } from 'react'
import { FaFileDownload } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";
import Preview from '../Components/Preview';
import { viewResumeAPI } from '../services/allApi';
import Edit from '../Components/Edit'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
import {downloadResumeAPI  } from "../services/allApi";







function View() {
  const{id}=useParams()// to get the values from url eg:id
  const[resume,setResume]=useState({})//to hold single resume
  const previewRef=useRef() //create a reference

  const getResume=async()=>{
    const response=await viewResumeAPI(id)
    //console.log(response)
    if(response.status==200)
      {
      setResume(response.data)
    }
  }

  useEffect(()=>{getResume()},[])

const downloadcv=async()=>{
  const previewTag=previewRef.current// access the referenced html content
  const canvas=await html2canvas(previewTag)
    // console.log(canvas);
    canvas.toBlob(async(imgFile)=>{
      //create formdata to send file via API
      const formData=new FormData()
      formData.append("file",imgFile)
      formData.append("upload_preset","resumes")
      //generate resumeIMG from cloudinary api-call
      const result=await fetch("https://api.cloudinary.com/v1_1/c0q7uaxq/image/upload",{
        method:"post",
        body:formData
      })
const serverData=await result.json()
// console.log(serverData);
const url=serverData.secure_url
// console.log(url);
generatePDF(url)
})
    }

const generatePDF=async(resumeIMG)=>{
  const pdf=new jsPDF()
  const imgWidth=pdf.internal.pageSize.getWidth()
   const imgHeight=pdf.internal.pageSize.getHeight()
   pdf.addImage(resumeIMG,"PNG",0,0,imgWidth,imgHeight)

   const today=new Date()
  //  console.log(today);
  let timeStamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
  console.log(timeStamp);
  
  //api call to save download resume details in jsonserver
  const result=await downloadResumeAPI({timeStamp,resumeIMG,resumeId:resume.id,jobRole:resume.job})
  if(result.status==201){
    //save resume
    pdf.save(`${resume.fullName}.CV.pdf`)
  }
}


  return (
    <div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-2'></div>
          <div className='col-lg-8'>
            {/* navigation icons */}
            <div className='d-flex justify-content-center align-items-center'>
              {/* download */}
              <button onClick={downloadcv} style={{color:'#714a2f'}} className='btn me-2'><FaFileDownload  className='fs-5'/>
 Download CV</button>
 {/* edit */}
 <Edit resumeData={resume} setResumeData={setResume} />
 {/* back */}
 <Link to={'/form'} style={{color:'#714a2f'}} className='btn'> <AiFillBackward  className='fs-3'/>
Home</Link>
            </div>
            {/* preview component */}
            <div className='p-5' ref={previewRef}>
              <Preview resumeData={resume}/>
            </div>
          </div>
          <div className='col-lg-2'></div>
        </div>
      </div>
    </div>
  )
}

export default View
