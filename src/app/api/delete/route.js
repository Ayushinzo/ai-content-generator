import { NextResponse } from 'next/server'
import { myData } from '../../utils/database/schema.js'

export async function POST(req){
    try{
        let itemId = await req.json()

        await myData.findByIdAndDelete(itemId.id)
        
        return NextResponse.json({
            success: true,
            message: "Item deleted successfully"
        })
    }catch(err){
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }
}