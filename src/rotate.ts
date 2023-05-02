// This function rotates a layer of the matrix
function rotateLayer(matrix: number[][], layer: number): void {
    let n = matrix.length;
    let size = n - 2 * layer;
  
    // Save the top left corner element of the layer
    let temp = matrix[layer][layer];
  
    // Move the elements of the top row to the left
    for (let i = layer; i < layer + size - 1; i++) {
      matrix[layer][i] = matrix[layer][i + 1];
    }
  
    // Move the elements of the right column upwards
    for (let i = layer; i < layer + size - 1; i++) {
      matrix[i][n - 1 - layer] = matrix[i + 1][n - 1 - layer];
    }
  
    // Move the elements of the bottom row to the right
    for (let i = n - 1 - layer; i > layer; i--) {
      matrix[n - 1 - layer][i] = matrix[n - 1 - layer][i - 1];
    }
  
    // Move the elements of the left column downwards
    for (let i = n - 1 - layer; i > layer + 1; i--) {
      matrix[i][layer] = matrix[i - 1][layer];
    }
  
    // Place the top left corner element to the bottom left
    matrix[layer + 1][layer] = temp;
  }
  
  // This function rotates the entire matrix
  function rotateMatrix(matrix: number[][]): void {
    let n = matrix.length;
    let layers = Math.floor(n / 2);
  
    // Rotate each layer of the matrix from outer to inner
    for (let layer = 0; layer < layers; layer++) {
      rotateLayer(matrix, layer);
    }
  }
  
  // This function converts a flat array to a matrix of a given size
  function arrayToMatrix(array: number[], size: number): number[][] {
    let matrix: number[][] = [];
    for (let i = 0; i < size; i++) {
      matrix[i] = array.slice(i * size, (i + 1) * size);
    }
    return matrix;
  }
  
  // This function converts a matrix to a flat array
  function matrixToArray(matrix: number[][]): number[] {
    let array: number[] = [];
    for (let row of matrix) {
      array.push(...row);
    }
    return array;
  }
  
  // This function rotates a flat array of numbers representing a square matrix
  export function Rotate(array: number[]): number[] {
    let size = Math.sqrt(array.length);
  
    // Convert the flat array to a matrix
    let matrix = arrayToMatrix(array, size);
  
    // Rotate the matrix
    rotateMatrix(matrix);
  
    // Convert the matrix back to a flat array
    return matrixToArray(matrix);
  }
  