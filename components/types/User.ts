//Represents a user object on 
export interface User {
    id: ID;
  
    //Core user properties
    displayName: string;
    profilePicture: string;
  
    success: boolean;
  }
  
  interface ID {
    id: string;
    displayName: string;
    username: string;
    isFirstTimeUser: boolean;
    profilePicture: string;
    photos: Photo[];
    provider: string;
    _json: any;
  }
  
  interface Photo {
    value: string;
  }