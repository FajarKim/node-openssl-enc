/**
 * Formats an array into a table with specified number of columns.
 *
 * @param {Array} array - The array to be formatted into a table.
 * @param {number} columns - The number of columns in the table.
 * @returns {string} - The formatted table as a string.
 */
function formatArrayToTable(array, columns) {
  const columnWidths = Array.from({ length: columns }, (_, colIndex) =>
    Math.max(...array.filter((_, i) => i % columns === colIndex).map(cell => cell.length))
  );

  const formattedRows = Array.from({ length: Math.ceil(array.length / columns) }, (_, rowIndex) => {
    return Array.from({ length: columns }, (_, colIndex) => {
      const index = rowIndex * columns + colIndex;
      return array[index] ? array[index].padEnd(columnWidths[colIndex]) : '';
    }).join('  ');
  });

  return formattedRows.join('\n');
}

module.exports = formatArrayToTable;
