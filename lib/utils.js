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
      return array[index] ? array[index].padEnd(columnWidths[colIndex]) : "";
    }).join("  ");
  });

  return formattedRows.join("\n");
}

/**
 * Calculate the number of columns based on data length and maximum column width.
 *
 * @param {Array} data - The data to be displayed in the table.
 * @param {number} maxColumnWidth - The maximum width for each column.
 * @returns {number} - The calculated number of columns.
 */
function calculateColumns(data) {
  const terminalWidth = process.stdout.columns;
  let maxColumnWidth = 7;
  if ( terminalWidth <= 101 ) {
    maxColumnWidth = 19;
  } else if ( terminalWidth <= 118 ) {
    maxColumnWidth = 20;
  }
  const maxColumns = Math.floor(terminalWidth / maxColumnWidth);
  const columns = Math.min(maxColumns, Math.ceil(data.length / (terminalWidth / maxColumnWidth)));
  return columns;
}

module.exports = { formatArrayToTable, calculateColumns };
