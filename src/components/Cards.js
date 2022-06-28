const json = require('../api/cards.json');

function Cards() {
  return (
    <div className="cards">
      {json.cards.map(card => (
        <div className={card.hide === "true" ? "card hide" : "card"}>
          <h3 class="card-title">{card.title}</h3>
          <p class="card-text">{card.text}</p>
          <div class="card-cta">
            <div class="card-button" id={card.id}>{card.CTA}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards