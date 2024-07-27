const BookScreen = () =>{
    return <h1>This is Book Screen</h1>
  };
  
  export default BookScreen; 
  
  const  numberFormatter = new Intl.NumberFormat("en-IN",{
    currency: "INR",
    style: "currency",
  });
  
  const formatCurrency = (currencyValue) => numberformatter.format(currencyValue);