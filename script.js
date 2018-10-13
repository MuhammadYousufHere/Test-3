// write your JS code here

let price = 5.99;
 let cnt=0;
    function addBook(){
     cnt++;

     document.querySelector(".amount-aera").innerHTML = `
    ${cnt}

     `
     cnt * price;
     parseInt(price);
     
      document.querySelector(".total-amount").innerHTML = "$ " + Math.round(price * cnt);;
    }

    function subBook() {
    	if (cnt > 0) {
    	cnt--;
    	if (cnt < 0) {
    		 document.querySelector(".total-amount").innerHTML = "$ 0.00"
    	};
    	 document.querySelector(".amount-aera").innerHTML = `
    ${cnt}
     `
   
      document.querySelector(".total-amount").innerHTML ="$ " + Math.round(price * cnt);
      }

    }
