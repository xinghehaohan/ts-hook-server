import React from "react";
import { useState , useEffect } from "react"
import { SearchPanel } from "./serch-panel"
import { List } from "./list"
import { cleanObject } from "../../utils";
import qs from "qs"
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = ()=>{
    const [param, setParam] = useState({
        name:'',
        personId:''
    })
    const [users, SetUsers] = useState([]);
    const [list, setList] =useState([]);
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async(res)=>{
            if(res.ok){
                setList(await res.json());
            }
        })
    },[param])

    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async(res)=>{
            if(res.ok){
                SetUsers(await res.json());
            }
        })
    },[])
    return <div>
        <SearchPanel
            param={param} 
            setParam={setParam}
            users={users}
         />
        <List 
        users={users}
        list={list}
        />
    </div>
}