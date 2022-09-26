import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

export class UsersData implements InMemoryDbService {

    createDb(): Record<string, User[]> {
        const users: User[] = [
            {
                id: 0,
                username: 'Julien',
                isAdmin: true
            },
            {
                id: 1,
                username: 'Yana',
                isAdmin: false
            }
        ];

        return { users };
    }
        
}