import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const req = await request.json();
    console.log(req);
    // const { searchParams } = new URL(request.url);
    // const id = searchParams.get("id");
    // if (id) {
    //     const detailProduct = data.find((item) => item.id === Number(id));
    //     if (detailProduct) {
    //         return NextResponse.json({
    //             status: 200,
    //             message: "Success",
    //             data: detailProduct,
    //         })
    //     }

    //     return NextResponse.json({
    //         status: 404,
    //         message: "Not Found",
    //         data: {},
    //     })
    // }
    return NextResponse.json({
        status: 200,
        message: "Success",
        data: req,
    })
}
