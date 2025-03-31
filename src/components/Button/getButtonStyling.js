export const getButtonStyling = (styleType) => {
    const primaryButtonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg";
    const secondaryButtonStyle = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg";
    const warningButtonStyle = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg";
    const dangerButtonStyle = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg";

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