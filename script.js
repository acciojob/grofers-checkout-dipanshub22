const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 console.log(document.querySelectorAll('.item'));
	 console.log(document.querySelectorAll('.price'));
	
  
};

getSumBtn.addEventListener("click", getSum);

