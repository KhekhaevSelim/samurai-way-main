import React, { useState } from 'react';
import style from "./Pagination.module.css"

type PaginationPropsType = {
    totalUsersCount : number
    pageSize : number
    currentPage : number
    setCurrentPage : (p: number) => void
    portionSize : number

}
const Pagination = (props : PaginationPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
    let pages = [];
    for(let i = 1; i <= pagesCount ; i ++){
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount/props.portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPage = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPage = props.portionSize * portionNumber

const nextPortion = (portionNumber : number) => {
        setPortionNumber(portionNumber + 1)
        props.setCurrentPage(leftPortionPage+props.portionSize)
}
    const prevPortion = (portionNumber : number) => {
        setPortionNumber(portionNumber - 1)
        props.setCurrentPage(leftPortionPage - props.portionSize)
    }
    return (
        <div>
            {portionNumber > 1 && <button onClick={()=>prevPortion(portionNumber)}>prev</button>}
            {pages.filter(p=> p >= leftPortionPage && p <= rightPortionPage)
                .map(p => {
                    return (
                        <span onClick={()=>props.setCurrentPage(p)}
                              className={props.currentPage === p ? style.curPage : style.page}
                        >{p}</span>
                    )
                })}
            {portionCount > portionNumber && <button onClick={()=>nextPortion(portionNumber)}>next</button>}
        </div>
    )}

export default Pagination;
