import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: "Nike Air Force 1 '07",
        price: 1549000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png"
    },
    {
        id: 2,
        title: "Nike Court Vision Low",
        price: 1069000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/NIKE+COURT+VISION+LO.png"
    },
    {
        id: 3,
        title: "Nike Air Force 1 '07",
        price: 1549000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/AIR+FORCE+1+%2707.png"
    },
    {
        id: 4,
        title: "Nike Dunk Low",
        price: 1909000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4eae23a9-b240-4a53-98c7-d5502fe3f7dc/NIKE+DUNK+LOW+NN.png"
    },
    {
        id: 5,
        title: "Nike Pegasus 41",
        price: 2099000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8312e20d-5b44-4b90-a355-1f8397f74d1a/AIR+ZOOM+PEGASUS+41.png"
    }
]

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({
                status: 200,
                message: "Success",
                data: detailProduct,
            })
        }

        return NextResponse.json({
            status: 404,
            message: "Not Found",
            data: {},
        })
    }
    return NextResponse.json({
        status: 200,
        message: "Success",
        data: data,
    })
}
