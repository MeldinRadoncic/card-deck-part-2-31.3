// PART 1 AND 2
async function getCard() {
    const shuffle_deck = await axios.get('https://deckofcardsapi.com/api/deck/new/draw')
    const deck_id = shuffle_deck.data.deck_id
    const card = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    const value = card.data.cards[0].value
    const suit = card.data.cards[0].suit
    console.log(`${value} : ${suit}`); 
   
}

getCard()



const btn = document.querySelector('button')
const card_area = document.querySelector('div')


async function dealer() {
    const shuffle_deck = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/')
    const deck_id = shuffle_deck.data.deck_id


    btn.addEventListener('click',async function() {
      let draw_card = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
      let img = document.createElement('img')
      img.setAttribute('src',draw_card.data.cards[0].image)
      img.classList.add('toggleImg')
      card_area.append(img)
     
      console.log(draw_card.data.remaining)
  
    if(draw_card.data.remaining == 0) {
    btn.innerText='Done'
    
    
      }
    })
}

dealer()

