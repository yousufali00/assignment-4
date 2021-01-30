// First class 

const firstAddBtn = document.getElementById('btn-add-first');
firstAddBtn.addEventListener( 'click', () =>{

    calculationHandler( true, 'first-class-input' )

} );

const firstMinusBtn = document.getElementById('btn-minus-first');
firstMinusBtn.addEventListener( 'click', () =>{
    
    calculationHandler( false, 'first-class-input' )


} );

// Economy class 

const economyAddBtn = document.getElementById('btn-add-economy');
economyAddBtn.addEventListener( 'click', () => {

    calculationHandler( true, 'economy-class-input' )

} );
const economyMinusBtn = document.getElementById('btn-minus-economy');
economyMinusBtn.addEventListener( 'click', () => {

    calculationHandler( false, 'economy-class-input' )

} );


function  calculationHandler( increaseOrNot, inputId ){

    const quantityInput = parseInt(document.getElementById(inputId).value);

    if( increaseOrNot === true ){
        const quantityResult = quantityInput + 1;
        document.getElementById( inputId ).value = quantityResult;

        const subTotal = parseFloat(document.getElementById('sub-total').innerText); 
       
        if( inputId === 'economy-class-input'){

            const subTotalAmount = subTotal + 100 ;
            document.getElementById('sub-total').innerText = subTotalAmount;

        }
        if( inputId === 'first-class-input'){

            const subTotalAmount = subTotal + 150 ;
            document.getElementById('sub-total').innerText = subTotalAmount;

        }

        const totalVat = vatCalculator(true);
        document.getElementById('vat').innerText = totalVat;

    }
    if ( increaseOrNot === false && quantityInput > 0 ) {
        
        const quantityResult = quantityInput - 1;
        document.getElementById( inputId ).value = quantityResult;

        const subTotal = parseFloat(document.getElementById('sub-total').innerText); 

        if( inputId === 'economy-class-input'){
   
            const subTotalAmount = subTotal - 100 ;
            document.getElementById('sub-total').innerText = subTotalAmount;

        }
        if( inputId === 'first-class-input'){

            const subTotalAmount = subTotal - 150 ;
            document.getElementById('sub-total').innerText = subTotalAmount;

        }

        const totalVat = vatCalculator(true);
        document.getElementById('vat').innerText = totalVat;

    }
    
}

// Function area 

function vatCalculator( vatIncreaseOrNot ){
    const subTotal = parseFloat(document.getElementById('sub-total').innerText); 
    const totalVat = (subTotal * 10 ) / 100;

    if(vatIncreaseOrNot === true ){
        return totalVat;
    }
    
}

function totalAmount( subtotal, vat ){
    const totalResult = subtotal + vat;
    return totalResult;
}
