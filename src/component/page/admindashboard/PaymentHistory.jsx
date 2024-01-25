import NodataHere from "../../common/NodataHere"
import useAllPement from "../../hooks/useAllPement"


const PaymentHistory = () => {
    const { isPending, error, allpement, refetch } = useAllPement()
    console.log(allpement)
    return (
        <div className="">

            <div className="p-10">
                <th className="text-2xl pb-4 text-center text-orange-500">{allpement?.length} sell hoise</th>
                {
                    allpement?.length > 0 ? <>
                        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
                            {
                                allpement?.map((item, index) => {
                                    return <>
                                        <div className="">
                                            <div className="flex items-center gap-2">
                                                <img className="w-[220px] h-[220px]" src={item?.item?.image?.[0]} alt="" />
                                            </div>
                                            <p>{item?.item?.name}</p>
                                            <p>{item?.item?.title}</p>
                                            <p>$ {item?.item?.price}</p>
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