//fetch dummy data
const getData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
}

const ServerComp = async () => {
    const data = await getData();
    console.log(data);

    return (
        <div>
        <h1>Server Component</h1>
        </div>
    );
}

export default ServerComp;