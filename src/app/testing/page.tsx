

export default async function TestingPage() {

    /**
     * * console.log(message) 0.1s
     * * console.log(message)
     * * for loop 10s 10s => 
     *  function(age,name,()=>{},message)
     *  ! setTime(callback,500)
     *  ! accept reject 
     *  ! aynsc await 
     *  ! blocking nonon block event loop  promise callback
     */
    const num = 11
    const promise = new Promise((resolve, reject) => {
        if(num>10)
            resolve(true)
        else 
            reject(false)
    })

    console.log("==========================")
    console.log("testing 1")
    console.log('testing 2')
    const result = await promise
    console.log(result)
    console.log('testing 3')
    console.log('testing 4')
    console.log('testing 5')
    console.log('testing 6')
    console.log('testing 7')
    console.log('testing 8')
    console.log('testing 9')
    console.log('testing 10')
    console.log('testing 11')
    console.log('testing 12')
    console.log('testing 13');
    console.log('testing 14');
    console.log('testing 15');
    console.log('testing 16');
    console.log('testing 17');
    console.log('testing 18');
    console.log('testing 19');
    console.log('testing 20');
    console.log('testing 21');
    console.log('testing 22');
    console.log('testing 23');
    console.log('testing 24');
    console.log('testing 25');
    console.log('testing 26');
    console.log('testing 27');
    console.log('testing 28');
    console.log('testing 29');
    console.log('testing 30');


    return (
        <h1 className="text-gray-900 font-bold text-4xl">Testing</h1>
    )
}