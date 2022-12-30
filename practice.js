async function callApi(){
let result = await fetch('https://jsonplaceholder.typicode.com/users');
result = await result.json()
document.getElementById("userdata").innerHTML = result.map((user)=> 
`<tr>
<td>${user.id}</td>
<td>${user.name}</td>
<td>${user.username}</td>
<td>${user.email}</td>
<td>${user.address}</td>
</tr>`

).join("")

}
callApi()