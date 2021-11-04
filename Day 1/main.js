// Declare second integer, double, and String variables.
  var numInt, numFloat, numString;

  // Read and save an integer, double, and String to your variables.
 numInt = parseInt(readLine());
  numFloat = parseFloat(readLine());
  numString = readLine();

  // Print the sum of both integer variables on a new line.
  console.log(i + numInt);

  // Print the sum of the double variables on a new line.
  console.log((d + numFloat).toFixed(1));

  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + numString);
