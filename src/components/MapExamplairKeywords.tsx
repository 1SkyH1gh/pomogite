import * as React from 'react'
import {FunctionComponent} from "react";
import allWords from '../AllWords.json'
import {ExamplairWords} from "./ExamplairWords";
import savingWords from '../SavingWords.json'

export interface MapExamplairKeywordsProp {
    //Передаем нашу функцию addToFavourite выше
    newFavourite: () => void,



}
 export const MapExamplairKeywords:FunctionComponent<MapExamplairKeywordsProp>=(props)=>{

    return(
        <div>
            {allWords.map(objKeywords=>
                <ExamplairWords objKeywords={objKeywords} addToFavourite={props.newFavourite} />)
            }
        </div>
    )
}