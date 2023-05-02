// Import necessary modules
import { chain } from 'stream-chain';
import { parser } from 'stream-csv-as-json';
import { asObjects } from 'stream-csv-as-json/AsObjects';
import { streamValues } from 'stream-json/streamers/StreamValues';
import { createReadStream } from 'fs';
import { Rotate } from './rotate';
import { argv } from 'process';

// throw error if there is no input file
if (argv.length < 3) {
  throw new Error('Please provide an input file');
}

// Create a data processing pipeline
const pipeline = chain([
  // Read the input CSV file as a stream of JSON objects
  createReadStream(argv[2]),
  parser(),
  asObjects(),
  streamValues()
]);

// Print the output headers on the console to generate the CSV file
console.log('id, json, is_valid');

// Process each JSON object in the pipeline
pipeline.on('data', (data: any) => {
  // Parse the "json" field of the JSON object as an array
  const array = JSON.parse(data.value.json);
  
  // Check if the array is a square matrix
  if (Math.sqrt(array.length) % 1 === 0) {
    // Rotate the matrix and print the output in CSV format
    console.log(`${data.value.id}, "${JSON.stringify(Rotate(array))}", true`);
  } else {
    // If the array is not a square matrix, print the output in CSV format with an empty array and "false" flag
    console.log(`${data.value.id}, "[]", false`);
  }
});
