import './form-input.scss'

const formInput = ({ label, ...otherProps }) => {

    // Spread operators used to add all input's options as props
    // without writtring them down
    return (
        <div className="group">
            <input className="form-input" {...otherProps}/>
            {label && (
                <label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`} htmlFor="displayName">{label}</label>
            )}
        </div>
    )
}

export default formInput