import { ObjectId } from 'mongodb';

interface TradeUser {
    
 _id?: ObjectId,
 first_name: string,
 last_name: string,
 user_name: string,
 password: string,
 image: string
}

export default TradeUser