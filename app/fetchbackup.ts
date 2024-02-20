async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log("getdata", res);
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
    console.log("data", data);
    return <main><h1>hello</h1></main>
  }