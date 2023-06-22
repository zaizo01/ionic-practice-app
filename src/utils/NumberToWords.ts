export function numberToWords(number: number): string {
  const units: string[] = [
    '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
    'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'
  ];

  const tens: string[] = [
    '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
  ];

  const hundreds: string[] = [
    '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
  ];

  if (number === 0) {
    return 'cero';
  } else if (number < 20) {
    return units[number];
  } else if (number < 100) {
    const unit = units[number % 10];
    const ten = tens[Math.floor(number / 10)];
    return ten + (unit ? ' y ' + unit : '');
  } else if (number < 1000) {
    const unit = units[number % 10];
    const ten = tens[Math.floor((number % 100) / 10)];
    const hundred = hundreds[Math.floor(number / 100)];
    let result = hundred;
    if (ten) {
      result += ' ' + ten;
    }
    if (unit) {
      result += ' ' + unit;
    }
    return result.trim();
  } else {
    return 'fuera de rango';
  }
  }
  