import * as React from 'react'
import {FunctionComponent} from "react";
import savingWords from "../SavingWords.json";

interface ExamplairWordsProp{

    objKeywords:{
        id:number,
        keyword:string
    },
    /*Функция,которая умеет переключать хук
    * Если значение хука == false,то ничего не делать при клике
    * Если ==true,то добавлять ключевое слово в массив
    * */
    addToFavourite:()=>void,


}

export const ExamplairWords:FunctionComponent<ExamplairWordsProp>=(props)=>{


    return(
        <button onClick={props.addToFavourite}>{props.objKeywords.keyword}</button>

    )
}