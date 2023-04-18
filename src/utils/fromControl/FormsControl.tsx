import React from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";
import style from "./FormsControl.module.css"

export const TextArea : React.FC<WrappedFieldProps> = (props) => {
    const {input,meta, ...restProps} = props
    const hasError = meta.error && meta.touched
    return (
        <div className={style.fromControl + " " + (hasError? style.error : " ")}>
        <div>
            <textarea {...input} {...restProps} />
        </div>
            {hasError && <span className={meta.error && style.error}>{meta.error}</span>}
        </div>
    )
}
export const Input : React.FC<WrappedFieldProps> = (props) => {
    const {input,meta, ...restProps} = props
    const hasError = meta.error && meta.touched
    return (
        <div className={style.fromControl + " " + (hasError? style.error : " ")}>
            <div>
                <input {...input} {...restProps} />
            </div>
            {hasError && <span className={meta.error && style.error}>{meta.error}</span>}
        </div>
    )
}