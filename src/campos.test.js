import { VerificaCampo } from "./utils/validacao";

test('Teste campo vazio', () => {
    expect(VerificaCampo("")).toBe(false)
})

test('Teste campo prenchido', () => {
    expect(VerificaCampo("A")).toBe(true)
})
