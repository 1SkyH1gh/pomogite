import * as React from 'react'
import {FunctionComponent} from "react";


export interface ExamplairSaveWordsProp {
    objSaveKeywords:{
        id:number,
        keyword:string
    }
}

export const ExamplairSaveWords:FunctionComponent<ExamplairSaveWordsProp>=(props)=>{
    return(
        <div>{props.objSaveKeywords.keyword}</div>
    )
}
