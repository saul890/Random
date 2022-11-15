console.log("hi")

import uniqolor from 'uniqolor';
import express from 'express';


// Create an instance of an express application 
const app = express()

// Add this line below the line that says: const app = express()
app.use(express.json())

// Set the port the application will be running on
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







app.get('/okay/:value', async (req, res) => {
    console.log(req.params.value);
  console.log(req)
    var colour = uniqolor('Cooooool!');

    console.log(colour);
    res.json({ aColor: colour,})


  

/*
    // Read the response
    const body = await response.json()
  
    // Print the repsonse body to the console
    console.log(body.element_count)
  
    // Get the advice text string from the response body object
    const advice = body.element_count
  
    res.json({ near_earth: advice })
    */
  })





app.get('/', async (req, res) => {
  console.log(req.query);

  //Get todays date and print it to the console 
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  console.log(today)

  // Make a request to another wbesite and wait for a response
  // Also use todays date to fetch the data
  const response = await fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=" + today + "&end_date=" + today + "&api_key=ORXmF61vg9eiVAGVpYubzn2r8OmHMW2v7UJLftCr")

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body.element_count)

  // Get the advice text string from the response body object
  const advice = body.element_count

  res.json({ near_earth: advice })
})



