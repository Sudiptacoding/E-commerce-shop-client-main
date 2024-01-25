import UseMenus from "../../hooks/UseMenus"

const AdminHome = () => {

    const [menus, refetch, loading] = UseMenus()
    console.log(menus)


    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-8 gap-8'>
                <div className="bg-white rounded-xl text-center p-6 h-fit shadow-lg">
                    <h1 className="text-2xl font-bold">$12.00</h1>
                    <h1 className="pt-1 text-xl font-medium">Shirt</h1>
                </div>
                <div className="bg-white rounded-xl text-center p-6 h-fit shadow-lg">
                    <h1 className="text-2xl font-bold">$172.00</h1>
                    <h1 className="pt-1 text-xl font-medium">T-shirt</h1>
                </div>
                <div className="bg-white rounded-xl text-center p-6 h-fit shadow-lg">
                    <h1 className="text-2xl font-bold">$142.00</h1>
                    <h1 className="pt-1 text-xl font-medium">Hoodie</h1>
                </div>
                <div className="bg-white rounded-xl text-center p-6 h-fit shadow-lg">
                    <h1 className="text-2xl font-bold">$122.00</h1>
                    <h1 className="pt-1 text-xl font-medium">Cap</h1>
                </div>
                <div className="bg-white rounded-xl text-center p-6 h-fit shadow-lg">
                    <h1 className="text-2xl font-bold">$122.00</h1>
                    <h1 className="pt-1 text-xl font-medium">Beg</h1>
                </div>
            </div>

            {/*  */}
            <p className="text-3xl border-2 text-red-500 mt-16 m-6">vai ei jaigai chart hobe. jokhon back end theke data asbe tokhon ei jaigai ekta chart dekhiya displayName</p>
        </div>
    )
}

export default AdminHome