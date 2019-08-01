import * as React from "react";
import {FunctionComponent} from "react";

export interface DeleteAllProps {
    unshowSaveWords:()=>void
}

/*по клику на кнопку логическое значение будет меняться.Если оно true,то класс меняется*/
export const DeleteAll:FunctionComponent<DeleteAllProps>=(props)=>{
    return(
        <button onClick={props.unshowSaveWords}>DeleteAll</button>
    )

}