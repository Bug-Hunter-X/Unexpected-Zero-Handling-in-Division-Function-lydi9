function myFunction(a, b) {
  if (a === 0 || b === 0) { 
    return NaN; // Handle zero values explicitly for improved behavior
  }
  return a / b; 
}