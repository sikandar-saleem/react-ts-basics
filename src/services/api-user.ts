import axios, { CanceledError } from "axios";

// With export default I can import it with any name
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})


// This is name export we can use this to export multiple 
// Variables, Objects  and Arrays in single line
export { CanceledError }