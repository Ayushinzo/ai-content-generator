import { NextResponse } from 'next/server'
import { myData } from '../../utils/database/schema.js'

export async function POST(req) {
    try {
        let userData = await req.json()
        let data = await myData.find({ emailId: userData.query })
        return NextResponse.json({
            success: true,
            data: data
        })
    }
    catch (err) {
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }
}