const TextInput = ({inputType="text", label, value, onChangeHandler,inputRef}) => {
  return (
    <div>
        {label && <label htmlFor={label} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
        <input 
            type={inputType} 
            value={value} 
            placeholder={`Enter a ${label}`} 
            onChange={onChangeHandler} 
            ref={inputRef}
            className="px-4 py-2 border-2 border-black rounded-md w-full"
        />
    </div>
  )
}

export default TextInput;