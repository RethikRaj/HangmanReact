export const getButtonStyling = (styleType) => {
    const primaryButtonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:cursor-pointer";
    const secondaryButtonStyle = "bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:cursor-pointer";
    const warningButtonStyle = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg hover:cursor-pointer";
    const dangerButtonStyle = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg hover:cursor-pointer";

    if(styleType === "primary") {
        return primaryButtonStyle;
    }else if(styleType === "secondary") {
        return secondaryButtonStyle;
    }else if(styleType === "warning") {
        return warningButtonStyle;
    }else if(styleType === "danger") {
        return dangerButtonStyle;
    }else{
        return primaryButtonStyle; // default to primary style
    }
};