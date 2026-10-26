import axios from 'axios'

const axiosInstance=axios.create({
    // baseURL:'http://localhost:3000',
    baseURL:'https://rb-server-july-q7gy.onrender.com',
    timeout:5000
})

//global error handling
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response received");
        return response
        
    },
    (error)=>{
        if(error.response){
            const status =error.response.status
            if(status==401){
                console.log("Unauthorised access-Redirect to Login page");
                }
                else if(status==404){
                    console.log("API NOT FOUND");
                     }  else if(status==500){
                    console.log("Something Went Wrong... Tryagain later!!");
                     }  else if(error.request){
                    console.log("No response from Server");
                }  else {
                    console.log("Error"+error.message);
                      }
                      return Promise.reject(error)
        }
    }
)

export default axiosInstance