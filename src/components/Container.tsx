import * as React from 'react'
import {ButtonFixedBottom} from "./ButtonFixedBottom";
import {MapExamplairKeywords} from "./MapExamplairKeywords";
import {MapExamplairSaveWords} from "./MapExamplairSaveWords";
import {SearchForm} from "./SearchForm";
import {DeleteAll} from "./DeleteAll";
import {useState} from "react";
import saveWords from '../SavingWords.json'

export interface ContainerProp{

}




export const Container=()=>{

/*Само состояние,необходимое для смены класс нейма*/
    const [switchClassName,addClass]=useState(false)

    /*Функция,которая меняет логическое значение и,соответственно,класс нейм*/
    const switcherClass=()=>{
        addClass(true)



    }

    /*Хук.Содержит состояние,необходимое для смены логического значения при клике.
    * Если истинно-добавляем ключевое слово в массив(пока что)
    * Иначе-ничего
    * */
    const [favourite,addToFavourite]=useState(false)


    /*функция обработчик нашего хука.который добавляет ключевое слово в массив*/
    const toFavourite=()=>{
        addToFavourite(true)
        saveWords.push()
    }

    /* <MapExamplairKeywords newFavourite={toFavourite} stateUpFavourite={favourite}/>-
     Взял состояние нашего хука.Таким образом теперь наш компонент связан с обработчиком и может изменяться
     */
    return(
        <div>
            <MapExamplairSaveWords swapClassName={switchClassName}/>
            <DeleteAll unshowSaveWords={switcherClass}/>
            <SearchForm/>

          <MapExamplairKeywords newFavourite={toFavourite} />
            <ButtonFixedBottom/>

        </div>
    )
}