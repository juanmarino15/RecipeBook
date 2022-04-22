export class User{
    constructor(
         public email: string,
         public id: string, 
         private _token: string, 
         private _tokenExpirationDate: Date
         ){}

    get token(){ //this is a getter only
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) { //if token expiration date does not exist or if the current date is grater than the token experiation date, then token is no longer valid, so return null
            return null;
        }
        return this._token;
    }
}