import { VerificaPerfil } from "./utils/validacao";

test('Teste Conservador 1', () => {
    expect(VerificaPerfil(4)).toBe('Conservador')
})

test('Teste Conservador 2', () => {
    expect(VerificaPerfil(5)).toBe('Conservador')
})

test('Teste Conservador 3', () => {
    expect(VerificaPerfil(6)).toBe('Conservador')
})

test('Teste Conservador 4', () => {
    expect(VerificaPerfil(7)).toBe('Conservador')
})


test('Teste Moderado 1', () => {
    expect(VerificaPerfil(8)).toBe('Moderado')
})

test('Teste Moderado 2', () => {
    expect(VerificaPerfil(9)).toBe('Moderado')
})

test('Teste Moderado 3', () => {
    expect(VerificaPerfil(10)).toBe('Moderado')
})

test('Teste Moderado 4', () => {
    expect(VerificaPerfil(11)).toBe('Moderado')
})

test('Teste Agressivo 1', () => {
    expect(VerificaPerfil(12)).toBe('Agressivo')
})

test('Teste Agressivo 2', () => {
    expect(VerificaPerfil(13)).toBe('Agressivo')
})

test('Teste Agressivo 3', () => {
    expect(VerificaPerfil(14)).toBe('Agressivo')
})

test('Teste Agressivo 4', () => {
    expect(VerificaPerfil(15)).toBe('Agressivo')
})

test('Teste Agressivo 5', () => {
    expect(VerificaPerfil(16)).toBe('Agressivo')
})
