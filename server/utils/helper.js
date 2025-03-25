import { supportedMimeTypes } from "../config/fileSystem.js";
export const imageValidator = (size, mime) => {
    if (bytesToMb(size) > 2) {
        return "Image size should not be more than 2 MB";
    }
    else if(!supportedMimeTypes.includes(mime)) {
        return "Image type not supported";
    }
    return null;
}

export const bytesToMb = (bytes) => {
    return bytes / (1024 * 1024);
}

export const generateRandomNum = () => {
    return uuidv4();
}