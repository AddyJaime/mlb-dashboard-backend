// Esta función valida y convierte parámetros numéricos que vienen del req.query.
// Evita repetir validaciones en el controlador y centraliza la lógica en un solo lugar,
// facilitando el uso de parámetros como year, from y to de forma segura y reutilizable.

// /| variable    | qué es                            |
// | ----------- | --------------------------------- |
// | `value`     | el dato (ej: `"2023"`)            |
// | `fieldName` | el nombre del dato (ej: `"year"`) |

// value es igual a year sin string en el controlador 
// y fieldname is igual a "year" con string

function parseNumberQuery(
  value: unknown,
  fieldName: string
) {
  if (value === undefined) {
    return undefined
  }

  if (Array.isArray(`value`)) {
    throw new Error(`${fieldName} cannot be an array`)
  }

  if (typeof value !== "string") {
    throw new Error(`${fieldName} must be a string`)
  }

  const parsedValue = Number(value)

  if (isNaN(parsedValue)) {
    throw new Error(`${fieldName} is not a number`)
  }

  return parsedValue
}

export default parseNumberQuery;