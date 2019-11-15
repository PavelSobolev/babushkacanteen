import { Order } from './order';
import { FormGroup } from '@angular/forms';


// input: data of the Form from "user" component
export function sendMail(order: Order, checkoutForm: FormGroup) {

    order.customerName = checkoutForm.controls["customerName"].value;
    order.customerAddress = checkoutForm.controls["customerAddress"].value;
    order.customerEmail = checkoutForm.controls["customerEmail"].value;
    order.customerPhone = checkoutForm.controls["customerPhone"].value;
    order.customerSuburb = checkoutForm.controls["customerSuburb"].value;
    order.deliveryDateTime = checkoutForm.controls["deliveryDateTime"].value;
    order.id = Math.round(Math.random() * 10000000); // quasi-identifier

    let dt = new Date(checkoutForm.controls["deliveryDateTime"].value).toLocaleDateString();

    // set e-mail's body data
    let result: string = "";
    let soup = `so=${order.soup[0].name}, ${order.soup[1].name}`;
    let sides = `ga=${order.garnish[0].name}, ${order.garnish[1].name}`;
    let mains = `ma=${order.main[0].name} ${order.main[1].name}`;
    let dessert = `de=${order.dessert[0].name}`;
    let salads = `sa=${order.salad[0].name}`;
    let name = `nm=${order.customerName}`;
    let address = `ad=${order.customerAddress}, ${order.customerSuburb}`;
    let rid = `rid=${order.id}`;
    let phone = `ph=${order.customerPhone}`; 
    let date = `dt=${dt}`;
    let email = `em=${order.customerEmail}`;
    result = `${rid}&${soup}&${sides}&${mains}&${dessert}&${salads}&${phone}&${date}&${name}&${address}&${email}`;

    // call firebase function for email sending with exposed API
    fetch(`https://us-central1-babushka-22c31.cloudfunctions.net/sendMail?${result}`);
}
