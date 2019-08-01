import * as React from 'react'
import {FunctionComponent} from "react";
import saveWords from '../SavingWords.json'
import {ExamplairSaveWords} from "./ExamplairSaveWords";
export interface MapExamplairSaveWordsProp {
swapClassName:boolean
}



export const MapExamplairSaveWords:FunctionComponent<MapExamplairSaveWordsProp>=(props)=>{
    /*переменная,которая хранит в себе состояние хука.Далее будет условие
    * по которому нашему блоку будет добавляться один из класс неймов,в зависимости от того,какое значение у нашей переменной
    * */
    const swapClassName=props.swapClassName
    return(
        <div className={swapClassName===true?"addToInvisible":"trueVision"}>
        {saveWords.map(objSaveKeywords=>
                <ExamplairSaveWords objSaveKeywords={objSaveKeywords}/>)



        }
        </div>
    )
}