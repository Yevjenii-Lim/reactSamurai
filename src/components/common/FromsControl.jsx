import React from 'react';
import s from './FromsControl.module.css'



let FormControl = ({input, meta, child, element, ...props}) => {

    let hasError = (!!meta.error && meta.touched) ? true : false
    console.log(hasError)
    return (
        <div className={s.fromControl + " " +  hasError ? s.error : null }>
            {props.children}
            { hasError && <p className={s.error}>{meta.error}</p>}
        </div>
    )
}

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

export let TextArea = (props) => {
    // (meta.error && meta.touched) ? s.error : null
    // console.log(!!meta)
    const {input, meta, ...restProps} = props
  
    // console.log(hasError)
    return ( <FormControl {...props}> <textarea {...input} {...restProps}></textarea></FormControl>
    )
}

export let Input = (props) => {
    // (meta.error && meta.touched) ? s.error : null
    // console.log(!!meta)
    const {input, meta, ...restProps} = props

    // console.log(hasError)
    return ( <FormControl {...props}> <input {...input} {...restProps}></input></FormControl>
    )
}