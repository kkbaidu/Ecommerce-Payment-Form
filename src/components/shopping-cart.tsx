import { shoppingCartData } from "../lib/data";

const ShoppingCart = () => {
    return (
        <div>
        {
            shoppingCartData.map((item) => {
                return (
                <div 
                key={item.aboutItem.id}
                className="flex flex-row justify-between items-center container border-b border-gray-200">
                    <div className="bg-[#f3f3f3] w-[90px] rounded h-[90px]">
                        <img 
                        src={item.image}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-between w-[230px] md:w-[400px] lg:w-[400px] h-[110px] pb-7 pt-2 pl-2 md:pl-0 lg:pl-0">
                        <span className="font-bold"> {item.aboutItem.name} </span>
                        <span className="text-[13px]"> {item.aboutItem.description} </span>
                        <span className="text-[13px]"> ID: <span> {item.aboutItem.id} </span> </span>
                    </div>
                    <div className="flex flex-col items-start h-[110px] justify-between pb-7 pt-2 w-[80px] md:w-auto lg:w-auto">
                        <span className="font-bold"> ${item.purchaseDetails.price} </span>
                        <span className="text-[13px]"> Size: <span className="text-[#396aff]"> {item.purchaseDetails.size} IT </span> </span>
                        <span className="text-[13px]"> QTY: <span className="text-[#396aff]"> {(item.purchaseDetails.quantity.toString()).length === 1 ? `0${item.purchaseDetails.quantity}` : item.purchaseDetails.quantity } </span> </span>
                    </div>
                    <div className="flex justify-start items-start h-[110px] pt-2">
                        <button className="text-gray-400 hover:text-black"> × </button>  
                    </div>
                </div>
            )
            })
        }
        </div>
    )
}

export default ShoppingCart;