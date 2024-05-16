function HTMLMenu(name) {
  document.querySelector('.gold').innerHTML = GameData.getCoin();
  switch (name) {
    case 'main': {
      return `<h1 id="title-game">SNIKE</h1>
              <button id="btn-play" class="btn-control" onclick="startGame()">Start game</button>
              <button class="btn-control" onclick="setMenu('shop')">Shop</button>
              <button class="btn-control" onclick="setMenu('upgrade')">Upgrade</button>`;
    }
    case 'shop': {
      setTimeout(() => {
        document
          .querySelectorAll('.shop-item-button')
          .forEach((element, index) => {
            element.onclick = function () {
              if (
                GameData.getCoin() <
                parseInt(
                  element.parentNode.querySelector('.shop-item-price').innerHTML
                )
              ) {
                element.style.animation = 'shake .1s 4';
                setTimeout(() => {
                  element.style.animation = '';
                }, 400);
              } else {
                GameData.decreaseCoin(
                  parseInt(
                    element.parentNode.querySelector('.shop-item-price')
                      .innerHTML
                  )
                );
                element.innerHTML = 'Purchased';
                element.disabled = true;
                GameData.setItem(index);
                document.querySelector('.gold').innerHTML = GameData.getCoin();
              }
            };
          });
        let arr_purchase_index = localStorage.getItem('i').split(',') || [];
        for (let i = 0; i < arr_purchase_index.length; i++) {
          let temp =
            document.querySelectorAll('.shop-item-button')[
              arr_purchase_index[i]
            ];
          if (temp) {
            temp.innerHTML = 'Purchased';
            temp.disabled = true;
          }
        }
      }, 200);
      return `<h1 id="title-game">SHOP</h1>
              <div class="shop-items">
                  <div class="shop-item">
                      <img src="https://wallpapers.com/images/hd/cartoon-snake-tongue-out_-vector-art-ikkwc5iqpcw0pzyw.jpg"
                          alt="Tongue" class="shop-item-image">
                      <h4>Tongue</h4>
                      <p class="shop-item-description">Snake will use tongue to eat. So if your seed is close, snake will
                          eat it.</p>
                      <p class="shop-item-price">100</p>
                      <button class="shop-item-button">Buy</button>
                  </div>
                  <div class="shop-item">
                      <img src="https://www.shutterstock.com/image-vector/black-hole-icon-galaxy-logo-260nw-2190923761.jpg"
                          alt="Tongue" class="shop-item-image">
                      <h4>Teleport</h4>
                      <p class="shop-item-description">Teleport your snake to another place you will choose in screen</p>
                      <p class="shop-item-price">170</p>
                      <button class="shop-item-button">Buy</button>
                  </div>
                  <div class="shop-item">
                      <img src="https://pbs.twimg.com/media/F1qqth7aEAEvN47.jpg" alt="Tongue" class="shop-item-image">
                      <h4>Spawn Child Snake</h4>
                      <p class="shop-item-description">Press <code>E</code> to spawn a child snake. When this snake eat
                          seed. Your snake length will grow</p>
                      <p class="shop-item-price">250</p>
                      <button class="shop-item-button">Buy</button>
                  </div>
                  <div class="shop-item">
                      <img src="data:image/jpeg;base64,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vxsihuC20W1sfIOpU/znMf0/fRs/JcMyX0VPXcgJ+HJQbvEdQTowPVWB6zrcoHef2Ue7GyL8YAZHgFbU04ZFK8QD/eLzU/VeRGlomyJhA7idrVvgW4+v66q+x31OrOlp3hZrzPHeB+g8xOnT8j7A2zdi5FeRQ+liHhz3HQ/Mjjqp/wBiOIBn6h7L7brzMOjJQECxeKnQsjglXQ/QgiVS28REBERAREQEREBERAREQHGI4xAREQEREBERAREQEREBERASFtXaFWPRbda4WuutncnyH8yeQHUmTZxLv729YbqMFSRWK0ut46b7sWWtT5hd0nTzIPSByWxwSzboUEk7vRQeOntP0r3T7GuxtkUpcpWx3stKHmgsOqqR0OmhI6Emc77keyVN9lmZdo60XKlNZ4r4wVXNjDrugru+up6Cd2gIiICIiAiIgIiICIiAiIgPaI1+sQEREBERAREQEREBERAREQE5b319kGvpXNpXWyiorcgHF8cEtvDzKEsdOoLdQAepTyyAgggEEEEHiND0gcM7gdpuudlY2p3LMfxdOgsqZV1H1D8f8IndZzXul7DPhvl32puu7vVShOrLjK5+JvV9FOnko850qAiIgIiICIiAiIgIiICIiA1iNYgOvtHWIgD0hoiAblB5REAIERACB1iIHwczPvX2iIDrB6REAYblEQB5R0iIAQsRADr9YHWIgOsdYiAPSD/WIgGgxEDzERA//9k=" alt="Tongue" class="shop-item-image">
                      <h4>Predict the feature</h4>
                      <p class="shop-item-description">Snake can predict the need seed position</p>
                      <p class="shop-item-price">200</p>
                      <button class="shop-item-button">Buy</button>
                  </div>
              </div>`;
    }
    case 'upgrade': {
      return `<h1 id="title-game">UPGRADE</h1>
              <div class="shop-items">
                  <div class="shop-item">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///9JSUs5OTxEREY9PT9zc3Q/P0KNjY6ioqNFRUjR0dFSUlTCwsNmZmfh4eG2trYzMzb5+fkwMDPw8PCqqqvy8vJ9fX7X19fd3d2FhYbq6upfX2CTk5Q2Nji9vb2BgYJYWFlOTlCwsLBtbW6ZmZmjo6RNBB8dAAADy0lEQVR4nO3cfXeaMBjGYd4rqID4UhGxat33/4ojgbbY9ZwmJiHZ4339vbH8Vk+FkMTzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYHrbOha1O0hc9xgvjI1ZThOFopJU/LIvQVidzI1aRuWLq7bCl23S7o+7kXisIlFtLH7ZZcr+R9z4oGbFSUwhM15e6JduJBrRF/plZnsgxgyFhBNZYZNQTuwKo+wWsMRX22MxoysMFt23It3EvrBPbPe2R2PCUOjVZBM/Cr23qEsMctvj0e+z0NuxxIhe4lfhkCjzXPJfGBV6cfe9mCbUEseFbibum7kS9uvl67b7nSWGa4s9/0pCiefGn40KeWLou5S4KpUD/Xb86LTkieJP0ObdqkBRe767ILsNTy8uJeaZou93o033uQ8vKysxEzmzxLmWxFyYjn9NnK7ErV+2gsrzpB+a1ZwlnpWvc4skfqFf1cctoU9sVC+zCcQLy4lnNLcXLYlxkAiKah3DlrHtvhT9ZDn1PzulJ0hcp2mX+G57GCatQ/KJh4QlSrwD+f8coi4xIp2Y83mNne1hmJQHT5I4+dfxlPbtcyQGL7aHYdJr+SSJR9vDMCnjiTfbwzCJJ7akExc8cWZ7GCb1iX9sD8OkBVuTVW5sD8OkE0+cdr5oYqdSMXE1e9HlZmZOvuCJxcN/Pw6EV1f+Jppr7Bop2G149fBqBpnVlb+pDL0ei8PuLvzh3zZ1Kzq3+KtAeaLzZzP2QFw9/oqhmOlyNfMOYMaeMiiv09ywQEfW2hqxKYn/BK+lhdcnU1L9LnQe+UDlGzbX8cCW8HMFfzak/ODEnwwpP/xm1CcwyE9CkZ9IJD8Z/Kr4zuIqvCk0tnM/qPpS5lSJz0tUNjYl9YEKL9aOifi0xONTB4/rX46+KVxhL74pNKqmX12u4wV3XgibPvBAfZECX0tDeaHJISS+WIj8gq91SnxdIvmFl3x9sEuB2ULV/Qz5Ss8CaH1qifuGnwXhOFHXOn1tdOx7Gu/sGgJd2jHjJ6mSb4Ua98vocoiXSi53hY17gcru9pD2m7pc2remwbiQ7z2kFjgudG9zpRZfhXyDbOrSBlk9Pgtd3OSsxUehkxvVtRgKY5rnKTB94Y7qsR/ecMZQ7URgvhQ+J+EscVgQOyfqnLgQ6M3FD08IA/HLfpz15cDhO63E04LEqYJDoQOB3kb88IRK4lVDX9g6cQiW+OEJMj8PXkj0lK8eO/uS7GF03K1MrLzYmtCmpvwRBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcNdf4XhTHkhx494AAAAASUVORK5CYII="
                          alt="Tongue" class="shop-item-image">
                      <h4>Speed</h4>
                      <p class="shop-item-description">Snake will use tongue to eat. So if your seed is close, snake will
                          eat it.</p>
                      <p class="shop-item-price">100</p>
                      <button class="shop-item-button">Buy</button>
                  </div>
                  <div class="shop-item">
                      <img src="https://www.shutterstock.com/image-vector/black-hole-icon-galaxy-logo-260nw-2190923761.jpg"
                          alt="Tongue" class="shop-item-image">
                      <h4>Teleport</h4>
                      <p class="shop-item-description">Teleport your snake to another place you will choose in screen</p>
                      <p class="shop-item-price">170</p>
                      <button class="shop-item-button">Buy</button>
                  </div>
                  <div class="shop-item">
                      <img src="https://pbs.twimg.com/media/F1qqth7aEAEvN47.jpg" alt="Tongue" class="shop-item-image">
                      <h4>Spawn Child Snake</h4>
                      <p class="shop-item-description">Press <code>E</code> to spawn a child snake. When this snake eat
                          seed. Your snake length will grow</p>
                      <p class="shop-item-price">250</p>
                      <button class="shop-item-button">Buy</button>
                  </div>
              </div>`;
    }
    default:
      alert('Invalid menu name: ' + name);
      break;
  }
}
