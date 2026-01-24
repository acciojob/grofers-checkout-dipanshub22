const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	
	const prices = document.querySelectorAll('.price');
  
  
  let total = 0;
  prices.forEach(price => {
    total += Number(price.textContent);
  });
  
  
  const table = document.querySelector('table');
  const totalRow = document.createElement('tr');
  
  
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'right';
  

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

