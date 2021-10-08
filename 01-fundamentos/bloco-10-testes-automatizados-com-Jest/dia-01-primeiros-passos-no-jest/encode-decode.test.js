const { encode, decode } = require('./encode-decode.js');

describe('Testa a função encode e decode', () => {
  it('A função encode retorna algo', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });

  it('Encode é uma função', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('Converte apenas a vogal "a" no número 1', () => {
    expect(encode('ama')).toEqual('1m1');
  })

  it('Converte apenas o número 1 na vogal "a"', () => {
    expect(decode('1m1')).toEqual('ama');
  })

  it('Converte apenas a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  })

  it('Converte apenas o número 2 na vogal "e"', () => {
    expect(decode('2l2')).toEqual('ele');
  })

  it('Converte apenas a vogal "i" no número 3', () => {
    expect(encode('pipi')).toEqual('p3p3');
  })

  it('Converte apenas o número 3 na vogal "i"', () => {
    expect(decode('p3p3')).toEqual('pipi');
  })

  it('Converte apenas a vogal "o" no número 4', () => {
    expect(encode('olho')).toEqual('4lh4');
  })

  it('Converte apenas o número 4 na vogal "o"', () => {
    expect(decode('4lh4')).toEqual('olho');
  })

  it('Converte apenas a vogal "u" no número 5', () => {
    expect(encode('ubuntu')).toEqual('5b5nt5');
  })

  it('Converte apenas o número 5 na vogal "u"', () => {
    expect(decode('5b5nt5')).toEqual('ubuntu');
  })

  it('Testa se a string retornada e a passada como parâmetro têm o mesmo tamanho', () => {
    expect(encode('tryberians').length).toEqual(10);
    expect(decode('tryb2w1rts').length).toEqual(10);
  })
})