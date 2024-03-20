import { ObjectId } from 'mongodb';

interface TradeUser {
    
 _id?: ObjectId,
 first_name: string,
 last_name: string,
 user_name: string,
 email: string, 
 photo: string
}

export default TradeUser