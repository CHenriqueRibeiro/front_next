interface idProducts {
    params: {
        idProduct: string;
    }
}

export default function Product(props: idProducts) {
    return (
        <p>
            Product : {props.params.idProduct}
        </p>
    )
}
// forma de roteamento por unico parametro