import { NextResponse } from 'next/server'
import { myData } from '../../utils/database/schema.js'

export async function POST(req) {
    let userData = await req.json()
    
    try {
        let user = new myData({
            formData: userData.myFormData,
            emailId: userData.emailId,
            aiContent: userData.aiContent,
            templateSlug: userData.templateSlug
        })

        await user.save()

        return NextResponse.json({
            success: true,
            message: "data added successfully"
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }
}