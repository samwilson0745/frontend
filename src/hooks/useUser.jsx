import React,{ useState } from "react"
import axios from 'axios';
export default function useUser(){
    const [isLoading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const getUserQuery1=async()=>{
        try{
            const {data} = await axios.get('http://localhost:8000/api/user/getUsers1');
            setLoading(false)
            return data.data;
        }catch(e){
            setError(e)
            return e;
        }
    }
    const getUserQuery2 = async()=>{
        try{
            const { data } = await axios.get('http://localhost:8000/api/user/getUsers2');
            return data.data;
        }catch(e){
            return e;
        }
    }
    const getUserQuery3 = async()=>{
        try{
            const { data } = await axios.get('http://localhost:8000/api/user/getUsers3');
            return data.data;
        }catch(e){
            return e;
        }
    }
    const getUserQuery4 = async()=>{
        try{
            const { data } = await axios.get('http://localhost:8000/api/user/getUsers4');
            return data.data;
        }catch(e){
            return e;
        }
    }
    const getUserQuery5 = async()=>{
        try{
            const { data } = await axios.get('http://localhost:8000/api/user/getUsers5');
            return data.data;
        }catch(e){
            return e;
        }
    }

    return {
        getUserQuery1,
        getUserQuery2,
        getUserQuery3,
        getUserQuery4,
        getUserQuery5
    }
}