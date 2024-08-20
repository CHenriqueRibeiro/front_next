interface catalogProducts {
    params: {
        data: string[];
    }
}

export default function Catalog({ params }: catalogProducts) {
    const [category, id, color] = params.data
    return (
        <div>
            <p>Category : {category}</p>
            <p>Id : {id}</p>
            <p>Color : {color}</p>
        </div>
    )
}
// forma de roteamento por varios parametros