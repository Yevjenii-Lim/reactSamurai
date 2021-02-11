import React from 'react';
import s from './FromsControl.module.css'





export let FormControlCreator = Element => ({input, meta, ...props}) => {
    let hasError = (!!meta.error && meta.touched) ? true : false
    // console.log(Element)
    return (
        <div className={s.fromControl + " " +  hasError ? s.error : null }>
           <Element {...input} {...props}></Element>
            { hasError && <p className={s.error}>{meta.error}</p>}
        </div>
    )
}
