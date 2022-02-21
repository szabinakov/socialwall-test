const BASE_URL = 'http://private-cc77e-aff.apiary-mock.com/posts';
const itemContainer = document.querySelector(".item-container")
const itemCard = document.querySelector(".item-card")

const getItems = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const items = response.data.items;

    items.map(item => {
      if (item.service_name === "Instagram") {
        
      } else if (item.service_name === "Twitter") {
        // create username for tweet
        let userName = document.createElement('p')
        userName.classList.add('tweet-username')
        userName.innerHTML = item.item_data.user.username
        itemCard.appendChild(userName)
        // create tweet
        let tweet = document.createElement('p')
        tweet.classList.add('tweet-tweet')
        tweet.innerHTML = item.item_data.tweet
        itemCard.appendChild(tweet)
      } else if (item.service_name === "Manual") {
        // create image
        let img = document.createElement('img')
        img.classList.add('manual-post-img')
        img.src = item.item_data.image_url
        itemCard.appendChild(img)
        // create text under image
        let text = document.createElement('p')
        text.classList.add('manual-post-text')
        text.innerHTML = item.item_data.text
        itemCard.appendChild(text)
        // create link text
        let linkText = document.createElement('a')
        linkText.classList.add('manual-post-linktext')
        linkText.href = item.item_data.linkText
        linkText.innerHTML = item.item_data.link_text
        itemCard.appendChild(linkText)
      }
    })
  } catch (errors) {
    console.error(errors);
  }
};

getItems()