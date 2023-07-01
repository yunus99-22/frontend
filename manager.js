// Retrieve data from the portal form (assuming it's passed via URL parameters)
var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');
var address = urlParams.get('address');
var email = urlParams.get('email');

// Array to store customer data
var customers = [];

// Check if data is retrieved from the portal form and add it to customers array
if (name && address && email) {
    customers.push({ name: name, address: address, email: email });
}

// Function to add a customer to the table
function addCustomer() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    
    customers.push({ name: name, address: address, email: email });
    
    renderTable();
    
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    
    // Prevent form submission
    event.preventDefault();
}

// Function to delete a customer from the table
function deleteCustomer(index) {
    customers.splice(index, 1);
    
    renderTable();
}

// Function to update a customer in the table
function updateCustomer(index) {
    var newName = prompt('Enter the updated name:');
    var newAddress = prompt('Enter the updated address:');
    var newEmail = prompt('Enter the updated email:');
    
    customers[index].name = newName;
    customers[index].address = newAddress;
    customers[index].email = newEmail;
    
    renderTable();
}

// Function to render the table with customer data
// function renderTable() {
//     var table = document.getElementById('customerTable');
    
//     // Clear the table body
//     table.innerHTML = '<tr><th>Name</th><th>Address</th><th>Email</th><th>Actions</th></tr>';
    
//     // Add each customer to the table
//     customers.forEach(function(customer, index) {
//         var row = table.insertRow();
//         var nameCell = row.insertCell(0);
//         var addressCell = row.insertCell(1);
//         var emailCell = row.insertCell(2);
//         var actionsCell = row.insertCell(3);
        
//         nameCell.innerHTML = customer.name;
//         addressCell.innerHTML = customer.address;
//         emailCell.innerHTML = customer.email;
        
//         // Add delete button with event listener
//         var deleteButton = document.createElement('button');
//         deleteButton.innerHTML = 'Delete';
//         deleteButton.addEventListener('click', function() {
//             deleteCustomer(index);
//         });
        
//         // Add update button with event listener
//         var updateButton = document.createElement('button');
//         updateButton.innerHTML = 'Update';
//         updateButton.addEventListener('click', function() {
//             updateCustomer(index);
//         });
        
//         actionsCell.appendChild(deleteButton);
//         actionsCell.appendChild(updateButton);
//     });
// }

// // Attach event listener to the form submit event
// document.getElementById('customerForm').addEventListener('submit', addCustomer);

// // Render the table initially
// renderTable();


// fetch()






//UPDATE
const form =document.getElementById('customerForm');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        let name =document.getElementById('name');
        let adress =document.getElementById('adress'); 
        let enmail =document.getElementById('email');
        

        const formdata =new FormData(form);
        const owner =Object.fromEntries(formdata.entries());


        fetch(`http://localhost:8080/api/v1/customer/add`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(owner)
        })

        .then (response=>response.json())
        .then(data =>{
            console.log('user created ',data);
            alert("successfully save");
        }).catch(error =>{
            console.error('ERROR ',error)
        });
           
    });





    fetch('http://localhost:8080/api/v1/customer/GetAll').then((data) => {
        return data.json();

    }).then((Data)=>{

        let tData="";
        Data.forEach(store => {
            tData+=`
            
            <tr>
            <td>${store.name}</td> 
            <td>${store.address}</td>
            <td>${store.email}</td>
            <td>
            <a>update</a>
            <a>delete</a>
            
            </td>
            </tr>
            
            
            `;
            
        });
        document.getElementById('customerT').innerHTML=tData;
    });


