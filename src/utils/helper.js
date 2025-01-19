import axios from "axios";

export const createSlug = (text) => {
    return text
      .toString() // Convert to string in case of non-string input
      .toLowerCase() // Convert to lowercase
      .trim() // Remove leading/trailing spaces
      .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word chars, and dashes with a single dash
      .replace(/^-+|-+$/g, ''); // Remove leading or trailing dashes
  };  

  export const brandDataFix = (data) => {
    return{
      ...data,
      updatedAt : null,
      trash : false,
      status : true,
      createdAt : Date.now()  
    } 
  }

  export function timeAgo(timestamp) {
    const now = Date.now();
    const secondsAgo = Math.floor((now - timestamp) / 1000);

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(secondsAgo / interval.seconds);
        if (count > 0) {
            return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return "just now";
}

export const cloudImageUpload = async({fileName,preset,cloudName})=>{
    const user_data = new FormData();

    user_data.append("file",fileName);
    user_data.append("upload_preset",preset);

    const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,user_data);
    return response.data;
}