//1380. Lucky Numbers in a Matrix

export const luckyNumbers = function (matrix) {
  return (
    matrix
      //filtrar las columnas que no contengan al Lucky Number
      .filter((row) => {
        let min = Math.min(...row);
        let idx = row.indexOf(min);
        // Determina si el valor minimo de la fila es el mayor de la columna
        return matrix.every((arr) => arr[idx] <= min);
      })
      .map((row) => Math.min(...row))
  );
};
