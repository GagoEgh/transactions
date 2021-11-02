export interface Transation {
   // enum
     type :'income'|'outcome'|'loan'|'investment'
    _id: string
    amount: number
    name: {
        first: string;
        last: string;
    },
    company: string;
    email: string;
    phone: string;
    address: string;
}

export interface TransationResponse{
    total:number,
    data:Transation[]
}