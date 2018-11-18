/*
  проверяет и возвращает соответствующее окончание слова
  или пустую строку в зависимости от количества сериалов для подгрузки,
  а соответственно в зависимости от последней цифры:
    1 -> 'л';
    2-4 -> 'ла'; 
    5-9, 0 и диапозон от 10-20 -> 'ов';
*/

const serialEnding = (moviesData) => {
  /* преобразовываю в строку moviesData.length и обратно в число последний символ str */
  let str = String(moviesData.length-3);
  let lastN = Number(str[str.length-1]);

  return ( 
    ( ( 
        ( 
          ( (moviesData.length-3) >= 5 ) 
          && 
          ( (moviesData.length-3) < 20 ) 
        ) 
        ||
        ( (moviesData.length-3) > 20 ) 
      )
      &&
      ( 
        (lastN === 5) || (lastN === 6) || (lastN === 7) || (lastN === 8) || (lastN === 9) || (lastN === 0) 
      ) )
    ? 'ов'
    
    : ( ( 
          ( 
            ( 3 <= (moviesData.length-3) ) 
            && 
            ( (moviesData.length-3) < 5 ) 
          ) 
          || 
          ( (moviesData.length-3) > 20 ) 
        )
        &&
        ( (lastN === 2) || (lastN === 3) || (lastN === 4) ) 
      )
    ? 'а'
    : ( ( 
          ( 
            ( 0 < (moviesData.length-3) )
            &&
            ( (moviesData.length-3) < 5 )
          )
          ||
          ( (moviesData.length-3) > 20 ) 
        )
        &&
        ( lastN === 1) 
      )  
    ? ''
    : 'ов'
  )
}

export default serialEnding;