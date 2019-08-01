import * as React from "react";
import {FunctionComponent} from "react";


export interface SeachFormProps{

}



export const SearchForm:FunctionComponent<SeachFormProps>=()=>{
    return(
        <form>
            <input placeholder="enter value"/>
        </form>
    )
}

