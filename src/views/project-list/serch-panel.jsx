import React from "react";
export const SearchPanel =({param,setParam,users})=>{
    return <form>
        <div>
            <input type="text"
             value={param.name} 
             onChange={(e)=>setParam({
                ...param,
                name:e.target.value
             })}
             />
            <select
             value={param.personId}
             onChange={(e)=>setParam({
                ...param,
                personId:e.target.value
             })}
            >
                <option value="" key="fuzeren">负责人</option>
                {
                    users?.map(({id,name})=>{
                        return (
                            <option 
                            key={id} 
                            value={id}
                            >
                                {name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    </form>
}