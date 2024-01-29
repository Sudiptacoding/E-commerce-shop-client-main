import NodataHere from "../../common/NodataHere"
import useAllPement from "../../hooks/useAllPement"


const PaymentHistory = () => {
    const { isPending, error, allpement, refetch } = useAllPement()
    return (
        <div className="">
            <div className="p-10">
                <th className="pb-4 text-2xl text-center text-orange-500">{allpement?.length} sell hoise</th>
                {
                    allpement?.length > 0 ? <>
                        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
                            {
                                allpement?.map((item, index) => {
                                    return <>
                                        <div key={index} className="">
                                            <div className="flex items-center gap-2">
                                                <img className="w-[220px] h-[220px]" src={item?.image?.[0]} alt="" />
                                            </div>
                                            <p>{item?.name}</p>
                                            <p>$ {item?.price}</p>
                                            <p>Quantity {item?.quantity}</p>
                                        </div>
                                    </>

                                })
                            }
                        </div>
                    </> : <NodataHere></NodataHere>
                }
            </div>
        </div>
    )
}

export default PaymentHistory