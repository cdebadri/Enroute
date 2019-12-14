export const getItemsApi = body => fetch(`http://192.168.43.178:5000/api/queryData`, {
  method: 'POST',
  body,
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => data);