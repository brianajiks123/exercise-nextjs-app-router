type DetailProductPageProps = { params: Promise<{ slug: string[] }> };

export default async function DetailProductPage(props: DetailProductPageProps) {
    const { slug } = await props.params;

    return (
        <div>
            <h1>Detail Product Page</h1>
            <p>Category: {slug[0]}</p>
            <p>Gender: {slug[1]}</p>
            <p>Id: {slug[2]}</p>
        </div>
    );
}
