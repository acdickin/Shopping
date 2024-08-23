import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface CartProps {
    cartItems: CartItems,
    handleRemoveCart: Function
}


import { CartItems, Item } from './types/CartTypes'

export function Cart({ cartItems, handleRemoveCart }: CartProps) {

    return (
        <Sheet>
            <SheetTrigger><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart mr-2 h-4 w-4"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Cart</SheetTitle>
                    <SheetDescription>
                        {renderCartChart(cartItems, handleRemoveCart)}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )

}
const renderCartChart = ({ cartItems, handleRemoveCart }: CartProps) => {
    return cartItems.map((item: Item) => {
        <TableBody key={item.uuid}>
            <TableRow>

                <TableCell>Paid</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>

                <TableCell className="text-right">{item.cost * item.number}</TableCell>
                <TableCell> {item.count} </TableCell>
                <TableCell onClick={handleRemoveCart(item.uuid)}>remove</TableCell>
            </TableRow>
        </TableBody>
    })

}
    // return (
    //     <Popover>
    //         <PopoverTrigger><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart mr-2 h-4 w-4"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></PopoverTrigger>
    //         <PopoverContent>


    //         </PopoverContent>
    //     </Popover>
    // )
}
export default Cart