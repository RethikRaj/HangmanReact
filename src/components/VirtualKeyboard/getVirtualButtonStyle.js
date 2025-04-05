const getVirtualButtonStyle = (letter,usedLettersSet,secretWordSet)=>{
    if(usedLettersSet.has(letter)){
        if(secretWordSet.has(letter)){
            return "bg-green-500 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-700 transition m-2 cursor-not-allowed";
        }else{
            return "bg-red-500 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition m-2 cursor-not-allowed";
        }
        
    }else{
        return "bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-700 transition m-2 cursor-pointer";
    }
}

export default getVirtualButtonStyle;