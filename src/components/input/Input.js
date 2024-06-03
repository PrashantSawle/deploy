

export const Input = ({type,name,placeholder,onChange,values}) => {
    return (
        <>
         <input type={type} name={name}  placeholder={placeholder} value={values?.name} onChange = {onChange}/>
        </>
    )
} 