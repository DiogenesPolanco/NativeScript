 export class Service { 
    get isAuthenticated(): boolean {
        return false;
    } 
    login(username: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => { 
               resolve('OK');
        });
    }
} 
export var service = new Service();
