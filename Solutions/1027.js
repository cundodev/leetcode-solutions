// 1027. Longest Arithmetic Subsequence

const longestArithSeqLength = (nums) => {
  let max = 0
  const asl = [] // Arithmetic Sequences Length

  for (let i = 0; i < nums.length; i++) {
    asl[i] = {}
    for (let j = 0; j < i; j++) {
      // Calcular diferencia
      const diff = nums[i] - nums[j]
      // Optener longitud de la secuencia sino se asigna 1
      const currentLength = asl[j][diff] || 1
      // Actualizar longitud de la secuencia actual
      asl[i][diff] = currentLength + 1
      // Actualizar con la longitud de la maxima secuencia
      max = Math.max(max, asl[i][diff])
    }
  }
  return max
}

longestArithSeqLength([3, 6, 9, 12]) // 4
longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]) // 4
longestArithSeqLength([83, 20, 17, 43, 52, 78, 68, 45]) // 2
