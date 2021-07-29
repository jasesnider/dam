

export const validateImageType = (type: any) =>  {
    let isValid = false;
    
    switch (type) {
        case 'image/jpeg':
            isValid = true;
            break;
        case 'image/png':
            isValid = true;
            break;
        case 'image/gif':
            isValid = true;
            break;
    }
    
    return isValid;
}