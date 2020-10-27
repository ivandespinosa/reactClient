const baseUrl = 'http://localhost:3650'

export async function post(data) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'content-type': 'application/json',    
      'Access-Control-Allow-Origin': '*' 
    },
    body: JSON.stringify({amount:data})
  }

  console.log(requestOptions)

  const response = await fetch(`${baseUrl}/api/validationLoan`, 
  requestOptions)
  const responseJson = await response.json()
  console.log(responseJson)
  return responseJson

}

export default {
  post
}