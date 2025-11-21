export function parseNumber(s) {
    const txt = String(s).replace(",", ".");
    const n = Number(txt);
    if (Number.isNaN(n)) throw new Error(`"${s}" no es un número válido`);
    return n;
}

export function computeOp(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) throw new Error("No se puede dividir entre cero");
                return a / b;
        case "^":
            return Math.pow(a, b);
        case "%":
            return a % b;
        default:
            throw new Error("Operación inválida");
    }
}
